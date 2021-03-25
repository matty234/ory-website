(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),a=(n(0),n(568)),i={id:"csrf",title:"Common CSRF Pitfalls"},s={unversionedId:"debug/csrf",id:"version-v1.9/debug/csrf",isDocsHomePage:!1,title:"Common CSRF Pitfalls",description:"Because ORY Hydra is not just an API, but instead talks to your users' browsers",source:"@site/versioned_docs/version-v1.9/debug/csrf.mdx",slug:"/debug/csrf",permalink:"/hydra/docs/v1.9/debug/csrf",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/debug/csrf.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607427290,formattedLastUpdatedAt:"12/8/2020",sidebar:"version-v1.9/docs",previous:{title:"Common Problems",permalink:"/hydra/docs/v1.9/debug"},next:{title:"Debug Configuration",permalink:"/hydra/docs/v1.9/debug/config"}},l=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"Same-Site in Chrome",id:"same-site-in-chrome",children:[]},{value:"ORY Hydra Running Over HTTP Without dev-mode Enabled",id:"ory-hydra-running-over-http-without-dev-mode-enabled",children:[]},{value:"Mixing up <code>127.0.0.1</code> and <code>localhost</code>",id:"mixing-up-127001-and-localhost",children:[]},{value:"Reverse Proxy / Load Balancers",id:"reverse-proxy--load-balancers",children:[]},{value:"Running Flows in Separate Browsers or Browser Windows",id:"running-flows-in-separate-browsers-or-browser-windows",children:[]},{value:"Running Multiple OAuth2 Flows Simultaneously",id:"running-multiple-oauth2-flows-simultaneously",children:[]},{value:"Cookie Same-Site Mode",id:"cookie-same-site-mode",children:[]},{value:"Using AJAX to call <code>/oauth2/auth</code>",id:"using-ajax-to-call-oauth2auth",children:[]}]}],c={toc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Because ORY Hydra is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in ORY Kratos. One of\nthem is protection against CSRF:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/csrf"},"Source"))),Object(a.b)("h2",{id:"common-pitfalls"},"Common Pitfalls"),Object(a.b)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),Object(a.b)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:n(1021).default})),Object(a.b)("p",null,"as well as the network tab - look for ",Object(a.b)("inlineCode",{parentName:"p"},"Cookie")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:n(1022).default})),Object(a.b)("h3",{id:"same-site-in-chrome"},"Same-Site in Chrome"),Object(a.b)("p",null,"Google Chrome changed the behavior of ",Object(a.b)("inlineCode",{parentName:"p"},"SameSite=None")," so that it is not possible\nto use this SameSite mode without the HTTP Cookie ",Object(a.b)("inlineCode",{parentName:"p"},"secure")," flag."),Object(a.b)("p",null,"If you run a version of ORY Hydra 1.6 and below and experience this issue:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Make sure to not use the ",Object(a.b)("inlineCode",{parentName:"li"},"--dangerous-force-http")," flag"),Object(a.b)("li",{parentName:"ul"},"Set configuration value ",Object(a.b)("inlineCode",{parentName:"li"},"serve.cookies.same_site_mode")," or environment variable\n",Object(a.b)("inlineCode",{parentName:"li"},"SERVE_COOKIES_SAME_SITE_MODE")," to ",Object(a.b)("inlineCode",{parentName:"li"},"Lax")," - this happens automatically for ORY\nHydra v1.7.0 when running in HTTP mode.")),Object(a.b)("p",null,"Chrome rejects cookies without the ",Object(a.b)("inlineCode",{parentName:"p"},"secure")," flag if a cookie with the same name\nfor the same scope (domain, path) is set that has the ",Object(a.b)("inlineCode",{parentName:"p"},"secure")," flag. ORY Hydra\n1.7.0+ uses different names for cookies with and without ",Object(a.b)("inlineCode",{parentName:"p"},"secure")," flag. For\nversions prior to that, you need to delete the cookies for the domain in order\nto get them working again."),Object(a.b)("h3",{id:"ory-hydra-running-over-http-without-dev-mode-enabled"},"ORY Hydra Running Over HTTP Without dev-mode Enabled"),Object(a.b)("p",null,"You are running ORY Hydra via HTTP but are missing the ",Object(a.b)("inlineCode",{parentName:"p"},"--dangerous-force-http"),"\nCLI flag:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ hydra serve all -c path/to/config.yml --dangerous-force-http\n")),Object(a.b)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up ",Object(a.b)("inlineCode",{parentName:"h3"},"127.0.0.1")," and ",Object(a.b)("inlineCode",{parentName:"h3"},"localhost")),Object(a.b)("p",null,"Use either ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1")," (and in general IPs) or ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," (and in general\nhostnames) consistently throughout your flow because cookies from an IP are not\navailable to the hostname and vice-versa."),Object(a.b)("h3",{id:"reverse-proxy--load-balancers"},"Reverse Proxy / Load Balancers"),Object(a.b)("p",null,"You are running ORY Hydra behind a Reverse Proxy (e.g. Load Balancer) that\nstrips the Cookie header. If the reverse proxy supports path rewrites that might\nalso cause issues!"),Object(a.b)("h3",{id:"running-flows-in-separate-browsers-or-browser-windows"},"Running Flows in Separate Browsers or Browser Windows"),Object(a.b)("p",null,'You are running the OAuth2 flow in separate browsers, or in a browser with\nincognito mode. The Brave browser is also known for notoriously discarding\ncookies when used in "No-Tracking" mode.'),Object(a.b)("h3",{id:"running-multiple-oauth2-flows-simultaneously"},"Running Multiple OAuth2 Flows Simultaneously"),Object(a.b)("p",null,"You are trying to do two OAuth2 flows at the same time in the same Browser."),Object(a.b)("h3",{id:"cookie-same-site-mode"},"Cookie Same-Site Mode"),Object(a.b)("p",null,"You have changed the Cookie SameSite behavior. If this is the default value (you\ndid not change it), this should not be an issue."),Object(a.b)("h3",{id:"using-ajax-to-call-oauth2auth"},"Using AJAX to call ",Object(a.b)("inlineCode",{parentName:"h3"},"/oauth2/auth")),Object(a.b)("p",null,"You ",Object(a.b)("strong",{parentName:"p"},"cannot")," call ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth")," using an AJAX request. It is not allowed and\nnot possible with OAuth2. This endpoint can only be accessed using a normal\nbrowser request by clicking a link or redirecting the end-user's browser to that\nendpoint."))}u.isMDXComponent=!0},1021:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/csrf_app_tab-9180730beabe0cc7e1d797b9ecd9dce9.png"},1022:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/csrf_network_tab-329cafc8522509cc9d2b3e104f63fd24.png"},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);