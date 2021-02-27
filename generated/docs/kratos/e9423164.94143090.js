(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{399:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(446)),i={id:"jsonnet",title:"Data Mapping with Jsonnet"},s={unversionedId:"reference/jsonnet",id:"version-v0.3/reference/jsonnet",isDocsHomePage:!1,title:"Data Mapping with Jsonnet",description:"Some modules like the",source:"@site/versioned_docs/version-v0.3/reference/jsonnet.mdx",slug:"/reference/jsonnet",permalink:"/kratos/docs/v0.3/reference/jsonnet",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/reference/jsonnet.mdx",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840},c=[{value:"Formatting Jsonnet Code",id:"formatting-jsonnet-code",children:[]},{value:"Linting Jsonnet Code",id:"linting-jsonnet-code",children:[]},{value:"Testing Jsonnet Code",id:"testing-jsonnet-code",children:[]},{value:"Tips &amp; Tricks",id:"tips--tricks",children:[{value:"Optionality",id:"optionality",children:[]},{value:"Defaults",id:"defaults",children:[]},{value:"Raising Errors",id:"raising-errors",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Some modules like the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/v0.3/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Strategy"),"\nsupport ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonnet.org"}),"Jsonnet"),", allowing you to easily write code that\nmodifies your identity's data and load it into ORY Kratos."),Object(o.b)("p",null,"We highly recommend checking out the official\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonnet.org/learning/tutorial.html"}),"learning Jsonnet tutorial"),"."),Object(o.b)("h2",{id:"formatting-jsonnet-code"},"Formatting Jsonnet Code"),Object(o.b)("p",null,"Format Jsonnet code snippets using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kratos help jsonnet format\n\n# e.g.:\n$ kratos jsonnet format --write path/to/files/*.jsonnet\n")),Object(o.b)("h2",{id:"linting-jsonnet-code"},"Linting Jsonnet Code"),Object(o.b)("p",null,"Lint Jsonnet code snippets using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kratos help jsonnet lint\n\n# e.g.:\n$ kratos jsonnet lint path/to/files/*.jsonnet\n")),Object(o.b)("p",null,"The command will exit with an exit code of ",Object(o.b)("inlineCode",{parentName:"p"},"1")," and print all found lint errors\nto stderr if the code snippet has lint issues."),Object(o.b)("h2",{id:"testing-jsonnet-code"},"Testing Jsonnet Code"),Object(o.b)("p",null,"This is an anticipated future feature. For progress check out\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/391"}),"kratos#391"),"."),Object(o.b)("h2",{id:"tips--tricks"},"Tips & Tricks"),Object(o.b)("p",null,"The purpose of this section is to provide you with examples for common use\ncases."),Object(o.b)("h3",{id:"optionality"},"Optionality"),Object(o.b)("p",null,"When you're unsure that a field will be set in the ",Object(o.b)("inlineCode",{parentName:"p"},"claims")," variable use the\nfollowing to make the trait field also optional:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsonnet"}),'local claims = std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      email: claims.sub,\n      [if "website" in claims then "website" else null]: claims.website,\n    },\n  },\n}\n')),Object(o.b)("h3",{id:"defaults"},"Defaults"),Object(o.b)("p",null,"Set defaults for the ",Object(o.b)("inlineCode",{parentName:"p"},"claims")," variable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsonnet"}),"local claims = {\n website: 'i am the default website value'\n} + std.extVar('claims');\n\n{\n  identity: {\n    traits: {\n      website: claims.website\n    }\n  }\n}\n")),Object(o.b)("h3",{id:"raising-errors"},"Raising Errors"),Object(o.b)("p",null,"You can raise errors in the Jsonnet code. Keep in mind that these will be shown\nas system errors, not validation errors, and that the user will end up at the\nError UI!"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsonnet"}),"local claims = std.extVar('claims');\n\nif std.length(claims.sub) == 0 then\n  error 'claim sub not set'\nelse\n  {\n    identity: {\n      traits: {\n        // ...\n      },\n    },\n  }\n")))}p.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);