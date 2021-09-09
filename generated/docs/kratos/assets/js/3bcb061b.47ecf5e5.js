(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[38223],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||s;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79652:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=t(22122),r=t(19756),s=(t(67294),t(3905)),o=["components"],i={id:"username-email-password",title:"Username / Email & Password"},l=void 0,d={unversionedId:"concepts/credentials/username-email-password",id:"version-v0.5/concepts/credentials/username-email-password",isDocsHomePage:!1,title:"Username / Email & Password",description:"The password method is the most commonly used form of authentication, it",source:"@site/versioned_docs/version-v0.5/concepts/credentials/username-email-password.mdx",sourceDirName:"concepts/credentials",slug:"/concepts/credentials/username-email-password",permalink:"/kratos/docs/v0.5/concepts/credentials/username-email-password",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.5/concepts/credentials/username-email-password.mdx",tags:[],version:"v0.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1607456241,formattedLastUpdatedAt:"12/8/2020",frontMatter:{id:"username-email-password",title:"Username / Email & Password"},sidebar:"version-v0.5/docs",previous:{title:"Overview",permalink:"/kratos/docs/v0.5/concepts/credentials"},next:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/v0.5/concepts/credentials/openid-connect-oidc-oauth2"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Choosing between Username, Email, Phone Number",id:"choosing-between-username-email-phone-number",children:[{value:"Picking the right Identity JSON Schema",id:"picking-the-right-identity-json-schema",children:[]},{value:"Use Case: Phone Number And Password",id:"use-case-phone-number-and-password",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," method is the most commonly used form of authentication, it\nrequires an ",(0,s.kt)("inlineCode",{parentName:"p"},"identifier")," (username, email, phone number, ...) and a ",(0,s.kt)("inlineCode",{parentName:"p"},"password"),"\nduring registration and login."),(0,s.kt)("p",null,"ORY Kratos hashes the password after registration, password reset, and password\nchange using the ",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/security#Argon2"},"Argon2 Hashing Algorithm"),", the winner\nof the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/P-H-C/phc-winner-argon2"},"Password Hashing Competition (PHC)"),"."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Enabling this method is as easy as setting"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nselfservice:\n  methods:\n    password:\n      enabled: true\n")),(0,s.kt)("p",null,"in your ORY Kratos configuration. You can configure the Argon2 hasher using the\nfollowing options:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\nhashers:\n  argon2:\n    parallelism: 1\n    memory: 131072 # 128MB\n    iterations: 3\n    salt_length: 16\n    key_length: 32\n")),(0,s.kt)("p",null,"When a user signs up using this method, the Default Identity JSON Schema (set\nusing ",(0,s.kt)("inlineCode",{parentName:"p"},"identity.default_schema_url"),") is used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"identity:\n  default_schema_url: file:///path/to/default-identity.schema.json\n  # also works with HTTP(S):\n  #\n  # default_schema_url: https://mydomain.com/path/to/default-identity.schema.json\n")),(0,s.kt)("p",null,"If you don't know what that means, please read the\n",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/identity-data-model"},"Identity Data Model Chapter")," in the\ndocs' concepts section."),(0,s.kt)("p",null,"For a complete reference, defaults, and description please check the\n",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/reference/configuration"},"Configuration Reference"),"."),(0,s.kt)("p",null,"For a better understanding of security implications imposed by Argon2\nConfiguration, head over to ",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/security#argon2"},"Argon2 Security"),"."),(0,s.kt)("h2",{id:"choosing-between-username-email-phone-number"},"Choosing between Username, Email, Phone Number"),(0,s.kt)("p",null,"Before you start, you need to decide what data you want to collect from your\nusers and why! It is hard to change this decision afterwards, so make sure\nyou've taken everything into account!"),(0,s.kt)("p",null,"When logging in, the user will use a login identifier and a password to sign up\nand in. The identifier can be"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'a username - e.g. "john.doe" or "johndoe123" or "oryuser",'),(0,s.kt)("li",{parentName:"ul"},"an email address - e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"john.doe@gmail.com"),","),(0,s.kt)("li",{parentName:"ul"},"a phone number - e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"+49-1234-4321-1234-4321"),".")),(0,s.kt)("p",null,"All of these approaches have up- and downsides."),(0,s.kt)("p",null,'Using the email address as the login identifier is easy to remember, does not\nrequire additional fields (because the email address is already being\ncollected), and is usually unique. It\'s usually unique because sometimes\ncompanies use a "shared" email account (e.g. ',(0,s.kt)("a",{parentName:"p",href:"mailto:office@acme.org"},"office@acme.org"),") to access\nservices. In that case, multiple real identities are using the same email\nidentifier to log in."),(0,s.kt)("p",null,"The email address however represents a unique identifier and personally\nidentifiable information (PII). An attacker could for example check if an email\naddress (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"john.doe@gmail.com"),") is registered at a site (e.g. an adult\nwebsite) and use that information for blackmail (see\n",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/concepts/security#account-enumeration-attacks"},"Account Enumeration Attacks"),")."),(0,s.kt)("p",null,"The same considerations apply to using a phone number as the primary\nregistration & login identifier."),(0,s.kt)("p",null,'Using a free text username reduces the privacy risk because it is much harder to\nmake a connection between the username and a real world identity. It\'s still\npossible in cases where users choose a username such as\n"john.doe.from.newyork.1970", but finding the right username identifier is still\ndifficult and there is plausible deniability because anyone could use that\nusername.'),(0,s.kt)("p",null,"A free text username however requires capturing additional fields (e.g. an email\naddress for password resets / account recovery) and is hard to remember. It is\noften very difficult to find unique usernames as people tend to use a\ncombination of their names and initials (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"john.doe"),") which has a high\nchance of collision. Therefore, one ends up with usernames such as\n",(0,s.kt)("inlineCode",{parentName:"p"},"john.doe1234432"),"."),(0,s.kt)("p",null,"It is important to understand that ORY Kratos lowercases all ",(0,s.kt)("inlineCode",{parentName:"p"},"password"),"\nidentifiers and therefore E-Mail addresses. Characters ",(0,s.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,s.kt)("inlineCode",{parentName:"p"},".")," which have\nspecial meaning for some E-Mail Providers (e.g. GMail) are not normalized:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"userNAME")," is equal to ",(0,s.kt)("inlineCode",{parentName:"li"},"username")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"foo@BaR.com")," is equal to ",(0,s.kt)("inlineCode",{parentName:"li"},"foo@bar.com")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"foo+baz@bar.com")," is NOT equal to ",(0,s.kt)("inlineCode",{parentName:"li"},"foo@bar.com")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"foo.baz@bar.com")," is NOT equal to ",(0,s.kt)("inlineCode",{parentName:"li"},"foobaz@bar.com"))),(0,s.kt)("p",null,"You need to decide which route you want to take."),(0,s.kt)("h3",{id:"picking-the-right-identity-json-schema"},"Picking the right Identity JSON Schema"),(0,s.kt)("p",null,"When processing an identity and its traits, the method will use\n",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/reference/json-schema-json-paths"},"JSON Schema")," to extract one or more\nidentifiers."),(0,s.kt)("h4",{id:"use-case-email-and-password"},"Use Case: Email and Password"),(0,s.kt)("p",null,"To use the email address as the login identifier, define the following Identity\nJSON Schema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"use-case-multiple-e-mails-and-password"},"Use Case: Multiple E-Mails and Password"),(0,s.kt)("p",null,"You can allow users to sign up with multiple E-Mail Addresses and use any of\nthose for log in:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "emails": {\n          "type": "array",\n          "items": {\n            "type": "string",\n            "format": "email",\n            "ory.sh/kratos": {\n              "credentials": {\n                "password": {\n                  "identifier": true\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"use-case-username-and-password"},"Use Case: Username and Password"),(0,s.kt)("p",null,"To use a username as the login identifier, define the following Identity JSON\nSchema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"use-case-username-and-email-and-password"},"Use Case: Username and Email and Password"),(0,s.kt)("p",null,"You may also mix usernames and passwords:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/registration.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h3",{id:"use-case-phone-number-and-password"},"Use Case: Phone Number And Password"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This will be addressed in a future release and is tracked as\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/issues/137"},"kratos#137"),".")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"Assuming your Identity JSON Schema is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.com/example.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "first_name": {\n          "type": "string"\n        },\n        "email": {\n          "type": "string",\n          "format": "email",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "username": {\n          "type": "string",\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')),(0,s.kt)("p",null,"And an identity registers with the following JSON payload (more on registration\nin ",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.5/self-service/flows/user-registration"},"Selfservice Registration"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n    "first_name": "John Doe",\n    "email": "john.doe@example.org",\n    "username": "johndoe123"\n  },\n  "password": "my-secret-password"\n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," method would generate a credentials block as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  password:\n    id: password\n    identifiers:\n      - john.doe@example.org\n      - johndoe123\n    config:\n      hashed_password: ... # this would be `argon2(my-secret-password)`\n")),(0,s.kt)("p",null,"Because credential identifiers need to be unique, no other identity can be\ncreated that has ",(0,s.kt)("inlineCode",{parentName:"p"},"johndoe123")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"john.doe@example.org")," as their ",(0,s.kt)("inlineCode",{parentName:"p"},"email")," or\n",(0,s.kt)("inlineCode",{parentName:"p"},"username"),"."))}m.isMDXComponent=!0}}]);