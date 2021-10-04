(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3475],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85366:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],l={id:"keto",title:"keto",description:"keto Global and consistent permission and authorization server"},s=void 0,c={unversionedId:"cli/keto",id:"version-v0.7/cli/keto",isDocsHomePage:!1,title:"keto",description:"keto Global and consistent permission and authorization server",source:"@site/versioned_docs/version-v0.7/cli/keto.md",sourceDirName:"cli",slug:"/cli/keto",permalink:"/keto/docs/cli/keto",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.7/cli/keto.md",tags:[],version:"v0.7",lastUpdatedBy:"zepatrik",lastUpdatedAt:1633089163,formattedLastUpdatedAt:"10/1/2021",frontMatter:{id:"keto",title:"keto",description:"keto Global and consistent permission and authorization server"},sidebar:"version-v0.7/docs",previous:{title:"Protocol Buffers API",permalink:"/keto/docs/reference/proto-api"},next:{title:"keto check",permalink:"/keto/docs/cli/keto-check"}},p=[{value:"keto",id:"keto",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"keto"},"keto"),(0,a.kt)("p",null,"Global and consistent permission and authorization server"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n  -h, --help             help for keto\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-check"},"keto check")," - Check whether a subject has a relation on an object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-expand"},"keto expand")," - Expand a subject set"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-migrate"},"keto migrate")," - Commands to migrate the database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-namespace"},"keto namespace")," - Read and manipulate namespaces"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-relation-tuple"},"keto relation-tuple")," - Read and manipulate relation\ntuples"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-serve"},"keto serve")," - Starts the server and serves the HTTP REST and gRPC\nAPIs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-status"},"keto status")," - Get the status of the upstream Keto instance"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"keto-version"},"keto version")," - Show the build version, build time, and git\nhash")))}d.isMDXComponent=!0}}]);