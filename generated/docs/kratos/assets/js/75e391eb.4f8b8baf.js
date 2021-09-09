(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[95350],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=p(r),u=a,m=f["".concat(l,".").concat(u)]||f[u]||c[u]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13749:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],s={},l=void 0,p={unversionedId:"self-service/flows/user-profile-management",id:"version-v0.1/self-service/flows/user-profile-management",isDocsHomePage:!1,title:"user-profile-management",description:"ORY Kratos allows users to update their own profile information using two",source:"@site/versioned_docs/version-v0.1/self-service/flows/user-profile-management.md",sourceDirName:"self-service/flows",slug:"/self-service/flows/user-profile-management",permalink:"/kratos/docs/v0.1/self-service/flows/user-profile-management",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/self-service/flows/user-profile-management.md",tags:[],version:"v0.1",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,formattedLastUpdatedAt:"9/14/2020",frontMatter:{},sidebar:"version-v0.1/docs",previous:{title:"User Logout",permalink:"/kratos/docs/v0.1/self-service/flows/user-logout"},next:{title:"Account Recovery",permalink:"/kratos/docs/v0.1/self-service/flows/password-reset-account-recovery"}},d=[{value:"Self-Service User Profile Management for Browser Applications",id:"self-service-user-profile-management-for-browser-applications",children:[{value:"Server-Side Browser Applications",id:"server-side-browser-applications",children:[]},{value:"Client-Side Browser Applications",id:"client-side-browser-applications",children:[]}]},{value:"Self-Service User Profile Management for API Clients",id:"self-service-user-profile-management-for-api-clients",children:[]}],c={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Kratos allows users to update their own profile information using two\nprincipal flows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browser-based (easy): This flow works for all applications running on top of a\nbrowser. Websites, single-page apps, Cordova/Ionic, and so on."),(0,i.kt)("li",{parentName:"ul"},"API-based (advanced): This flow works for native applications like iOS\n(Swift), Android (Java), Microsoft (.NET), React Native, Electron, and others.")),(0,i.kt)("p",null,"This flow does not allow updates of security-sensitive information such as the\npassword, fields associated with login (e.g. email), fields associated with\naccount recovery (e.g. recovery email address). These fields must be updated\nusing a separate flow which requires prior security checks."),(0,i.kt)("p",null,"The updated profile must be valid against the JSON Schema defined for its\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/concepts/identity-user-model"},"Identity Traits"),'. If one or more fields\ndo not validate (e.g. "Not an email"), the profile will not be updated.'),(0,i.kt)("p",null,"The only required configuration is setting the Profile UI URL in the\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/reference/configuration"},"ORY Kratos configuration file"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"urls:\n  profile_ui: https://.../..\n")),(0,i.kt)("h2",{id:"self-service-user-profile-management-for-browser-applications"},"Self-Service User Profile Management for Browser Applications"),(0,i.kt)("p",null,"This flow is similar to\n",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/user-login-user-registration"},"User Login and User Registration")," but does not\nsupport before/after work flows or individual strategies. It uses the already\nestablished ",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/index#network-flows-for-browsers"},"Network Flows for Browsers"),"."),(0,i.kt)("h3",{id:"server-side-browser-applications"},"Server-Side Browser Applications"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.1/self-service/flows/index#network-flows-for-browsers"},"Network Flows for Browsers")," works as\nfollows for Profile Management:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An initial HTTP Request is made to\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://example.org/.ory/kratos/public/self-service/browser/flows/profile"),"."),(0,i.kt)("li",{parentName:"ol"},"ORY Kratos redirects the browser to the URL set in ",(0,i.kt)("inlineCode",{parentName:"li"},"urls.profile_ui")," and\nappends the ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," URL Query Parameter (e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://example.org/profile?request=abcde"),")."),(0,i.kt)("li",{parentName:"ol"},"The Endpoint at ",(0,i.kt)("inlineCode",{parentName:"li"},"/profile")," makes a HTTP GET Request to\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/profile?request=abcde"),"\nand fetches Profile Management Request JSON Payload that represent the\nindividual fields that can be updated."),(0,i.kt)("li",{parentName:"ol"},"The User updates the profile data and sends a HTTP POST request to\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://example.org/.ory/kratos/public/self-service/browser/flows/profile/update?request=abcde"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the profile data is invalid, all validation errors will be collected and\nadded to the Profile Management JSON Payload. The Browser is redirected to\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"urls.profile_ui")," URL (e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://example.org/profile?request=abcde"),")."),(0,i.kt)("li",{parentName:"ul"},"If the profile data is valid, the identity's traits are updated and the\nprocess is complete.")))),(0,i.kt)("p",null,"Assuming the Identity's Traits JSON Schema is defined as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://example.org/identity.traits.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "email": {\n      "type": "string",\n      "format": "email",\n      "title": "E-Mail",\n      "minLength": 3,\n      "ory.sh/kratos": {\n        "credentials": {\n          "password": {\n            "identifier": true\n          }\n        }\n      }\n    },\n    "name": {\n      "type": "object",\n      "properties": {\n        "first": {\n          "type": "string",\n          "minLength": 5\n        },\n        "last": {\n          "type": "string"\n        }\n      }\n    }\n  },\n  "required": ["email"],\n  "additionalProperties": false\n}\n')),(0,i.kt)("p",null,"the resulting JSON Payload coming from\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/profile?request=abcde"),"\nwould look something along the lines of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "48068b5d-3438-4d6f-9955-331b96c41762",\n  "expires_at": "2020-01-27T23:03:58.5986947Z",\n  "issued_at": "2020-01-27T22:03:58.5987099Z",\n  "request_url": "http://127.0.0.1:4455/profiles",\n  "form": {\n    "action": "https://example.org/.ory/kratos/public/profiles?48068b5d-3438-4d6f-9955-331b96c41762",\n    "method": "POST",\n    "fields": {\n      "csrf_token": {\n        "name": "csrf_token",\n        "type": "hidden",\n        "required": true,\n        "value": "+5+WxP7+leOpfjHHkWWe99APD7845i82p4wGtfdWKHBK5fFg4BS7JjzdeI7kdsOUElyrG10ZR5vIqi7asNpqAA=="\n      },\n      "traits.email": {\n        "name": "traits.email",\n        "type": "text",\n        "value": "foobar@ory.sh"\n      },\n      "traits.name.first": {\n        "name": "traits.name.first",\n        "type": "text",\n        "value": "Foobar"\n      },\n      "traits.name.last": {\n        "name": "traits.name.last",\n        "type": "text",\n        "value": "Barbaz"\n      }\n    }\n  },\n  "identity": {\n    "id": "c631e58a-445a-4844-ae80-f0b426a1e11e",\n    "traits_schema_id": "default",\n    "traits_schema_url": "https://example.org/identity.traits.schema.json",\n    "traits": {\n      "email": "foobar@ory.sh",\n      "name": {\n        "last": "Foobar",\n        "first": "Barbaz"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"If the user tries to save profile data that does not validate against the\nprovided JSON Schema, error payloads will be added to the fields affected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: '48068b5d-3438-4d6f-9955-331b96c41762',\n  // ...\n  form: {\n    // ...\n    fields: {\n      // ...\n      'traits.name.first': {\n        name: 'traits.name.first',\n        type: 'text',\n        value: 'abc',\n        errors: [\n          {\n            message: 'traits.name.first: Must be at least 5 characters long',\n          },\n        ],\n      },\n      // ...\n    },\n  },\n  // ...\n}\n")),(0,i.kt)("p",null,"Keep in mind that it is not possible to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"traits.email")," field as\nupdating that field requires prior authentication."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Updating these "protected" fields will be implemented in a future release of\nORY Kratos.')),(0,i.kt)("h3",{id:"client-side-browser-applications"},"Client-Side Browser Applications"),(0,i.kt)("p",null,"Because Client-Side Browser Applications do not have access to ORY Kratos' Admin\nAPI, they must use the ORY Kratos Public API instead. The flow for a Client-Side\nBrowser Application is almost the exact same as the one for Server-Side\nApplications, with the small difference that\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/self-service/browser/flows/requests/profile?request=abcde"),"\nwould be called via AJAX instead of making a request to\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://ory-kratos-admin.example-org.vpc/self-service/browser/flows/requests/profile?request=abcde"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To prevent brute force, guessing, session injection, and other attacks, it is\nrequired that cookies are working for this endpoint. The cookie set in the\ninitial HTTP request made to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.org/.ory/kratos/public/profiles"),"\nMUST be set and available when calling this endpoint!")),(0,i.kt)("h2",{id:"self-service-user-profile-management-for-api-clients"},"Self-Service User Profile Management for API Clients"),(0,i.kt)("p",null,"Will be addressed in a future release."))}f.isMDXComponent=!0}}]);