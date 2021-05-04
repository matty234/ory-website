(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{567:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),i=(r(0),r(571)),o={id:"hydra-keys-delete",title:"hydra keys delete",description:"hydra keys delete Delete a new JSON Web Key Set"},d={unversionedId:"cli/hydra-keys-delete",id:"version-v1.7/cli/hydra-keys-delete",isDocsHomePage:!1,title:"hydra keys delete",description:"hydra keys delete Delete a new JSON Web Key Set",source:"@site/versioned_docs/version-v1.7/cli/hydra-keys-delete.md",sourceDirName:"cli",slug:"/cli/hydra-keys-delete",permalink:"/hydra/docs/v1.7/cli/hydra-keys-delete",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/cli/hydra-keys-delete.md",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"hydra-keys-delete",title:"hydra keys delete",description:"hydra keys delete Delete a new JSON Web Key Set"},sidebar:"version-v1.7/docs",previous:{title:"hydra keys create",permalink:"/hydra/docs/v1.7/cli/hydra-keys-create"},next:{title:"hydra keys get",permalink:"/hydra/docs/v1.7/cli/hydra-keys-get"}},s=[{value:"hydra keys delete",id:"hydra-keys-delete",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-keys-delete"},"hydra keys delete"),Object(i.b)("p",null,"Delete a new JSON Web Key Set"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Delete a new JSON Web Key Set"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"hydra keys delete <set> [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -h, --help   help for delete\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"hydra-keys"},"hydra keys")," - Manage JSON Web Keys")))}l.isMDXComponent=!0},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},y=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(r),u=n,b=y["".concat(o,".").concat(u)]||y[u]||p[u]||i;return r?a.a.createElement(b,d(d({ref:t},c),{},{components:r})):a.a.createElement(b,d({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);