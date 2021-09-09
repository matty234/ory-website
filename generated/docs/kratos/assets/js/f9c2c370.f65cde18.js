(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5758],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7774:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],s={id:"sdk",title:"SDKs",sidebar_label:"Overview"},p=void 0,l={unversionedId:"sdk",id:"sdk",isDocsHomePage:!1,title:"SDKs",description:"All SDKs use automated code generation provided by",source:"@site/docs/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/kratos/docs/next/sdk",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/sdk.md",tags:[],version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1624196165,formattedLastUpdatedAt:"6/20/2021",frontMatter:{id:"sdk",title:"SDKs",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Performance Problems and Out Of Memory Panics Caused by Password Hashing",permalink:"/kratos/docs/next/debug/performance-out-of-memory-password-hashing-argon2"},next:{title:"Milestones and Roadmap",permalink:"/kratos/docs/next/milestones"}},c=[],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All SDKs use automated code generation provided by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},(0,o.kt)("inlineCode",{parentName:"a"},"openapi-generator")),".\nUnfortunately, ",(0,o.kt)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated\ncode when upgrading versions. Therefore, we do not make backwards compatibility\npromises with regards to the generated SDKs. We hope to improve this process in\nthe future."),(0,o.kt)("p",null,"Before you check out the SDKs, head over to the ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/next/reference/api"},"REST API"),"\ndocumentation which includes code samples for common programming languages for\neach REST endpoint."),(0,o.kt)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/ory_kratos_client"},"Dart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Ory.Kratos.Client/"},".NET")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos-client-go"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/sh.ory.kratos/kratos-client"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@ory/kratos-client"},"JavaScript")," with TypeScript\ndefinitions and compatible with: NodeJS, ReactJS, AngularJS, Vue.js, and many\nmore."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://packagist.org/packages/ory/kratos-client"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/ory-kratos-client/"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rubygems.org/gems/ory-kratos-client"},"Ruby")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/ory-kratos-client"},"Rust"))),(0,o.kt)("p",null,"Take a look at the source:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/sdk/tree/master/clients/kratos/"},"Generated SDKs for Ory Kratos")),(0,o.kt)("p",null,"Missing your programming language?\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues"},"Create an issue")," and help us build, test\nand publish the SDK for your programming language!"))}m.isMDXComponent=!0}}]);