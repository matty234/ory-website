(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{194:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),y=n,f=l["".concat(i,".").concat(y)]||l[y]||d[y]||c;return r?o.a.createElement(f,a(a({ref:t},u),{},{components:r})):o.a.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(194)),i={id:"secure",title:"Secure"},a={unversionedId:"secure",id:"version-v0.6/secure",isDocsHomePage:!1,title:"Secure",description:"Similar to other services in our ecosystem, Ory Keto's APIs have no integrated",source:"@site/versioned_docs/version-v0.6/secure.md",slug:"/secure",permalink:"/keto/docs/secure",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/secure.md",version:"v0.6",sidebar:"version-v0.6/docs",previous:{title:"Consistency Guarantees provided by Snaptokens",permalink:"/keto/docs/concepts/snaptokens-evaluation-consistency"},next:{title:"Check whether a User has Access to Something",permalink:"/keto/docs/guides/simple-access-check-guide"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Similar to other services in our ecosystem, Ory Keto's APIs have no integrated\naccess control on their own. Any request made to any Keto API is considered\nauthenticated, authorized, and is thus being executed. However, these endpoints\nare very sensitive as they define who is allowed to do what in your system."),Object(c.b)("p",null,"Please protect these endpoints using\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper"}),"Ory Oathkeeper")," or a comparable API Gateway.\nHow you protect them, is up to you."),Object(c.b)("p",null,"If you require support for this, consider ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:hi@ory.sh"}),"asking us"),"."))}p.isMDXComponent=!0}}]);