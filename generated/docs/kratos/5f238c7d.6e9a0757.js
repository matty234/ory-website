(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(3),r=t(7),a=(t(0),t(447)),i={id:"openid-connect-oidc-oauth2",title:"Social Sign In, OpenID Connect, and OAuth2"},c={unversionedId:"concepts/credentials/openid-connect-oidc-oauth2",id:"version-v0.2/concepts/credentials/openid-connect-oidc-oauth2",isDocsHomePage:!1,title:"Social Sign In, OpenID Connect, and OAuth2",description:"OpenID Connect is undergoing active refactoring and these docs will change. See",source:"@site/versioned_docs/version-v0.2/concepts/credentials/openid-connect-oidc-oauth2.md",slug:"/concepts/credentials/openid-connect-oidc-oauth2",permalink:"/kratos/docs/v0.2/concepts/credentials/openid-connect-oidc-oauth2",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/credentials/openid-connect-oidc-oauth2.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,sidebar:"version-v0.2/docs",previous:{title:"Username / Email & Password",permalink:"/kratos/docs/v0.2/concepts/credentials/username-email-password"},next:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/v0.2/concepts/email-sms"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"JSON Schema",id:"json-schema",children:[]},{value:"Example: Sign in with GitHub",id:"example-sign-in-with-github",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"OpenID Connect is undergoing active refactoring and these docs will change. See\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ory/kratos/pull/381"}),"#381"),"."))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"oidc")," method uses OpenID Connect, or OAuth2 where OpenID Connect is not\nsupported, to authenticate identities using a third-party identity provider,\nsuch as Google, Microsoft, GitHub - or any other OAuth2 / OpenID Connect\nprovider (for example ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ory.sh/hydra"}),"ORY Hydra"),")."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"You can configure multiple OAuth2 / OpenID Connect providers. First, enable the\n",Object(a.b)("inlineCode",{parentName:"p"},"oidc")," method:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"selfservice:\n  strategies:\n    oidc:\n      enabled: true\n")),Object(a.b)("p",null,"Next, you need to configure the providers you want to use (e.g. GitHub). Each\nprovider requires:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'id: github # The ID of the provider. DO NOT change this once this is in use.\n\n# The provider you would like to use. ORY Kratos comes with some predefined providers to make\n# life easier for you, but you can always opt for the "generic" provider, which works\n# with any Certified OpenID Connect Provider (Google, ORY Hydra, ...):\nprovider: generic\n\n# Other supported providers are (more to come):\n#\n# provider: github\n# provider: google\n\n# The OAuth2 / OpenID Connect provider will provide you with a OAuth2 Client ID and Client Secret. You need\n# to set them here:\nclient_id: ...\nclient_secret: ...\n\nschema_url: http://mydomain.com/github.schema.json # See section "Schema"\n\n# What scope to request. Usually, this would be something like "profile" or "email".\n# Please check the documentation of the OAuth2 / OpenID Connect provider to see what\'s allowed here.\nscope:\n  - email\n\n# issuer_url is the OpenID Connect Server URL. You can leave this empty if `provider` is not set to `generic`.\n# If set, neither `auth_url` nor `token_url` are required.\nissuer_url: http://openid-connect-provider/\n\n# auth_url is the authorize url, typically something like: https://example.org/oauth2/auth\n# Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n# `provider` is set to `generic`.\nauth_url: http://openid-connect-provider/oauth2/auth\n\n# token_url is the token url, typically something like: https://example.org/oauth2/token\n# Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when\n# `provider` is set to `generic`.\ntoken_url: http://openid-connect-provider/oauth2/token\n')),Object(a.b)("h2",{id:"json-schema"},"JSON Schema"),Object(a.b)("p",null,"This strategy expects that you've set up your default JSON Schema for identity\ntraits. There are no extra settings for that."),Object(a.b)("p",null,"You do however need to set up an additional JSON Schema for your provider. This\nis required because we need to transform profile data coming from, for example\nGitHub, to your identity model."),Object(a.b)("p",null,"Defining that JSON Schema also allows you to require certain information. If you\nask the user to authorize the ",Object(a.b)("inlineCode",{parentName:"p"},"photos")," scope for example, you can configure the\nJSON Schema in such a way that ",Object(a.b)("inlineCode",{parentName:"p"},"photos")," must be part of the identity data or the\nflow will fail."),Object(a.b)("p",null,"You will also need to project data coming from the provider onto your own data\nmodel. You can express this using a JSON Path\n(",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/kratos/docs/v0.2/reference/json-schema-json-paths"}),"learn more about the syntax"),") in your\nJSON Schema. Let's assume you want to map field ",Object(a.b)("inlineCode",{parentName:"p"},"username")," from the provider to\nfield ",Object(a.b)("inlineCode",{parentName:"p"},"traits.name")," in your identity:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"{\n  '$id': 'https://example.com/social.schema.json',\n  '$schema': 'http://json-schema.org/draft-07/schema#',\n  'type': 'object',\n  'properties':\n    {\n      'username':\n        {\n          'type': 'string',\n          'ory.sh/kratos':\n            { 'mappings': { 'identity': { 'traits': [{ 'path': 'name' }] } } },\n        },\n    },\n  'required': ['username'],\n}\n")),Object(a.b)("p",null,"If the OpenID Connect provider returns"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "sub": "123123123",\n  "username": "john.doe"\n}\n')),Object(a.b)("p",null,"for example (",Object(a.b)("inlineCode",{parentName:"p"},"sub")," is the OpenID Connect field for the identity's ID), that\nwould be transformed to identity:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"id: '9f425a8d-7efc-4768-8f23-7647a74fdf13'\n\ncredentials:\n  oidc:\n    id: oidc\n    identifiers:\n      - example:123123123\n    config:\n      - provider: example\n        identifier: 123123123\n\ntraits_schema_url: http://foo.bar.com/person.schema.json # This come from the default identity schema url.\n\ntraits:\n  name: john.doe # This is extracted from `username` using\n")),Object(a.b)("h2",{id:"example-sign-in-with-github"},"Example: Sign in with GitHub"),Object(a.b)("p",null,'Let\'s say you want to enable "Sign in with GitHub". All you have to do is:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a\n",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/"}),"GitHub OAuth2 Client")),Object(a.b)("li",{parentName:"ul"},'Set the "Authorization callback URL" to:\n',Object(a.b)("inlineCode",{parentName:"li"},"http://<domain-of-ory-kratos>:<public-port>/auth/browser/methods/oidc/callback/<provider-id>"))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'selfservice:\n  strategies:\n    oidc:\n      enabled: true\n      config:\n        providers:\n          - id: github # this is `<provider-id>` in the Authorization callback URL\n            provider: github\n            client_id: .... # Replace this with the OAuth2 Client ID provided by GitHub\n            client_secret: .... # Replace this with the OAuth2 Client Secret provided by GitHub\n            schema_url: http://mydomain.com/github.schema.json # See section "Schema"\n            scope:\n              - user:email\n')),Object(a.b)("p",null,"The following schema would take ",Object(a.b)("inlineCode",{parentName:"p"},"email_primary")," and ",Object(a.b)("inlineCode",{parentName:"p"},"username")," and map them into\nyour identity model to ",Object(a.b)("inlineCode",{parentName:"p"},"traits.email")," and ",Object(a.b)("inlineCode",{parentName:"p"},"traits.name"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$id": "http://mydomain.com/github.schema.json ",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n    "email_primary": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "mappings": {\n          "identity": {\n            "traits": [\n              {\n                "path": "email"\n              }\n            ]\n          }\n        }\n      }\n    },\n    "username": {\n      "type": "string",\n      "ory.sh/kratos": {\n        "mappings": {\n          "identity": {\n            "traits": [\n              {\n                "path": "name"\n              }\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"More examples will soon follow."))}l.isMDXComponent=!0},447:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return t?r.a.createElement(m,c(c({ref:n},p),{},{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);