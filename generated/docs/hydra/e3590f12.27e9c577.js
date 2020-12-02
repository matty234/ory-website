(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{350:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(405)),i={id:"scaling-hydra",title:"Scaling ORY Hydra"},c={unversionedId:"guides/scaling-hydra",id:"version-v1.8/guides/scaling-hydra",isDocsHomePage:!1,title:"Scaling ORY Hydra",description:"ORY Hydra is running in high-scale production environments that do millions of",source:"@site/versioned_docs/version-v1.8/guides/scaling-hydra.mdx",slug:"/guides/scaling-hydra",permalink:"/hydra/docs/guides/scaling-hydra",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/scaling-hydra.mdx",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,sidebar:"version-v1.8/docs",previous:{title:"Configuring Cookies",permalink:"/hydra/docs/guides/cookies"},next:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/hydra/docs/guides/cors"}},s=[],u={rightToc:s};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Hydra is running in high-scale production environments that do millions of\nrequests per day. To scale ORY Hydra, simply spin up another VM / Docker\nContainer / Pod of ORY Hydra with the same configuration. There is no need for\ncomplex key/value stores or message queues to serve high traffic environments!"),Object(a.b)("p",null,"If you use multiple SQL instances make use of HAProxy or similar technology to\ndo\n",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://severalnines.com/resources/database-management-tutorials/mysql-load-balancing-haproxy-tutorial"}),"SQL Load Balancing"),"."))}l.isMDXComponent=!0},405:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},y=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=t,f=d["".concat(i,".").concat(y)]||d[y]||p[y]||a;return n?o.a.createElement(f,c(c({ref:r},u),{},{components:n})):o.a.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);