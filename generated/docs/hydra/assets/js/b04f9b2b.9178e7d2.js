(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{402:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var o=t(3),r=t(8),i=(t(0),t(568)),a={id:"oauth2-token-introspection",title:"OAuth 2.0 Token Introspection"},c={unversionedId:"guides/oauth2-token-introspection",id:"version-v1.10/guides/oauth2-token-introspection",isDocsHomePage:!1,title:"OAuth 2.0 Token Introspection",description:"The Token Introspection extension defines a mechanism for resource servers to",source:"@site/versioned_docs/version-v1.10/guides/oauth2-token-introspection.mdx",slug:"/guides/oauth2-token-introspection",permalink:"/hydra/docs/guides/oauth2-token-introspection",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/oauth2-token-introspection.mdx",version:"v1.10",sidebar:"version-v1.10/docs",previous:{title:"Configuring Expiration",permalink:"/hydra/docs/guides/token-expiration"},next:{title:"Mobile & Browser (Single-Page-App) with OAuth2",permalink:"/hydra/docs/guides/oauth2-public-spa-mobile"}},s=[{value:"Examples",id:"examples",children:[{value:"NodeJS",id:"nodejs",children:[]}]}],p={toc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Token Introspection extension defines a mechanism for resource servers to\nobtain information about access tokens. With this spec, resource servers can\ncheck the validity of access tokens, and find out other information such as\nwhich user and which scopes are associated with the token."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Token Introspection is meant for first-party / internal use only. The endpoint\nshould not be exposed publicly."))),Object(i.b)("p",null,"You can find more details on this endpoint in the\n",Object(i.b)("a",{parentName:"p",href:"https://www.ory.sh/hydra/docs/reference/api"},"ORY Hydra API Docs"),". You can also\nuse the CLI command ",Object(i.b)("inlineCode",{parentName:"p"},"hydra token introspect <token>"),"."),Object(i.b)("p",null,"Another helpful resource is\n",Object(i.b)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"},"Token Introspection Endpoint"),"."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"nodejs"},"NodeJS"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"const token = 'the access token'\nconst body = qs.stringify({ token })\n\nfetch('http://ory-hydra/oauth2/introspect', {\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      'Content-Length': body.length\n    },\n    method: 'POST', body\n}).then(body => {\n    if (!body.active) {\n        // Token is not active/valid\n    }\n\n    // token is active\n})\n")),Object(i.b)("h4",{id:"curl"},"CURL"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ curl -X POST \\\n    -d 'token=<the-token>' \\\n    http://localhost:4445/oauth2/introspect\n")))}d.isMDXComponent=!0},568:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=o,h=u["".concat(a,".").concat(b)]||u[b]||l[b]||i;return t?r.a.createElement(h,c(c({ref:n},p),{},{components:t})):r.a.createElement(h,c({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);