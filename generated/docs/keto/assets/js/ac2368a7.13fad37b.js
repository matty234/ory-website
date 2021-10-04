(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5982],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},718:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],c={id:"keto-namespace-validate",title:"keto namespace validate",description:"keto namespace validate Validate namespace definitions"},l=void 0,s={unversionedId:"cli/keto-namespace-validate",id:"version-v0.7/cli/keto-namespace-validate",isDocsHomePage:!1,title:"keto namespace validate",description:"keto namespace validate Validate namespace definitions",source:"@site/versioned_docs/version-v0.7/cli/keto-namespace-validate.md",sourceDirName:"cli",slug:"/cli/keto-namespace-validate",permalink:"/keto/docs/cli/keto-namespace-validate",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.7/cli/keto-namespace-validate.md",tags:[],version:"v0.7",lastUpdatedBy:"zepatrik",lastUpdatedAt:1633089163,formattedLastUpdatedAt:"10/1/2021",frontMatter:{id:"keto-namespace-validate",title:"keto namespace validate",description:"keto namespace validate Validate namespace definitions"},sidebar:"version-v0.7/docs",previous:{title:"keto namespace migrate legacy",permalink:"/keto/docs/cli/keto-namespace-migrate-legacy"},next:{title:"keto relation-tuple",permalink:"/keto/docs/cli/keto-relation-tuple"}},p=[{value:"keto namespace validate",id:"keto-namespace-validate",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keto-namespace-validate"},"keto namespace validate"),(0,i.kt)("p",null,"Validate namespace definitions"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"validate Validates namespace definitions. Parses namespace yaml files or\nconfiguration files passed via the configuration flag. Returns human readable\nerrors. Useful for debugging."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keto namespace validate &lt;namespace.yml&gt; [&lt;namespace2.yml&gt; ...] | validate -c &lt;config.yaml&gt; [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for validate\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"keto-namespace"},"keto namespace")," - Read and manipulate namespaces")))}m.isMDXComponent=!0}}]);