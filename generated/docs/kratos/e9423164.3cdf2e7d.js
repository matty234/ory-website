(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(330)),o={id:"jsonnet",title:"Data Mapping with Jsonnet"},s={id:"version-v0.3/reference/jsonnet",title:"Data Mapping with Jsonnet",description:"Some modules like the",source:"@site/versioned_docs/version-v0.3/reference/jsonnet.mdx",permalink:"/kratos/docs/reference/jsonnet",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/reference/jsonnet.mdx",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840},c=[{value:"Formatting Jsonnet Code",id:"formatting-jsonnet-code",children:[]},{value:"Linting Jsonnet Code",id:"linting-jsonnet-code",children:[]},{value:"Testing Jsonnet Code",id:"testing-jsonnet-code",children:[]},{value:"Tips &amp; Tricks",id:"tips--tricks",children:[{value:"Optionality",id:"optionality",children:[]},{value:"Defaults",id:"defaults",children:[]},{value:"Raising Errors",id:"raising-errors",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Some modules like the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/kratos/docs/concepts/credentials/openid-connect-oidc-oauth2"}),"OpenID Connect and OAuth2 Strategy"),"\nsupport ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonnet.org"}),"Jsonnet"),", allowing you to easily write code that\nmodifies your identity's data and load it into ORY Kratos."),Object(i.b)("p",null,"We highly recommend checking out the official\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jsonnet.org/learning/tutorial.html"}),"learning Jsonnet tutorial"),"."),Object(i.b)("h2",{id:"formatting-jsonnet-code"},"Formatting Jsonnet Code"),Object(i.b)("p",null,"Format Jsonnet code snippets using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kratos help jsonnet format\n\n# e.g.:\n$ kratos jsonnet format --write path/to/files/*.jsonnet\n")),Object(i.b)("h2",{id:"linting-jsonnet-code"},"Linting Jsonnet Code"),Object(i.b)("p",null,"Lint Jsonnet code snippets using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ kratos help jsonnet lint\n\n# e.g.:\n$ kratos jsonnet lint path/to/files/*.jsonnet\n")),Object(i.b)("p",null,"The command will exit with an exit code of ",Object(i.b)("inlineCode",{parentName:"p"},"1")," and print all found lint errors\nto stderr if the code snippet has lint issues."),Object(i.b)("h2",{id:"testing-jsonnet-code"},"Testing Jsonnet Code"),Object(i.b)("p",null,"This is an anticipated future feature. For progress check out\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/kratos/issues/391"}),"kratos#391"),"."),Object(i.b)("h2",{id:"tips--tricks"},"Tips & Tricks"),Object(i.b)("p",null,"The purpose of this section is to provide you with examples for common use\ncases."),Object(i.b)("h3",{id:"optionality"},"Optionality"),Object(i.b)("p",null,"When you're unsure that a field will be set in the ",Object(i.b)("inlineCode",{parentName:"p"},"claims")," variable use the\nfollowing to make the trait field also optional:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsonnet"}),'local claims = std.extVar(\'claims\');\n\n{\n  identity: {\n    traits: {\n      email: claims.sub,\n      [if "website" in claims then "website" else null]: claims.website,\n    },\n  },\n}\n')),Object(i.b)("h3",{id:"defaults"},"Defaults"),Object(i.b)("p",null,"Set defaults for the ",Object(i.b)("inlineCode",{parentName:"p"},"claims")," variable:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsonnet"}),"local claims = {\n website: 'i am the default website value'\n} + std.extVar('claims');\n\n{\n  identity: {\n    traits: {\n      website: claims.website\n    }\n  }\n}\n")),Object(i.b)("h3",{id:"raising-errors"},"Raising Errors"),Object(i.b)("p",null,"You can raise errors in the Jsonnet code. Keep in mind that these will be shown\nas system errors, not validation errors, and that the user will end up at the\nError UI!"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsonnet"}),"local claims = std.extVar('claims');\n\nif std.length(claims.sub) == 0 then\n  error 'claim sub not set'\nelse\n  {\n    identity: {\n      traits: {\n        // ...\n      },\n    },\n  }\n")))}p.isMDXComponent=!0},330:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);