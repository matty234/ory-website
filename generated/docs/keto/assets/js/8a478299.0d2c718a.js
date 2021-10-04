(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3065],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51683:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i=["components"],s={title:"Objects"},c=void 0,l={unversionedId:"concepts/objects",id:"version-v0.7/concepts/objects",isDocsHomePage:!1,title:"Objects",description:"Objects are identifiers for some kind of application objects. They can represent",source:"@site/versioned_docs/version-v0.7/concepts/objects.mdx",sourceDirName:"concepts",slug:"/concepts/objects",permalink:"/keto/docs/concepts/objects",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.7/concepts/objects.mdx",tags:[],version:"v0.7",lastUpdatedBy:"zepatrik",lastUpdatedAt:1633089163,formattedLastUpdatedAt:"10/1/2021",frontMatter:{title:"Objects"},sidebar:"version-v0.7/docs",previous:{title:"Namespaces",permalink:"/keto/docs/concepts/namespaces"},next:{title:"Subjects",permalink:"/keto/docs/concepts/subjects"}},p=[{value:"Basic Example",id:"basic-example",children:[]},{value:"Advanced Example: Using Application Information within Keto Objects",id:"advanced-example-using-application-information-within-keto-objects",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Objects are identifiers for some kind of application objects. They can represent\ne.g. a file, network port, physical item, ... . It is up to the application to\nmap its objects to an unambiguous identifier. The limit on object identifiers is\n64 characters. We recommend the usage of UUIDs as they provide a high entropy\nand thus unique identifiers. It is however possible to use e.g. URLs or opaque\ntokens of any kind. Please check the\n",(0,r.kt)("a",{parentName:"p",href:"#advanced-example-using-application-information-within-keto-objects"},"limitations"),".\nOry Keto will consider objects equal iff their string representation is equal."),(0,r.kt)("h2",{id:"basic-example"},"Basic Example"),(0,r.kt)("p",null,"In the basic case an application uses the same object identifiers as it uses\ninternally, e.g. a UUIDv4 like ",(0,r.kt)("inlineCode",{parentName:"p"},"61e75133-efff-4281-8148-a1806919f568")," or SHA-1\nhash like ",(0,r.kt)("inlineCode",{parentName:"p"},"5c6f593a4e12970d647843f97846fd5ed18179eb"),"."),(0,r.kt)("p",null,"Head over to the\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/examples/olymp-file-sharing"},"basic full feature example")," to see an\nexample with some context."),(0,r.kt)("h2",{id:"advanced-example-using-application-information-within-keto-objects"},"Advanced Example: Using Application Information within Keto Objects"),(0,r.kt)("p",null,"Because the Keto client can use arbitrary strings as objects, it is tempting to\nencode application data within the object. ",(0,r.kt)("strong",{parentName:"p"},"We strongly discourage this\npractice.")," Instead, you should use a UUID to map application data to Keto\nobjects. This is required to ensure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"single source of truth and easy data update"),(0,r.kt)("li",{parentName:"ol"},"free choice of encoding (Keto does not allow the characters ",(0,r.kt)("inlineCode",{parentName:"li"},":#@"),")"),(0,r.kt)("li",{parentName:"ol"},"unlimited data size (Keto only allows up to 64 characters)")),(0,r.kt)("p",null,"For example, this could be used to implement checks on value ranges. The\napplication knows the following mapping of comparison conditions and UUIDs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"f832e1e7-3c97-4cb8-8582-979e63ae2f1d:\n  greater_than: 5\n\nc4540cf5-6ac4-4007-910b-c5a56aa3d4e6:\n  greater_than: 2\n  smaller_equal: 5\n")),(0,r.kt)("p",null,"Keto has the following relation tuples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// Members of the admins group are allowed to set a value v > 5\nvalues:f832e1e7-3c97-4cb8-8582-979e63ae2f1d#set_value@(groups:admins#member)\n\n// Members of the devs group are allowed to set a value v: 2 < v <= 5\nvalues:c4540cf5-6ac4-4007-910b-c5a56aa3d4e6#set_value@(groups:devs#member)\n\n// Anyone who can set a value v > 5 can also set 2 < v <= 5\nvalues:c4540cf5-6ac4-4007-910b-c5a56aa3d4e6#set_value@(values:f832e1e7-3c97-4cb8-8582-979e63ae2f1d#set_value)\n")),(0,r.kt)("p",null,'The application will have to translate an incoming "set value" request to the\ncorresponding condition the value fulfills. It is important to understand that\nOry Keto does ',(0,r.kt)("strong",{parentName:"p"},"not")," know how to interpret any of the information. Rather, the\napplication has to preprocess and map the value to the corresponding UUID."))}d.isMDXComponent=!0}}]);