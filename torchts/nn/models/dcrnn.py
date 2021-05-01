import numpy as np
import pytorch_lightning as pl
import torch
from torch import nn

from torchts.nn.graph import DCGRU
from torchts.nn.loss import masked_mae_loss


class Seq2SeqAttrs:
    def __init__(self, adj_mx, **model_kwargs):
        self.adj_mx = adj_mx
        self.max_diffusion_step = int(model_kwargs.get("max_diffusion_step", 2))
        self.cl_decay_steps = int(model_kwargs.get("cl_decay_steps", 1000))
        self.filter_type = model_kwargs.get("filter_type", "laplacian")
        self.num_nodes = int(model_kwargs.get("num_nodes", 1))
        self.num_rnn_layers = int(model_kwargs.get("num_rnn_layers", 1))
        self.rnn_units = int(model_kwargs.get("rnn_units"))
        self.use_gc_for_ru = bool(model_kwargs.get("use_gc_for_ru", True))
        self.hidden_state_size = self.num_nodes * self.rnn_units


class Encoder(nn.Module, Seq2SeqAttrs):
    def __init__(self, adj_mx, **model_kwargs):
        nn.Module.__init__(self)
        Seq2SeqAttrs.__init__(self, adj_mx, **model_kwargs)
        self.input_dim = int(model_kwargs.get("input_dim", 1))
        self.seq_len = int(model_kwargs.get("seq_len"))
        self.dcgru_layers = nn.ModuleList(
            [
                DCGRU(
                    self.rnn_units,
                    adj_mx,
                    self.max_diffusion_step,
                    self.num_nodes,
                    self.input_dim if i == 0 else self.rnn_units,
                    filter_type=self.filter_type,
                    use_gc_for_ru=self.use_gc_for_ru,
                )
                for i in range(self.num_rnn_layers)
            ]
        )

    def forward(self, inputs, hidden_state=None):
        batch_size, _ = inputs.size()
        hidden_states = []
        output = inputs

        if hidden_state is None:
            shape = self.num_rnn_layers, batch_size, self.hidden_state_size
            hidden_state = torch.zeros(shape)
            hidden_state = hidden_state.type_as(inputs)

        for layer_num, dcgru_layer in enumerate(self.dcgru_layers):
            next_hidden_state = dcgru_layer(output, hidden_state[layer_num])
            hidden_states.append(next_hidden_state)
            output = next_hidden_state

        return output, torch.stack(hidden_states)


class Decoder(nn.Module, Seq2SeqAttrs):
    def __init__(self, adj_mx, **model_kwargs):
        nn.Module.__init__(self)
        Seq2SeqAttrs.__init__(self, adj_mx, **model_kwargs)
        self.output_dim = int(model_kwargs.get("output_dim", 1))
        self.horizon = int(model_kwargs.get("horizon", 1))
        self.projection_layer = nn.Linear(self.rnn_units, self.output_dim)
        self.dcgru_layers = nn.ModuleList(
            [
                DCGRU(
                    self.rnn_units,
                    adj_mx,
                    self.max_diffusion_step,
                    self.num_nodes,
                    self.output_dim if i == 0 else self.rnn_units,
                    filter_type=self.filter_type,
                    use_gc_for_ru=self.use_gc_for_ru,
                )
                for i in range(self.num_rnn_layers)
            ]
        )

    def forward(self, inputs, hidden_state=None):
        hidden_states = []
        output = inputs

        for layer_num, dcgru_layer in enumerate(self.dcgru_layers):
            next_hidden_state = dcgru_layer(output, hidden_state[layer_num])
            hidden_states.append(next_hidden_state)
            output = next_hidden_state

        projected = self.projection_layer(output.view(-1, self.rnn_units))
        output = projected.view(-1, self.num_nodes * self.output_dim)

        return output, torch.stack(hidden_states)


class DCRNN(pl.LightningModule, Seq2SeqAttrs):
    def __init__(self, adj_mx, scaler, **model_kwargs):
        super().__init__()
        Seq2SeqAttrs.__init__(self, adj_mx, **model_kwargs)
        self.scaler = scaler
        self.encoder_model = Encoder(adj_mx, **model_kwargs)
        self.decoder_model = Decoder(adj_mx, **model_kwargs)
        self.cl_decay_steps = int(model_kwargs.get("cl_decay_steps", 1000))
        self.use_curriculum_learning = bool(
            model_kwargs.get("use_curriculum_learning", False)
        )

    def _compute_sampling_threshold(self, batches_seen):
        return self.cl_decay_steps / (
            self.cl_decay_steps + np.exp(batches_seen / self.cl_decay_steps)
        )

    def encoder(self, inputs):
        encoder_hidden_state = None

        for t in range(self.encoder_model.seq_len):
            _, encoder_hidden_state = self.encoder_model(
                inputs[t], encoder_hidden_state
            )

        return encoder_hidden_state

    def decoder(self, encoder_hidden_state, labels=None, batches_seen=None):
        batch_size = encoder_hidden_state.size(1)
        shape = batch_size, self.num_nodes * self.decoder_model.output_dim
        go_symbol = torch.zeros(shape)
        go_symbol = go_symbol.type_as(encoder_hidden_state)
        decoder_hidden_state = encoder_hidden_state
        decoder_input = go_symbol
        outputs = []

        for t in range(self.decoder_model.horizon):
            decoder_output, decoder_hidden_state = self.decoder_model(
                decoder_input, decoder_hidden_state
            )
            decoder_input = decoder_output
            outputs.append(decoder_output)

            if self.training and self.use_curriculum_learning:
                c = np.random.uniform(0, 1)

                if c < self._compute_sampling_threshold(batches_seen):
                    decoder_input = labels[t]

        outputs = torch.stack(outputs)
        return outputs

    def forward(self, inputs, labels=None, batches_seen=None):
        encoder_hidden_state = self.encoder(inputs)
        outputs = self.decoder(encoder_hidden_state, labels, batches_seen=batches_seen)

        return outputs

    def training_step(self, batch, batch_idx):
        x, y = batch
        x = x.permute(1, 0, 2, 3)
        y = y.permute(1, 0, 2, 3)

        batch_size = x.size(1)
        x = x.view(
            self.encoder_model.seq_len,
            batch_size,
            self.num_nodes * self.encoder_model.input_dim,
        )
        y = y[..., : self.decoder_model.output_dim].view(
            self.decoder_model.horizon,
            batch_size,
            self.num_nodes * self.decoder_model.output_dim,
        )

        pred = self(x, y, batch_idx)

        y = self.scaler.inverse_transform(y)
        pred = self.scaler.inverse_transform(pred)
        loss = masked_mae_loss(y, pred)

        torch.nn.utils.clip_grad_norm_(self.parameters(), 5)

        return loss

    def configure_optimizers(self):
        optimizer = torch.optim.Adam(self.parameters(), lr=0.01, eps=1e-3)
        scheduler = torch.optim.lr_scheduler.MultiStepLR(
            optimizer, milestones=[20, 30, 40, 50], gamma=0.1
        )
        return [optimizer], [scheduler]