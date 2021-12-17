(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[472],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return i},kt:function(){return o}});var s=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,m=function(a,e){if(null==a)return{};var t,s,m={},n=Object.keys(a);for(s=0;s<n.length;s++)t=n[s],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(s=0;s<n.length;s++)t=n[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=s.createContext({}),N=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=N(a.components);return s.createElement(l.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,m=a.mdxType,n=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),k=N(t),o=m,h=k["".concat(l,".").concat(o)]||k[o]||c[o]||n;return t?s.createElement(h,p(p({ref:e},i),{},{components:t})):s.createElement(h,p({ref:e},i))}));function o(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var n=t.length,p=new Array(n);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:m,p[1]=r;for(var N=2;N<n;N++)p[N]=t[N];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4883:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return N},toc:function(){return i},default:function(){return k}});var s=t(2122),m=t(9756),n=(t(7294),t(3905)),p=["components"],r={title:"AutoODE",slug:"/autoode"},l=void 0,N={unversionedId:"physics-guided-deep-sequence-models/autoode",id:"physics-guided-deep-sequence-models/autoode",isDocsHomePage:!1,title:"AutoODE",description:"Assume the time series $x_t \\in \\mathbb^d$ is governed by unknown differential equations:",source:"@site/docs/physics-guided-deep-sequence-models/autoode.md",sourceDirName:"physics-guided-deep-sequence-models",slug:"/autoode",permalink:"/torchTS/docs/autoode",editUrl:"https://github.com/Rose-STL-Lab/torchTS/edit/main/website/docs/physics-guided-deep-sequence-models/autoode.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1639704477,formattedLastUpdatedAt:"12/17/2021",frontMatter:{title:"AutoODE",slug:"/autoode"},sidebar:"tutorialSidebar",previous:{title:"Diffusion Convolutional LSTM",permalink:"/torchTS/docs/diffusion-convolutional-lstm"},next:{title:"Hybrid AutoODE",permalink:"/torchTS/docs/hybrid-autoode"}},i=[],c={toc:i};function k(a){var e=a.components,t=(0,m.Z)(a,p);return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Assume the time series ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"t")),(0,n.kt)("mo",{parentName:"mrow"},"\u2208"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup",mathvariant:"double-struck"},"R"),(0,n.kt)("mi",{parentName:"msup"},"d"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x_t \\in \\mathbb{R}^d")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6891em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.849108em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathbb"},"R")),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.849108em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))))))))))," is governed by unknown differential equations:"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mtable",{parentName:"semantics",rowspacing:"0.24999999999999992em",columnalign:"right left",columnspacing:"0em"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"}))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mrow",{parentName:"mrow"}),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"t"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"f"),(0,n.kt)("mi",{parentName:"msub"},"\u03b8")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"}))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mrow",{parentName:"mrow"}),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"u")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"mrow"},"d"),(0,n.kt)("mi",{parentName:"mrow"},"t"))),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"g"),(0,n.kt)("mi",{parentName:"msub"},"\u03b8")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"}))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mrow",{parentName:"mrow"}),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mn",{parentName:"msub"},"0")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"0")))))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"}))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"true"},(0,n.kt)("mrow",{parentName:"mstyle"},(0,n.kt)("mrow",{parentName:"mrow"}),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mn",{parentName:"msub"},"0")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"u"),(0,n.kt)("mn",{parentName:"msub"},"0"))))))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{aligned} &\\frac{dx}{dt} = f_\\theta(t, x, u) \\\\ &\\frac{du}{dt} = g_\\theta(t, x, u) \\\\ &x(t_0) = x_0 \\\\ &u(t_0) = u_0 \\end{aligned}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"7.71488em",verticalAlign:"-3.6074399999999995em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mtable"},(0,n.kt)("span",{parentName:"span",className:"col-align-r"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"4.10744em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-6.1074399999999995em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.7499999999999996em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"})),(0,n.kt)("span",{parentName:"span",style:{top:"-1.924em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"})),(0,n.kt)("span",{parentName:"span",style:{top:"-0.4240000000000004em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"}))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.6074399999999995em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"col-align-l"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"4.10744em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-6.1074399999999995em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.37144em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.33610799999999996em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.10764em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"\u03b8")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.7499999999999996em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.37144em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.33610799999999996em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.03588em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"\u03b8")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,n.kt)("span",{parentName:"span",style:{top:"-1.924em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-0.4240000000000004em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3714399999999998em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"3.6074399999999995em"}},(0,n.kt)("span",{parentName:"span"})))))))))))),(0,n.kt)("p",null,"where ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mo",{parentName:"mrow"},"\u2208"),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup",mathvariant:"double-struck"},"R"),(0,n.kt)("mi",{parentName:"msup"},"p"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u \\in \\mathbb{R}^p")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68889em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathbb"},"R")),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.664392em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"))))))))))))," are the unobserved variables. ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2011.10616.pdf"},"AutoODE")," uses auto-differentiation to estimate the parameters ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"\u03b8")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\theta")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"\u03b8")))))," of the equations."))}k.isMDXComponent=!0}}]);