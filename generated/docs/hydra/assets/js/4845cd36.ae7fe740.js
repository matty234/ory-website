(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(571)),i={id:"js",title:"JavaScript"},c={unversionedId:"sdk/js",id:"version-v1.8/sdk/js",isDocsHomePage:!1,title:"JavaScript",description:"To install the JavaScript SDK, run:",source:"@site/versioned_docs/version-v1.8/sdk/js.md",sourceDirName:"sdk",slug:"/sdk/js",permalink:"/hydra/docs/v1.8/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/sdk/js.md",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",frontMatter:{id:"js",title:"JavaScript"},sidebar:"version-v1.8/docs",previous:{title:"Go",permalink:"/hydra/docs/v1.8/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/v1.8/sdk/php"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],d={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To install the JavaScript SDK, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm install --save @oryd/hydra-client\n")),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"basic-configuration"},"Basic configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { AdminApi } from '@oryd/hydra-client'\n\n// Set this to Hydra's URL\nconst hydraAdmin = new AdminApi('http://localhost:4445')\n")),Object(o.b)("h3",{id:"api-usage"},"API Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"hydraAdmin.listOAuth2Clients(10, 0).then(({ body }) => {\n  body.forEach((client) => {\n    console.log(client)\n  })\n})\n")),Object(o.b)("h3",{id:"api-docs"},"API Docs"),Object(o.b)("p",null,"API docs are available\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/sdk/js/swagger/README.md"},"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1. Especially the package name is not correct."))}l.isMDXComponent=!0},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(f,c(c({ref:t},d),{},{components:n})):a.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);