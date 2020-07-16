(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{352:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var o=t(2),n=t(9),s=(t(0),t(390)),a={id:"user-logout",title:"User Logout"},i={id:"version-v0.4/self-service/flows/user-logout",isDocsHomePage:!1,title:"User Logout",description:"ORY Kratos supports two logout flows:",source:"@site/versioned_docs/version-v0.4/self-service/flows/user-logout.md",permalink:"/kratos/docs/self-service/flows/user-logout",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service/flows/user-logout.md",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,sidebar:"version-v0.4/docs",previous:{title:"Recovery Link and Password Reset",permalink:"/kratos/docs/self-service/flows/account-recovery/password-reset-recovery-link"},next:{title:"User-Facing Errors",permalink:"/kratos/docs/self-service/flows/user-facing-errors"}},l=[{value:"Self-Service User Logout for Browser Applications",id:"self-service-user-logout-for-browser-applications",children:[]},{value:"Self-Service User Logout for API Clients",id:"self-service-user-logout-for-api-clients",children:[]}],c={rightToc:l};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"ORY Kratos supports two logout flows:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(s.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(s.b)("h2",{id:"self-service-user-logout-for-browser-applications"},"Self-Service User Logout for Browser Applications"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"WARNING - This flow is currently vulnerable to CSRF attacks because anyone can\ndirect your users to the logout endpoint. A future release of ORY Kratos will\nuse POST Forms with Anti-CSRF Tokens to prevent this problem. This is tracked\nas ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/142"}),"kratos#142"),".")),Object(s.b)("p",null,"To log a user out, all you have to do is to direct the browser to\n",Object(s.b)("inlineCode",{parentName:"p"},"http://ory-kratos-public/auth/browser/logout"),". After successful logout, the\nbrowser will be redirected to the ",Object(s.b)("inlineCode",{parentName:"p"},"redirect_to")," value set in ORY Krato's\nconfiguration file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{}),"selfservice:\n  flows:\n    logout:\n      after:\n        default_browser_return_url: http://test.kratos.ory.sh:4000/\n")),Object(s.b)("h2",{id:"self-service-user-logout-for-api-clients"},"Self-Service User Logout for API Clients"),Object(s.b)("p",null,"This will be addressed in a future release of ORY Kratos."))}u.isMDXComponent=!0},390:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var o=t(0),n=t.n(o);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),u=function(e){var r=n.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.a.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||s;return t?n.a.createElement(d,i(i({ref:r},c),{},{components:t})):n.a.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);