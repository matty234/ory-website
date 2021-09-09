(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[79760],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50559:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],s={id:"kratos-migrate-sql",title:"kratos migrate sql",description:"kratos migrate sql Create SQL schemas and apply migration plans"},l=void 0,c={unversionedId:"cli/kratos-migrate-sql",id:"version-v0.7/cli/kratos-migrate-sql",isDocsHomePage:!1,title:"kratos migrate sql",description:"kratos migrate sql Create SQL schemas and apply migration plans",source:"@site/versioned_docs/version-v0.7/cli/kratos-migrate-sql.md",sourceDirName:"cli",slug:"/cli/kratos-migrate-sql",permalink:"/kratos/docs/cli/kratos-migrate-sql",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/cli/kratos-migrate-sql.md",tags:[],version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"kratos-migrate-sql",title:"kratos migrate sql",description:"kratos migrate sql Create SQL schemas and apply migration plans"},sidebar:"version-v0.7/docs",previous:{title:"kratos migrate",permalink:"/kratos/docs/cli/kratos-migrate"},next:{title:"kratos remote",permalink:"/kratos/docs/cli/kratos-remote"}},p=[{value:"kratos migrate sql",id:"kratos-migrate-sql",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"WARNING",id:"warning",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-migrate-sql"},"kratos migrate sql"),(0,o.kt)("p",null,"Create SQL schemas and apply migration plans"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Run this command on a fresh SQL installation and when you upgrade Ory Kratos to\na new minor version."),(0,o.kt)("p",null,"It is recommended to run this command close to the SQL instance (e.g. same\nsubnet) instead of over the public internet. This decreases risk of failure and\ndecreases time required."),(0,o.kt)("p",null,"You can read in the database URL using the -e flag, for example: export DSN=...\nkratos migrate sql -e"),(0,o.kt)("h3",{id:"warning"},"WARNING"),(0,o.kt)("p",null,"Before running this command on an existing database, create a back up!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos migrate sql &lt;database-url&gt; [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -c, --config strings   Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n  -h, --help             help for sql\n  -e, --read-from-env    If set, reads the database connection string from the environment variable DSN or config file key dsn.\n  -y, --yes              If set all confirmation requests are accepted without user interaction.\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-migrate"},"kratos migrate")," - Various migration helpers")))}m.isMDXComponent=!0}}]);