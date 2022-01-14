"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[50081],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69324:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"upgrade",title:"Applying Upgrades"},l=void 0,p={unversionedId:"guides/upgrade",id:"guides/upgrade",isDocsHomePage:!1,title:"Applying Upgrades",description:"This guide covers basics to consider when upgrading Ory Kratos, please also",source:"@site/docs/guides/upgrade.md",sourceDirName:"guides",slug:"/guides/upgrade",permalink:"/kratos/docs/next/guides/upgrade",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/upgrade.md",tags:[],version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1642172136,formattedLastUpdatedAt:"1/14/2022",frontMatter:{id:"upgrade",title:"Applying Upgrades"},sidebar:"docs",previous:{title:"Distributed Tracing",permalink:"/kratos/docs/next/guides/tracing"},next:{title:"HTTP API",permalink:"/kratos/docs/next/reference/api"}},c=[{value:"Upgrading Tips",id:"upgrading-tips",children:[],level:3},{value:"Breaking changes overview",id:"breaking-changes-overview",children:[],level:3}],u={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide covers basics to consider when upgrading Ory Kratos, please also\nvisit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/CHANGELOG.md"},"CHANGELOG.md")," for\nmore technical details."),(0,o.kt)("p",null,"Generally upgrading Ory Kratos can be split into three main steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make a backup."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/next/install"},"Install")," the new version (depending on how you run Ory Kratos)."),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/next/cli/kratos-migrate-sql"},(0,o.kt)("inlineCode",{parentName:"a"},"kratos migrate sql"))," to run the\nappropriate SQL queries.")),(0,o.kt)("p",null,"Ory Kratos will run the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate sql")," command for all versions. For example when\nupgrading from v0.6 to v0.8, the migrations will be run for v0.6 to v0.7 and\nthen for v0.7 to v0.8. As such upgrading from any version to the latest version\ndirectly is possible. Should you run into problems with a direct upgrade,\nconsider a stepped upgrade and please visit the community\n",(0,o.kt)("a",{parentName:"p",href:"https://slack.ory.sh/"},"chat")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/discussions"},"discussions"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Back up your data! Applying upgrades can lead to data loss if handled\nincorrectly."))),(0,o.kt)("h3",{id:"upgrading-tips"},"Upgrading Tips"),(0,o.kt)("p",null,"We recommend taking the following steps to ensure that no data is lost:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note: These are recommendations and should be used in accordance with\nother Ops best practices. The steps required for a smooth and secure upgrade\nprocess may vary with different setups, tech stacks, and environments.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write down a high-level upgrade plan",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Who will perform the upgrade?"),(0,o.kt)("li",{parentName:"ul"},"How will the upgrade be performed?"),(0,o.kt)("li",{parentName:"ul"},"What components are affected?"))),(0,o.kt)("li",{parentName:"ol"},"Devise roll-out plan",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When will the upgrade be performed?"),(0,o.kt)("li",{parentName:"ul"},"Will there be an outage?"),(0,o.kt)("li",{parentName:"ul"},"How long will it be?"),(0,o.kt)("li",{parentName:"ul"},"What is your rollback plan?"))),(0,o.kt)("li",{parentName:"ol"},"Back up everything!"),(0,o.kt)("li",{parentName:"ol"},"Run a trial upgrade on a local environment."),(0,o.kt)("li",{parentName:"ol"},"Run an upgrade on a staging environment."),(0,o.kt)("li",{parentName:"ol"},"Perform tests on staging & prepare production environment."),(0,o.kt)("li",{parentName:"ol"},"Run the upgrade on production.")),(0,o.kt)("h3",{id:"breaking-changes-overview"},"Breaking changes overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ory/kratos/blob/v0.8.0-alpha.1/CHANGELOG.md#breaking-changes"},"Ory Kratos v0.8 Breaking changes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ory/kratos/blob/v0.7.0-alpha.1/CHANGELOG.md#breaking-changes"},"Ory Kratos v0.7 Breaking changes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ory/kratos/blob/v0.6.0-alpha.1/CHANGELOG.md#breaking-changes"},"Ory Kratos v0.6 Breaking changes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ory/kratos/blob/v0.5.0-alpha.1/CHANGELOG.md#breaking-changes"},"Ory Kratos v0.5 Breaking changes")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Skip the hassle of applying upgrades to Ory Kratos? Take a look at\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs"},"Ory Cloud"),"."))))}d.isMDXComponent=!0}}]);