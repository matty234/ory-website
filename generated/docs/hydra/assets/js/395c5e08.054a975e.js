(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{194:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(8),i=(t(0),t(568)),o={id:"hydra-migrate-sql",title:"hydra migrate sql",description:"hydra migrate sql Create SQL schemas and apply migration plans"},s={unversionedId:"cli/hydra-migrate-sql",id:"version-v1.10/cli/hydra-migrate-sql",isDocsHomePage:!1,title:"hydra migrate sql",description:"hydra migrate sql Create SQL schemas and apply migration plans",source:"@site/versioned_docs/version-v1.10/cli/hydra-migrate-sql.md",slug:"/cli/hydra-migrate-sql",permalink:"/hydra/docs/cli/hydra-migrate-sql",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-migrate-sql.md",version:"v1.10",sidebar:"version-v1.10/docs",previous:{title:"hydra migrate",permalink:"/hydra/docs/cli/hydra-migrate"},next:{title:"hydra serve",permalink:"/hydra/docs/cli/hydra-serve"}},c=[{value:"hydra migrate sql",id:"hydra-migrate-sql",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"WARNING",id:"warning",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:c};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-migrate-sql"},"hydra migrate sql"),Object(i.b)("p",null,"Create SQL schemas and apply migration plans"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Run this command on a fresh SQL installation and when you upgrade Hydra to a new\nminor version. For example, upgrading Hydra 0.7.0 to 0.8.0 requires running this\ncommand."),Object(i.b)("p",null,"It is recommended to run this command close to the SQL instance (e.g. same\nsubnet) instead of over the public internet. This decreases risk of failure and\ndecreases time required."),Object(i.b)("p",null,"You can read in the database URL using the -e flag, for example: export DSN=...\nhydra migrate sql -e"),Object(i.b)("h3",{id:"warning"},"WARNING"),Object(i.b)("p",null,"Before running this command on an existing database, create a back up!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hydra migrate sql &lt;database-url&gt; [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -h, --help            help for sql\n  -e, --read-from-env   If set, reads the database connection string from the environment variable DSN or config file key dsn.\n  -y, --yes             If set all confirmation requests are accepted without user interaction.\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -c, --config strings   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-migrate"},"hydra migrate")," - Various migration helpers")))}d.isMDXComponent=!0},568:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,h=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return t?a.a.createElement(h,s(s({ref:r},l),{},{components:t})):a.a.createElement(h,s({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);