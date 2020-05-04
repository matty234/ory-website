(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(273)),c={id:"html-forms",title:"HTML Form Parser"},s={id:"version-v0.1/reference/html-forms",title:"HTML Form Parser",description:"If you're using HTML Forms to sign users up or update profiles, ORY Kratos needs",source:"@site/versioned_docs/version-v0.1/reference/html-forms.md",permalink:"/kratos/docs/v0.1/reference/html-forms",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/reference/html-forms.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"version-v0.1/docs",previous:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/v0.1/reference/json-schema-json-paths"},next:{title:"REST API",permalink:"/kratos/docs/v0.1/reference/api"}},i=[{value:"Nesting",id:"nesting",children:[]},{value:"Checkboxes",id:"checkboxes",children:[]}],p={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you're using HTML Forms to sign users up or update profiles, ORY Kratos needs\nto assert the type of each field, as HTML Form Field Values are untyped."),Object(a.b)("p",null,"ORY Kratos uses the JSON Schema to assert types. There are a few tricks you\nshould know when using this feature."),Object(a.b)("h2",{id:"nesting"},"Nesting"),Object(a.b)("p",null,"Assuming this JSON Schema:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "name": {\n      "type": "object",\n      "properties": {\n        "first": {\n          "type": "string"\n        },\n        "last": {\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"You could address ",Object(a.b)("inlineCode",{parentName:"p"},"name.first")," this with an HTML Input Form:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<input type="text" name="name.last">\n')),Object(a.b)("h2",{id:"checkboxes"},"Checkboxes"),Object(a.b)("p",null,"Checkboxes for ",Object(a.b)("inlineCode",{parentName:"p"},"true")," / ",Object(a.b)("inlineCode",{parentName:"p"},"false")," can be set up as follows. If the value is\nsupposed to be false: not checked:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'<input type="hidden" value="false" name="traits.path.to.my.boolean" />\n<input type="checkbox" value="true" name="traits.path.to.my.boolean" />\n')))}l.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||b[f]||a;return n?o.a.createElement(m,s({ref:t},p,{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);