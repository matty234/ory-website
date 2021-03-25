(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{510:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return h}));var a=t(3),o=t(8),i=(t(0),t(568)),r=t(569),s=(t(575),t(572)),c=t(573),l={id:"login",title:"Implementing the Login Endpoint",sidebar_label:"Login Endpoint"},d={unversionedId:"guides/login",id:"version-v1.8/guides/login",isDocsHomePage:!1,title:"Implementing the Login Endpoint",description:"Please read the Login Flow Documentation first!",source:"@site/versioned_docs/version-v1.8/guides/login.mdx",slug:"/guides/login",permalink:"/hydra/docs/v1.8/guides/login",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/login.mdx",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",sidebar_label:"Login Endpoint",sidebar:"version-v1.8/docs",previous:{title:"Limitations",permalink:"/hydra/docs/v1.8/limitations"},next:{title:"Implementing the Consent Endpoint & UI",permalink:"/hydra/docs/v1.8/guides/consent"}},u=[{value:"Implementing the Login HTML Form",id:"implementing-the-login-html-form",children:[]},{value:"Accepting the Login Request",id:"accepting-the-login-request",children:[]},{value:"Rejecting the Login Request",id:"rejecting-the-login-request",children:[]}],m={toc:u};function h(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Please read the ",Object(i.b)("a",{parentName:"p",href:"../concepts/login"},"Login Flow Documentation")," first!"))),Object(i.b)("p",null,"In this document, you will learn how to implement the Login Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),Object(i.b)("h2",{id:"implementing-the-login-html-form"},"Implementing the Login HTML Form"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The Login HTML Form cannot be a Single Page App (Client-side browser\napplication) or a Mobile App! It has to be a server-side application with access\nto ORY Hydra's Admin Endpoint!"))),Object(i.b)(s.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(r.a)("/img/docs/login-endpoint.png")})),Object(i.b)(c.a,{value:"node",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Check out our\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation")," of\nthis endpoint!"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="routes/login.ts"',title:'"routes/login.ts"'},"// This example uses ExpressJS\nimport express from 'express'\nimport url from 'url'\nimport csrf from 'csurf'\nimport { AdminApi } from '@oryd/hydra-client'\n\nconst hydraAdmin = new AdminApi(process.env.HYDRA_ADMIN_URL)\n\n// Sets up csrf protection. Always do this when handling HTML forms!\nconst csrfProtection = csrf({ cookie: true })\nconst router = express.Router()\n\nrouter.get('/login', csrfProtection, (req, res, next) => {\n  // Parses the URL query\n  const query = url.parse(req.url, true).query\n\n  // The challenge is used to fetch information about the login request from ORY Hydra.\n  const challenge = String(query.login_challenge)\n\n  hydraAdmin.getLoginRequest(challenge).then(({ body }) => {\n    // If hydra was already able to authenticate the user, skip will be true and we do not need to re-authenticate\n    // the user.\n    if (body.skip) {\n      // You can apply logic here, for example update the number of times the user logged in.\n      // ...\n\n      // Now it's time to grant the login request. You could also deny the request if something went terribly wrong\n      // (e.g. your arch-enemy logging in...)\n      return hydraAdmin\n        .acceptLoginRequest(challenge, {\n          // All we need to do is to confirm that we indeed want to log in the user.\n          subject: String(body.subject)\n        })\n        .then(({ body }) => {\n          // All we need to do now is to redirect the user back to hydra!\n          res.redirect(String(body.redirectTo))\n        })\n    }\n\n    // If authentication can't be skipped we MUST show the login UI.\n    res.render('login', {\n      csrfToken: req.csrfToken(),\n      challenge: challenge\n    })\n  })\n})\n"))),Object(i.b)(c.a,{value:"html",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<form action="/login" method="POST">\n  <input type="hidden" name="_csrf" value="{{ csrfToken }}" />\n  <input type="hidden" name="challenge" value="{{ challenge }}" />\n  <input type="email" id="email" name="email" placeholder="email@foobar.com" />\n  <input type="password" id="password" name="password" />\n\n  <input type="checkbox" id="remember" name="remember" value="1" />\n  <label for="remember">Remember me</label>\n\n  <input type="submit" id="accept" name="submit" value="Log in" />\n</form>\n')))),Object(i.b)("h2",{id:"accepting-the-login-request"},"Accepting the Login Request"),Object(i.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"node",mdxType:"TabItem"},Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Check out our\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"reference implementation")," of\nthis endpoint!"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="routes/login.ts"',title:'"routes/login.ts"'},"// This is the endpoint the user ends up at once she/he inserts their password and username and hits \"Log in\".\nrouter.post('/login', csrfProtection, (req, res, next) => {\n  // The challenge is now a hidden input field, so let's take it from the request body instead\n  const challenge = req.body.challenge\n\n  // Let's check if the user provided valid credentials. Of course, you'd use a database or some third-party service\n  // for this! Alternatively, you can also use ORY Kratos:\n  //\n  //      https://www.ory.sh/kratos\n  if (!(req.body.email === 'foo@bar.com' && req.body.password === 'foobar')) {\n    // Looks like the user provided invalid credentials, let's show the ui again...\n\n    res.render('login', {\n      csrfToken: req.csrfToken(),\n      challenge: challenge,\n      error: 'The username / password combination is not correct'\n    })\n    return\n  }\n\n  // Seems like the user authenticated! Let's tell hydra...\n  hydraAdmin\n    .acceptLoginRequest(challenge, {\n      // Subject is an alias for user ID. A subject can be a random string, a UUID, an email address, ....\n      subject: 'foo@bar.com',\n\n      // This tells hydra to remember the browser and automatically authenticate the user in future requests. This will\n      // set the \"skip\" parameter in the other route to true on subsequent requests!\n      remember: Boolean(req.body.remember),\n\n      // When the session expires, in seconds. Set this to 0 so it will never expire.\n      rememberFor: 3600\n\n      // Sets which \"level\" (e.g. 2-factor authentication) of authentication the user has. The value is really arbitrary\n      // and optional. In the context of OpenID Connect, a value of 0 indicates the lowest authorization level.\n      // acr: '0',\n    })\n    .then(({ body }) => {\n      // All we need to do now is to redirect the user back to hydra!\n      res.redirect(String(body.redirectTo))\n    })\n    // This will handle any error that happens when making HTTP calls to hydra\n    .catch(next)\n})\n")))),Object(i.b)("h2",{id:"rejecting-the-login-request"},"Rejecting the Login Request"),Object(i.b)(s.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"node",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"// You can deny the login request at any point - for example if the system is currently undergoing maintenance\n// or the user has been banned, is not allowed to use OAuth2 flows, and so on:\nhydraAdmin\n  .rejectLoginRequest(challenge, {\n    error: 'user_banned',\n    errorDescription: 'You are not allowed to log in!'\n  })\n  .then(({ body }) => {\n    // All we need to do now is to redirect the browser back to hydra!\n    res.redirect(String(body.redirectTo))\n  })\n")))))}h.isMDXComponent=!0},569:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return r}));var a=t(16),o=t(570);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,s=void 0!==r&&r,c=i.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(s)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+d:d}(i,t,e,n)}}}function r(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},570:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}))},575:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(580),r=t.n(i),s=t(55),c=t.n(s),l=t(579),d=t.n(l);r.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});n.a=function(e){var n,t=e.chart,i=Object(a.useState)(!1),s=i[0],l=i[1],u=Object(a.useState)(void 0),m=u[0],h=u[1],p=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],b=function(){return l(!s)};return Object(a.useEffect)((function(){r.a.render(p,t,(function(e){h(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:b,className:d()(c.a.graph,c.a.pointer),dangerouslySetInnerHTML:{__html:m}}),o.a.createElement("div",{onClick:b,className:d()(c.a.overlay,c.a.pointer,c.a.graph,(n={},n[c.a.visible]=s,n))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(c.a.backdrop,c.a.graph),dangerouslySetInnerHTML:{__html:m}})))}},582:function(e,n,t){var a={"./locale":574,"./locale.js":574};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=582}}]);