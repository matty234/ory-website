(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{378:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(568)),i={id:"hydra-keys-get",title:"hydra keys get",description:"hydra keys get Get a new JSON Web Key Set"},c={unversionedId:"cli/hydra-keys-get",id:"cli/hydra-keys-get",isDocsHomePage:!1,title:"hydra keys get",description:"hydra keys get Get a new JSON Web Key Set",source:"@site/docs/cli/hydra-keys-get.md",slug:"/cli/hydra-keys-get",permalink:"/hydra/docs/next/cli/hydra-keys-get",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-keys-get.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616671249,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"hydra keys delete",permalink:"/hydra/docs/next/cli/hydra-keys-delete"},next:{title:"hydra migrate",permalink:"/hydra/docs/next/cli/hydra-migrate"}},s=[{value:"hydra keys get",id:"hydra-keys-get",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-keys-get"},"hydra keys get"),Object(o.b)("p",null,"Get a new JSON Web Key Set"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hydra keys get &lt;set&gt; [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help   help for get\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-keys"},"hydra keys")," - Manage JSON Web Keys")))}l.isMDXComponent=!0},568:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,b=p["".concat(i,".").concat(u)]||p[u]||y[u]||o;return r?a.a.createElement(b,c(c({ref:t},d),{},{components:r})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);