(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{423:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(8),o=(t(0),t(568)),i=t(572),s=t(573),c={id:"login",title:"Implementing the Login Endpoint",sidebar_label:"Login Endpoint"},l={unversionedId:"guides/login",id:"version-v1.10/guides/login",isDocsHomePage:!1,title:"Implementing the Login Endpoint",description:"Please read the Login Flow Documentation first!",source:"@site/versioned_docs/version-v1.10/guides/login.mdx",slug:"/guides/login",permalink:"/hydra/docs/guides/login",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/login.mdx",version:"v1.10",sidebar_label:"Login Endpoint",sidebar:"version-v1.10/docs",previous:{title:"Limitations",permalink:"/hydra/docs/limitations"},next:{title:"Implementing the Consent Endpoint & UI",permalink:"/hydra/docs/guides/consent"}},d=[{value:"Implementing the Login HTML Form",id:"implementing-the-login-html-form",children:[]},{value:"Accepting the Login Request",id:"accepting-the-login-request",children:[]},{value:"Rejecting the Login Request",id:"rejecting-the-login-request",children:[]}],u={toc:d};function m(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please read the ",Object(o.b)("a",{parentName:"p",href:"../concepts/login"},"Login Flow Documentation")," first!"))),Object(o.b)("p",null,"In this document, you will learn how to implement the Login Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),Object(o.b)("h2",{id:"implementing-the-login-html-form"},"Implementing the Login HTML Form"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The Login HTML Form cannot be a Single Page App (Client-side browser\napplication) or a Mobile App! It has to be a server-side application with access\nto ORY Hydra's Admin Endpoint!"))),Object(o.b)(i.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("img",{alt:"OAuth2 Login UI Screen",src:t(679).default}))),Object(o.b)(s.a,{value:"node",mdxType:"TabItem"},Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Check out our\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation")," of\nthis endpoint!"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="routes/login.ts"',title:'"routes/login.ts"'},"// This example uses ExpressJS\nimport express from 'express'\nimport url from 'url'\nimport csrf from 'csurf'\nimport { AdminApi } from '@ory/hydra-client'\n\nconst hydraAdmin = new AdminApi(process.env.HYDRA_ADMIN_URL)\n\n// Sets up csrf protection. Always do this when handling HTML forms!\nconst csrfProtection = csrf({ cookie: true })\nconst router = express.Router()\n\nrouter.get('/login', csrfProtection, (req, res, next) => {\n  // Parses the URL query\n  const query = url.parse(req.url, true).query\n\n  // The challenge is used to fetch information about the login request from ORY Hydra.\n  const challenge = String(query.login_challenge)\n\n  hydraAdmin.getLoginRequest(challenge).then(({ body }) => {\n    // If hydra was already able to authenticate the user, skip will be true and we do not need to re-authenticate\n    // the user.\n    if (body.skip) {\n      // You can apply logic here, for example update the number of times the user logged in.\n      // ...\n\n      // Now it's time to grant the login request. You could also deny the request if something went terribly wrong\n      // (e.g. your arch-enemy logging in...)\n      return hydraAdmin\n        .acceptLoginRequest(challenge, {\n          // All we need to do is to confirm that we indeed want to log in the user.\n          subject: String(body.subject)\n        })\n        .then(({ body }) => {\n          // All we need to do now is to redirect the user back to hydra!\n          res.redirect(String(body.redirectTo))\n        })\n    }\n\n    // If authentication can't be skipped we MUST show the login UI.\n    res.render('login', {\n      csrfToken: req.csrfToken(),\n      challenge: challenge\n    })\n  })\n})\n"))),Object(o.b)(s.a,{value:"html",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<form action="/login" method="POST">\n  <input type="hidden" name="_csrf" value="{{ csrfToken }}" />\n  <input type="hidden" name="challenge" value="{{ challenge }}" />\n  <input type="email" id="email" name="email" placeholder="email@foobar.com" />\n  <input type="password" id="password" name="password" />\n\n  <input type="checkbox" id="remember" name="remember" value="1" />\n  <label for="remember">Remember me</label>\n\n  <input type="submit" id="accept" name="submit" value="Log in" />\n</form>\n')))),Object(o.b)("h2",{id:"accepting-the-login-request"},"Accepting the Login Request"),Object(o.b)(i.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"node",mdxType:"TabItem"},Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Check out our\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation")," of\nthis endpoint!"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="routes/login.ts"',title:'"routes/login.ts"'},"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/login', csrfProtection, (req, res, next) => {\n  // The challenge is now a hidden input field, so let's take it from the request body instead\n  const challenge = req.body.challenge\n\n  // Let's check if the user provided valid credentials. Of course, you'd use a database or some third-party service\n  // for this! Alternatively, you can also use ORY Kratos:\n  //\n  //      https://www.ory.sh/kratos\n  if (!(req.body.email === 'foo@bar.com' && req.body.password === 'foobar')) {\n    // Looks like the user provided invalid credentials, let's show the ui again...\n\n    res.render('login', {\n      csrfToken: req.csrfToken(),\n      challenge: challenge,\n      error: 'The username / password combination is not correct'\n    })\n    return\n  }\n\n  // Seems like the user authenticated! Let's tell hydra...\n  hydraAdmin\n    .acceptLoginRequest(challenge, {\n      // Subject is an alias for user ID. A subject can be a random string, a UUID, an email address, ....\n      subject: 'foo@bar.com',\n\n      // This tells hydra to remember the browser and automatically authenticate the user in future requests. This will\n      // set the \"skip\" parameter in the other route to true on subsequent requests!\n      remember: Boolean(req.body.remember),\n\n      // When the session expires, in seconds. Set this to 0 so it will never expire.\n      rememberFor: 3600\n\n      // Sets which \"level\" (e.g. 2-factor authentication) of authentication the user has. The value is really arbitrary\n      // and optional. In the context of OpenID Connect, a value of 0 indicates the lowest authorization level.\n      // acr: '0',\n    })\n    .then(({ body }) => {\n      // All we need to do now is to redirect the user back to hydra!\n      res.redirect(String(body.redirectTo))\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n")))),Object(o.b)("h2",{id:"rejecting-the-login-request"},"Rejecting the Login Request"),Object(o.b)(i.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"node",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"// You can deny the login request at any point - for example if the system is currently undergoing maintenance\n// or the user has been banned, is not allowed to use OAuth2 flows, and so on:\nhydraAdmin\n  .rejectLoginRequest(challenge, {\n    error: 'user_banned',\n    errorDescription: 'You are not allowed to log in!'\n  })\n  .then(({ body }) => {\n    // All we need to do now is to redirect the browser back to hydra!\n    res.redirect(String(body.redirectTo))\n  })\n")))))}m.isMDXComponent=!0},568:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return t?r.a.createElement(b,s(s({ref:n},l),{},{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},571:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},572:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(577),i=t(571),s=t(56),c=t.n(s);var l=37,d=39;n.a=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,u=e.values,m=e.groupId,p=e.className,b=Object(o.a)(),h=b.tabGroupChoices,g=b.setTabGroupChoices,f=Object(a.useState)(s),v=f[0],y=f[1],O=a.Children.toArray(e.children),w=[];if(null!=m){var j=h[m];null!=j&&j!==v&&u.some((function(e){return e.value===j}))&&y(j)}var N=function(e){var n=e.target,t=w.indexOf(n),a=O[t].props.value;y(a),null!=m&&(g(m,a),setTimeout((function(){var e,t,a,r,o,i,s,l;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,l=i.innerWidth,t>=0&&o<=l&&r<=s&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c.a.tabItemActive),setTimeout((function(){return n.classList.remove(c.a.tabItemActive)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case d:var a=w.indexOf(e.target)+1;t=w[a]||w[0];break;case l:var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},u.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:N,onClick:N},t)}))),n?Object(a.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},573:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},577:function(e,n,t){"use strict";var a=t(0),r=t(578);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},578:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},679:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/login-endpoint-d8b7426a7ea23b027a042b62f13fc7d8.png"}}]);