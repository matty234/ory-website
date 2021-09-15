(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[9745],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||c;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33751:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),c=(n(67294),n(3905)),i=["components"],a={id:"keto-check",title:"keto check",description:"keto check Check whether a subject has a relation on an object"},s=void 0,l={unversionedId:"cli/keto-check",id:"version-v0.6/cli/keto-check",isDocsHomePage:!1,title:"keto check",description:"keto check Check whether a subject has a relation on an object",source:"@site/versioned_docs/version-v0.6/cli/keto-check.md",sourceDirName:"cli",slug:"/cli/keto-check",permalink:"/keto/docs/cli/keto-check",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/cli/keto-check.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,formattedLastUpdatedAt:"4/6/2021",frontMatter:{id:"keto-check",title:"keto check",description:"keto check Check whether a subject has a relation on an object"},sidebar:"version-v0.6/docs",previous:{title:"keto",permalink:"/keto/docs/cli/keto"},next:{title:"keto expand",permalink:"/keto/docs/cli/keto-expand"}},p=[{value:"keto check",id:"keto-check",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"keto-check"},"keto check"),(0,c.kt)("p",null,"Check whether a subject has a relation on an object"),(0,c.kt)("h3",{id:"synopsis"},"Synopsis"),(0,c.kt)("p",null,"Check whether a subject has a relation on an object. This method resolves\nsubject sets and subject set rewrites."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"keto check &lt;subject&gt; &lt;relation&gt; &lt;namespace&gt; &lt;object&gt; [flags]\n")),(0,c.kt)("h3",{id:"options"},"Options"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"  -f, --format string         Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                  help for check\n  -q, --quiet                 Be quiet with output printing.\n      --read-remote string    Remote URL of the read API endpoint. (default &#34;127.0.0.1:4466&#34;)\n      --write-remote string   Remote URL of the write API endpoint. (default &#34;127.0.0.1:4467&#34;)\n")),(0,c.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),(0,c.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"keto"},"keto")," - Global and consistent permission and authorization server")))}d.isMDXComponent=!0}}]);