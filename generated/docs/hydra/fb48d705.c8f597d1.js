(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{307:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(2),i=t(6),a=(t(0),t(316)),o={id:"hydra-serve-admin",title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve-admin",id:"cli/hydra-serve-admin",isDocsHomePage:!1,title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs",source:"@site/docs/cli/hydra-serve-admin.md",slug:"/cli/hydra-serve-admin",permalink:"/hydra/docs/next/cli/hydra-serve-admin",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-serve-admin.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601668432,sidebar:"docs",previous:{title:"hydra serve",permalink:"/hydra/docs/next/cli/hydra-serve"},next:{title:"hydra serve all",permalink:"/hydra/docs/next/cli/hydra-serve-all"}},c=[{value:"hydra serve admin",id:"hydra-serve-admin",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-serve-admin"},"hydra serve admin"),Object(a.b)("p",null,"Serves Administrative HTTP/2 APIs"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles administrative requests like managing OAuth 2.0 Clients, JSON Web Keys,\nlogin and consent sessions, and others."),Object(a.b)("p",null,'This command is configurable using the same options available to "serve public"\nand "serve all".'),Object(a.b)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the administrative and public APIs. For example, you might want to\nrun different TLS certificates or CORS settings on the public and administrative\nAPI."),Object(a.b)("p",null,'This command does not work with the "memory" database. Both services\n(administrative, public) MUST use the same database connection to be able to\nsynchronize.'),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(a.b)("blockquote",null,Object(a.b)("blockquote",{parentName:"blockquote"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"}),"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"),"\n<<"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra serve admin [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"  -h, --help   help for admin\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"      --config string                                    Config file (default is $HOME/.hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --skip-tls-verify                                  Foolishly accept TLS certificates signed by unkown certificate authorities\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}l.isMDXComponent=!0},316:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),l=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return t?i.a.createElement(b,s(s({ref:n},d),{},{components:t})):i.a.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);