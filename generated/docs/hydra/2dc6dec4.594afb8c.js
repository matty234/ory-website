(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(405)),a=(n(406),{id:"logout",title:"Logout not Working as Expected"}),c={unversionedId:"debug/logout",id:"version-v1.6/debug/logout",isDocsHomePage:!1,title:"Logout not Working as Expected",description:"Sometimes, calling /oauth2/sessions/logout does not behave as expected, for",source:"@site/versioned_docs/version-v1.6/debug/logout.mdx",slug:"/debug/logout",permalink:"/hydra/docs/v1.6/debug/logout",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/debug/logout.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/v1.6/debug/token-endpoint-auth-method"},next:{title:"Software Development Kits (SDKs)",permalink:"/hydra/docs/v1.6/sdk"}},u=[],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes, calling ",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/sessions/logout")," does not behave as expected, for\nexample:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An error occurs."),Object(i.b)("li",{parentName:"ul"},"You are being redirected directly to the post_logout_redirect_uri instead of\nthe logout UI.")),Object(i.b)("p",null,'First of all, there are two types of logout requests - one is called "OP (OpenID\nProvider) Initiated" and one "RP (Relying Party) Initiated". The first flow MUST\nNEITHER contain the ',Object(i.b)("inlineCode",{parentName:"p"},"id_token_hint"),", nor a ",Object(i.b)("inlineCode",{parentName:"p"},"state"),", nor\n",Object(i.b)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),"."),Object(i.b)("p",null,"If no active authentication session is set at ORY Hydra, the browser will be\nredirected immediately to the system-wide configured post logout redirect URI."),Object(i.b)("p",null,"An active session may be missing because:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You are mixing up domain names (e.g. 127.0.0.1 and localhost - ",Object(i.b)("strong",{parentName:"li"},"this is a\ncommon mistake"),")"),Object(i.b)("li",{parentName:"ul"},"You are running ORY Hydra behind a proxy that messes with Cookies"),Object(i.b)("li",{parentName:"ul"},"You are using a Browser with a very strict privacy policy which makes it\ndifficult or impossible for ORY Hydra to properly set cookies. We've observed\nthat the ",Object(i.b)("strong",{parentName:"li"},"Brave Browser")," is very, very difficult here."),Object(i.b)("li",{parentName:"ul"},"You did not set ",Object(i.b)("inlineCode",{parentName:"li"},"remember: true")," when accepting the login request")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before filing a bug report, make sure you actually have a cookie named\n",Object(i.b)("inlineCode",{parentName:"strong"},"oauth2_authentication_session")," for the URL ORY Hydra is running on, and\nespecially for the domain that's in your ",Object(i.b)("inlineCode",{parentName:"strong"},"http://.../oauth2/sessions/logout"))),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"id_token_hint")," is set, you may define both ",Object(i.b)("inlineCode",{parentName:"p"},"state")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),". The same problems can cause this flow to behave\nunexpectedly as listed above, with the only difference that now ORY Hydra knows\nwho the user to be logged out is (from the ",Object(i.b)("inlineCode",{parentName:"p"},"id_token_hint"),") and if any\nFront-/Back-channel Logout is configured for that client, it will be executed\neven if there is no valid authentication session for that user in ORY Hydra."))}l.isMDXComponent=!0},405:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},406:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(20),o=n(407);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},407:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);