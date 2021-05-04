(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{237:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(8),o=(r(0),r(571)),a={id:"hydra-clients-import",title:"hydra clients import",description:"hydra clients import Imports cryptographic keys of any format to the JSON Web Key Store"},s={unversionedId:"cli/hydra-clients-import",id:"version-v1.10/cli/hydra-clients-import",isDocsHomePage:!1,title:"hydra clients import",description:"hydra clients import Imports cryptographic keys of any format to the JSON Web Key Store",source:"@site/versioned_docs/version-v1.10/cli/hydra-clients-import.md",sourceDirName:"cli",slug:"/cli/hydra-clients-import",permalink:"/hydra/docs/cli/hydra-clients-import",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-clients-import.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-clients-import",title:"hydra clients import",description:"hydra clients import Imports cryptographic keys of any format to the JSON Web Key Store"},sidebar:"version-v1.10/docs",previous:{title:"hydra clients get",permalink:"/hydra/docs/cli/hydra-clients-get"},next:{title:"hydra clients import",permalink:"/hydra/docs/cli/hydra-clients-import"}},c=[{value:"hydra clients import",id:"hydra-clients-import",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hydra-clients-import"},"hydra clients import"),Object(o.b)("p",null,"Imports cryptographic keys of any format to the JSON Web Key Store"),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"This command allows you to import cryptographic keys to the JSON Web Key Store."),Object(o.b)("p",null,"Currently supported formats are raw JSON Web Keys or PEM/DER encoded data. If\nthe JSON Web Key Set exists already, the imported keys will be added to that\nset. Otherwise, a new set will be created."),Object(o.b)("p",null,"Please be aware that importing a private key does not automatically import its\npublic key as well."),Object(o.b)("p",null,"Examples: hydra keys import my-set ./path/to/jwk.json ./path/to/jwk-2.json hydra\nkeys import my-set ./path/to/rsa.key ./path/to/rsa.pub"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hydra clients import &lt;set&gt; &lt;file-1&gt; [&lt;file-2&gt; [&lt;file-3 [&lt;...&gt;]]] [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -h, --help         help for import\n      --use string   Sets the &#34;use&#34; value of the JSON Web Key if not &#34;use&#34; value was defined by the key itself (default &#34;sig&#34;)\n")),Object(o.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"hydra-clients"},"hydra clients")," - Manage OAuth 2.0 Clients")))}p.isMDXComponent=!0},571:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(a,".").concat(m)]||d[m]||y[m]||o;return r?i.a.createElement(u,s(s({ref:t},l),{},{components:r})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);