from abc import abstractmethod
from functools import partial

from pytorch_lightning import LightningModule, Trainer
from torch import nn, optim
from torch.utils.data import DataLoader, TensorDataset

DEFAULT_LOSS = nn.MSELoss()
DEFAULT_OPT = partial(optim.SGD, lr=1e-2)


class TimeSeriesModel(LightningModule):
    """Base class for all TorchTS models.

    Args:
        criterion: Loss function
        optimizer (torch.optim.Optimizer): Optimizer
    """

    def __init__(self, criterion=DEFAULT_LOSS, optimizer=DEFAULT_OPT):
        super().__init__()
        self.criterion = criterion
        self.optimizer = optimizer

    def fit(self, x, y, max_epochs=10, batch_size=128):
        """Fits model to the given data.

        Args:
            x (torch.Tensor): Input data
            y (torch.Tensor): Output data
            max_epochs (int): Number of training epochs
            batch_size (int): Batch size for torch.utils.data.DataLoader
        """
        dataset = TensorDataset(x, y)
        loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)
        trainer = Trainer(max_epochs=max_epochs)
        trainer.fit(self, loader)

    def training_step(self, batch, batch_idx):
        """Trains model for one step.

        Args:
            batch (torch.Tensor): Output of the torch.utils.data.DataLoader
            batch_idx (int): Integer displaying index of this batch
        """
        x, y = batch
        pred = self(x)
        loss = self.criterion(pred, y)
        return loss

    @abstractmethod
    def forward(self, x):
        """Forward pass.

        Args:
            x (torch.Tensor): Input data

        Returns:
            torch.Tensor: Predicted data
        """

    def predict(self, x):
        """Runs model inference.

        Args:
            x (torch.Tensor): Input data

        Returns:
            torch.Tensor: Predicted data
        """
        return self(x).detach()

    def configure_optimizers(self):
        """Configure optimizer.

        Returns:
            torch.optim.Optimizer: Optimizer
        """
        return self.optimizer(self.parameters())
