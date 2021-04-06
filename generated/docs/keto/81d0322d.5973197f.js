(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(194)),c={id:"index",title:"Overview"},i={unversionedId:"sdk/index",id:"version-v0.6/sdk/index",isDocsHomePage:!1,title:"Overview",description:"All SDKs use automated code generation provided by",source:"@site/versioned_docs/version-v0.6/sdk/index.md",slug:"/sdk/index",permalink:"/keto/docs/sdk/index",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/sdk/index.md",version:"v0.6",sidebar:"version-v0.6/docs",previous:{title:"keto version",permalink:"/keto/docs/cli/keto-version"},next:{title:"Milestones and Roadmap",permalink:"/keto/docs/milestones"}},p=[],s={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All SDKs use automated code generation provided by\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator"}),Object(o.b)("inlineCode",{parentName:"a"},"openapi-generator"))," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/protocolbuffers/protobuf"}),"protoc"),". Unfortunately,\n",Object(o.b)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated code when\nupgrading versions. Therefore, we do not make backwards compatibility promises\nwith regards to the generated SDKs. We hope to improve this process in the\nfuture."),Object(o.b)("p",null,"Before you check out the SDKs, head over to the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/reference/api"}),"REST API")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/reference/proto-api"}),"gRPC API"),"\ndocumentation which includes code samples for common programming languages for\neach REST endpoint."),Object(o.b)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://pub.dev/packages/ory_keto_client"}),"Dart")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.nuget.org/packages/Ory.Keto.Client/"}),".NET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto-client-go"}),"Go REST")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ory/keto/blob/master/proto/ory/keto/acl"}),"Go gRPC")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://search.maven.org/artifact/sh.ory.keto/keto-client"}),"Java")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://packagist.org/packages/ory/keto-client"}),"PHP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://pypi.org/project/ory-keto-client/"}),"Python")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://rubygems.org/gems/ory-keto-client"}),"Ruby")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://crates.io/crates/ory-keto-client"}),"Rust")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@oryd/keto-client"}),"NodeJS REST")," (with\nTypeScript)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@oryd/keto-grpc-client"}),"NodeJS gRPC")," (with\nTypeScript)")),Object(o.b)("p",null,"Take a look at the source:\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/sdk/tree/master/clients/keto/"}),"Generated SDKs for Ory Keto")),Object(o.b)("p",null,"Missing your programming language?\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/keto/issues"}),"Create an issue")," and help us build, test\nand publish the SDK for your programming language!"))}b.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,d=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return r?a.a.createElement(d,i(i({ref:t},s),{},{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);