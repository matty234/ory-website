(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(200)),i={id:"keto-migrate",title:"keto migrate",description:"keto migrate Commands to migrate the database"},c={unversionedId:"cli/keto-migrate",id:"cli/keto-migrate",isDocsHomePage:!1,title:"keto migrate",description:"keto migrate Commands to migrate the database",source:"@site/docs/cli/keto-migrate.md",sourceDirName:"cli",slug:"/cli/keto-migrate",permalink:"/keto/docs/next/cli/keto-migrate",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto-migrate.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619369953,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"keto-migrate",title:"keto migrate",description:"keto migrate Commands to migrate the database"},sidebar:"docs",previous:{title:"keto expand",permalink:"/keto/docs/next/cli/keto-expand"},next:{title:"keto migrate down",permalink:"/keto/docs/next/cli/keto-migrate-down"}},s=[{value:"keto migrate",id:"keto-migrate",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],m={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"keto-migrate"},"keto migrate"),Object(o.b)("p",null,"Commands to migrate the database"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Commands to migrate the database. This does not affect namespaces. Use\n",Object(o.b)("inlineCode",{parentName:"p"},"keto namespace migrate")," for migrating namespaces."),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help   help for migrate\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"keto"},"keto")," - Global and consistent permission and authorization server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"keto-migrate-down"},"keto migrate down")," - Migrate the database down"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"keto-migrate-status"},"keto migrate status")," - Get the current migration status"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"keto-migrate-up"},"keto migrate up")," - Migrate the database up")))}p.isMDXComponent=!0},200:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=a.a.createContext({}),p=function(e){var t=a.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(r),u=n,b=l["".concat(i,".").concat(u)]||l[u]||d[u]||o;return r?a.a.createElement(b,c(c({ref:t},m),{},{components:r})):a.a.createElement(b,c({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);