(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{551:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?i.a.createElement(b,a(a({ref:t},c),{},{components:r})):i.a.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(8),o=(r(0),r(551)),s={id:"browser-redirect-flow-completion",title:"HTTP Redirection Configuration"},a={unversionedId:"concepts/browser-redirect-flow-completion",id:"version-v0.6/concepts/browser-redirect-flow-completion",isDocsHomePage:!1,title:"HTTP Redirection Configuration",description:"Self-Service flows such as Login, Registration, Updating Settings support two",source:"@site/versioned_docs/version-v0.6/concepts/browser-redirect-flow-completion.mdx",sourceDirName:"concepts",slug:"/concepts/browser-redirect-flow-completion",permalink:"/kratos/docs/concepts/browser-redirect-flow-completion",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/concepts/browser-redirect-flow-completion.mdx",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"browser-redirect-flow-completion",title:"HTTP Redirection Configuration"},sidebar:"version-v0.6/docs",previous:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/concepts/credentials/openid-connect-oidc-oauth2"},next:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/concepts/email-sms"}},l=[{value:"Redirection",id:"redirection",children:[{value:"Post-Login Redirection",id:"post-login-redirection",children:[]},{value:"Post-Registration Redirection",id:"post-registration-redirection",children:[]},{value:"Post-Settings Redirection",id:"post-settings-redirection",children:[]},{value:"Post-Verification Redirection",id:"post-verification-redirection",children:[]}]},{value:"JSON",id:"json",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Self-Service flows such as Login, Registration, Updating Settings support two\nsuccessful response modes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For browsers, the response will be a ",Object(o.b)("a",{parentName:"li",href:"#redirection"},"redirection"),"."),Object(o.b)("li",{parentName:"ul"},"For API clients (this includes AJAX) the response will be in ",Object(o.b)("a",{parentName:"li",href:"#json"},"JSON"),".")),Object(o.b)("h2",{id:"redirection"},"Redirection"),Object(o.b)("p",null,"Browser requests, identified by the ",Object(o.b)("inlineCode",{parentName:"p"},"Accept: text/html")," header, complete with a\nredirection flow. If no redirection URL is set for the flow, the Default\nRedirect URL will be used for most flows (e.g. login, registration):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  default_browser_return_url: https://always-end-up-here-per-default/\n")),Object(o.b)("p",null,"It is possible to specify a redirect URL per Self-Service Flow:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        default_browser_return_url: https://end-up-here-after-login/\n    registration:\n      after:\n        default_browser_return_url: https://end-up-here-after-registration/\n    # verification\n    # ...\n")),Object(o.b)("p",null,"You may also set redirect URLs per method (overrides\n",Object(o.b)("inlineCode",{parentName:"p"},"selfservice.flows.<login|registration|...>.default_return_to"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    login:\n      after:\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          default_browser_return_url: https://end-up-here-after-login-with-password/\n      # ...\n")),Object(o.b)("p",null,"It is also possible to redirect someone back to the original URL. For example,\nif a user requests ",Object(o.b)("inlineCode",{parentName:"p"},"https://www.myapp.com/blog/write")," but is not logged in, we\nwant the user to end up at that page after login. To achieve that, you append\n",Object(o.b)("inlineCode",{parentName:"p"},"?return_to=https://www.myapp.com/blog/write")," when initializing the Login /\nRegistration /Settings flow."),Object(o.b)("p",null,"Because Ory Kratos prevents Open Redirect Attacks, you need to whitelist the\ndomain in your Ory Kratos config:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  whitelisted_return_urls:\n    - https://www.myapp.com/\n")),Object(o.b)("h3",{id:"post-login-redirection"},"Post-Login Redirection"),Object(o.b)("p",null,"Post-login redirection considers the following configuration keys:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  default_browser_return_url: https://end-up-here-per-default/\n  flows:\n    login:\n      after:\n        # overrides url.default_browser_return_url\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.login.after.default_browser_return_url\n          default_browser_return_url: https://end-up-here-after-login-with-password/\n")),Object(o.b)("h3",{id:"post-registration-redirection"},"Post-Registration Redirection"),Object(o.b)("p",null,"Post-login redirection considers the following configuration keys:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  default_browser_return_url: https://end-up-here-per-default/\n  flows:\n    registration:\n      after:\n        # overrides url.default_browser_return_url\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.registration.after.default_browser_return_url\n          default_browser_return_url: https://end-up-here-after-registration-with-password/\n")),Object(o.b)("h3",{id:"post-settings-redirection"},"Post-Settings Redirection"),Object(o.b)("p",null,"Post-settings redirection ",Object(o.b)("strong",{parentName:"p"},"does not use")," the ",Object(o.b)("inlineCode",{parentName:"p"},"urls.default_redirect_to"),"\nconfiguration key. Instead the redirect ends at the same Settings UI with the\nsame Settings Request ID and key ",Object(o.b)("inlineCode",{parentName:"p"},"state")," set to ",Object(o.b)("inlineCode",{parentName:"p"},"success"),". If the listed keys\nare set, the redirection will end up at the specified values:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    settings:\n      after:\n        default_redirect_to: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.settings.after.default_redirect_to\n          default_redirect_to: https://end-up-here-after-settings-with-password/\n")),Object(o.b)("h3",{id:"post-verification-redirection"},"Post-Verification Redirection"),Object(o.b)("p",null,"Post-verification redirection ",Object(o.b)("strong",{parentName:"p"},"does not use")," the ",Object(o.b)("inlineCode",{parentName:"p"},"urls.default_redirect_to"),"\nconfiguration key. Instead the redirect ends at the same Verification UI with\nthe same Verification Request ID and key ",Object(o.b)("inlineCode",{parentName:"p"},"state")," set to ",Object(o.b)("inlineCode",{parentName:"p"},"passed_challenge"),". If\nthe listed keys are set, the redirection will end up at the specified values:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    verification:\n      after:\n        default_redirect_to: https://this-is-overridden-by-password/\n")),Object(o.b)("h4",{id:"specify-redirection-url-during-registration"},"Specify Redirection URL during Registration"),Object(o.b)("p",null,"Verification emails are usually sent in response to a successful registration\nflow. To specify the redirect URL for the verification flow after registration,\nappend ",Object(o.b)("inlineCode",{parentName:"p"},"after_verification_return_to")," to the Browser Registration Init endpoint:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"https://public.kratos/self-service/registration/browser?after_verification_return_to=https://my-redirect/foo\n")),Object(o.b)("h2",{id:"json"},"JSON"),Object(o.b)("p",null,"This feature is currently in prototype phase and will be documented at a later\nstage."))}p.isMDXComponent=!0}}]);