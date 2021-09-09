(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[57876],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return d},kt:function(){return f}});var n=i(67294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),u=c(i),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return i?n.createElement(m,s(s({ref:e},d),{},{components:i})):n.createElement(m,s({ref:e},d))}));function f(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=i.length,s=new Array(o);s[0]=u;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:r,s[1]=a;for(var c=2;c<o;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},99356:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=i(22122),r=i(19756),o=(i(67294),i(3905)),s=["components"],a={id:"kratos-identities-list",title:"kratos identities list",description:"kratos identities list List identities"},l=void 0,c={unversionedId:"cli/kratos-identities-list",id:"cli/kratos-identities-list",isDocsHomePage:!1,title:"kratos identities list",description:"kratos identities list List identities",source:"@site/docs/cli/kratos-identities-list.md",sourceDirName:"cli",slug:"/cli/kratos-identities-list",permalink:"/kratos/docs/next/cli/kratos-identities-list",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/cli/kratos-identities-list.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"kratos-identities-list",title:"kratos identities list",description:"kratos identities list List identities"},sidebar:"docs",previous:{title:"kratos identities import",permalink:"/kratos/docs/next/cli/kratos-identities-import"},next:{title:"kratos identities patch",permalink:"/kratos/docs/next/cli/kratos-identities-patch"}},d=[{value:"kratos identities list",id:"kratos-identities-list",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:d};function u(t){var e=t.components,i=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-identities-list"},"kratos identities list"),(0,o.kt)("p",null,"List identities"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"List identities (paginated)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos identities list [&lt;page&gt; &lt;per-page&gt;] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for list\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e, --endpoint string   The URL of Ory Kratos&#39; Admin API. Alternatively set using the KRATOS_ADMIN_URL environmental variable.\n  -f, --format string     Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -q, --quiet             Be quiet with output printing.\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-identities"},"kratos identities")," - Tools to interact with remote\nidentities")))}u.isMDXComponent=!0}}]);