(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4493],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5784:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),s=["components"],a={id:"browser-redirect-flow-completion",title:"HTTP Redirection Configuration"},l=void 0,c={unversionedId:"concepts/browser-redirect-flow-completion",id:"version-v0.5/concepts/browser-redirect-flow-completion",isDocsHomePage:!1,title:"HTTP Redirection Configuration",description:"Self-Service flows such as Login, Registration, Updating Settings support two",source:"@site/versioned_docs/version-v0.5/concepts/browser-redirect-flow-completion.mdx",sourceDirName:"concepts",slug:"/concepts/browser-redirect-flow-completion",permalink:"/kratos/docs/v0.5/concepts/browser-redirect-flow-completion",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/browser-redirect-flow-completion.mdx",tags:[],version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1602674546,formattedLastUpdatedAt:"10/14/2020",frontMatter:{id:"browser-redirect-flow-completion",title:"HTTP Redirection Configuration"},sidebar:"version-v0.5/docs",previous:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/v0.5/concepts/credentials/openid-connect-oidc-oauth2"},next:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/v0.5/concepts/email-sms"}},p=[{value:"Redirection",id:"redirection",children:[{value:"Post-Login Redirection",id:"post-login-redirection",children:[]},{value:"Post-Registration Redirection",id:"post-registration-redirection",children:[]},{value:"Post-Settings Redirection",id:"post-settings-redirection",children:[]},{value:"Post-Verification Redirection",id:"post-verification-redirection",children:[]}]},{value:"JSON",id:"json",children:[]}],d={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Self-Service flows such as Login, Registration, Updating Settings support two\nsuccessful response modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For browsers, the response will be a ",(0,o.kt)("a",{parentName:"li",href:"#redirection"},"redirection"),"."),(0,o.kt)("li",{parentName:"ul"},"For API clients (this includes AJAX) the response will be in ",(0,o.kt)("a",{parentName:"li",href:"#json"},"JSON"),".")),(0,o.kt)("h2",{id:"redirection"},"Redirection"),(0,o.kt)("p",null,"Browser requests, identified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept: text/html")," header, complete with a\nredirection flow. If no redirection URL is set for the flow, the Default\nRedirect URL will be used for most flows (e.g. login, registration):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  default_browser_return_url: https://always-end-up-here-per-default/\n")),(0,o.kt)("p",null,"It is possible to specify a redirect URL per Self-Service Flow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        default_browser_return_url: https://end-up-here-after-login/\n    registration:\n      after:\n        default_browser_return_url: https://end-up-here-after-registration/\n    # verification\n    # ...\n")),(0,o.kt)("p",null,"You may also set redirect URLs per method (overrides\n",(0,o.kt)("inlineCode",{parentName:"p"},"selfservice.flows.<login|registration|...>.default_return_to"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          default_browser_return_url: https://end-up-here-after-login-with-password/\n      # ...\n")),(0,o.kt)("p",null,"It is also possible to redirect someone back to the original URL. For example,\nif a user requests ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.myapp.com/blog/write")," but is not logged in, we\nwant the user to end up at that page after login. To achieve that, you append\n",(0,o.kt)("inlineCode",{parentName:"p"},"?return_to=https://www.myapp.com/blog/write")," when initializing the Login /\nRegistration /Settings flow."),(0,o.kt)("p",null,"Because ORY Kratos prevents Open Redirect Attacks, you need to whitelist the\ndomain in your ORY Kratos config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  whitelisted_return_urls:\n    - https://www.myapp.com/\n")),(0,o.kt)("h3",{id:"post-login-redirection"},"Post-Login Redirection"),(0,o.kt)("p",null,"Post-login redirection considers the following configuration keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  default_browser_return_url: https://end-up-here-per-default/\n  flows:\n    login:\n      after:\n        # overrides url.default_browser_return_url\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.login.after.default_browser_return_url\n          default_browser_return_url: https://end-up-here-after-login-with-password/\n")),(0,o.kt)("h3",{id:"post-registration-redirection"},"Post-Registration Redirection"),(0,o.kt)("p",null,"Post-login redirection considers the following configuration keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  default_browser_return_url: https://end-up-here-per-default/\n  flows:\n    registration:\n      after:\n        # overrides url.default_browser_return_url\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.registration.after.default_browser_return_url\n          default_browser_return_url: https://end-up-here-after-registration-with-password/\n")),(0,o.kt)("h3",{id:"post-settings-redirection"},"Post-Settings Redirection"),(0,o.kt)("p",null,"Post-settings redirection ",(0,o.kt)("strong",{parentName:"p"},"does not use")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"urls.default_redirect_to"),"\nconfiguration key. Instead the redirect ends at the same Settings UI with the\nsame Settings Request ID and key ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"success"),". If the listed keys\nare set, the redirection will end up at the specified values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    settings:\n      after:\n        default_redirect_to: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.settings.after.default_redirect_to\n          default_redirect_to: https://end-up-here-after-settings-with-password/\n")),(0,o.kt)("h3",{id:"post-verification-redirection"},"Post-Verification Redirection"),(0,o.kt)("p",null,"Post-verification redirection ",(0,o.kt)("strong",{parentName:"p"},"does not use")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"urls.default_redirect_to"),"\nconfiguration key. Instead the redirect ends at the same Verification UI with\nthe same Verification Request ID and key ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"passed_challenge"),". If\nthe listed keys are set, the redirection will end up at the specified values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    verification:\n      after:\n        default_redirect_to: https://this-is-overridden-by-password/\n")),(0,o.kt)("h2",{id:"json"},"JSON"),(0,o.kt)("p",null,"This feature is currently in prototype phase and will be documented at a later\nstage."))}u.isMDXComponent=!0}}]);