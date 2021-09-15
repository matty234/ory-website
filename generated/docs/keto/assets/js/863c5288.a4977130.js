(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7917],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86608:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),s=["components"],c={title:"Namespaces"},i=void 0,p={unversionedId:"concepts/namespaces",id:"concepts/namespaces",isDocsHomePage:!1,title:"Namespaces",description:"Ory Keto knows the concept of namespaces to organize",source:"@site/docs/concepts/namespaces.mdx",sourceDirName:"concepts",slug:"/concepts/namespaces",permalink:"/keto/docs/next/concepts/namespaces",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/concepts/namespaces.mdx",tags:[],version:"current",lastUpdatedBy:"Patrik",lastUpdatedAt:1620720311,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"Namespaces"},sidebar:"docs",previous:{title:"Relation Tuples",permalink:"/keto/docs/next/concepts/relation-tuples"},next:{title:"Objects",permalink:"/keto/docs/next/concepts/objects"}},l=[{value:"Scoping of Objects",id:"scoping-of-objects",children:[]},{value:"Migrations",id:"migrations",children:[]},{value:"Naming Conventions",id:"naming-conventions",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ory Keto knows the concept of namespaces to organize\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/relation-tuples"},"relation tuples"),". Namespaces have a configuration that\ndefines the relations, and some other important values\n(",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/reference/configuration"},"see reference"),"). Unlike other applications, Ory\nKeto does ",(0,r.kt)("strong",{parentName:"p"},"not")," isolate namespaces. Especially, ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/subjects"},"subject sets"),"\ncan cross-reference from one namespace to another. The namespaces' purpose is to\nsplit up the data into coherent partitions, each with its corresponding\nconfiguration. Internally each namespace has its own table in the database to\nallow setting individual\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/issues/303"},"storage specific options"),"."),(0,r.kt)("h2",{id:"scoping-of-objects"},"Scoping of Objects"),(0,r.kt)("p",null,"The application can also use namespaces to scope ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/objects"},"objects"),"\nbecause Ory Keto only compares objects within a namespace. For example, if Ory\nKeto knows the following relation tuples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// user1 has acces to the directory foo\ndirectories:foo#access@user1\n// user2 has access to the file foo\nfiles:foo#access@user2\n")),(0,r.kt)("p",null,"both of the following ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/concepts/api-overview#check-relation-tuples"},"check")," requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// Does user2 have access to the directory foo?\ndirectories:foo#access@user2\n// Does user1 have access to the file foo?\nfiles:foo#access@user1\n")),(0,r.kt)("p",null,"will evaluate to false (a.k.a. rejected)."),(0,r.kt)("p",null,"Vice versa, all relation tuples containing an object have to be in the same\nnamespace to reference the same object."),(0,r.kt)("h2",{id:"migrations"},"Migrations"),(0,r.kt)("p",null,"Because namespaces each come with an individual configuration that can even\nmodify some storage specific options, it is required to manually review and run\nmigrations on namespace configuration updates. Please refer to the\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/cli/keto-namespace-migrate"},"namespace migration CLI reference")," and\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/next/guides/production"},"running in production guide")," to learn more about that\nprocess."),(0,r.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("p",null,"Namespaces should be named after the plural of the type of objects they describe\n(e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"files"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chats"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"organizations"),"). Relations within a namespace should be\na word that describes what relation a subject has towards an object. As a rule\nof thumb, every relation tuple should translate to an english sentence like so:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Subject")," has ",(0,r.kt)("strong",{parentName:"p"},"relation")," on ",(0,r.kt)("strong",{parentName:"p"},"object")," which is one of the ",(0,r.kt)("strong",{parentName:"p"},"namespace"),".")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// good examples\n\n\nfiles:8f427c01-c295-44f3-b43d-49c3a1042f35#write@02a3c847-c903-446a-a34f-dae74b4fab86\ngroups:43784684-103e-44c0-9d6c-db9fb265f617#member@b8d00059-b803-4123-9d3d-b3613bfe7c1b\ndirectories:803a87e9-0da0-486e-bc08-ef559dd8e034#child@(files:11488ab9-4ede-479f-add4-f1379da4ae43#_)\nfiles:11488ab9-4ede-479f-add4-f1379da4ae43#parent@(directories:803a87e9-0da0-486e-bc08-ef559dd8e034#_)\n\n// bad examples\n\n\n// namespace is not describing homogenous type of objects\ntenant-1-objects:62237c27-19c3-4bb1-9cbc-a5a67372569b#access@7a012165-7b21-495b-b84b-cf4e1a21b484\n// relation describes a relation of the object towards the subject\ndirectories:803a87e9-0da0-486e-bc08-ef559dd8e034#parent@(files:11488ab9-4ede-479f-add4-f1379da4ae43#_)\n")))}d.isMDXComponent=!0}}]);