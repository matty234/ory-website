(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(332)),c={id:"error",title:"This should be the Error UI"},i={unversionedId:"fallback/error",id:"fallback/error",isDocsHomePage:!1,title:"This should be the Error UI",description:"You ended up here because you did not set the following configuration value:",source:"@site/docs/fallback/default_return_to.mdx",slug:"/fallback/error",permalink:"/kratos/docs/next/fallback/error",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/fallback/default_return_to.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1593685704},l=[],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You ended up here because you did not set the following configuration value:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"selfservice:\n  default_browser_return_url: http://my-app.com/dashboard\n")),Object(a.b)("p",null,"You can set this configuration value using environment variable\n",Object(a.b)("inlineCode",{parentName:"p"},"SELFSERVICE_DEFAULT_BROWSER_RETURN_URL")," as well!"),Object(a.b)("p",null,"If you don't know what that means, head over to\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/kratos/docs/next/concepts/browser-redirect-flow-completion"}),"Self-Service Flow Completion"),"!"))}p.isMDXComponent=!0},332:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,b=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return r?o.a.createElement(b,i(i({ref:t},u),{},{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);