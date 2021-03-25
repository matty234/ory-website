(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{250:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),a=(r(0),r(568)),i={id:"hydra-token-revoke",title:"hydra token revoke",description:"hydra token revoke Revoke an access or refresh token"},c={unversionedId:"cli/hydra-token-revoke",id:"cli/hydra-token-revoke",isDocsHomePage:!1,title:"hydra token revoke",description:"hydra token revoke Revoke an access or refresh token",source:"@site/docs/cli/hydra-token-revoke.md",slug:"/cli/hydra-token-revoke",permalink:"/hydra/docs/next/cli/hydra-token-revoke",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-token-revoke.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616671249,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"hydra token introspect",permalink:"/hydra/docs/next/cli/hydra-token-introspect"},next:{title:"hydra token user",permalink:"/hydra/docs/next/cli/hydra-token-user"}},d=[{value:"hydra token revoke",id:"hydra-token-revoke",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:d};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-token-revoke"},"hydra token revoke"),Object(a.b)("p",null,"Revoke an access or refresh token"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"hydra token revoke &lt;token&gt; [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"      --client-id string       Use the provided OAuth 2.0 Client ID, defaults to environment variable OAUTH2_CLIENT_ID\n      --client-secret string   Use the provided OAuth 2.0 Client Secret, defaults to environment variable OAUTH2_CLIENT_SECRET\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_URL\n  -h, --help                   help for revoke\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"hydra-token"},"hydra token")," - Issue and Manage OAuth2 tokens")))}l.isMDXComponent=!0},568:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,h=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return r?o.a.createElement(h,c(c({ref:t},s),{},{components:r})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);