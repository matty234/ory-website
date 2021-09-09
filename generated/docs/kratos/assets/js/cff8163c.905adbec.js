(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[52107],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76317:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},l=void 0,c={unversionedId:"concepts/email-sms",id:"version-v0.4/concepts/email-sms",isDocsHomePage:!1,title:"Out-of-band communication via E-Mail and SMS",description:"ORY Kratos sends out-of-band messages via SMS or E-Mail. These messages are",source:"@site/versioned_docs/version-v0.4/concepts/email-sms.md",sourceDirName:"concepts",slug:"/concepts/email-sms",permalink:"/kratos/docs/v0.4/concepts/email-sms",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/concepts/email-sms.md",tags:[],version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},sidebar:"version-v0.4/docs",previous:{title:"HTTP Redirection Configuration",permalink:"/kratos/docs/v0.4/concepts/browser-redirect-flow-completion"},next:{title:"Federation",permalink:"/kratos/docs/v0.4/concepts/federation"}},u=[{value:"Sending E-Mails via SMTP",id:"sending-e-mails-via-smtp",children:[{value:"Templates",id:"templates",children:[]}]},{value:"Sending SMS",id:"sending-sms",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Kratos sends out-of-band messages via SMS or E-Mail. These messages are\nrequired for The following exemplary use cases require these messages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Send an account activation email"),(0,i.kt)("li",{parentName:"ul"},"Verify an E-Mail address or mobile phone number using SMS"),(0,i.kt)("li",{parentName:"ul"},"Preventing Account Enumeration Attacks"),(0,i.kt)("li",{parentName:"ul"},"Sending a 2FA Codes"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"sending-e-mails-via-smtp"},"Sending E-Mails via SMTP"),(0,i.kt)("p",null,"To have E-Mail delivery running with ORY Kratos requires an SMTP server. This is\nset up in the configuration file using an absolute URL with the ",(0,i.kt)("inlineCode",{parentName:"p"},"smtp")," schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  smtp:\n    connection_uri: smtps://test:test@my-smtp-server:1025/\n")),(0,i.kt)("h3",{id:"templates"},"Templates"),(0,i.kt)("p",null,"A future version of ORY Kratos will feature proprietary E-Mail messages using\nthe Go template engine extended by\n",(0,i.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"sprig's template functions"),". It should\nalso be possible to internationalize these templates."),(0,i.kt)("h2",{id:"sending-sms"},"Sending SMS"),(0,i.kt)("p",null,"The Sending SMS feature is not supported at present. It will be available in a\nfuture version of ORY Kratos."))}m.isMDXComponent=!0}}]);