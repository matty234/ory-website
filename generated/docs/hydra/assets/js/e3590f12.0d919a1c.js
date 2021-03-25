(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{498:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(8),a=(r(0),r(568)),i={id:"scaling-hydra",title:"Scaling ORY Hydra"},s={unversionedId:"guides/scaling-hydra",id:"version-v1.8/guides/scaling-hydra",isDocsHomePage:!1,title:"Scaling ORY Hydra",description:"ORY Hydra is running in high-scale production environments that do millions of",source:"@site/versioned_docs/version-v1.8/guides/scaling-hydra.mdx",slug:"/guides/scaling-hydra",permalink:"/hydra/docs/v1.8/guides/scaling-hydra",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/scaling-hydra.mdx",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",sidebar:"version-v1.8/docs",previous:{title:"Configuring Cookies",permalink:"/hydra/docs/v1.8/guides/cookies"},next:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/hydra/docs/v1.8/guides/cors"}},c=[],u={toc:c};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Hydra is running in high-scale production environments that do millions of\nrequests per day. To scale ORY Hydra, simply spin up another VM / Docker\nContainer / Pod of ORY Hydra with the same configuration. There is no need for\ncomplex key/value stores or message queues to serve high traffic environments!"),Object(a.b)("p",null,"If you use multiple SQL instances make use of HAProxy or similar technology to\ndo\n",Object(a.b)("a",{parentName:"p",href:"https://severalnines.com/resources/database-management-tutorials/mysql-load-balancing-haproxy-tutorial"},"SQL Load Balancing"),"."))}l.isMDXComponent=!0},568:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return y}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=t,y=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?o.a.createElement(y,s(s({ref:n},u),{},{components:r})):o.a.createElement(y,s({ref:n},u))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);