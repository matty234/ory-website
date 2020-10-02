(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{160:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(2),a=t(6),i=(t(0),t(316)),o={id:"hydra-serve",title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve",id:"cli/hydra-serve",isDocsHomePage:!1,title:"hydra serve",description:"hydra serve Parent command for starting public and administrative HTTP/2 APIs",source:"@site/docs/cli/hydra-serve.md",slug:"/cli/hydra-serve",permalink:"/hydra/docs/next/cli/hydra-serve",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-serve.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601629209,sidebar:"docs",previous:{title:"hydra migrate sql",permalink:"/hydra/docs/next/cli/hydra-migrate-sql"},next:{title:"hydra serve admin",permalink:"/hydra/docs/next/cli/hydra-serve-admin"}},c=[{value:"hydra serve",id:"hydra-serve",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={rightToc:c};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-serve"},"hydra serve"),Object(i.b)("p",null,"Parent command for starting public and administrative HTTP/2 APIs"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"ORY Hydra exposes two ports, a public and an administrative port. The public\nport is responsible for handling requests from the public internet, such as the\nOAuth 2.0 Authorize and Token URLs. The administrative port handles\nadministrative requests like creating OAuth 2.0 Clients, managing JSON Web Keys,\nand managing User Login and Consent sessions."),Object(i.b)("p",null,'It is recommended to run "hydra serve all". If you need granular control over\nCORS settings or similar, you may want to run "hydra serve admin" and "hydra\nserve public" separately.'),Object(i.b)("p",null,"To learn more about each individual command, run:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"hydra help serve all"),Object(i.b)("li",{parentName:"ul"},"hydra help serve admin"),Object(i.b)("li",{parentName:"ul"},"hydra help serve public")),Object(i.b)("p",null,"All sub-commands share command line flags and configuration options."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(i.b)("blockquote",null,Object(i.b)("blockquote",{parentName:"blockquote"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"}),"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"),"\n<<"))),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n  -h, --help                                             help for serve\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"      --config string     Config file (default is $HOME/.hydra.yaml)\n      --skip-tls-verify   Foolishly accept TLS certificates signed by unkown certificate authorities\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra"}),"hydra")," - Run and manage ORY Hydra"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-serve-admin"}),"hydra serve admin")," - Serves Administrative HTTP/2 APIs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-serve-all"}),"hydra serve all")," - Serves both public and administrative\nHTTP/2 APIs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"hydra-serve-public"}),"hydra serve public")," - Serves Public HTTP/2 APIs")))}d.isMDXComponent=!0},316:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),b=n,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return t?a.a.createElement(m,s(s({ref:r},l),{},{components:t})):a.a.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);