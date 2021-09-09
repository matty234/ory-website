(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[444],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94474:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s=["components"],i={id:"json-schema-json-paths",title:"JSON Schema and JSON Paths"},c=void 0,l={unversionedId:"reference/json-schema-json-paths",id:"version-v0.6/reference/json-schema-json-paths",isDocsHomePage:!1,title:"JSON Schema and JSON Paths",description:"JSON Schema is a vocabulary that allows you to",source:"@site/versioned_docs/version-v0.6/reference/json-schema-json-paths.md",sourceDirName:"reference",slug:"/reference/json-schema-json-paths",permalink:"/kratos/docs/v0.6/reference/json-schema-json-paths",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/reference/json-schema-json-paths.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"json-schema-json-paths",title:"JSON Schema and JSON Paths"},sidebar:"version-v0.6/docs",previous:{title:"Configuration",permalink:"/kratos/docs/v0.6/reference/configuration"},next:{title:"HTML Form Parser",permalink:"/kratos/docs/v0.6/reference/html-forms"}},u=[{value:"JSON Path Syntax",id:"json-path-syntax",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSON Schema")," is a vocabulary that allows you to\nannotate and validate JSON documents. It is a IETF (Internet and Engineering\nTask Force) public standard and is similar to a XML DTD but suited for JSON\npayloads."),(0,o.kt)("p",null,"We rely on JSON Schema heavily internally, from configuration validation to\ngenerating OpenAPI Spec to writing documentation. By using Ory Kratos, you will\nbe exposed to JSON Schema as it is used for defining Identity data models and\nother things."),(0,o.kt)("p",null,"To learn more about JSON Schema, head over to\n",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/learn/"},"json-schema.org/learn/"),"."),(0,o.kt)("p",null,"We are currently using JSON Schema Draft7 but plan on migrating to a newer\nversion in the future."),(0,o.kt)("h2",{id:"json-path-syntax"},"JSON Path Syntax"),(0,o.kt)("p",null,"In some cases you can define a JSON Path. We use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tidwall/gjson"},(0,o.kt)("inlineCode",{parentName:"a"},"tidwall/gjson"))," for this. A GJSON Path is a\ntext string syntax that describes a search pattern for quickly retrieving values\nfrom a JSON payload."),(0,o.kt)("p",null,"There are two types of JSON Paths:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reading JSON using the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tidwall/gjson/blob/master/SYNTAX.md"},"GJSON Syntax"),";"),(0,o.kt)("li",{parentName:"ul"},"Writing JSON using the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tidwall/sjson#path-syntax"},"SJSON Syntax"),".")))}m.isMDXComponent=!0}}]);