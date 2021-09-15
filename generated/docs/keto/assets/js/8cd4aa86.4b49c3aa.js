(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[705],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,m=s["".concat(p,".").concat(f)]||s[f]||c[f]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},19913:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(22122),o=n(19756),l=(n(67294),n(3905)),i=["components"],a={id:"keto-relation-tuple-delete",title:"keto relation-tuple delete",description:"keto relation-tuple delete Delete relation tuples defined in JSON files"},p=void 0,u={unversionedId:"cli/keto-relation-tuple-delete",id:"cli/keto-relation-tuple-delete",isDocsHomePage:!1,title:"keto relation-tuple delete",description:"keto relation-tuple delete Delete relation tuples defined in JSON files",source:"@site/docs/cli/keto-relation-tuple-delete.md",sourceDirName:"cli",slug:"/cli/keto-relation-tuple-delete",permalink:"/keto/docs/next/cli/keto-relation-tuple-delete",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto-relation-tuple-delete.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619369953,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"keto-relation-tuple-delete",title:"keto relation-tuple delete",description:"keto relation-tuple delete Delete relation tuples defined in JSON files"},sidebar:"docs",previous:{title:"keto relation-tuple create",permalink:"/keto/docs/next/cli/keto-relation-tuple-create"},next:{title:"keto relation-tuple get",permalink:"/keto/docs/next/cli/keto-relation-tuple-get"}},d=[{value:"keto relation-tuple delete",id:"keto-relation-tuple-delete",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"keto-relation-tuple-delete"},"keto relation-tuple delete"),(0,l.kt)("p",null,"Delete relation tuples defined in JSON files"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Delete relation tuples defined in the given JSON files. A directory will be\ntraversed and all relation tuples will be deleted. Pass the special filename ",(0,l.kt)("inlineCode",{parentName:"p"},"-"),"\nto read from STD_IN."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"keto relation-tuple delete &lt;relation-tuple.json&gt; [&lt;relation-tuple-dir&gt;] [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -f, --format string         Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                  help for delete\n  -q, --quiet                 Be quiet with output printing.\n      --read-remote string    Remote URL of the read API endpoint. (default &#34;127.0.0.1:4466&#34;)\n      --write-remote string   Remote URL of the write API endpoint. (default &#34;127.0.0.1:4467&#34;)\n")),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"keto-relation-tuple"},"keto relation-tuple")," - Read and manipulate relation\ntuples")))}s.isMDXComponent=!0}}]);