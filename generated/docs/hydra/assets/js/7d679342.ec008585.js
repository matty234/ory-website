(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),o=(n(0),n(571)),a=(n(572),{id:"debug",title:"Common Problems",sidebar_label:"Common Problem Solutions"}),l={unversionedId:"debug",id:"version-v1.6/debug",isDocsHomePage:!1,title:"Common Problems",description:"Spec-compliant OAuth 2.0 and OpenID Connect is hard. Let's take a look how to",source:"@site/versioned_docs/version-v1.6/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/hydra/docs/v1.6/debug",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/debug.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,formattedLastUpdatedAt:"7/20/2020",sidebar_label:"Common Problem Solutions",frontMatter:{id:"debug",title:"Common Problems",sidebar_label:"Common Problem Solutions"},sidebar:"version-v1.6/docs",previous:{title:"REST API",permalink:"/hydra/docs/v1.6/reference/api"},next:{title:"Common CSRF Pitfalls",permalink:"/hydra/docs/v1.6/debug/csrf"}},c=[{value:"First Aid",id:"first-aid",children:[]},{value:"OpenID Connect ID Token missing",id:"openid-connect-id-token-missing",children:[]},{value:"OAuth 2.0 Refresh Token is missing",id:"oauth-20-refresh-token-is-missing",children:[]},{value:"OAuth 2.0 Authorize Code Flow fails",id:"oauth-20-authorize-code-flow-fails",children:[{value:"Wrong or misconfigured OAuth 2.0 Client",id:"wrong-or-misconfigured-oauth-20-client",children:[]},{value:"Redirect URL is not whitelisted",id:"redirect-url-is-not-whitelisted",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Spec-compliant OAuth 2.0 and OpenID Connect is hard. Let's take a look how to\nresolve certain issues."),Object(o.b)("h2",{id:"first-aid"},"First Aid"),Object(o.b)("p",null,"There are three things you can do to quickly debug any issue:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Check the logs. ORY Hydra has extensive logging and you will find the issue\nmost likely in the logs. Here is an example log line for a client that\nrequested a redirect URL that did not match the whitelisted redirect URLS:\n",Object(o.b)("inlineCode",{parentName:"li"},'time="2018-08-07T16:01:16Z" level=error msg="An error occurred" description="The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed" error=invalid_request hint="The \\"redirect_uri\\" parameter does not match any of the OAuth 2.0 Client\'s pre-registered redirect urls."')),Object(o.b)("li",{parentName:"ol"},"Check the URL because of two reasons:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"ORY Hydra sends ",Object(o.b)("inlineCode",{parentName:"li"},"error_hint"),", ",Object(o.b)("inlineCode",{parentName:"li"},"error"),", ",Object(o.b)("inlineCode",{parentName:"li"},"error_description"),", ",Object(o.b)("inlineCode",{parentName:"li"},"error_debug"),"\nin the URL. You will find the cause of the error most likely in there."),Object(o.b)("li",{parentName:"ol"},"You are maybe in the wrong URL. Make sure the host and port and path is\ncorrect. This happens often, especially when you're just starting out and\nexperimenting"))),Object(o.b)("li",{parentName:"ol"},"Set environment variable ",Object(o.b)("inlineCode",{parentName:"li"},"OAUTH2_EXPOSE_INTERNAL_ERRORS=true"),". Do not do this\nin production, it is possible, though unlikely, that important data leaks\nwith this. If set to true, ORY Hydra will set the ",Object(o.b)("inlineCode",{parentName:"li"},"error_debug")," query\nparameter if debug information is available."),Object(o.b)("li",{parentName:"ol"},"If you're just starting out and experimenting your docker set up does not\nwork at all:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Stop all containers"),Object(o.b)("li",{parentName:"ol"},"Remove them (unless you have something important running)"),Object(o.b)("li",{parentName:"ol"},"Retry. ",Object(o.b)("strong",{parentName:"li"},"This can help a lot if you are new to this!"))))),Object(o.b)("h2",{id:"openid-connect-id-token-missing"},"OpenID Connect ID Token missing"),Object(o.b)("p",null,"If you expect an OAuth 2.0 ID Token but are not receiving one, this can have\nmultiple reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You are using the ",Object(o.b)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return an ID\ntoken."),Object(o.b)("li",{parentName:"ol"},"You forgot to request the ",Object(o.b)("inlineCode",{parentName:"li"},"openid")," scope when calling\n",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code")," (Authorize Code Flow - correct would be\n",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=code&scope=openid"),") or the ",Object(o.b)("inlineCode",{parentName:"li"},"id_token")," response\ntype when calling ",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token")," (Implicit/Hybrid flow -\ncorrect would be ",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth?response_type=token+id_token&scope=openid")," or\nany other combination such as ",Object(o.b)("inlineCode",{parentName:"li"},"response_type=id_token"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"response_type=token+code+id_token"),")."),Object(o.b)("li",{parentName:"ol"},"You consent app did not send ",Object(o.b)("inlineCode",{parentName:"li"},'granted_scope: ["openid"]')," or when accepting\nthe consent request."),Object(o.b)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",Object(o.b)("inlineCode",{parentName:"li"},"openid"),".")),Object(o.b)("h2",{id:"oauth-20-refresh-token-is-missing"},"OAuth 2.0 Refresh Token is missing"),Object(o.b)("p",null,"If you expect an OAuth 2.0 Refresh Token but are not receiving one, this can\nhave multiple reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You are using an implicit or hybrid flow. These flows never return a refresh\ntoken!"),Object(o.b)("li",{parentName:"ol"},"You are using the ",Object(o.b)("inlineCode",{parentName:"li"},"client_credentials")," grant which can not return a refresh\ntoken."),Object(o.b)("li",{parentName:"ol"},"You forgot to request the ",Object(o.b)("inlineCode",{parentName:"li"},"offline")," or ",Object(o.b)("inlineCode",{parentName:"li"},"offline_access")," scope when calling\n",Object(o.b)("inlineCode",{parentName:"li"},"/oauth2/auth"),"."),Object(o.b)("li",{parentName:"ol"},"You consent app did not send ",Object(o.b)("inlineCode",{parentName:"li"},'granted_scope: ["offline"]')," or\n",Object(o.b)("inlineCode",{parentName:"li"},'granted_scope: ["offline_access"]')," when accepting the consent request."),Object(o.b)("li",{parentName:"ol"},"The OAuth 2.0 Client making the request is not allowed to request the scope\n",Object(o.b)("inlineCode",{parentName:"li"},"openid"),".")),Object(o.b)("h2",{id:"oauth-20-authorize-code-flow-fails"},"OAuth 2.0 Authorize Code Flow fails"),Object(o.b)("p",null,"The most likely cause is misconfiguration, summarized in the next sections."),Object(o.b)("h3",{id:"wrong-or-misconfigured-oauth-20-client"},"Wrong or misconfigured OAuth 2.0 Client"),Object(o.b)("p",null,"You are using the wrong OAuth 2.0 Client or the OAuth 2.0 Client has a broken\nconfiguration. To check that you're using the right client, run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"hydra clients get --endpoint http://ory-hydra <the-client-id>\n")),Object(o.b)("p",null,"The result shows you the whole client (excluding its secret). Check that the\nvalues are correct. Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n        "client_id": "my-client",\n        "grant_types": [\n                "authorization_code"\n        ],\n        "jwks": {},\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        "response_types": [\n                "code"\n        ],\n        "scope": "openid offline",\n        "subject_type": "pairwise",\n        "token_endpoint_auth_method": "client_secret_basic",\n        "userinfo_signed_response_alg": "none"\n}\n')),Object(o.b)("h3",{id:"redirect-url-is-not-whitelisted"},"Redirect URL is not whitelisted"),Object(o.b)("p",null,"A likely cause of your request failing is that you are using the wrong redirect\nURL. Assuming your OAuth 2.0 URL looks like\n",Object(o.b)("inlineCode",{parentName:"p"},"http://ory-hydra/oauth2/auth?client_id=my-client&...&redirect_uri=http://my-url/callback")),Object(o.b)("p",null,"The redirect URL ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," must be whitelisted in your client\nconfiguration. The URLs must match ",Object(o.b)("strong",{parentName:"p"},"exactly"),". URL ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback?foo=bar")," are different URLs!"),Object(o.b)("p",null,"To see the whitelisted redirect_uris, check the client:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'hydra clients get --endpoint http://ory-hydra <the-client-id>\n\n{\n        // ...\n        "redirect_uris": [\n                "http://127.0.0.1:5556/callback"\n        ],\n        // ...\n}\n')),Object(o.b)("p",null,"Here you see that ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-url/callback")," is not in the list, which is why the\nrequest fails."))}u.isMDXComponent=!0},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,h=d["".concat(a,".").concat(p)]||d[p]||b[p]||o;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},572:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(16),i=n(573);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},573:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);