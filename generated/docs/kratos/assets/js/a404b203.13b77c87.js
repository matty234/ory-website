(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{357:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var o=t(3),n=t(8),a=(t(0),t(550)),s={id:"performance-out-of-memory-password-hashing-argon2",title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing"},i={unversionedId:"debug/performance-out-of-memory-password-hashing-argon2",id:"version-v0.6/debug/performance-out-of-memory-password-hashing-argon2",isDocsHomePage:!1,title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing",description:"This page only applies to you if you use Argon2 instead of BCrypt hashing",source:"@site/versioned_docs/version-v0.6/debug/performance-out-of-memory-password-hashing-argon2.md",sourceDirName:"debug",slug:"/debug/performance-out-of-memory-password-hashing-argon2",permalink:"/kratos/docs/debug/performance-out-of-memory-password-hashing-argon2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/debug/performance-out-of-memory-password-hashing-argon2.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"performance-out-of-memory-password-hashing-argon2",title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing"},sidebar:"version-v0.6/docs",previous:{title:"Common Cookie and CSRF Pitfalls",permalink:"/kratos/docs/debug/csrf"},next:{title:"SDKs",permalink:"/kratos/docs/sdk"}},c=[{value:"Common Errors",id:"common-errors",children:[]}],m={toc:c};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This page only applies to you if you use Argon2 instead of BCrypt hashing"))),Object(a.b)("p",null,"To securely check if passwords match, Ory Kratos stores the Argon2 hash of every\npassword. This algorithm has to be tuned to match the desired security level as\nwell as responsiveness. Because it is not easy to determine the exact values\nwithout trying them out, Ory Kratos comes with a\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/cli/kratos-hashers-argon2-calibrate"},"CLI")," that automatically calibrates\nthe values, following best practices. You can read more about these best\npractices in our\n",Object(a.b)("a",{parentName:"p",href:"https://www.ory.sh/choose-recommended-argon2-parameters-password-hashing/"},"blog post"),"."),Object(a.b)("h2",{id:"common-errors"},"Common Errors"),Object(a.b)("p",null,"There are some errors that indicate your Argon2 parameters need adjustment:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Very slow login and registration requests, might cause network timeouts;"),Object(a.b)("li",{parentName:"ol"},"Ory Kratos fails with ",Object(a.b)("inlineCode",{parentName:"li"},"fatal error: runtime: out of memory"),";"),Object(a.b)("li",{parentName:"ol"},"The host environment (e.g. Minikube, Docker, Kubernetes...) crashes or\nbecomes unresponsive;")),Object(a.b)("p",null,"In any of these cases, try reducing the resources used by Argon2 or increasing\nthe resources available to Kratos. Use the\n",Object(a.b)("a",{parentName:"p",href:"/kratos/docs/cli/kratos-hashers-argon2-calibrate"},"Argon2 calibrate CLI")," to detect the\nbest practice values for your server. Note that the calibration has to be done\nunder the exact same conditions that the server runs at."))}u.isMDXComponent=!0},550:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=n.a.createContext({}),u=function(e){var r=n.a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.a.createElement(m.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},l=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(t),l=o,b=p["".concat(s,".").concat(l)]||p[l]||d[l]||a;return t?n.a.createElement(b,i(i({ref:r},m),{},{components:t})):n.a.createElement(b,i({ref:r},m))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=l;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<a;m++)s[m]=t[m];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);