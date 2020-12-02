(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{128:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return h}));var a=t(3),o=t(7),i=(t(0),t(405)),s=t(406),c=t(410),r=t(413),l=t(414),b={id:"consent",title:"Consent Flow"},d={unversionedId:"concepts/consent",id:"version-v1.7/concepts/consent",isDocsHomePage:!1,title:"Consent Flow",description:"OAuth2 and OpenID Connect require an authenticated End-User session for all",source:"@site/versioned_docs/version-v1.7/concepts/consent.mdx",slug:"/concepts/consent",permalink:"/hydra/docs/v1.7/concepts/consent",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/concepts/consent.mdx",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,sidebar:"version-v1.7/docs",previous:{title:"Login Flow",permalink:"/hydra/docs/v1.7/concepts/login"},next:{title:"Logout Flow",permalink:"/hydra/docs/v1.7/concepts/logout"}},p=[{value:"Redirection to the Consent Endpoint",id:"redirection-to-the-consent-endpoint",children:[{value:"Previous Consent",id:"previous-consent",children:[]}]},{value:"The Consent Endpoint",id:"the-consent-endpoint",children:[{value:"Accepting the Consent Flow",id:"accepting-the-consent-flow",children:[]},{value:"Rejecting the Consent Flow",id:"rejecting-the-consent-flow",children:[]}]},{value:"Revoking Consent",id:"revoking-consent",children:[]}],u={rightToc:p};function h(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"OAuth2 and OpenID Connect require an authenticated End-User session for all\nOAuth2 / OpenID Connect flows except the ",Object(i.b)("inlineCode",{parentName:"p"},"client_credentials")," flow which does\nnot involve End-Users."),Object(i.b)("p",null,'ORY Hydra does not contain a database with End-Users but instead uses HTTP\nRedirection to "delegate" the login and consent flow to another app - we call\nthis the Login & Consent App.'),Object(i.b)("p",null,"The following short video shows the flow from an End-User's perspective - it\nincludes both login and consent."),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/txUmfORzu8Y",frameborder:"0",allowfullscreen:!0}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./login"}),"Login Flow")," first, as the Login Flow happens before the\nconsent flow."))),Object(i.b)("p",null,"The following sequence diagram describes the different API calls and HTTP\nRedirects when performing the OAuth2 flow:"),Object(i.b)(c.a,{chart:"sequenceDiagram\n    OAuth2 Client->>ORY Hydra: Initiates OAuth2 Authorize Code or Implicit Flow\n    ORY Hydra--\x3e>ORY Hydra: No end user session available (not authenticated)\n    ORY Hydra->>Login Endpoint: Redirects end user with login challenge\n    Login Endpoint--\x3eORY Hydra: Fetches login info\n    Login Endpoint--\x3e>Login Endpoint: Authenticates user with credentials\n    Login Endpoint--\x3eORY Hydra: Transmits login info and receives redirect url with login verifier\n    Login Endpoint->>ORY Hydra: Redirects end user to redirect url with login verifier\n    ORY Hydra--\x3e>ORY Hydra: First time that client asks user for permissions\n    ORY Hydra->>Consent Endpoint: Redirects end user with consent challenge\n    Consent Endpoint--\x3eORY Hydra: Fetches consent info (which user, what app, what scopes)\n    Consent Endpoint--\x3e>Consent Endpoint: Asks for end user's permission to grant application access\n    Consent Endpoint--\x3eORY Hydra: Transmits consent result and receives redirect url with consent verifier\n    Consent Endpoint->>ORY Hydra: Redirects to redirect url with consent verifier\n    ORY Hydra--\x3e>ORY Hydra: Verifies grant\n    ORY Hydra->>OAuth2 Client: Transmits authorization code/token",mdxType:"Mermaid"}),Object(i.b)("h2",{id:"redirection-to-the-consent-endpoint"},"Redirection to the Consent Endpoint"),Object(i.b)("p",null,"Once the login challenge is accepted, ORY Hydra will ask the user for consent:"),Object(i.b)("img",{src:Object(s.a)("/img/docs/google-consent-playground.png"),alt:"Exemplary Consent Screen"}),Object(i.b)("p",null,"The UI is fully under your control, because ORY Hydra redirects the End-User's\nbrowser to the c"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="hydra serve all -c path/to/hydra/config.yml"',title:'"hydra',serve:!0,all:!0,"-c":!0,'path/to/hydra/config.yml"':!0}),"# Can also be set using the environment variable:\n#   URLS_CONSENT=https://consent-app/consent\nurls:\n  consent: https://consent-app/consent\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can implement the Login and Consent endpoints in the same code base /\napplication. Check out our\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"Login, Consent & Logout NodeJS Reference implementation"),"!"))),Object(i.b)("p",null,"ORY Hydra appends a ",Object(i.b)("inlineCode",{parentName:"p"},"consent_challenge")," query parameter to the url. The value is\na ID which should later be used by the Consent Endpoint to fetch important\ninformation about the request."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://consent-app/consent?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2\n")),Object(i.b)("h3",{id:"previous-consent"},"Previous Consent"),Object(i.b)("p",null,"A consent has four distinctive attributes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The requested scope\n(",Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/auth?...&...&scope=email+profile+offline_access"),");"),Object(i.b)("li",{parentName:"ul"},"The OAuth2 Client (",Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/auth?client_id=abcd"),");"),Object(i.b)("li",{parentName:"ul"},"The End-User (this is the ",Object(i.b)("inlineCode",{parentName:"li"},"subject")," set in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./login"}),"Login Flow"),");"),Object(i.b)("li",{parentName:"ul"},"Whether or not a previous consent exists, the previous consent has\n",Object(i.b)("inlineCode",{parentName:"li"},"remember: true"),", and the scope granted by the user (did the user accept all\nof ",Object(i.b)("inlineCode",{parentName:"li"},"email"),", ",Object(i.b)("inlineCode",{parentName:"li"},"profile"),", ",Object(i.b)("inlineCode",{parentName:"li"},"offline_access"),"?)")),Object(i.b)("p",null,"There are three possible states:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'The user has never before authorized ("consent") the OAuth2 Client before.'),Object(i.b)("li",{parentName:"ul"},'The user has authorized ("consent") the OAuth2 Client before and chose to\nremember the "consent".'),Object(i.b)("li",{parentName:"ul"},'The user has authorized ("consent") the OAuth2 Client before, and chose to\nremember the "consent", but the OAuth2 Client now also wants additional\npermissions ("has changed the token scope" in ',Object(i.b)("inlineCode",{parentName:"li"},"/oauth2/auth?scope=..."),").")),Object(i.b)("p",null,"Regardless of which of these three states we are in, the End-User's browser is\nalways redirected to the consent endpoint. What changes is the ",Object(i.b)("inlineCode",{parentName:"p"},"skip")," value, as\nexplained a bit later."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In certain scenarios (e.g. a special OAuth2 Client) you might not want to show\nthe consent screen at all. In those cases you can choose to skip showing the UI\nand just accept the consent. Please keep in mind that OAuth2 is a delegation\nprotocol and that it makes most sense for third-party access. Not showing the\nconsent screen will break OpenID Connect Certification."))),Object(i.b)("h2",{id:"the-consent-endpoint"},"The Consent Endpoint"),Object(i.b)("p",null,"The Consent Endpoint (set by ",Object(i.b)("inlineCode",{parentName:"p"},"urls.consent"),") is an application written by you.\nYou can find an exemplary\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"NodeJS reference implementation on our GitHub"),"."),Object(i.b)("p",null,"The Consent Endpoint uses the ",Object(i.b)("inlineCode",{parentName:"p"},"consent_challenge")," value in the URL to fetch\ninformation about the consent request by making a HTTP GET request to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"http(s)://<HYDRA_ADMIN_URL>/oauth2/auth/requests/consent?consent_challenge=<challenge>\n")),Object(i.b)("p",null,'The response (see below in "Consent Challenge Response" tab) contains\ninformation about the consent request. The body contains a ',Object(i.b)("inlineCode",{parentName:"p"},"skip")," value. If the\nvalue is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", the user interface must be shown. If ",Object(i.b)("inlineCode",{parentName:"p"},"skip")," is true, you\nshould not show the user interface but instead just accept or reject the consent\nrequest! For more details about the implementation check the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../guides/login"}),'"Implementing the Consent Endpoint" Guide'),"."),Object(i.b)(r.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"curl",value:"curl"},{label:"Consent Challenge Response",value:"json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(s.a)("/img/docs/consent-endpoint.png")})),Object(i.b)(l.a,{value:"curl",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl \\\n  "http://127.0.0.1:4445/oauth2/auth/requests/consent?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2"\n')),Object(i.b)("p",null,"Check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../guides/consent"}),'"Implementing the Consent Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages.")),Object(i.b)(l.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "challenge": "f633e49d56bc40e0a876ac8242eb9891",\n  "requested_scope": ["openid", "offline"],\n  "requested_access_token_audience": [],\n  "skip": false,\n  "subject": "foo@bar.com",\n  "oidc_context": {\n    "acr_values": [],\n    "display": "",\n    "id_token_hint_claims": {},\n    "login_hint": "",\n    "ui_locales": []\n  },\n  "client": {\n    "client_id": "auth-code-client",\n    "client_name": "",\n    "redirect_uris": ["http://127.0.0.1:5555/callback"],\n    "grant_types": ["authorization_code", "refresh_token"],\n    "response_types": ["code", "id_token"],\n    "scope": "openid offline",\n    "audience": null,\n    "owner": "",\n    "policy_uri": "",\n    "allowed_cors_origins": null,\n    "tos_uri": "",\n    "client_uri": "",\n    "logo_uri": "",\n    "contacts": null,\n    "client_secret_expires_at": 0,\n    "subject_type": "public",\n    "token_endpoint_auth_method": "client_secret_basic",\n    "userinfo_signed_response_alg": "none",\n    "created_at": "2020-07-09T10:07:01Z",\n    "updated_at": "2020-07-09T10:07:01Z"\n  },\n  "request_url": "http://127.0.0.1:4444/oauth2/auth?audience=&client_id=auth-code-client&max_age=0&nonce=shfxjszihgvbptswjbqsrdbg&prompt=&redirect_uri=http%3A%2F%2F127.0.0.1%3A5555%2Fcallback&response_type=code&scope=openid+offline&state=pmkekezifwwpgmzpckiqxzbt",\n  "login_challenge": "de814daf9bbb4b788b505b3c2dd5ce20",\n  "login_session_id": "c829da46-2041-400c-b72d-08324f878d0a",\n  "acr": ""\n}\n')))),Object(i.b)("p",null,"The way you collect the consent information from the End-User is up to you. In\nmost cases, you will show an HTML form similar to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<form action="/consent" method="post">\n  <input type="hidden" name="csrf_token" value="...." />\n  \x3c!-- Use CSRF tokens in your HTML forms! --\x3e\n  <input type="checkbox" name="scope" />\n</form>\n')),Object(i.b)("p",null,"Once the End-User authenticated successfully, you either ",Object(i.b)("strong",{parentName:"p"},"accept")," the login\nchallenge, or you ",Object(i.b)("strong",{parentName:"p"},"reject")," (e.g. the user is not allowed to perform OAuth2\nflows) the login challenge."),Object(i.b)("h3",{id:"accepting-the-consent-flow"},"Accepting the Consent Flow"),Object(i.b)("p",null,"To accept the Consent Challenge, make a HTTP PUT request with\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type: application/json")," and a JSON payload (see\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../reference/api#schemaacceptconsentrequest"}),"Accept Consent Request HTTP API Reference"),")"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  // The scope granted by the user.\n  "grant_scope": ["openid", "offline_access"],\n\n  // The following fields are optional\n\n  // The Access Token Audience if needed. Typically equals the `requested_access_token_audience` field from\n  // the consent challenge.\n  "grant_access_token_audience": ["https://my-audience.com"],\n\n  // Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same client\n  // asks the same user for the same, or a subset of, scope.\n  "remember": true,\n  // RememberFor sets how long the consent authorization should be remembered for in seconds. If set to 0, the\n  // authorization will be remembered indefinitely.\n  "remember_for": 3600,\n\n  // Set the data for this consent "session"\n  "session": {\n    "access_token": {\n      "foo": "This field will be available when introspecting the Access Token"\n    },\n    "id_token": {\n      "bar": "This field will be available as a claim in the ID Token"\n    }\n  }\n}\n')),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"curl")," this might look like the following request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ curl --location --request PUT 'http://127.0.0.1:4445/oauth2/auth/requests/consent/accept?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n  \"grant_scope\": [\"openid\", \"offline_access\"]\n}'\n")),Object(i.b)("p",null,"The server responds with JSON"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "redirect_to": "http://127.0.0.1:4445/oauth2/auth..."\n}\n')),Object(i.b)("p",null,"which is the URL your application must the End-User's browser to."),Object(i.b)("p",null,"Check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../guides/login"}),'"Implementing the Login Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages."),Object(i.b)("h3",{id:"rejecting-the-consent-flow"},"Rejecting the Consent Flow"),Object(i.b)("p",null,"To reject the Login Challenge, make a HTTP PUT request with\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type: application/json")," and a JSON payload (see\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../reference/api#schemarejectrequest"}),"Reject Consent Request HTTP API Reference"),")"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  // The error should follow the OAuth2 error format (e.g. `invalid_request`, `login_required`).\n  "error": "user_banned",\n\n  // Description of the error in a human readable format.\n  "error_description": "You are banned!",\n\n  // Hint to help resolve the error.\n  "error_hint": "Contact the site administrator.",\n\n  // Debug contains information to help resolve the problem as a developer. Usually not exposed\n  // to the public but only in the server logs.\n  "error_debug": "The user was marked banned in the database.",\n\n  // Represents the HTTP status code of the error (e.g. 401 or 403)\n  //\n  // Defaults to 400\n  "status_code": 403\n}\n')),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"curl")," this might look like the following request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ curl --location --request PUT \'http://127.0.0.1:4445/oauth2/auth/requests/consent/reject?consent_challenge=7bb518c4eec2454dbb289f5fdb4c0ee2\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "error": "user_banned",\n  "error_debug": "The user was marked banned in the database.",\n  "error_description": "You are banned!",\n  "error_hint": "Contact the site administrator.",\n  "status_code": 403\n}\'\n')),Object(i.b)("p",null,"The server responds with JSON"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "redirect_to": "http://127.0.0.1:4445/oauth2/auth..."\n}\n')),Object(i.b)("p",null,"which is the URL your application must the End-User's browser to."),Object(i.b)("p",null,"Check the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../guides/login"}),'"Implementing the Login Endpoint" Guide')," for\nexamples using the ORY Hydra SDK in different languages."),Object(i.b)("h2",{id:"revoking-consent"},"Revoking Consent"),Object(i.b)("p",null,"You can revoke a user's consent either on a per application basis or for all\napplications."),Object(i.b)("p",null,"Revoking the consent will automatically revoke all related access and refresh\ntokens."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'Do not use this endpoint to "invalidate" user sessions. Please revise your\napproach to and usage of OAuth2 if you use access / refresh tokens as user\nsessions (i.e. instead of browser cookies).'))),Object(i.b)("p",null,"Revoking all consent sessions of a user is as easy as sending ",Object(i.b)("inlineCode",{parentName:"p"},"DELETE")," to\n",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/auth/sessions/consent?subject={subject}"),"."),Object(i.b)("p",null,"Revoking the consent sessions of a user for a specific client is as easy as\nsending ",Object(i.b)("inlineCode",{parentName:"p"},"DELETE")," to\n",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/auth/sessions/consent?subject={subject}&client={client}"),"."))}h.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var a=t(20),o=t(407);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,s=i.forcePrependBaseUrl,c=void 0!==s&&s,r=i.absolute,l=void 0!==r&&r;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var b=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+b:b}(i,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},407:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return o}))},410:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(420),s=t.n(i),c=t(54),r=t.n(c),l=t(417),b=t.n(l);s.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});n.a=function(e){var n,t=e.chart,i=Object(a.useState)(!1),c=i[0],l=i[1],d=Object(a.useState)(void 0),p=d[0],u=d[1],h=Object(a.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],m=function(){return l(!c)};return Object(a.useEffect)((function(){s.a.render(h,t,(function(e){u(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:m,className:b()(r.a.graph,r.a.pointer),dangerouslySetInnerHTML:{__html:p}}),o.a.createElement("div",{onClick:m,className:b()(r.a.overlay,r.a.pointer,r.a.graph,(n={},n[r.a.visible]=c,n))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:b()(r.a.backdrop,r.a.graph),dangerouslySetInnerHTML:{__html:p}})))}},421:function(e,n){},422:function(e,n){},423:function(e,n){},424:function(e,n){},425:function(e,n){},426:function(e,n){},427:function(e,n){},428:function(e,n){},429:function(e,n){},430:function(e,n){},431:function(e,n){},432:function(e,n){},434:function(e,n,t){var a={"./locale":409,"./locale.js":409};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=434}}]);