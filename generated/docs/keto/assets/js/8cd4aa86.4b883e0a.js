(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),l=(n(0),n(200)),i={id:"keto-relation-tuple-delete",title:"keto relation-tuple delete",description:"keto relation-tuple delete Delete relation tuples defined in JSON files"},a={unversionedId:"cli/keto-relation-tuple-delete",id:"cli/keto-relation-tuple-delete",isDocsHomePage:!1,title:"keto relation-tuple delete",description:"keto relation-tuple delete Delete relation tuples defined in JSON files",source:"@site/docs/cli/keto-relation-tuple-delete.md",sourceDirName:"cli",slug:"/cli/keto-relation-tuple-delete",permalink:"/keto/docs/next/cli/keto-relation-tuple-delete",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto-relation-tuple-delete.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619369953,formattedLastUpdatedAt:"4/25/2021",frontMatter:{id:"keto-relation-tuple-delete",title:"keto relation-tuple delete",description:"keto relation-tuple delete Delete relation tuples defined in JSON files"},sidebar:"docs",previous:{title:"keto relation-tuple create",permalink:"/keto/docs/next/cli/keto-relation-tuple-create"},next:{title:"keto relation-tuple get",permalink:"/keto/docs/next/cli/keto-relation-tuple-get"}},p=[{value:"keto relation-tuple delete",id:"keto-relation-tuple-delete",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"keto-relation-tuple-delete"},"keto relation-tuple delete"),Object(l.b)("p",null,"Delete relation tuples defined in JSON files"),Object(l.b)("h3",{id:"synopsis"},"Synopsis"),Object(l.b)("p",null,"Delete relation tuples defined in the given JSON files. A directory will be\ntraversed and all relation tuples will be deleted. Pass the special filename ",Object(l.b)("inlineCode",{parentName:"p"},"-"),"\nto read from STD_IN."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"keto relation-tuple delete &lt;relation-tuple.json&gt; [&lt;relation-tuple-dir&gt;] [flags]\n")),Object(l.b)("h3",{id:"options"},"Options"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"  -f, --format string         Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                  help for delete\n  -q, --quiet                 Be quiet with output printing.\n      --read-remote string    Remote URL of the read API endpoint. (default &#34;127.0.0.1:4466&#34;)\n      --write-remote string   Remote URL of the write API endpoint. (default &#34;127.0.0.1:4467&#34;)\n")),Object(l.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),Object(l.b)("h3",{id:"see-also"},"SEE ALSO"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"keto-relation-tuple"},"keto relation-tuple")," - Read and manipulate relation\ntuples")))}d.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||s[f]||l;return n?o.a.createElement(b,a(a({ref:t},c),{},{components:n})):o.a.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);