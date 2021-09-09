(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[38151,69031],{58517:function(e){e.exports={projectName:"Ory Kratos",projectSlug:"kratos",newsletter:"https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53&group[17097][4]=1",projectTagLine:"Never build user login, user registration, 2fa, profile management ever again! Works on any operating system, cloud, with any programming language, user interface, and user experience! Written in Go.",updateTags:[{image:"oryd/kratos",files:["docs/docs/quickstart.mdx"]},{replacer:function(e){var t=e.content,r=e.next;return t.replace(/git checkout (v[0-9a-zA-Z\\.\\-]+)/gi,"git checkout "+r)},files:["docs/docs/guides/zero-trust-iap-proxy-identity-access-proxy.mdx","docs/docs/quickstart.mdx"]},{replacer:function(e){var t=e.content,r=e.next,n=e.semverRegex;return t.replace(n,""+r)},files:["docs/docs/install.md","docs/docs/quickstart.mdx"]},{replacer:function(e){var t=e.content,r=e.next;return t.replace(/oryd\/kratos:(v[0-9a-zA-Z\\.\\-]+)/gi,"oryd/kratos:"+r+"-sqlite")},files:["quickstart.yml"]},{replacer:function(e){var t=e.content,r=e.next;return t.replace(/oryd\/kratos-selfservice-ui-node:(v[0-9a-zA-Z\\.\\-]+)/gi,"oryd/kratos-selfservice-ui-node:"+r)},files:["quickstart.yml"]},{image:"oryd/kratos",files:["quickstart-mysql.yml","quickstart-crdb.yml","quickstart-postgres.yml"]}],updateConfig:{src:"../driver/config/.schema/config.schema.json",dst:"./docs/reference/configuration.md"}}},88558:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(67294),a=r(22122),o=r(34328),c=r(79559);var s=function(e){var t=e.layoutProps,r=e.spec,s=t||{},l=s.title,i=void 0===l?"API Docs":l,u=s.description,m=void 0===u?"Open API Reference Docs for the API":u,f="object"===r.type?r.content:void 0,d="url"===r.type?r.content:void 0;return n.createElement(o.Z,(0,a.Z)({},t,{title:i,description:m}),n.createElement(c.Z,{spec:f,specUrl:d}))},l=r(44996),i=r(80907),u=r(5977),m=r(58517),f=r.n(m);var d=function(){var e=(0,i.zu)().path;return f().enableRedoc?n.createElement(s,{layoutProps:{title:"HTTP API Docs",description:"Read the HTTP API reference documentation"},spec:{type:"url",content:(0,l.Z)(e+".static/api.json")}}):n.createElement(u.l_,{to:(0,l.Z)(e)})}},546:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(22122),a=r(19756),o=r(67294),c=r(86010),s=r(36742),l=r(941),i=r(44996),u="footerLogoLink_qW4Z",m=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,r=e.href,c=e.label,l=e.prependBaseUrlToHref,u=(0,a.Z)(e,m),f=(0,i.Z)(t),d=(0,i.Z)(r,{forcePrependBaseUrl:!0});return o.createElement(s.Z,(0,n.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:l?d:r}:{to:f},u),c)}var d=function(e){var t=e.url,r=e.alt;return o.createElement("img",{className:"footer__logo",alt:r,src:t})};var p=function(){var e=(0,l.LU)().footer,t=e||{},r=t.copyright,n=t.links,a=void 0===n?[]:n,s=t.logo,m=void 0===s?{}:s,p=(0,i.Z)(m.src);return e?o.createElement("footer",{className:(0,c.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},a&&a.length>0&&o.createElement("div",{className:"row footer__links"},a.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(f,e))}))):null)}))),(m||r)&&o.createElement("div",{className:"text--center"},m&&m.src&&o.createElement("div",{className:"margin-bottom--sm"},m.href?o.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:u},o.createElement(d,{alt:m.alt,url:p})):o.createElement(d,{alt:m.alt,url:p})),o.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},15101:function(){},23197:function(){},52361:function(){},94616:function(){},49702:function(){}}]);