(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(9),a=(n(0),n(395)),o={id:"openid-connect-social-sign-in-oauth2",title:"Social Sign In with OpenID Connect and OAuth2"},s={id:"version-v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2",isDocsHomePage:!1,title:"Social Sign In with OpenID Connect and OAuth2",description:"OpenID Connect is undergoing active refactoring and these docs will change. See",source:"@site/versioned_docs/version-v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2.md",permalink:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,sidebar:"version-v0.2/docs",previous:{title:"Username or Email and Password",permalink:"/kratos/docs/v0.2/self-service/strategies/username-email-password"},next:{title:"User Profile",permalink:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile"},latestVersionMainDocPermalink:"/kratos/docs"},c=[{value:"Browser Clients",id:"browser-clients",children:[{value:"Login",id:"login",children:[]},{value:"Registration",id:"registration",children:[]},{value:"Settings",id:"settings",children:[]}]},{value:"API Clients",id:"api-clients",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"OpenID Connect is undergoing active refactoring and these docs will change. See\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ory/kratos/pull/381"}),"#381"),"."))),Object(a.b)("p",null,"The Social Sign In Strategy enables you to use"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"http://github.com/"}),"GitHub"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.apple.com/sign-in-with-apple/"}),"Apple"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://developers.google.com/identity/sign-in/web/sign-in"}),"Google"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://developers.facebook.com/docs/facebook-login/"}),"Facebook"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.ory.sh/hydra"}),"ORY Hydra"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.keycloak.org"}),"Keycloak"),";"),Object(a.b)("li",{parentName:"ul"},"and every other OpenID Connect Certified Provider")),Object(a.b)("p",null,"as the Identity Provider."),Object(a.b)("p",null,"Because of the nature of this flow (a browser is required) it does not work\nAPI-only flows."),Object(a.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(a.b)("h3",{id:"login"},"Login"),Object(a.b)("p",null,"Sign In only works when an identity exists for that profile already. If it does\nnot exist, a registration flow will be performed instead."),Object(a.b)("h3",{id:"registration"},"Registration"),Object(a.b)("p",null,"Sign Up on conflict with existing primary identifiers like email:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Sign Up is dis-allowed and the user is asked to instead log in and then link\nhis/her account instead.")),Object(a.b)("h3",{id:"settings"},"Settings"),Object(a.b)("p",null,"A user may link and unlink social profiles. Unlinking is only allowed if at\nleast one other sign in method is enabled."),Object(a.b)("h2",{id:"api-clients"},"API Clients"),Object(a.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(a.b)("p",null,'Please be aware that OpenID Connect providers always require a Browser, with the\nexception of "Sign in with Apple" on recent iOS versions.'))}p.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);