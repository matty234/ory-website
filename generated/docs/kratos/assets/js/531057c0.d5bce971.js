(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[24249],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76331:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],s={id:"ui-user-interface",title:"User Interface"},c=void 0,u={unversionedId:"concepts/ui-user-interface",id:"version-v0.2/concepts/ui-user-interface",isDocsHomePage:!1,title:"User Interface",description:"ORY Kratos has no user interface included. Instead, it defines HTTP flows and",source:"@site/versioned_docs/version-v0.2/concepts/ui-user-interface.md",sourceDirName:"concepts",slug:"/concepts/ui-user-interface",permalink:"/kratos/docs/v0.2/concepts/ui-user-interface",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/ui-user-interface.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,formattedLastUpdatedAt:"5/4/2020",frontMatter:{id:"ui-user-interface",title:"User Interface"},sidebar:"version-v0.2/docs",previous:{title:"Overview",permalink:"/kratos/docs/v0.2/concepts/index"},next:{title:"Identity Data Model",permalink:"/kratos/docs/v0.2/concepts/identity-user-model"}},l=[{value:"Administrative User Interface (Admin UI)",id:"administrative-user-interface-admin-ui",children:[]},{value:"Self-service User Interface (SSUI)",id:"self-service-user-interface-ssui",children:[]}],d={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ORY Kratos has no user interface included. Instead, it defines HTTP flows and\nAPIs that make it simple to write your own UI in a variety of languages and\nframeworks."),(0,o.kt)("p",null,"The following two examples are typical UIs used in connection with ORY Kratos."),(0,o.kt)("h2",{id:"administrative-user-interface-admin-ui"},"Administrative User Interface (Admin UI)"),(0,o.kt)("p",null,"The AUI might show all of the identities in the system and provide features to\nadministrators such as editing profiles, resetting passwords, and so on."),(0,o.kt)("p",null,"At present, there is no Open Source AUI for ORY Kratos."),(0,o.kt)("h2",{id:"self-service-user-interface-ssui"},"Self-service User Interface (SSUI)"),(0,o.kt)("p",null,'The SSUI shows screens such as "login", "Registration", "Update your profile",\n"Recover your account", and others. The following provides more reference for\nSSUI at\n',(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"github.com/ory/kratos-selfservice-ui-node"),"."),(0,o.kt)("p",null,"The SSUI can be built in any programming language including Java, Node, or\nPython and can be run both a server or a end-user device for example a browser,\nor a mobile phone. Implementing a SSUI is simple and straight forward. There is\nno complex authentication mechanism required and no need to worry about possible\nattack vectors such as CSRF or Session Attacks since ORY Kratos provides the\npreventive measures built in."),(0,o.kt)("p",null,"Chapter ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/flows/index"},"Self-Service Flows")," contains further\ninformation on APIs and flows related to the SSUI, and build self service\napplications."))}p.isMDXComponent=!0}}]);