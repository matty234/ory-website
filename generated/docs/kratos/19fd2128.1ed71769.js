(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{333:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(333)),a={id:"openid-connect-social-sign-in-oauth2",title:"Social Sign In with OpenID Connect and OAuth2"},c={unversionedId:"self-service/strategies/openid-connect-social-sign-in-oauth2",id:"version-v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2",isDocsHomePage:!1,title:"Social Sign In with OpenID Connect and OAuth2",description:"The OpenID Connect Strategy does already work but needs further documentation",source:"@site/versioned_docs/version-v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2.md",slug:"/self-service/strategies/openid-connect-social-sign-in-oauth2",permalink:"/kratos/docs/v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/strategies/openid-connect-social-sign-in-oauth2.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"version-v0.1/docs",previous:{title:"Username or Email and Password",permalink:"/kratos/docs/v0.1/self-service/strategies/username-email-password"},next:{title:"Before Jobs",permalink:"/kratos/docs/v0.1/self-service/workflows/jobs/before"}},s=[{value:"Browser Clients",id:"browser-clients",children:[{value:"Login",id:"login",children:[]},{value:"Registration",id:"registration",children:[]}]},{value:"API Clients",id:"api-clients",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The OpenID Connect Strategy does already work but needs further documentation\nand code improvements. It will be documented in an upcoming release of ORY\nKratos.")),Object(o.b)("p",null,"The Social Sign In Strategy enables you to use"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://github.com/"}),"GitHub"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.apple.com/sign-in-with-apple/"}),"Apple"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/identity/sign-in/web/sign-in"}),"Google"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.facebook.com/docs/facebook-login/"}),"Facebook"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ory.sh/hydra"}),"ORY Hydra"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.keycloak.org"}),"Keycloak"),";"),Object(o.b)("li",{parentName:"ul"},"and every other OpenID Connect Certified Provider")),Object(o.b)("p",null,"as the Identity Provider."),Object(o.b)("p",null,"Because of the nature of this flow (a browser is required) it does not work"),Object(o.b)("h2",{id:"browser-clients"},"Browser Clients"),Object(o.b)("h3",{id:"login"},"Login"),Object(o.b)("p",null,"Sign In only works when an identity exists for that profile already. If it does\nnot exist, a registration flow will be performed instead."),Object(o.b)("h3",{id:"registration"},"Registration"),Object(o.b)("p",null,"Sign Up on conflict with existing primary identifiers like email:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sign Up is dis-allowed and the user is asked to instead log in and then link\nhis/her account instead.")),Object(o.b)("h2",{id:"api-clients"},"API Clients"),Object(o.b)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),Object(o.b)("p",null,'Please be aware that OpenID Connect providers always require a Browser, with the\nexception of "Sign in with Apple" on recent iOS versions.'))}p.isMDXComponent=!0}}]);