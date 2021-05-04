(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(8),o=(r(0),r(571)),i={id:"sdk",title:"Software Development Kits (SDKs)",sidebar_label:"Overview"},c={unversionedId:"sdk",id:"version-v1.10/sdk",isDocsHomePage:!1,title:"Software Development Kits (SDKs)",description:"All SDKs use automated code generation provided by",source:"@site/versioned_docs/version-v1.10/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/hydra/docs/sdk",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/sdk.md",version:"v1.10",lastUpdatedBy:"Vincent",lastUpdatedAt:1618729239,formattedLastUpdatedAt:"4/18/2021",sidebar_label:"Overview",frontMatter:{id:"sdk",title:"Software Development Kits (SDKs)",sidebar_label:"Overview"},sidebar:"version-v1.10/docs",previous:{title:"FAQ",permalink:"/hydra/docs/faq"},next:{title:"Go",permalink:"/hydra/docs/sdk/go"}},p=[],s={toc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All SDKs use automated code generation provided by\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},Object(o.b)("inlineCode",{parentName:"a"},"openapi-generator")),".\nUnfortunately, ",Object(o.b)("inlineCode",{parentName:"p"},"openapi-generator")," has serious breaking changes in the generated\ncode when upgrading versions. Therefore, we do not make backwards compatibility\npromises with regards to the generated SDKs. We hope to improve this process in\nthe future."),Object(o.b)("p",null,"Before you check out the SDKs, head over to the ",Object(o.b)("a",{parentName:"p",href:"/hydra/docs/reference/api"},"REST API"),"\ndocumentation which includes code samples for common programming languages for\neach REST endpoint."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The SDKs do not provide a good API for dealing with OAuth 2.0 Flows (e.g.\nAuthorize Code Flow, Refresh Flow, ...). But there are tons of\n",Object(o.b)("a",{parentName:"p",href:"https://oauth.net/code/"},"libraries available for consuming OAuth 2.0"),". Do not\nwrite your own OAuth 2.0 Library!")),Object(o.b)("p",null,"We publish our SDKs for popular languages in their respective package\nrepositories:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pub.dev/packages/ory_hydra_client"},"Dart")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.nuget.org/packages/Ory.Hydra.Client/"},".NET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ory/hydra-client-go"},"Go")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://search.maven.org/artifact/sh.ory.hydra/hydra-client"},"Java")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@ory/hydra-client"},"JavaScript")," with TypeScript\ndefinitions and compatible with: NodeJS, ReactJS, AnuglarJS, Vue.js, and many\nmore."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://packagist.org/packages/ory/hydra-client"},"PHP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://pypi.org/project/ory-hydra-client/"},"Python")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://rubygems.org/gems/ory-hydra-client"},"Ruby")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://crates.io/crates/ory-hydra-client"},"Rust"))),Object(o.b)("p",null,"We also provide more info for these SDKs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/hydra/docs/sdk/go"},"Golang")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/hydra/docs/sdk/js"},"JavaScript")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/hydra/docs/sdk/php"},"PHP"))),Object(o.b)("p",null,"Take a look at the source: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/sdk/tree/master/clients/hydra/"},"Generated SDKs for Ory Hydra")),Object(o.b)("p",null,"Missing your programming language?\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues"},"Create an issue")," and help us build, test\nand publish the SDK for your programming language!"))}l.isMDXComponent=!0},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(m,c(c({ref:t},s),{},{components:r})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);