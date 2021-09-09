(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[89247],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=s,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},64818:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=t(22122),s=t(19756),r=(t(67294),t(3905)),i=["components"],o={id:"username-email-password",title:"Username or Email and Password"},l=void 0,d={unversionedId:"self-service/strategies/username-email-password",id:"version-v0.2/self-service/strategies/username-email-password",isDocsHomePage:!1,title:"Username or Email and Password",description:"The password strategy implements the most-common used form of login and",source:"@site/versioned_docs/version-v0.2/self-service/strategies/username-email-password.md",sourceDirName:"self-service/strategies",slug:"/self-service/strategies/username-email-password",permalink:"/kratos/docs/v0.2/self-service/strategies/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/strategies/username-email-password.md",tags:[],version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,formattedLastUpdatedAt:"9/14/2020",frontMatter:{id:"username-email-password",title:"Username or Email and Password"},sidebar:"version-v0.2/docs",previous:{title:"MFA / 2FA",permalink:"/kratos/docs/v0.2/self-service/flows/2fa-mfa-multi-factor-authentication"},next:{title:"Social Sign In with OpenID Connect and OAuth2",permalink:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2"}},u=[{value:"Choosing between Username, Email, Phone Number",id:"choosing-between-username-email-phone-number",children:[{value:"Email and Password",id:"email-and-password",children:[]},{value:"Multiple E-Mails and Password",id:"multiple-e-mails-and-password",children:[]},{value:"Username and Password",id:"username-and-password",children:[]},{value:"Username and Email and Password",id:"username-and-email-and-password",children:[]},{value:"Phone Number And Password",id:"phone-number-and-password",children:[]}]},{value:"Browser Clients",id:"browser-clients",children:[{value:"Registration",id:"registration",children:[]},{value:"Login",id:"login",children:[]},{value:"Settings",id:"settings",children:[]},{value:"Settings",id:"settings-1",children:[]}]},{value:"API Clients",id:"api-clients",children:[]},{value:"Security and Defenses",id:"security-and-defenses",children:[{value:"Anti-automation",id:"anti-automation",children:[]},{value:"Account Takeover Defenses",id:"account-takeover-defenses",children:[]},{value:"Password Validation",id:"password-validation",children:[]},{value:"Account Enumeration Defenses (work in progress)",id:"account-enumeration-defenses-work-in-progress",children:[]}]}],c={toc:u};function p(e){var n=e.components,t=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," strategy implements the most-common used form of login and\nregistration: An identifier (username, email, phone number, ...) and a password."),(0,r.kt)("p",null,"It implements several flows, specifically\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/user-login-user-registration"},"User Login and User Registration"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/user-settings-profile-management"},"User Settings"),"."),(0,r.kt)("p",null,"To enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," strategy, set ",(0,r.kt)("inlineCode",{parentName:"p"},"selfservice.strategies.password.enabled"),"\nto true in your ORY Kratos configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  strategies:\n    password:\n      enabled: true\n")),(0,r.kt)("p",null,"Passwords are hashed using the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/concepts/security#Argon2"},"Argon2 Hashing Algorithm")," which can be\nconfigured in the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/concepts/security#Argon2"},"ORY Kratos Argon2 Configuration"),"."),(0,r.kt)("p",null,"When a user signs up using this strategy, the Default Identity Traits Schema\n(set using ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.traits.default_schema_url"),") is used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"identity:\n  traits:\n    # also supports http(s) of course\n    default_schema_url: file:///path/to/default-identity.schema.json\n")),(0,r.kt)("p",null,"If you don't know what that means, please read the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/concepts/identity-user-model"},'"Concepts: Identity" Chapter'),"."),(0,r.kt)("h2",{id:"choosing-between-username-email-phone-number"},"Choosing between Username, Email, Phone Number"),(0,r.kt)("p",null,"Before you start, you need to decide what data you want to collect from your\nusers and why! It is hard to change this decision afterwards, so make sure\nyou've taken everything into account!"),(0,r.kt)("p",null,"When logging in, the user will use a login identifier and a password to sign up\nand in. The identifier can be"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'a username - e.g. "john.doe" or "johndoe123" or "oryuser",'),(0,r.kt)("li",{parentName:"ul"},"an email address - e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"john.doe@gmail.com"),","),(0,r.kt)("li",{parentName:"ul"},"a phone number - e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"+49-1234-4321-1234-4321"),".")),(0,r.kt)("p",null,"All of these approaches have up- and downsides."),(0,r.kt)("p",null,'Using the email address as the login identifier is easy to remember, does not\nrequire additional fields (because the email address is already being\ncollected), and is usually unique. It\'s usually unique because sometimes\ncompanies use a "shared" email account (e.g. ',(0,r.kt)("a",{parentName:"p",href:"mailto:office@acme.org"},"office@acme.org"),") to access\nservices. In that case, multiple real identities are using the same email\nidentifier to log in."),(0,r.kt)("p",null,"The email address however represents a unique identifier and personally\nidentifiable information (PII). An attacker could for example check if an email\naddress (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"john.doe@gmail.com"),") is registered at a site (e.g. an adult\nwebsite) and use that information for blackmail (see\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),")."),(0,r.kt)("p",null,"The same considerations apply to using a phone number as the primary\nregistration & login identifier."),(0,r.kt)("p",null,'Using a free text username reduces the privacy risk because it is much harder to\nmake a connection between the username and a real world identity. It\'s still\npossible in cases where users choose a username such as\n"john.doe.from.mineapolis.1970", but finding the right username identifier is\nstill difficult and there is plausible deniability because anyone could use that\nusername.'),(0,r.kt)("p",null,"A free text username however requires capturing additional fields (e.g. an email\naddress for password resets / account recovery) and is hard to remember. It is\noften very difficult to find unique usernames as people tend to use a\ncombination of their names and initials (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"john.doe"),") which has a high\nchance of collision. Therefore, one ends up with usernames such as\n",(0,r.kt)("inlineCode",{parentName:"p"},"john.doe1234432"),"."),(0,r.kt)("p",null,"It is important to understand that ORY Kratos lowercases all ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\nidentifiers and therefore E-Mail addresses. Characters ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".")," which have\nspecial meaning for some E-Mail Providers (e.g. GMail) are not normalized:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userNAME")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"foo@BaR.com")," is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"foo@bar.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"foo+baz@bar.com")," is NOT equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"foo@bar.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"foo.baz@bar.com")," is NOT equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"foobar@bar.com"))),(0,r.kt)("p",null,"You need to decide which route you want to take."),(0,r.kt)("h3",{id:"email-and-password"},"Email and Password"),(0,r.kt)("p",null,"To use the email address as the login identifier, define the following Identity\nTraits Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"multiple-e-mails-and-password"},"Multiple E-Mails and Password"),(0,r.kt)("p",null,"You can allow users to sign up with multiple E-Mail Addresses and use any of\nthose for log in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "emails": {\n      "type": "array",\n      "items": {\n        "type": "string",\n        "format": "email",\n        "ory.sh/kratos": {\n          "credentials": {\n            "password": {\n              "identifier": true\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"username-and-password"},"Username and Password"),(0,r.kt)("p",null,"To use a username as the login identifier, define the following Identity Traits\nSchema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"username-and-email-and-password"},"Username and Email and Password"),(0,r.kt)("p",null,"You may also mix usernames and passwords:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"phone-number-and-password"},"Phone Number And Password"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This will be addressed in a future release and is tracked as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/137"},"kratos#137"),".")),(0,r.kt)("h2",{id:"browser-clients"},"Browser Clients"),(0,r.kt)("h3",{id:"registration"},"Registration"),(0,r.kt)("p",null,"This strategy uses the high-level registration flow defined in chapter\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/user-login-user-registration"},"Self-Service Registration User Flow"),"."),(0,r.kt)("p",null,"Once the user is redirected to the Registration UI URL, the endpoint responsible\nfor that URL makes a request to ORY Kratos' Public / Admin API and appends the\n",(0,r.kt)("inlineCode",{parentName:"p"},"request")," query parameter."),(0,r.kt)("p",null,"ORY Kratos uses the JSON Schema defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"identity.traits.default_schema_url"),"\nto generate a list of form fields and add it to the Registration Request."),(0,r.kt)("p",null,"Using a JSON Schema like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="my/identity.schema.json"',title:'"my/identity.schema.json"'},'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "minLength": 3,\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "name": {\n      "type": "object",\n      "properties": {\n        "first": {\n          "type": "string"\n        },\n        "last": {\n          "type": "string"\n        }\n      }\n    }\n  },\n  "required": ["email"],\n  "additionalProperties": false\n}\n')),(0,r.kt)("p",null,"will result in the following Registration Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '713df601-d6c8-4331-8195-c29b92db459f',\n  expires_at: '2020-01-27T16:31:00.3507956Z',\n  issued_at: '2020-01-27T16:21:00.3508076Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/registration',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/password?request=713df601-d6c8-4331-8195-c29b92db459f',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: '0klCuilgIO2k0Ev3J3IEsMOlmxg0RhjiiiWXVKm3Pd7HxZLVkDHWoOSfiT+/BJn69Dg2fmq6MHv8HkEx6MrVlw==',\n          },\n          {\n            name: 'traits.email',\n            type: 'email',\n            required: true,\n          },\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n          },\n          {\n            name: 'traits.name.first',\n            type: 'text',\n          },\n          {\n            name: 'traits.name.last',\n            type: 'text',\n          },\n        ],\n      },\n    },\n  },\n}\n")),(0,r.kt)("p",null,"which in turn is easily to render by filling out a HTML Form template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form method="{{ method }}" action="{{ action }}">\n  \x3c!-- repeat this for every field --\x3e\n  <input type="{{ field.type }}" name="{{ field.name }} required="{{\n  field.required }}" value="{{ field.value }}"\n  \x3c!-- ... --\x3e>\n\n  <input type="submit" value="Create account" />\n</form>\n')),(0,r.kt)("p",null,'Once the user clicks "Create Account", the payload will be sent to ORY Kratos\'\nPublic API. The data will be validated against the JSON Schema (e.g. checking if\na required field is missing, if some condition like ',(0,r.kt)("inlineCode",{parentName:"p"},"minLength")," is not\nfulfilled, ...). If the data is invalid or incomplete, the browser will be\nredirected to the same login endpoint with the same request ID. When fetching\nthat request ID again, error details will be included in the JSON Response, such\nas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '713df601-d6c8-4331-8195-c29b92db459f',\n  expires_at: '2020-01-27T16:31:00.3507956Z',\n  issued_at: '2020-01-27T16:21:00.3508076Z',\n  request_url: 'http://127.0.0.1:4433/self-service/browser/flows/registration',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        errors: [\n          {\n            message: 'Please update the Form Fields to proceed.',\n          },\n        ],\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/registration/strategies/password?request=713df601-d6c8-4331-8195-c29b92db459f',\n        method: 'POST',\n        fields: [\n          /* ... */\n          {\n            name: 'password',\n            type: 'text',\n            value: 't4aegbydfv5234',\n            errors: [\n              {\n                message: \"traits.email: Does not match format 'email'\",\n              },\n            ],\n          },\n          /* ... */\n        ],\n      },\n    },\n  },\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Validation error messages and context will be improved in future releases.\nThis is tracked as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/185"},"kratos#185"),".")),(0,r.kt)("h3",{id:"login"},"Login"),(0,r.kt)("p",null,"The Login flow is almost identical to the registration flow. The only difference\nis that only three fields will be requested:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n  expires_at: '2020-01-27T16:48:53.8826084Z',\n  issued_at: '2020-01-27T16:38:53.8826392Z',\n  request_url: 'http://127.0.0.1:4433/self-service/browser/flows/login',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login/strategies/password?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n        method: 'POST',\n        fields: [\n          {\n            name: 'csrf_token',\n            type: 'hidden',\n            required: true,\n            value: 'F0LABRxm/os+18VBUcbmz98LkJid1sEj++4X41rcdbcCzhBqpTcIxn6YB4nJsHuF6JY9/sMq6bqN1cGGG6Gd/g==',\n          },\n          {\n            name: 'identifier',\n            type: 'text',\n            required: true,\n          },\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n          },\n        ],\n      },\n    },\n  },\n}\n")),(0,r.kt)("p",null,"If the login form is filled out incorrectly, errors are included in the\nresponse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n  expires_at: '2020-01-27T16:48:53.8826084Z',\n  issued_at: '2020-01-27T16:38:53.8826392Z',\n  request_url: 'http://127.0.0.1:4455/auth/browser/login',\n  methods: {\n    password: {\n      method: 'password',\n      config: {\n        errors: [\n          {\n            message: 'Please check the data you provided.',\n          },\n        ],\n        action: 'http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/login/strategies/password?request=0cfb0f7e-3866-453c-9c23-28cc2cb7fead',\n        method: 'POST',\n        fields: [\n          /* ... */\n          {\n            name: 'password',\n            type: 'password',\n            required: true,\n            errors: [\n              {\n                message: 'password: password is required',\n              },\n            ],\n          },\n        ],\n      },\n    },\n  },\n}\n")),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"The Settings flow allows a user to change his/her password. This action will\nrequire the user to sign in again, unless the session is younger than the\nconfigured:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml"',title:'"path/to/kratos/config.yml"'},"selfservice:\n  settings:\n    # Sessions older than a minute requires the user to sign in again before\n    # the password is changed.\n    privileged_session_max_age: 1m\n")),(0,r.kt)("p",null,"The Settings Request payload for this strategy looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "71da1753-e135-441c-b4df-e7b7cd90ad88",\n  "expires_at": "2020-05-02T15:52:09.67209Z",\n  "issued_at": "2020-05-02T14:52:09.67209Z",\n  "request_url": "http://127.0.0.1:4433/self-service/browser/flows/settings",\n  "active": "password",\n  "methods": {\n    "password": {\n      "method": "password",\n      "config": {\n        "action": "http://127.0.0.1:4455/.ory/kratos/public/self-service/browser/flows/settings/strategies/password?request=71da1753-e135-441c-b4df-e7b7cd90ad88",\n        "method": "POST",\n        "fields": [\n          {\n            "name": "password",\n            "type": "password",\n            "required": true\n          },\n          {\n            "name": "csrf_token",\n            "type": "hidden",\n            "required": true,\n            "value": "UjEPiUMubRiAl0NG7yUzsww8XjpJvW+HBrh6JirjLxPqhlW2ql+0kYknjd8gdsx0v08vQSmqUEcZhNPsvkr2Kw=="\n          }\n        ]\n      }\n    }\n  },\n  "identity": {\n    "id": "f48c43bb-50ea-4520-9280-37a891175aba",\n    "traits": {\n      "email": "h71x9a@j6r8c"\n    }\n  },\n  "update_successful": false\n}\n')),(0,r.kt)("p",null,"If the form validation fails, an error will bei included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '71da1753-e135-441c-b4df-e7b7cd90ad88',\n  // expires_at, ...\n  active: 'password',\n  methods: {\n    config: {\n      // action, method ...\n      errors: [\n        {\n          message: 'Please check the data you provided.',\n        },\n      ],\n      fields: [\n        // ...\n        {\n          name: 'password',\n          type: 'password',\n          required: true,\n          errors: [\n            {\n              message: 'password: password is required',\n            },\n          ],\n        },\n      ],\n    },\n  },\n  // identity, ...\n  update_successful: false,\n}\n")),(0,r.kt)("p",null,"A successful flow will be marked with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '71da1753-e135-441c-b4df-e7b7cd90ad88',\n  // expires_at, ...\n  update_successful: true,\n}\n")),(0,r.kt)("p",null,"Apart from that, there is nothing else to configure. Just render the HTML Form\nwhich includes the update password field!"),(0,r.kt)("h3",{id:"settings-1"},"Settings"),(0,r.kt)("p",null,"FIXME - TO BE DONE"),(0,r.kt)("h2",{id:"api-clients"},"API Clients"),(0,r.kt)("p",null,"API-based login and registration using this strategy will be addressed in a\nfuture release of ORY Kratos."),(0,r.kt)("h2",{id:"security-and-defenses"},"Security and Defenses"),(0,r.kt)("p",null,"Password-based authentication flows are subject to frequent abuse through"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Social Engineering Attacks;"),(0,r.kt)("li",{parentName:"ul"},"Password Guessing Attacks;"),(0,r.kt)("li",{parentName:"ul"},"Phishing Attacks.")),(0,r.kt)("h3",{id:"anti-automation"},"Anti-automation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is a work in progress and is tracked as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/138"},"kratos#133"),".")),(0,r.kt)("p",null,"Actions that cause out-of-band communications, such as sending an activation\nlink via email or an activation code via SMS, can be abused by automated\nsystems. The goal of such an attack is to send out so many emails or SMS, that\nyour reputation worsens (spam filters) or you're faced with massive costs\n(carrier fees)."),(0,r.kt)("p",null,"CAPTCHA renders these attacks either very difficult or impossible. ORY Kratos\nhas CAPTCHA support built-in. ORY Kratos will prompt the user to complete a\nCAPTCHA in the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The user tries to register more than one account within 72 hours."),(0,r.kt)("li",{parentName:"ul"},"The user failed provide valid credentials for the third time within 12 hours."),(0,r.kt)("li",{parentName:"ul"},"The user tries to recover their account for the second time within 72 hours.")),(0,r.kt)("p",null,"For integration guidelines, please check the individual flow's (registration,\nlogin, account recovery) integration documentation."),(0,r.kt)("h3",{id:"account-takeover-defenses"},"Account Takeover Defenses"),(0,r.kt)("p",null,"The Settings flow implements account takeover defenses as it is not possible to\nchange the password without knowing the existing password. A good example of\nthis flow is the\n",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/authenticating-to-github/sudo-mode"},"GitHub sudo mode"),"."),(0,r.kt)("h3",{id:"password-validation"},"Password Validation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Further improvements are work in progress and are tracked on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues?q=is%3Aopen+label%3Amodule%3Ass%2Fpassword+"},"GitHub"))),(0,r.kt)("p",null,"To prevent weak passwords ORY Kratos implements different measures. Users often\nchoose passwords similar to their traits. To prevent this ORY Kratos ensures\nthere is a sufficient\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Levenshtein_distance"},"Levenshtein-Distance"),' (aka\n"Edit-Distance") between the identifier and the password. It also makes sure\nthat the identifier and password have a small enough longest common substring.'),(0,r.kt)("p",null,"Furthermore the ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," strategy comes with a build-in check against the\n",(0,r.kt)("a",{parentName:"p",href:"https://haveibeenpwned.com"},'"Have I been pwned"'),' breach database. This way ORY\nKratos makes sure your users cannot use passwords like "password", "123456" or\nany other commonly used one. To protect the value of the password the\n',(0,r.kt)("a",{parentName:"p",href:"https://haveibeenpwned.com/API/v3#SearchingPwnedPasswordsByRange"},"range API")," is\nbeing used."),(0,r.kt)("h3",{id:"account-enumeration-defenses-work-in-progress"},"Account Enumeration Defenses (work in progress)"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature is a work in progress and is tracked as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/133"},"kratos#133"),"."),(0,r.kt)("p",{parentName:"div"},"It does not yet work as documented!"))),(0,r.kt)("p",null,'Account enumeration attacks allow a attacker to find out who is signed up. This\ncompromises the privacy of your users and can hurt reputation depending on the\nservice (e.g. "adult content").'),(0,r.kt)("p",null,"This attack usually makes only sense if an email address or a phone number is\ncollected during registration. For chosen usernames, this attack is much more\ndifficult, as the attacker has to know what usernames the victim is using."),(0,r.kt)("p",null,"There are three common ways an attacker can figure out if a user is signed up at\na service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'During login: "No user with this email address was found"'),(0,r.kt)("li",{parentName:"ul"},'During registration: "A user with this email address exists already"'),(0,r.kt)("li",{parentName:"ul"},'During password reset: "No user with this email address was found"')),(0,r.kt)("p",null,"To mitigate this attack, the following strategies need to be deployed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The login form should return the same message regardless of whether the\npassword is wrong or the email/username does not exist: "The provided\ncredentials are invalid."'),(0,r.kt)("li",{parentName:"ul"},"The password reset form should always return a success message and send out an\nemail. If the email address is registered, a normal password reset email is\nsent. If the email address is not registered, an email is sent to the address\nindicating that no account is set up with that email address. This is helpful\nto users that have multiple email addresses and are using the wrong email\naddress for the password reset."),(0,r.kt)("li",{parentName:"ul"},'The registration form should also always return a success message and send out\nan email. If the email address is not yet registered, a regular "account\nactivation" email is sent out. If the email address is registered already, a\nemail is sent out telling the user that the account is already set up, and\nlink to the login screen.')),(0,r.kt)("p",null,"If you wish to mitigate account enumeration attacks, it is important to note\nthat you can not sign in users directly after sign up! Depending on the type of\nservice you provide, you might not care about this specific attack in which case\ndirect login after sign up would be ok."),(0,r.kt)("h4",{id:"enabling-account-enumeration-defenses"},"Enabling Account Enumeration Defenses"),(0,r.kt)("p",null,"Assuming you wish to enable account enumeration defenses, you need to configure\nORY Kratos as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collect one or more email addresses during sign up and enable email\nverification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do not")," enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"session")," post-registration workflow. Use only the\n",(0,r.kt)("inlineCode",{parentName:"li"},"redirect")," post-registration workflow.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  registration:\n    after:\n      password:\n        # !! DO NOT enable `session` or all registration processes will fail!!\n        # - hook: session\n\n        # You **must** enable identifier verification or no email will be sent and the registration is thus just a blank\n        # entry in the database with no way of logging in.\n        - hook: verify\n")),(0,r.kt)("h4",{id:"disable-account-enumeration-defenses"},"Disable Account Enumeration Defenses"),(0,r.kt)("p",null,"Enforcing email verification, which requires an email round trip and disrupts\nthe sign up process, is not always feasible. In these cases, you might want to\ndisable account enumeration defenses."),(0,r.kt)("p",null,"You can disable the defense mechanism on a per-field basis in your Identity\nTraits Schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="path/to/my/identity.traits.schema.json"',title:'"path/to/my/identity.traits.schema.json"'},"{\n  $id': 'https://example.com/identity.traits.schema.json',\n  $schema': 'http://json-schema.org/draft-07/schema#',\n  title': 'Person',\n  type': 'object',\n  properties':\n    {\n      'username':\n        {\n          'type': 'string',\n          'ory.sh/kratos':\n            {\n              'credentials':\n                {\n                  'password':\n                    {\n                      'identifier': true,\n                      'disable_account_enumeration_defenses': true,\n                    },\n                },\n            },\n        },\n    },\n}\n")),(0,r.kt)("p",null,'This will tell ORY Kratos to display messages such as "a user with this email\naddress exists already" and "no user with this email address is registered on\nthis site". You can then enable the ',(0,r.kt)("inlineCode",{parentName:"p"},"session")," post-registration workflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"selfservice:\n  registration:\n    after:\n      password:\n        - hook: session\n        # You can optionally enable verification of the provided email address(es) or phone number(s)\n        # - hook: verify\n")))}p.isMDXComponent=!0}}]);