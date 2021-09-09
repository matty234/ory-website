(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[46609],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58639:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=["components"],s={id:"ui-user-interface",title:"User Interface"},l=void 0,p={unversionedId:"concepts/ui-user-interface",id:"version-v0.6/concepts/ui-user-interface",isDocsHomePage:!1,title:"User Interface",description:"Ory Kratos has no user interface included. Instead, it defines HTTP flows and",source:"@site/versioned_docs/version-v0.6/concepts/ui-user-interface.md",sourceDirName:"concepts",slug:"/concepts/ui-user-interface",permalink:"/kratos/docs/v0.6/concepts/ui-user-interface",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/concepts/ui-user-interface.md",tags:[],version:"v0.6",lastUpdatedBy:"Alexander Probst",lastUpdatedAt:1622214581,formattedLastUpdatedAt:"5/28/2021",frontMatter:{id:"ui-user-interface",title:"User Interface"},sidebar:"version-v0.6/docs",previous:{title:"Terminology",permalink:"/kratos/docs/v0.6/concepts/terminology"},next:{title:"Identity Data Model",permalink:"/kratos/docs/v0.6/concepts/identity-data-model"}},u=[{value:"Administrative User Interface (Admin UI)",id:"administrative-user-interface-admin-ui",children:[]},{value:"Self-service User Interface (SSUI)",id:"self-service-user-interface-ssui",children:[{value:"UI Data Models",id:"ui-data-models",children:[]}]}],d={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ory Kratos has no user interface included. Instead, it defines HTTP flows and\nAPIs that make it simple to write your own UI in a variety of languages and\nframeworks."),(0,i.kt)("p",null,"The following two examples are typical UIs used in connection with Ory Kratos."),(0,i.kt)("h2",{id:"administrative-user-interface-admin-ui"},"Administrative User Interface (Admin UI)"),(0,i.kt)("p",null,"The AUI might show all of the identities in the system and provide features to\nadministrators such as editing profiles, resetting passwords, and so on."),(0,i.kt)("p",null,"At present, there is no Open Source AUI for Ory Kratos."),(0,i.kt)("h2",{id:"self-service-user-interface-ssui"},"Self-service User Interface (SSUI)"),(0,i.kt)("p",null,'The SSUI renders forms such as "Login", "Registration", "Update your profile",\n"Recover access to your account", and others. The following provides more\nreference for SSUI at\n',(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"github.com/ory/kratos-selfservice-ui-node"),"."),(0,i.kt)("p",null,"The SSUI can be built in any programming language including Java, Node, or\nPython and can be run both a server or a end-user device for example a browser,\nor a mobile phone. Implementing a SSUI is simple and straight forward. There is\nno complex authentication mechanism required and no need to worry about possible\nattack vectors such as CSRF or Session Attacks since Ory Kratos provides the\npreventive measures built in."),(0,i.kt)("p",null,"Chapter ",(0,i.kt)("a",{parentName:"p",href:"/kratos/docs/v0.6/self-service"},"Self-Service Flows")," contains further information\non APIs and flows related to the SSUI, and build self-service applications."),(0,i.kt)("h3",{id:"ui-data-models"},"UI Data Models"),(0,i.kt)("p",null,"To make UI customization easy, Ory Kratos prepares all the necessary data for\nforms that need to be shown during e.g. login, registration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "9b527900-2199-4221-9252-7971b3362282",\n  "type": "browser",\n  "expires_at": "2021-04-28T13:55:36.046466067Z",\n  "issued_at": "2021-04-28T12:55:36.046466067Z",\n  "ui": {\n    "action": "http://127.0.0.1:4433/self-service/settings?flow=9b527900-2199-4221-9252-7971b3362282",\n    "method": "POST",\n    "nodes": [\n      {\n        "type": "input",\n        "group": "default",\n        "attributes": {\n          "name": "csrf_token",\n          "type": "hidden",\n          "value": "U3r/lgEfT8rA1Lg0Eeo06oGO8mX6T4TKoe/z7rbInhvYeacbRg0IW9zrqnpU1wmQJXKiekNzdLnypx5naHXoPg==",\n          "required": true,\n          "disabled": false\n        },\n        "messages": null,\n        "meta": {}\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h4",{id:"node-groups"},"Node Groups"),(0,i.kt)("p",null,"Nodes are grouped (using the ",(0,i.kt)("inlineCode",{parentName:"p"},"group"),' key) based on the source that generated the\nnode. Sources are the different methods such as "password" ("Sign in/up with ID\n& password"), "oidc" (Social Sign In), "link" (Password reset and email\nverification), "profile" ("Update your profile") and the "default" group which\ntypically contains the CSRF token.'),(0,i.kt)("p",null,"You can use the node group to filter out items, re-arrange them, render them\ndifferently - up to you!"),(0,i.kt)("h4",{id:"node-types"},"Node Types"),(0,i.kt)("p",null,"The first (and for now only) node type is the ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "input",\n  "group": "default",\n  "attributes": {\n    "name": "csrf_token",\n    "type": "hidden",\n    "value": "U3r/lgEfT8rA1Lg0Eeo06oGO8mX6T4TKoe/z7rbInhvYeacbRg0IW9zrqnpU1wmQJXKiekNzdLnypx5naHXoPg==",\n    "required": true,\n    "disabled": false\n  },\n  "messages": null,\n  "meta": {}\n}\n')),(0,i.kt)("p",null,"It contains different attributes which you can map 1:1 to an HTML form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<input\n  type="hidden"\n  name="csrf_token"\n  value="U3r/lgEfT8rA1Lg0Eeo06oGO8mX6T4TKoe/z7rbInhvYeacbRg0IW9zrqnpU1wmQJXKiekNzdLnypx5naHXoPg=="\n  required\n/>\n')),(0,i.kt)("p",null,"Similarly, other form input types can be sent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.email",\n      "type": "email",\n      "value": "foo@ory.sh",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "E-Mail",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "method",\n      "type": "submit",\n      "value": "profile",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070003,\n        "text": "Save",\n        "type": "info"\n      }\n    }\n  }\n]\n')),(0,i.kt)("p",null,"As you can see, some fields even include ",(0,i.kt)("inlineCode",{parentName:"p"},"meta.label")," information which you can\nuse for the labels:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<fieldset>\n  <input type="email" name="traits.email" value="foo@ory.sh" />\n  <span>E-Mail</span>\n</fieldset>\n<fieldset>\n  <input type="submit" name="method" value="profile" />\n  <span>Save</span>\n</fieldset>\n')),(0,i.kt)("h4",{id:"node-order-and-labels"},"Node Order and Labels"),(0,i.kt)("p",null,"For all traits, the labels and orders are taken from the Identity JSON Schema. A\nJSON Schema such as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://schemas.ory.sh/presets/kratos/quickstart/email-password/identity.schema.json",\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "Person",\n  "type": "object",\n  "properties": {\n    "traits": {\n      "type": "object",\n      "properties": {\n        "email": {\n          "type": "string",\n          "format": "email",\n          "title": "E-Mail",\n          "minLength": 3,\n          "ory.sh/kratos": {\n            "credentials": {\n              "password": {\n                "identifier": true\n              }\n            }\n          }\n        },\n        "website": {\n          "title": "Website",\n          "type": "string",\n          "format": "uri",\n          "minLength": 10\n        },\n        "consent": {\n          "title": "Consent",\n          "const": true\n        },\n        "newsletter": {\n          "title": "Newsletter",\n          "type": "boolean"\n        }\n      },\n      "required": ["email", "website"],\n      "additionalProperties": false\n    }\n  }\n}\n')),(0,i.kt)("p",null,"will generate the following fields - take note that the order of the JSON Schema\naffects the order of the nodes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.email",\n      "type": "email",\n      "value": "foo@ory.sh",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "E-Mail",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.name.first",\n      "type": "text",\n      "value": "Foo",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "First Name",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "traits.name.last",\n      "type": "text",\n      "value": "Bar",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070002,\n        "text": "Last Name",\n        "type": "info"\n      }\n    }\n  },\n  {\n    "type": "input",\n    "group": "profile",\n    "attributes": {\n      "name": "method",\n      "type": "submit",\n      "value": "profile",\n      "disabled": false\n    },\n    "messages": null,\n    "meta": {\n      "label": {\n        "id": 1070003,\n        "text": "Save",\n        "type": "info"\n      }\n    }\n  }\n]\n')),(0,i.kt)("p",null,"Generally, submit buttons are the last node in a group. If you wish to have more\nflexibility with regards to order or labeling the best option is to implement\nthis in your UI using map, filter, and other JSON transformation functions."),(0,i.kt)("h4",{id:"messages"},"Messages"),(0,i.kt)("p",null,'Ory Kratos helps users understand what is happening by providing messages that\nexplain what went wrong or what needs to be done. Examples are "The provided\ncredentials are invalid", "Missing property email" and similar.'),(0,i.kt)("p",null,"Typically login, registration, settings, ... flows include such messages on\ndifferent levels:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"At the root level, indicating that the message affects the whole request\n(e.g. request expired)"),(0,i.kt)("li",{parentName:"ol"},"At the method (password, oidc, profile) level, indicating that the message\naffects a specific method / form."),(0,i.kt)("li",{parentName:"ol"},"At the field level, indicating that the message affects a form field (e.g.\nvalidation errors).")),(0,i.kt)("p",null,"Each message has a layout of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},"{\n  id: 1234,\n  // This ID will not change and can be used to translate the message or use your own message content.\n  text: 'Some default text',\n  // A default text in english that you can display if you do not want to customize the message.\n  context: {}\n  // A JSON object which may contain additional fields such as `expires_at`. This is helpful if you want to craft your own messages.\n}\n")),(0,i.kt)("p",null,"We will list all messages, their contents, their contexts, and their IDs at a\nlater stage. For now please check out the code in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/tree/master/text"},"text module"),"."),(0,i.kt)("p",null,"The message ID is a 7-digit number (",(0,i.kt)("inlineCode",{parentName:"p"},"xyyzzzz"),") where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," is the message type which is either ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," for an info message (e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"1020000"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"4")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"4020000"),") for an input validation error message, and\n",(0,i.kt)("inlineCode",{parentName:"li"},"5")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"5020000"),") for a generic error message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yy")," is the module or flow this error references and can be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"01")," for login messages (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1010000"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"02")," for logout messages (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1020000"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"03")," for multi-factor authentication messages (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1030000"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"04")," for registration messages (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1040000"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"05")," for settings messages (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1050000"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"06")," for account recovery messages (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1060000"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"07")," for email/phone verification messages (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1070000"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zzzz")," is the message ID and typically starts at ",(0,i.kt)("inlineCode",{parentName:"li"},"0001"),". For example, message\nID ",(0,i.kt)("inlineCode",{parentName:"li"},"4070001")," (",(0,i.kt)("inlineCode",{parentName:"li"},"4")," for input validation error, ",(0,i.kt)("inlineCode",{parentName:"li"},"07")," for verification, ",(0,i.kt)("inlineCode",{parentName:"li"},"0001"),"\nfor the concrete message) is:\n",(0,i.kt)("inlineCode",{parentName:"li"},"The verification code has expired or was otherwise invalid. Please request another code."),".")))}c.isMDXComponent=!0}}]);