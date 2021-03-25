(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1035:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oauth2-flow-91331ef8391a97bddbc8154e6a1aa1fa.gif"},291:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(568)),c=n(599),i={id:"5min-tutorial",title:"5 Minute Tutorial"},s={unversionedId:"5min-tutorial",id:"version-v1.10/5min-tutorial",isDocsHomePage:!1,title:"5 Minute Tutorial",description:"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL",source:"@site/versioned_docs/version-v1.10/5min-tutorial.mdx",slug:"/5min-tutorial",permalink:"/hydra/docs/5min-tutorial",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/5min-tutorial.mdx",version:"v1.10",sidebar:"version-v1.10/docs",previous:{title:"ORY Hydra",permalink:"/hydra/docs/"},next:{title:"Installation",permalink:"/hydra/docs/install"}},l=[{value:"Quickstart Configuration",id:"quickstart-configuration",children:[]}],p={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL\ninstance and an exemplary User Login & Consent App based on Docker Compose. You\nneed to have the latest ",Object(o.b)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," and\n",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/compose"},"Docker Compose")," version installed."),Object(o.b)("p",null,Object(o.b)("img",{alt:"OAuth2 Flow with Open Source OAuth2 Server ORY Hydra",src:n(1035).default})),Object(o.b)("p",{align:"center"},Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tlO9p2E501A",frameborder:"0",allowfullscreen:!0})),Object(o.b)("p",null,"We will use the Docker Compose configuration in the ORY Hydra code base. Getting\nthe Hydra source code is easy:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"if you have Go 1.15+ installed: ",Object(o.b)("inlineCode",{parentName:"li"},"go get -d github.com/ory/hydra")),Object(o.b)("li",{parentName:"ul"},"if you have Git installed: ",Object(o.b)("inlineCode",{parentName:"li"},"git clone https://github.com/ory/hydra.git")),Object(o.b)("li",{parentName:"ul"},"otherwise: download the\n",Object(o.b)("a",{parentName:"li",href:"https://github.com/ory-am/hydra/archive/master.zip"},"Hydra source code"),". and\nextract it somewhere")),Object(o.b)("p",null,"Change into the directory with the Hydra source code and run the following\ncommand to start the needed containers:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    up --build\n\nStarting hydra_postgresd_1\nStarting hydra_hydra_1\n[...]\n")),Object(o.b)("p",null,"If you prefer to use MySQL as the database backend, run this command instead:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-mysql.yml \\\n    up --build\n")),Object(o.b)("p",null,"This command makes Docker Compose start up a database server and a basic base\nORY Hydra server that uses this database. If you need more details on this,\nplease examine the ",Object(o.b)("inlineCode",{parentName:"p"},"scripts/5-min-tutorial.sh")," and ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose*.yml")," files."),Object(o.b)("p",null,"You may also extend the command above to enable distributed tracing. The tracing\nUI is exposed at ",Object(o.b)("a",{parentName:"p",href:"http://127.0.0.1:16686/search"},"http://127.0.0.1:16686/search"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),Object(o.b)("p",null,"Hydra provides an endpoint for Prometheus to scrape as a target. You can run the\nfollowing command to start the needed containers, and status of Hydra is exposed\nat targets page in Prometheus\n",Object(o.b)("a",{parentName:"p",href:"http://localhost:9090/targets"},"http://localhost:9090/targets"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n  -f quickstart-prometheus.yml \\\n  up --build\n")),Object(o.b)("p",null,"Let's confirm that everything is working by creating an OAuth 2.0 Client."),Object(o.b)("p",null,"Note: The following commands run Hydra inside Docker. If you have the ORY Hydra\nCLI installed locally, you can omit\n",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml exec /hydra")," in front of each command."),Object(o.b)("p",null,"The OAuth 2.0 client uses port ",Object(o.b)("inlineCode",{parentName:"p"},"4444")," and ",Object(o.b)("inlineCode",{parentName:"p"},"4445"),". The former is ORY Hydra's\npublic endpoint, the latter its administrative endpoint. For more information\nhead over to ",Object(o.b)("a",{parentName:"p",href:"production"},"Exposing Administrative and Public API Endpoints"),"."),Object(o.b)("p",null,"Let's create the OAuth 2.0 Client:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")),Object(o.b)("p",null,"Let's perform the client credentials grant:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token client \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --client-id my-client \\\n    --client-secret secret\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n")),Object(o.b)("p",null,"Let's perform token introspection on that token. Make sure to copy the token you\njust got and not the dummy value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token introspect \\\n    --endpoint http://127.0.0.1:4445/ \\\n    UDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n\n{\n    "active": true,\n    "client_id": "my-client",\n    "exp": 1527078658,\n    "iat": 1527075058,\n    "iss": "http://127.0.0.1:4444/",\n    "sub": "my-client",\n    "token_type": "access_token"\n}\n')),Object(o.b)("p",null,"Next, we will perform the OAuth 2.0 Authorization Code Grant. For that, we must\nfirst create a client that is capable of performing that grant:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id auth-code-client \\\n    --secret secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token \\\n    --scope openid,offline \\\n    --callbacks http://127.0.0.1:5555/callback\n")),Object(o.b)("p",null,"Note that you need to add ",Object(o.b)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method none")," if your clients\nare public (such as SPA apps and native apps) because the public clients cannot\nprovide client secrets."),Object(o.b)("p",null,"The following command starts a server that serves an example web application.\nThe application will perform the OAuth 2.0 Authorization Code Flow using ORY\nHydra. The web server runs on ",Object(o.b)("a",{parentName:"p",href:"http://127.0.0.1:5555"},"http://127.0.0.1:5555"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token user \\\n    --client-id auth-code-client \\\n    --client-secret secret \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --port 5555 \\\n    --scope openid,offline\n\nSetting up home route on http://127.0.0.1:5555/\nSetting up callback listener on http://127.0.0.1:5555/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        http://127.0.0.1:5555/\n")),Object(o.b)("p",null,"Open the URL ",Object(o.b)("a",{parentName:"p",href:"http://127.0.0.1:5555"},"http://127.0.0.1:5555"),", log in, and\nauthorize the application. Next, you should see at least an access token in the\nresponse. If you granted the ",Object(o.b)("inlineCode",{parentName:"p"},"offline")," scope, you will also see a refresh token.\nIf you granted the ",Object(o.b)("inlineCode",{parentName:"p"},"openid")," scope, you will get an ID Token as well."),Object(o.b)("p",null,"Great! You installed Ory Hydra, connected the CLI, created a client and\ncompleted two authentication flows! Before you continue, clean up this set up in\norder to avoid conflicts with other tutorials from this guide:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml kill\n$ docker-compose -f quickstart.yml rm -f -v\n")),Object(o.b)("h3",{id:"quickstart-configuration"},"Quickstart Configuration"),Object(o.b)("p",null,"In this tutorial we use a simplified configuration.",Object(o.b)("br",{parentName:"p"}),"\n","You can find it in\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/contrib/quickstart/5-min/hydra.yml"},Object(o.b)("inlineCode",{parentName:"a"},"contrib/quickstart/5-min/hydra.yml")),".",Object(o.b)("br",{parentName:"p"}),"\n","The configuration gets loaded in docker-compose as specified in the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/quickstart.yml"},Object(o.b)("inlineCode",{parentName:"a"},"quickstart.yml")),"."),Object(o.b)(c.a,{src:"https://github.com/ory/hydra/blob/master/contrib/quickstart/5-min/hydra.yml",mdxType:"CodeFromRemote"}),Object(o.b)("p",null,"Have a look at the ",Object(o.b)("a",{parentName:"p",href:"/hydra/docs/reference/configuration"},"reference configuration")," for\nfurther information on all possible configuration options."))}u.isMDXComponent=!0},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},585:function(e,t,n){"use strict";var r=n(0),a=n(587);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},587:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(void 0);t.a=a},590:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},591:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(3),a=n(0),o=n.n(a),c=n(571),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(21).a,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=p({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?p({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(i))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=p({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?p({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),l(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,i=[],s=[i];c>-1;){for(;(o=r[c]++)<a[c];){var l=void 0,p=t[c],h=n[c][o];if("string"==typeof h?(p=c>0?p:["plain"],l=h):(p=m(p,h.type),h.alias&&(p=m(p,h.alias)),l=h.content),"string"==typeof l){var b=l.split(u),y=b.length;i.push({types:p,content:b[0]});for(var f=1;f<y;f++)d(i),s.push(i=[]),i.push({types:p,content:b[f]})}else c++,t.push(p),n.push(l),r.push(0),a.push(l.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return d(i),s}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var f=n(590),g=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(585),k=n(576),j=function(){var e=Object(k.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},N=n(584),w=n(57),x=n.n(w),C=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},E=/(?:title=")(.*)(?:")/;function P(e){var t=e.children,n=e.className,i=e.metastring,l=Object(k.useThemeConfig)().prism,p=Object(a.useState)(!1),u=p[0],d=p[1],m=Object(a.useState)(!1),h=m[0],b=m[1];Object(a.useEffect)((function(){b(!0)}),[]);var f=Object(a.useRef)(null),v=[],O="",w=j(),P=Array.isArray(t)?t.join(""):t;if(i&&C.test(i)){var D=i.match(C)[1];v=g()(D).filter((function(e){return e>0}))}i&&E.test(i)&&(O=i.match(E)[1]);var q=n&&n.replace(/language-/,"");!q&&l.defaultLanguage&&(q=l.defaultLanguage);var L=P.replace(/\n$/,"");if(0===v.length&&void 0!==q){for(var S,A="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(q),I=P.replace(/\n$/,"").split("\n"),Y=0;Y<I.length;){var H=Y+1,B=I[Y].match(R);if(null!==B){switch(B.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=H+",";break;case"highlight-start":S=H;break;case"highlight-end":A+=S+"-"+(H-1)+","}I.splice(Y,1)}else Y+=1}v=g()(A),L=I.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(L),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(y,Object(r.a)({},s,{key:String(h),theme:w,code:L,language:q}),(function(e){var t,n=e.className,a=e.style,i=e.tokens,s=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:x.a.codeBlockContainer},O&&o.a.createElement("div",{style:a,className:x.a.codeBlockTitle},O),o.a.createElement("div",{className:Object(c.a)(x.a.codeBlockContent,q)},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=O,t))},o.a.createElement("div",{className:x.a.codeBlockLines,style:a},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:f,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(x.a.copyButton),onClick:_},u?o.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},599:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(600),c=n.n(o),i=n(591),s=n(58),l=n.n(s),p=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n};t.a=function(e){var t=e.src,n=e.title,o=Object(r.useState)(""),s=o[0],u=o[1];Object(r.useEffect)((function(){var n,r,a;c()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,r=n.startAt,a=n.endAt,function(e){var t=e.split("\n"),n=p(r,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var o=p(a,t);return o>0&&(t=[].concat(t.slice(0,o+1),["// ..."])),t.join("\n")})).then(u).catch(console.error)}),[]);var d="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),m='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return a.a.createElement("div",{className:l.a.container},a.a.createElement(i.a,{metastring:m,className:d,children:s}))}},600:function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}}]);