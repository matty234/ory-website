(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(405)),a=(n(406),{id:"token-endpoint-auth-method",title:"Wrong Token Endpoint Auth Method"}),c={unversionedId:"debug/token-endpoint-auth-method",id:"version-v1.7/debug/token-endpoint-auth-method",isDocsHomePage:!1,title:"Wrong Token Endpoint Auth Method",description:"There are multiple ways of authenticating OAuth 2.0 Clients at the",source:"@site/versioned_docs/version-v1.7/debug/token-endpoint-auth-method.mdx",slug:"/debug/token-endpoint-auth-method",permalink:"/hydra/docs/v1.7/debug/token-endpoint-auth-method",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/debug/token-endpoint-auth-method.mdx",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,sidebar:"version-v1.7/docs",previous:{title:"Common CSRF Pitfalls",permalink:"/hydra/docs/v1.7/debug/csrf"},next:{title:"Logout not Working as Expected",permalink:"/hydra/docs/v1.7/debug/logout"}},u=[],l={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are multiple ways of authenticating OAuth 2.0 Clients at the\n",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/token"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTTP Basic Authorization (",Object(i.b)("inlineCode",{parentName:"li"},"client_secret_basic"),") - the OAuth 2.0 Client ID and\nsecret are sent in the HTTP Header (",Object(i.b)("inlineCode",{parentName:"li"},"Authorization: basic ...."),")"),Object(i.b)("li",{parentName:"ul"},"HTTP Body (",Object(i.b)("inlineCode",{parentName:"li"},"client_secret_post"),") - the OAuth 2.0 Client ID and secret are sent\nin the POST body (",Object(i.b)("inlineCode",{parentName:"li"},"Content-Type: application/x-www-form-urlencoded"),")")),Object(i.b)("p",null,"Both are valid schemes. But the OAuth 2.0 Client has to be configured to allow\neither of the one. Per default, the OAuth 2.0 Client allows HTTP Basic\nAuthorization only. You can check which method is allowed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'hydra clients get --endpoint http://ory-hydra <the-client-id>\n{\n        // ...\n        "token_endpoint_auth_method": "client_secret_basic",\n        // ...\n}\n')),Object(i.b)("p",null,"As you can see, this client is allowed to authorize using HTTP Basic\nAuthorization. If you try to authorize with the client credentials in the POST\nbody, the authentication process will fail. To allow a client to perform the\nPOST authorization scheme, you must set\n",Object(i.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"'),". You can do this in the CLI\nwith the ",Object(i.b)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method")," flag."))}d.isMDXComponent=!0},405:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=d(n),h=r,b=s["".concat(a,".").concat(h)]||s[h]||p[h]||i;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},406:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(20),o=n(407);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},407:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);