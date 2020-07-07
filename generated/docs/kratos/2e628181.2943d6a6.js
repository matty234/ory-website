(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(332)),o=n(346),s={id:"user-login-user-registration",title:"User Login And Registration",sidebar_label:"Overview"},l={id:"self-service/flows/user-login-user-registration",isDocsHomePage:!1,title:"User Login And Registration",description:"ORY Kratos supports two type of login and registration flows:",source:"@site/docs/self-service/flows/user-login-user-registration.mdx",permalink:"/kratos/docs/next/self-service/flows/user-login-user-registration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/self-service/flows/user-login-user-registration.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1593791072,sidebar_label:"Overview",sidebar:"docs",previous:{title:"Self-Service Flows",permalink:"/kratos/docs/next/self-service"},next:{title:"Username or Email and Password",permalink:"/kratos/docs/next/self-service/flows/user-login-user-registration/username-email-password"},latestVersionMainDocPermalink:"/kratos/docs"},c=[{value:"Self-Service User Login and User Registration for Browser Applications",id:"self-service-user-login-and-user-registration-for-browser-applications",children:[{value:"The Login and Registration User Interface",id:"the-login-and-registration-user-interface",children:[]},{value:"Code",id:"code",children:[]},{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Self-Service User Login and User Registration for API Clients",id:"self-service-user-login-and-user-registration-for-api-clients",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"Refreshing a Session",id:"refreshing-a-session",children:[]}],d={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ORY Kratos supports two type of login and registration flows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),Object(r.b)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),Object(r.b)("p",null,"The login and registration flows documented here are the foundation for the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration/username-email-password"}),"password")," and\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"social"),"\nsign in and sign up strategies."),Object(r.b)("h2",{id:"self-service-user-login-and-user-registration-for-browser-applications"},"Self-Service User Login and User Registration for Browser Applications"),Object(r.b)("p",null,"ORY Kratos supports browser applications that run on server-side (e.g. Java,\nNodeJS, PHP) as well as client-side (e.g. JQuery, ReactJS, AngularJS, ...)."),Object(r.b)("p",null,"Browser-based login and registration makes use of three core HTTP technologies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"HTTP Redirects"),Object(r.b)("li",{parentName:"ul"},"HTTP POST (",Object(r.b)("inlineCode",{parentName:"li"},"application/json"),", ",Object(r.b)("inlineCode",{parentName:"li"},"application/x-www-urlencoded"),") and RESTful GET\nrequests."),Object(r.b)("li",{parentName:"ul"},"HTTP Cookies to prevent CSRF and Session Hijaking attack vectors.")),Object(r.b)("p",null,"The browser flow is the easiest and most secure to set up and integrated with.\nORY Kratos takes care of all required session and CSRF cookies and ensures that\nall security requirements are fulfilled."),Object(r.b)("p",null,"Future versions of ORY Kratos will be able to deal with multi-domain\nenvironments that require SSO. For example, one account would be used to sign\ninto both ",Object(r.b)("inlineCode",{parentName:"p"},"mydomain.com")," and ",Object(r.b)("inlineCode",{parentName:"p"},"anotherdomain.org"),". A common real-world example is\nusing your Google account to seamlessly be signed into YouTube and Google at the\nsame time."),Object(r.b)("p",null,"This flow is not suitable for scenarios where you use purely programmatic\nclients that do not work well with HTTP Cookies and HTTP Redirects."),Object(r.b)("h3",{id:"the-login-and-registration-user-interface"},"The Login and Registration User Interface"),Object(r.b)("p",null,"The Login and Registration User Interface is a route (page / site) in your\napplication that should render a sign in and registration form:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Login --\x3e\n<form action="..." method="POST">\n  <input type="text" name="identifier" placeholder="Enter your username" />\n  <input type="password" name="password" placeholder="Enter your password" />\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="submit" />\n</form>\n\n\x3c!-- Registration --\x3e\n<form action="..." method="POST">\n  <input type="email" name="email" placeholder="Enter your E-Mail Address" />\n  <input type="password" name="password" placeholder="Enter your password" />\n  <input\n    type="first_name"\n    name="password"\n    placeholder="Enter your First Name"\n  />\n  <input type="last_name" name="password" placeholder="Enter your Last Name" />\n  <input type="hidden" name="csrf_token" value="cdef..." />\n  <input type="submit" />\n</form>\n')),Object(r.b)("p",null,"Once implemented (using e.g. our\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"reference implementation"),")\nyou reference these routes in your ORY Kratos config file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'}),"urls:\n  login_ui: https://.../login\n  registration_ui: https://.../registration\n")),Object(r.b)("p",null,'Depending on the type of login flows you want to support, you may a also add a\n"Sign up/in with GitHub" flow:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Login and Registration --\x3e\n<form action="..." method="POST">\n  <input type="hidden" name="csrf_token" value="cdef..." />\n\n  \x3c!-- Basically <a href="https://github.com/login/oauth/authorize?...">Sign up/in with GitHub</a> --\x3e\n  <input type="submit" name="provider" value="GitHub" />\n</form>\n')),Object(r.b)("p",null,"In stark contrast to other Identity Systems, ORY Kratos does not render this\nHTML. Instead, you need to implement the HTML code in your application (e.g.\nNodeJS + ExpressJS, Java, PHP, ReactJS, ...), which gives you extreme\nflexibility and customizability in your user interface flows and designs."),Object(r.b)("p",null,"Each Login and Registration Strategy (e.g.\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration/username-email-password"}),"Username and Password"),",\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"Social Sign In"),",\nPasswordless, ...) works a bit different but they all boil down to the same\nabstract sequence:"),Object(r.b)(o.a,{chart:"\nsequenceDiagram\n  participant B as Browser\n  participant K as ORY Kratos\n  participant A as Your Application\n  B->>K: Initiate Login\n  K->>B: Redirects to your Application's /login endpoint\n  B->>A: Calls /login\n  A--\x3e>K: Fetches data to render forms etc\n  B--\x3e>A: Fills out forms, clicks e.g. \"Submit Login\"\n  B->>K: POSTs data to\n  K--\x3e>K: Processes Login Info\n  alt Login data valid\n    K--\x3e>B: Sets session cookie\n    K->>B: Redirects to e.g. Dashboard\n  else Login data invalid\n    K--\x3e>B: Redirects to your Applicaiton's /login endpoint\n    B->>A: Calls /login\n    A--\x3e>K: Fetches data to render form fields and errors\n    B--\x3e>A: Fills out forms again, corrects errors\n    B->>K: POSTs data again - and so on...\n  end\n",mdxType:"Mermaid"}),Object(r.b)("p",null,"The exact data being fetched and the step ",Object(r.b)("em",{parentName:"p"},'"Processes Login / Registration\nInfo"')," depend, of course, on the actual Strategy being used. But it is important\nto understand that ",Object(r.b)("strong",{parentName:"p"},'"Your Application"'),' is responsible for rendering the\nactual Login and Registration HTML Forms. You can of course implement one app\nfor rendering all the Login, Registration, ... screens, and another app (think\n"Service Oriented Architecture", "Micro-Services" or "Service Mesh") is\nresponsible for rendering your Dashboards, Management Screens, and so on.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'It is RECOMMENDED to put all applications (or "services"), including ORY Kratos,\nbehind a common API Gateway or Reverse Proxy. This greatly reduces the amount of\nwork you have to do to get all the Cookies working properly. We RECOMMEND using\n',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/ory/oathkeeper"}),"ORY Oathkeeper")," for this as it integrates\nbest with the ORY Ecosystem and because all of our examples use ORY Oathkeeper.\nYou MAY of course use any other reverse proxy (Envoy, AWS API Gateway,\nAmbassador, Nginx, Kong, ...), but we do not have examples or guides for those\nat this time."))),Object(r.b)("h3",{id:"code"},"Code"),Object(r.b)("p",null,"Because Login and Registration are so similar, we can use one common piece of\ncode to cover both. A functioning example of the code and approach used here can\nbe found on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"github.com/ory/kratos-selfservice-ui-node"),"."),Object(r.b)("p",null,"The code example used here is universal and does not use an SDK because we want\nyou to understand the fundamentals of how this flow works."),Object(r.b)("h4",{id:"server-side-route"},"Server-side route"),Object(r.b)("p",null,"While this example assumes a Server-Side Application, a Client-Side (e.g.\nReactJS) Application would work the same, but use ORY Kratos' Public API\ninstead."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Uses the ORY Kratos NodeJS SDK - for more SDKs check:\n//\n//  https://www.ory.sh/kratos/docs/sdk/index\nconst { AdminApi } = require('@oryd/kratos-client')\n\n// The browser config key is used to redirect the user. It reflects where ORY Kratos' Public API\n// is accessible from. Here, we're assuming traffic going to `http://example.org/.ory/kratos/public/`\n// will be forwarded to ORY Kratos' Public API.\nconst kratosBrowserUrl = 'http://example.org/.ory/kratos/public/'\n\n// Initializes the SDK with ORY Kratos' Admin API.\nconst adminEndpoint = new AdminApi('https://ory-kratos-admin.example-org.vpc/')\n\n// The parameter \"flow\" can be \"login\" and \"registration\".\n// You would register the two routes in express js like this:\n//\n//  app.get('/auth/registration', authHandler('registration'))\n//  app.get('/auth/login', authHandler('login'))\n//\nexport const authHandler = (flow) => (req, res, next) => {\n  // The request ID is used to identify the login and registraion request and\n  // return data like the csrf_token and so on.\n  const request = req.query.request\n  if (!request) {\n    console.log(`No request found in URL, initializing ${flow} flow.`)\n    res.redirect(`${kratosBrowserUrl}/self-service/browser/${flow}`)\n    return\n  }\n\n  const authRequest =\n    type === 'login'\n      ? adminEndpoint.getSelfServiceBrowserLoginRequest(request)\n      : adminEndpoint.getSelfServiceBrowserRegistrationRequest(request)\n\n  authRequest.then(({ body, response }) => {\n    if (response.statusCode !== 200) {\n      res.redirect(\n        `${config.kratos.browser}/self-service/browser/flows/${type}`\n      )\n      return\n    }\n\n    // \"body\" contains all the request data for this Registration request.\n    // You can process that data here, if you want.\n\n    // only show the form section that is \"active\" to avoid user confusion.\n    let password = body.methods.password.config\n    let oidc = body.methods.oidc.config\n    switch (body.active) {\n      case 'password':\n        oidc = undefined // if password is active hide this\n        break\n      case 'oidc':\n        password = undefined // if oidc is active hide this\n        break\n    }\n\n    // Lastly, you probably want to render the data using a view (e.g. Jade Template):\n    res.render(flow, { oidc, password })\n  })\n  // Handle errors using ExpressJS' next functionality:\n  //\n  //    .catch(next)\n}\n")),Object(r.b)("h4",{id:"views"},"Views"),Object(r.b)("p",null,"Your views can be rather simple, as ORY Kratos provides you with all the\ninformation you need for rendering the forms. The following example illustrates\na generic form generator (we use handlebars here) that works with ORY Kratos:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/partials/form.hbs"',name:'"views/partials/form.hbs"'}),'{{~#each messages~}}\n    \x3c!-- global messages for this flow --\x3e\n    <div class="message {{type}}">{{text}}</div>\n{{~/each~}}\n\n<form action="{{form.action}}" method="{{form.method}}">\n    {{~#each form.messages~}}\n        \x3c!-- messages for this form --\x3e\n        <div class="message {{type}}">{{text}}</div>\n    {{~/each~}}\n\n    {{#each form.fields}}\n        {{~#each messages~}}\n            \x3c!-- messages for individual fields --\x3e\n            <div class="message {{type}}">{{text}}</div>\n        {{~/each~}}\n\n        <input name="{{name}}" type="{{type}}" value="{{value}}" {{#if disabled}}disabled{{/if}}>\n    {{/each}}\n\n    <button type="submit">Register</button>\n\n    \x3c!--\n        This example also works for the login screen:\n\n            <button type="submit">Sign in</button>\n    --\x3e\n</form>\n')),Object(r.b)("p",null,'In your main "Login" or "Sign Up" view you would then consume this template for\nall the methods you want to support:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-handlebars",metastring:'name="views/login_or_signup.hbs"',name:'"views/login_or_signup.hbs"'}),"\x3c!-- Username / Email and Password login / sign up form: --\x3e\n{{#if password}}\n    {{> form form=password}}\n{{/if}}\n\n\x3c!-- Social sign in/up form: --\x3e\n{{#if oidc}}\n    {{> form form=oidc}}\n{{/if}}\n\n\x3c!-- ... form: --\x3e\n\x3c!-- ... --\x3e\n")),Object(r.b)("p",null,"For details on payloads and potential HTML snippets consult the individual\nSelf-Service Strategies for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration/username-email-password"}),"Username and Password Strategy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/kratos/docs/next/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"}),"Social Sign In Strategy"))),Object(r.b)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),Object(r.b)("p",null,"Let's take a look at the concrete network topologies, calls, and payloads. Here,\nwe're assuming that you're running a server-side browser application (written in\ne.g. PHP, Java, NodeJS) to render the login and registration screen on the\nserver and make all API calls from that server code. The counterpart to this\nwould be a client-side browser application (written in e.g. Vanilla JavaScript,\nJQuery, ReactJS, AngularJS, ...) that uses AJAX requests to fetch data. For\nthese type of applications, read this section first and go to section\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#client-side-browser-applications"}),"Client-Side Browser Applications")," next."),Object(r.b)("h4",{id:"network-architecture"},"Network Architecture"),Object(r.b)("p",null,"We recommend checking out the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/quickstart#network-architecture"}),"Quickstart Network Architecture")," for\na high-level, exemplary, overview of the network. In summary:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The SecureApp (your application) is exposed at ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://127.0.0.1:4455"}),"http://127.0.0.1:4455")," and\nproxies requests matching path ",Object(r.b)("inlineCode",{parentName:"li"},"./ory/kratos/public/*")," to ORY Krato's Public\nAPI Port."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos exposes (for debugging only!!) the Public API at\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://127.0.0.1:4433"}),"http://127.0.0.1:4433")," and Admin API at ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://127.0.0.1:4434"}),"http://127.0.0.1:4434"),"."),Object(r.b)("li",{parentName:"ol"},'Within the "intranet" or "private network", ORY Kratos is exposed at\nhttp://kratos:4433 and http://kratos:4434. These URLs are be used by the\nSecureApp to communicate with ORY Kratos.')),Object(r.b)("p",null,"Keep in mind that his architecture is just one of many possible network\narchitectures. It is however one of the simplest as well and it works locally.\nFor production deployments you would probably use an Reverse Proxy such as\nNginx, Kong, Envoy, ORY Oathkeeper, or others."),Object(r.b)("h4",{id:"user-login-and-user-registration-process-sequence"},"User Login and User Registration Process Sequence"),Object(r.b)("p",null,"The Login and Registration User Flow is composed of several high-level steps\nsummarized in this state diagram:"),Object(r.b)(o.a,{chart:'\nstateDiagram\n  s1: User browses app\n  s2: Execute "Before Login/Registration Hook(s)"\n  s3: User Interface Application renders "Login/Registration Request"\n  s4: Execute "After Login/Registration Hook(s)"\n  s5: Update "Login/Registration Request" with Error Context(s)\n  s6: Login/Registration successful\n\t[*] --\x3e s1\n  s1 --\x3e s2 : User clicks "Log in / Sign up"\n  s2 --\x3e Error : A hook fails\n  s2 --\x3e s3 : User is redirected to Login/Registration UI URL\n  s3 --\x3e s4 : User provides valid credentials/registration data\n  s3 --\x3e s5 : User provides invalid credentials/registration data\n  s5 --\x3e s3 : User is redirected to Login/Registration UI URL\n  s4 --\x3e Error : A Hook fails\n  s4 --\x3e s6\n  s6 --\x3e [*]\n  Error --\x3e [*]\n',mdxType:"Mermaid"}),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("strong",{parentName:"li"},"Login/Registration User Flow")," is initiated because a link was clicked\nor an action was performed that requires an active user session."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos executes Jobs defined in the ",Object(r.b)("strong",{parentName:"li"},"Before Login/Registration\nWorkflow"),". If a failure occurs, the whole flow is aborted."),Object(r.b)("li",{parentName:"ol"},"The user's browser is redirected to\n",Object(r.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/(login|registration)"),"\n(the notation ",Object(r.b)("inlineCode",{parentName:"li"},"(login|registration)")," expresses the two possibilities of\n",Object(r.b)("inlineCode",{parentName:"li"},"../self-service/browser/flows/login")," or\n",Object(r.b)("inlineCode",{parentName:"li"},"../self-service/browser/flows/registration"),")."),Object(r.b)("li",{parentName:"ol"},"ORY Kratos does some internal processing (e.g. checks if a session cookie is\nset, generates payloads for form fields, sets CSRF token, ...) and redirects\nthe user's browser to the Login UI URL which is defined using the\n",Object(r.b)("inlineCode",{parentName:"li"},"selfservice.flows.login.ui_url")," (or ",Object(r.b)("inlineCode",{parentName:"li"},"selfservice.flows.registration.ui_url"),")\nconfig or ",Object(r.b)("inlineCode",{parentName:"li"},"SELFSERVICE_FLOWS_LOGIN_UI_URL")," (or\n",Object(r.b)("inlineCode",{parentName:"li"},"SELFSERVICE_FLOWS_REGISTRATION_UI_URL"),") environment variable, which is set\nto the ui endpoints - for example ",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/login")," and\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/registration"),"). The user's browser is thus\nredirected to\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/(login|registration)?request=abcde"),". The\n",Object(r.b)("inlineCode",{parentName:"li"},"request")," query parameter includes a unique ID which will be used to fetch\ncontextual data for this login request."),Object(r.b)("li",{parentName:"ol"},"Your Server-Side Application makes a ",Object(r.b)("inlineCode",{parentName:"li"},"GET")," request to\n",Object(r.b)("inlineCode",{parentName:"li"},"http://kratos:4434/self-service/browser/flows/requests/(login|registration)?request=abcde"),".\nORY Kratos responds with a JSON Payload that contains data (form fields,\nerror messages, ...) for all enabled User Login Strategies:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  methods: {\n    password: { method: 'password', config: { action: '...', fields: [] } },\n    oidc: { method: 'oidc', config: { action: '...', fields: [] } }\n  }\n}\n"))),Object(r.b)("li",{parentName:"ol"},'Your Server-Side applications renders the data however you see fit. The User\ninteracts with it an completes the Login by clicking, for example, the\n"Login", the "Login with Google", ... button.'),Object(r.b)("li",{parentName:"ol"},"The User's browser makes a request to one of ORY Kratos' Strategy URLs (e.g.\n",Object(r.b)("inlineCode",{parentName:"li"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/strategies/password/(login|registration)"),"\nor\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/strategies/oidc/auth/abcde"),").\nORY Kratos validates the User's credentials (when logging in - e.g. Username\nand Password, by performing an OpenID Connect flow, ...) or the registration\nform data (when signing up - e.g. is the E-Mail address valid, is the person\nat least 21 years old, ...):",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the credentials / form data is invalid, the Login Request's JSON Payload\nis updated - for example with",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json5"}),"{\n  id: 'abcde',\n  methods: {\n    oidc: {\n      method: 'oidc',\n      config: {\n        /* ... */\n      }\n    },\n    password: {\n      method: 'password',\n      config: {\n        /* ... */\n        messages: [\n          {\n            id: 4000006,\n            text: 'The provided credentials are invalid. Check for spelling mistakes in your password or username, email address, or phone number.',\n            type: 'error'\n          }\n        ]\n      }\n    }\n  }\n}\n")),"and the user's Browser is redirected back to the Login UI:\n",Object(r.b)("inlineCode",{parentName:"li"},"https://127.0.0.1:4455/auth/(login|registration)?request=abcde"),"."),Object(r.b)("li",{parentName:"ul"},"If credentials / data is valid, ORY Kratos proceeds with the next step."),Object(r.b)("li",{parentName:"ul"},"If the flow is a registration request and the registration data is valid,\nthe identity is created."))),Object(r.b)("li",{parentName:"ol"},"ORY Kratos executes hooks defined in the ",Object(r.b)("strong",{parentName:"li"},"After Login/Registration Hooks"),".\nIf a failure occurs, the whole flow is aborted."),Object(r.b)("li",{parentName:"ol"},"The client receives the expected response. For browsers, this is a HTTP\nRedirection, for API clients it will be a JSON response containing the\nsession and/or identity. For more information on this topic check\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/kratos/docs/next/concepts/browser-redirect-flow-completion"}),"Self-Service Flow Completion"),".")),Object(r.b)(o.a,{chart:'\nsequenceDiagram\n  participant B as Browser\n  participant A as Your Server-Side Application\n  participant KP as ORY Kratos Public API\n  participant KA as ORY Kratos Admin API\n  B->>+A: GET /.ory/kratos/public/self-service/browser/flows/(login|registration)\n  A->>+KP: GET /self-service/browser/flows/login(login|registration)\n  KP--\x3e>KP: Execute Hooks defined in "Before Login/Registration"\n  KP--\x3e>-A: HTTP 302 Found /auth/(login|registration)?request=abcde\n  A--\x3e>-B: HTTP 302 Found /auth/(login|registration)?request=abcde\n  B->>+A: GET /auth/(login|registration)?request=abcde\n  A->>+KA: GET/self-service/browser/flows/requests/(login|registration)?request=abcde\n  KA->>-A: Sends Login/Registration Request JSON Payload\n  Note over A,KA:  {"methods":{"password":...,"oidc":..}}\n  A--\x3e>A: Generate and render HTML\n  A--\x3e>-B: Return HTML (Form, ...)\n  B--\x3e>B: Fill out HTML\n  B->>+KP: POST HTML Form\n  KP--\x3e>KP: Checks login / registration data\n  alt Login data is valid\n    KP--\x3e>-KP: Execute Jobs defined in "After Login Workflow(s)"\n    KP--\x3e>A: HTTP 302 Found /dashboard\n    Note over KP,B: Set-Cookie: auth_session=...\n    B->>+A: GET /dashboard\n    A--\x3eKA: Validates Session Cookie\n    A->>-B: Send Dashboard Response\n  else Login data is invalid\n    Note over KP,B: User retries login / registration\n    KP--\x3e>B: HTTP 302 Found /auth/(login|registration)?request=abcde\n  end\n',mdxType:"Mermaid"}),Object(r.b)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),Object(r.b)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",Object(r.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/requests/login?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",Object(r.b)("inlineCode",{parentName:"p"},"https://kratos:4434/self-service/browser/flows/requests/login?request=abcde"),"."),Object(r.b)("p",null,"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to\n",Object(r.b)("inlineCode",{parentName:"p"},"https://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login"),"\nMUST be set and available when calling this endpoint!"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The initialization request\n(",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/(login|registration)"),")\n",Object(r.b)("strong",{parentName:"p"},"cannot")," be made via AJAX or API requests. You ",Object(r.b)("strong",{parentName:"p"},"must")," open that URL in the\nuser's browser using e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"window.open")," ",Object(r.b)("inlineCode",{parentName:"p"},"location.href")," or plain and simple old\n",Object(r.b)("inlineCode",{parentName:"p"},"<a href=...>"),"."))),Object(r.b)("h2",{id:"self-service-user-login-and-user-registration-for-api-clients"},"Self-Service User Login and User Registration for API Clients"),Object(r.b)("p",null,"Will be addressed in a future release."),Object(r.b)("h2",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"ORY Kratos allows you to configure hooks that run before and after a Login or\nRegistration Request is generated. This may be helpful if you'd like to restrict\nlogins to IPs coming from your internal network or other logic."),Object(r.b)("p",null,"For more information about hooks please read the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/next/self-service/hooks/index"}),"Hook Documentation"),"."),Object(r.b)("h2",{id:"refreshing-a-session"},"Refreshing a Session"),Object(r.b)("p",null,"In some cases it is required to refresh a login session. This is the case when\nupdating one's password. Refreshing a session updates the ",Object(r.b)("inlineCode",{parentName:"p"},"authenticated_at"),"\ntime."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Refreshing a session will not log the user out, unless another user signs in."))),Object(r.b)("p",null,"To refresh a session, append ",Object(r.b)("inlineCode",{parentName:"p"},"?refresh=true")," to\n",Object(r.b)("inlineCode",{parentName:"p"},"/self-service/browser/flows/login"),", for example\n",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login?refresh=true"),"."))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n(353),n(20);var a=n(0),i=n.n(a),r=n(362),o=n.n(r),s=n(131),l=n.n(s),c=n(340),d=n.n(c);o.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,r=Object(a.useState)(!1),s=r[0],c=r[1],p=Object(a.useState)(void 0),b=p[0],u=p[1],h=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return c(!s)};return Object(a.useEffect)((function(){o.a.render(h,n,(function(e){u(e)}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:m,className:d()(l.a.graph,l.a.pointer),dangerouslySetInnerHTML:{__html:b}}),i.a.createElement("div",{onClick:m,className:d()(l.a.overlay,l.a.pointer,l.a.graph,(t={},t[l.a.visible]=s,t))},i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:d()(l.a.backdrop,l.a.graph),dangerouslySetInnerHTML:{__html:b}})))}},371:function(e,t,n){var a={"./locale":344,"./locale.js":344};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=371}}]);