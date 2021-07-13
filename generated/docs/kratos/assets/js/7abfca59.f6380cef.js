(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[54040],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67014:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],l={id:"selfservice-flow-completion",title:"Self-Service Flow Completion"},s=void 0,c={unversionedId:"concepts/selfservice-flow-completion",id:"version-v0.2/concepts/selfservice-flow-completion",isDocsHomePage:!1,title:"Self-Service Flow Completion",description:"Self-Service flows such as Login, Registration, Updating Settings support two",source:"@site/versioned_docs/version-v0.2/concepts/selfservice-flow-completion.md",sourceDirName:"concepts",slug:"/concepts/selfservice-flow-completion",permalink:"/kratos/docs/v0.2/concepts/selfservice-flow-completion",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/selfservice-flow-completion.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,formattedLastUpdatedAt:"5/4/2020",frontMatter:{id:"selfservice-flow-completion",title:"Self-Service Flow Completion"}},p=[{value:"Redirection",id:"redirection",children:[]},{value:"JSON",id:"json",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Self-Service flows such as Login, Registration, Updating Settings support two\nsuccessful response modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For browsers, the response will be a ",(0,i.kt)("a",{parentName:"li",href:"#redirection"},"redirection"),"."),(0,i.kt)("li",{parentName:"ul"},"For API clients (this includes AJAX) the response will be in ",(0,i.kt)("a",{parentName:"li",href:"#json"},"JSON"),".")),(0,i.kt)("h2",{id:"redirection"},"Redirection"),(0,i.kt)("p",null,"Browser requests, identified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: text/html")," header, complete with a\nredirection flow. If no redirection URL is set for the flow, the Default\nRedirect URL will be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"urls:\n  default_redirect_to: https://always-end-up-here-per-default/\n")),(0,i.kt)("p",null,"It is possible to specify a redirect URL per Self-Service Flow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  login:\n    after:\n      default_redirect_to: https://end-up-here-after-login/\n  registration:\n    after:\n      default_redirect_to: https://end-up-here-after-registration/\n  # ...\n")),(0,i.kt)("p",null,"You may also set redirect URLs per strategy (overrides\n",(0,i.kt)("inlineCode",{parentName:"p"},"selfservice.<login|registration|...>.default_return_to"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  login:\n    after:\n      default_redirect_to: https://this-is-overridden-by-password/\n      password:\n        default_redirect_to: https://end-up-here-after-login-with-password/\n    # ...\n")),(0,i.kt)("p",null,"It is also possible to redirect someone back to the original URL. For example,\nif a user requests ",(0,i.kt)("inlineCode",{parentName:"p"},"https://www.myapp.com/blog/write")," but is not logged in, we\nwant the user to end up at that page after login. To achieve that, you append\n",(0,i.kt)("inlineCode",{parentName:"p"},"?return_to=https://www.myapp.com/blog/write")," when initializing the Login /\nRegistration /Settings flow."),(0,i.kt)("p",null,"Because ORY Kratos prevents Open Redirect Attacks, you need to whitelist the\ndomain in your ORY Kratos config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"urls:\n  whitelisted_return_to_urls:\n    - https://www.myapp.com/\n")),(0,i.kt)("h2",{id:"json"},"JSON"),(0,i.kt)("p",null,"This feature is currently in prototype phase and will be documented at a later\nstage."))}f.isMDXComponent=!0}}]);