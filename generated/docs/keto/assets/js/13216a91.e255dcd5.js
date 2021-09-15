(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4954],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62335:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),l=["components"],a={id:"keto-relation-tuple-create",title:"keto relation-tuple create",description:"keto relation-tuple create Create relation tuples from JSON files"},p=void 0,c={unversionedId:"cli/keto-relation-tuple-create",id:"version-v0.6/cli/keto-relation-tuple-create",isDocsHomePage:!1,title:"keto relation-tuple create",description:"keto relation-tuple create Create relation tuples from JSON files",source:"@site/versioned_docs/version-v0.6/cli/keto-relation-tuple-create.md",sourceDirName:"cli",slug:"/cli/keto-relation-tuple-create",permalink:"/keto/docs/cli/keto-relation-tuple-create",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/cli/keto-relation-tuple-create.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,formattedLastUpdatedAt:"4/6/2021",frontMatter:{id:"keto-relation-tuple-create",title:"keto relation-tuple create",description:"keto relation-tuple create Create relation tuples from JSON files"},sidebar:"version-v0.6/docs",previous:{title:"keto relation-tuple",permalink:"/keto/docs/cli/keto-relation-tuple"},next:{title:"keto relation-tuple delete",permalink:"/keto/docs/cli/keto-relation-tuple-delete"}},u=[{value:"keto relation-tuple create",id:"keto-relation-tuple-create",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keto-relation-tuple-create"},"keto relation-tuple create"),(0,i.kt)("p",null,"Create relation tuples from JSON files"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Create relation tuples from JSON files. A directory will be traversed and all\nrelation tuples will be created. Pass the special filename ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," to read from\nSTD_IN."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keto relation-tuple create &lt;relation-tuple.json&gt; [&lt;relation-tuple-dir&gt;] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -f, --format string         Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                  help for create\n  -q, --quiet                 Be quiet with output printing.\n      --read-remote string    Remote URL of the read API endpoint. (default &#34;127.0.0.1:4466&#34;)\n      --write-remote string   Remote URL of the write API endpoint. (default &#34;127.0.0.1:4467&#34;)\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"keto-relation-tuple"},"keto relation-tuple")," - Read and manipulate relation\ntuples")))}d.isMDXComponent=!0}}]);