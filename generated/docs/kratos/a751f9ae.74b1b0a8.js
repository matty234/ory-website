(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{303:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(9),i=(t(0),t(395)),o={id:"credentials",title:"Credentials"},s={id:"version-v0.1/concepts/credentials",isDocsHomePage:!1,title:"Credentials",description:"Each identity has one or more credentials associated with it:",source:"@site/versioned_docs/version-v0.1/concepts/credentials.md",permalink:"/kratos/docs/v0.1/concepts/credentials",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/concepts/credentials.md",version:"v0.1",lastUpdatedBy:"hackerman",lastUpdatedAt:1588432565,sidebar:"version-v0.1/docs",previous:{title:"Identity and User Model",permalink:"/kratos/docs/v0.1/concepts/identity-user-model"},next:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/v0.1/concepts/email-sms"},latestVersionMainDocPermalink:"/kratos/docs"},c=[{value:"Username and Password",id:"username-and-password",children:[{value:"Configuration",id:"configuration",children:[]},{value:"JSON Schema",id:"json-schema",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Social Sign In / OpenID Connect / OAuth2",id:"social-sign-in--openid-connect--oauth2",children:[{value:"Configuration",id:"configuration-1",children:[]},{value:"JSON Schema",id:"json-schema-1",children:[]},{value:"Example: Sign in with GitHub",id:"example-sign-in-with-github",children:[]}]}],l={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each identity has one or more credentials associated with it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n      - johnd@ory.sh\n    config:\n      hashed_password: ...\n  oidc:\n    id: oidc\n    identifiers:\n      - google:j8kf7a3...\n      - facebook:83475891...\n    config:\n      - provider: google\n        identifier: j8kf7a3\n      - provider: facebook\n        identifier: 83475891\n")),Object(i.b)("p",null,"ORY Kratos supports several credential types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password"),": The most common ",Object(i.b)("em",{parentName:"li"},"identifier (username, email, ...) + password"),"\ncredential."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"oidc"),': The "Log in with Google/Facebook/GitHub/..." credential.'),Object(i.b)("li",{parentName:"ul"},"Other credentials - support other credential types (X509 Certificates,\nBiometrics, ...) at will be added a later stage.")),Object(i.b)("p",null,"Each credential - regardless of its type - has one or more identifiers attached\nto it. Each identifier is universally unique. Assuming we had one identity with\ncredentials"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n")),Object(i.b)("p",null,"and tried to create (or update) another identity with the same identifier\n(",Object(i.b)("inlineCode",{parentName:"p"},"john.doe@acme.com"),"), the system would reject the request with a 409 Conflict\nstate."),Object(i.b)("p",null,"While credentials must be unique per type, the can be duplicates amongst\nmultiple types:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# This is ok:\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")),Object(i.b)("p",null,"The same would apply if those were two separate identities:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Identity 1\ncredentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@acme.com\n---\n# Identity 2\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - john.doe@acme.com\n")),Object(i.b)("h2",{id:"username-and-password"},"Username and Password"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"password")," method is the most commonly used form of authentication, it\nrequires an ",Object(i.b)("inlineCode",{parentName:"p"},"identifier")," (username, email, phone number, ...) and a ",Object(i.b)("inlineCode",{parentName:"p"},"password"),"\nduring registration and login."),Object(i.b)("p",null,"ORY Kratos hashes the password after registration, password reset, and password\nchange using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/P-H-C/phc-winner-argon2"}),"Argon2"),", the winner of\nthe Password Hashing Competition (PHC)."),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Enabling this method is as easy as setting"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  strategies:\n    password:\n      enabled: true\n")),Object(i.b)("p",null,"in your ORY Kratos configuration. You can configure the Argon2 hasher using the\nfollowing options:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"hashers:\n  argon2:\n    parallelism: 1\n    memory: 131072 # 128MB\n    iterations: 3\n    salt_length: 16\n    key_length: 32\n")),Object(i.b)("p",null,"For a complete reference, defaults, and description please check the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/reference/configuration"}),"Configuration Reference"),"."),Object(i.b)("p",null,"For a better understanding of security implications imposed by Argon2\nConfiguration, head over to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/concepts/security#argon2"}),"Argon2 Security"),"."),Object(i.b)("h3",{id:"json-schema"},"JSON Schema"),Object(i.b)("p",null,"When processing an identity and its traits, the method will use the JSON Schema\nto extract one or more identifiers. Assuming you want your identities to sign up\nwith an email address, and use that email address as a valid identifier during\nlogin, you can use a schema along the lines of:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"If you want a unique username instead, you could write the schema as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "username": {\n      "type": "string",\n      "title": "Username",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,'You are not limited to one identifier per identity. You could also combine both\nfields and support a use case of "username" and "email" as an identifier for\nlogin:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "title": "Username",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Assuming your traits schema is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "first_name": {\n      "type": "string"\n    },\n    "email": {\n      "type": "string",\n      "format": "email",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    }\n  },\n  "additionalProperties": false\n}\n')),Object(i.b)("p",null,"And an identity registers with the following JSON payload (more on registration\nin\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../self-service/flows/user-login-user-registration.mdx"}),"Selfservice Registration"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "traits": {\n    "first_name": "John Doe",\n    "email": "john.doe@example.org",\n    "username": "johndoe123"\n  },\n  "password": "my-secret-password"\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"password")," method would generate a credentials block as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@example.org\n      - johndoe123\n    config:\n      hashed_password: ... # this would be `argon2(my-secret-password)`\n")),Object(i.b)("p",null,"Because credential identifiers need to be unique, no other identity can be\ncreated that has ",Object(i.b)("inlineCode",{parentName:"p"},"johndoe123")," or ",Object(i.b)("inlineCode",{parentName:"p"},"john.doe@example.org")," as their ",Object(i.b)("inlineCode",{parentName:"p"},"email")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"username"),"."),Object(i.b)("h2",{id:"social-sign-in--openid-connect--oauth2"},"Social Sign In / OpenID Connect / OAuth2"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"oidc")," method uses OpenID Connect, or OAuth2 where OpenID Connect is not\nsupported, to authenticate identities using a third-party identity provider,\nsuch as Google, Microsoft, GitHub - or any other OAuth2 / OpenID Connect\nprovider (for example ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/hydra"}),"ORY Hydra"),")."),Object(i.b)("h3",{id:"configuration-1"},"Configuration"),Object(i.b)("p",null,"You can configure multiple OAuth2 / OpenID Connect providers. First, enable the\n",Object(i.b)("inlineCode",{parentName:"p"},"oidc")," method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  strategies:\n    oidc:\n      enabled: true\n")),Object(i.b)("p",null,"Next, you need to configure the providers you want to use (e.g. GitHub). Each\nprovider requires:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'id: github # The ID of the provider. DO NOT change this once this is in use.\n\n# The provider you would like to use. ORY Kratos comes with some predefined providers to make\n# life easier for you, but you can always opt for the "generic" provider, which works\n# with any Certified OpenID Connect Provider (Google, ORY Hydra, ...):\nprovider: generic\n\n# Other supported providers are (more to come):\n#\n# provider: github\n# provider: google\n\n# The OAuth2 / OpenID Connect provider will provide you with a OAuth2 Client ID and Client Secret. You need\n# to set them here:\nclient_id: ...\nclient_secret: ...\n\nschema_url: http://mydomain.com/github.schema.json # See section "Schema"\n\n# What scope to request. Usually, this would be something like "profile" or "email".\n# Please check the documentation of the OAuth2 / OpenID Connect provider to see what\'s allowed here.\nscope:\n  - email\n\n# issuer_url is the OpenID Connect Server URL. You can leave this empty if `provider` is not set to `generic`.\n# If set, neither `auth_url` nor `token_url` are required.\nissuer_url: http://openid-connect-provider/\n\n# auth_url is the authorize url, typically something like: https://example.org/oauth2/auth\n# Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n# `provider` is set to `generic`.\nauth_url: http://openid-connect-provider/oauth2/auth\n\n# token_url is the token url, typically something like: https://example.org/oauth2/token\n# Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n# `provider` is set to `generic`.\ntoken_url: http://openid-connect-provider/oauth2/token\n')),Object(i.b)("h3",{id:"json-schema-1"},"JSON Schema"),Object(i.b)("p",null,"This strategy expects that you've set up your default JSON Schema for identity\ntraits. There are no extra settings for that."),Object(i.b)("p",null,"You do however need to set up an additional JSON Schema for your provider. This\nis required because we need to transform profile data coming from, for example\nGitHub, to your identity model."),Object(i.b)("p",null,"Defining that JSON Schema also allows you to require certain information. If you\nask the user to authorize the ",Object(i.b)("inlineCode",{parentName:"p"},"photos")," scope for example, you can configure the\nJSON Schema in such a way that ",Object(i.b)("inlineCode",{parentName:"p"},"photos")," must be part of the identity data or the\nflow will fail."),Object(i.b)("p",null,"You will also need to project data coming from the provider onto your own data\nmodel. You can express this using a JSON Path\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.1/reference/json-schema-json-paths"}),"learn more about the syntax"),") in your\nJSON Schema. Let's assume you want to map field ",Object(i.b)("inlineCode",{parentName:"p"},"username")," from the provider to\nfield ",Object(i.b)("inlineCode",{parentName:"p"},"traits.name")," in your identity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"{\n  '$id': 'https://example.com/social.schema.json',\n  '$schema': 'http://json-schema.org/draft-07/schema#',\n  'type': 'object',\n  'properties':\n    {\n      'username':\n        {\n          'type': 'string',\n          'ory.sh/kratos':\n            { 'mappings': { 'identity': { 'traits': [{ 'path': 'name' }] } } },\n        },\n    },\n  'required': ['username'],\n}\n")),Object(i.b)("p",null,"If the OpenID Connect provider returns"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "sub": "123123123",\n  "username": "john.doe"\n}\n')),Object(i.b)("p",null,"for example (",Object(i.b)("inlineCode",{parentName:"p"},"sub")," is the OpenID Connect field for the identity's ID), that\nwould be transformed to identity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"id: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - example:123123123\n    config:\n      - provider: example\n        identifier: 123123123\n\ntraits_schema_url: http://foo.bar.com/person.schema.json # This come from the default identity schema url.\n\ntraits:\n  name: john.doe # This is extracted from `username` using\n")),Object(i.b)("h3",{id:"example-sign-in-with-github"},"Example: Sign in with GitHub"),Object(i.b)("p",null,'Let\'s say you want to enable "Sign in with GitHub". All you have to do is:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/"}),"GitHub OAuth2 Client")),Object(i.b)("li",{parentName:"ul"},'Set the "Authorization callback URL" to:\n',Object(i.b)("inlineCode",{parentName:"li"},"http://<domain-of-ory-kratos>:<public-port>/auth/browser/methods/oidc/callback/<provider-id>"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'selfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: github # this is `<provider-id>` in the Authorization callback URL\n            provider: github\n            client_id: .... # Replace this with the OAuth2 Client ID provided by GitHub\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by GitHub\n            schema_url: http://mydomain.com/github.schema.json # See section "Schema"\n            scope:\n              - user:email\n')),Object(i.b)("p",null,"The following schema would take ",Object(i.b)("inlineCode",{parentName:"p"},"email_primary")," and ",Object(i.b)("inlineCode",{parentName:"p"},"username")," and map them into\nyour identity model to ",Object(i.b)("inlineCode",{parentName:"p"},"traits.email")," and ",Object(i.b)("inlineCode",{parentName:"p"},"traits.name"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "http://mydomain.com/github.schema.json ",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "email_primary": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "mappings": {\n          "identity": {\n            "traits": [\n              {\n                "path": "email"\n              }\n            ]\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "mappings": {\n          "identity": {\n            "traits": [\n              {\n                "path": "name"\n              }\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"More examples will soon follow."))}p.isMDXComponent=!0},395:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?r.a.createElement(b,s(s({ref:n},l),{},{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);