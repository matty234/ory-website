(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),s=(n(0),n(568)),c=n(572),i=n(573),r=n(599),d={id:"consent",title:"Implementing the Consent Endpoint & UI",sidebar_label:"Consent Endpoint"},l={unversionedId:"guides/consent",id:"version-v1.10/guides/consent",isDocsHomePage:!1,title:"Implementing the Consent Endpoint & UI",description:"Please read the Consent Flow Documentation first!",source:"@site/versioned_docs/version-v1.10/guides/consent.mdx",slug:"/guides/consent",permalink:"/hydra/docs/guides/consent",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/consent.mdx",version:"v1.10",sidebar_label:"Consent Endpoint",sidebar:"version-v1.10/docs",previous:{title:"Implementing the Login Endpoint",permalink:"/hydra/docs/guides/login"},next:{title:"Implementing the Logout Endpoint & UI",permalink:"/hydra/docs/guides/logout"}},b=[{value:"Implementing the Consent HTML Form",id:"implementing-the-consent-html-form",children:[]},{value:"Accepting the Consent Request",id:"accepting-the-consent-request",children:[]},{value:"Rejecting the Consent Request",id:"rejecting-the-consent-request",children:[]},{value:"Skipping Consent Screen",id:"skipping-consent-screen",children:[]},{value:"Complete Endpoint",id:"complete-endpoint",children:[]}],m={toc:b};function p(e){var t=e.components,d=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,d,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Please read the ",Object(s.b)("a",{parentName:"p",href:"/hydra/docs/concepts/consent"},"Consent Flow Documentation")," first!"))),Object(s.b)("p",null,"In this document, you will learn how to implement the Consent Endpoint using our\nORY Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),Object(s.b)("p",null,"Code shown here is taken out of the ORY Hydra Login & Consent Node Reference\napplication which you can find on GitHub."),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},Object(s.b)("img",{parentName:"a",src:"https://gh-card.dev/repos/ory/hydra-login-consent-node.svg",alt:"ory/hydra-login-consent-node - GitHub"}))),Object(s.b)("h2",{id:"implementing-the-consent-html-form"},"Implementing the Consent HTML Form"),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"The Consent HTML Form cannot be a Single Page App (Client-side browser\napplication) or a Mobile App! It has to be a server-side application with access\nto ORY Hydra's Admin Endpoint!"))),Object(s.b)(c.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"ui",mdxType:"TabItem"},Object(s.b)("p",null,Object(s.b)("img",{alt:"OAuth2 Consent UI Screen",src:n(681).default}))),Object(s.b)(i.a,{value:"node",mdxType:"TabItem"},Object(s.b)(r.a,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"})),Object(s.b)(i.a,{value:"html",mdxType:"TabItem"},Object(s.b)(r.a,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/views/consent.pug",mdxType:"CodeFromRemote"}))),Object(s.b)("h2",{id:"accepting-the-consent-request"},"Accepting the Consent Request"),Object(s.b)(c.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"node",mdxType:"TabItem"},Object(s.b)(r.a,{startAt:"let grantScope = req.body.grant_scope",endAt:"// label:docs-accept-consent",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),Object(s.b)("h2",{id:"rejecting-the-consent-request"},"Rejecting the Consent Request"),Object(s.b)(c.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"node",mdxType:"TabItem"},Object(s.b)(r.a,{startAt:"if (req.body.submit === 'Deny access') {",endAt:"// label:consent-deny-end",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),Object(s.b)("h2",{id:"skipping-consent-screen"},"Skipping Consent Screen"),Object(s.b)(c.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"node",mdxType:"TabItem"},Object(s.b)(r.a,{startAt:"// This section processes consent requests and either shows the consent UI",endAt:"// The consent request has now either been accepted automatically",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),Object(s.b)("h2",{id:"complete-endpoint"},"Complete Endpoint"),Object(s.b)(c.a,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"node",mdxType:"TabItem"},Object(s.b)(r.a,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))))}p.isMDXComponent=!0},599:function(e,t,n){"use strict";var o=n(0),a=n.n(o),s=n(600),c=n.n(s),i=n(591),r=n(58),d=n.n(r),l=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n};t.a=function(e){var t=e.src,n=e.title,s=Object(o.useState)(""),r=s[0],b=s[1];Object(o.useEffect)((function(){var n,o,a;c()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,o=n.startAt,a=n.endAt,function(e){var t=e.split("\n"),n=l(o,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var s=l(a,t);return s>0&&(t=[].concat(t.slice(0,s+1),["// ..."])),t.join("\n")})).then(b).catch(console.error)}),[]);var m="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),p='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return a.a.createElement("div",{className:d.a.container},a.a.createElement(i.a,{metastring:p,className:m,children:r}))}},681:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/consent-endpoint-31856a0555a6a8438d4603692bdab5d2.png"}}]);