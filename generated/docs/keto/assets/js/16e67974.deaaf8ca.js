(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[3385],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18879:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],s={title:"Basic: Olymp Library"},l=void 0,p={unversionedId:"examples/olymp-file-sharing",id:"version-v0.6/examples/olymp-file-sharing",isDocsHomePage:!1,title:"Basic: Olymp Library",description:"A basic, down-to-earth full feature example",source:"@site/versioned_docs/version-v0.6/examples/olymp-file-sharing.mdx",sourceDirName:"examples",slug:"/examples/olymp-file-sharing",permalink:"/keto/docs/v0.6/examples/olymp-file-sharing",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/examples/olymp-file-sharing.mdx",tags:[],version:"v0.6",lastUpdatedBy:"Patrik",lastUpdatedAt:1620725654,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"Basic: Olymp Library"},sidebar:"version-v0.6/docs",previous:{title:"Best Practices for Designing your Access Control List",permalink:"/keto/docs/v0.6/guides/access-control-list-design-best-practices"},next:{title:"Configuration",permalink:"/keto/docs/v0.6/reference/configuration"}},c=[],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"a-basic-down-to-earth-full-feature-example"},"A basic, down-to-earth full feature example"),(0,i.kt)("p",null,'Consider a file sharing application called "Olymp Library". Each file is stored\nin a key-value store, where the key is a UUIDv4 (pseudorandom unique\nidentifier), while the value is the metadata and content. The application uses\nOry Keto to keep track of ownership and granted access on a per file level.'),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This example assumes there is a ",(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/namespaces"},"namespace")," ",(0,i.kt)("inlineCode",{parentName:"p"},"files"),"\nwith the relations ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," defined, where each ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," of an object\nalso has ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," to that object. All relation tuples are stored in that\nnamespace."))),(0,i.kt)("p",null,"Now, the user identified by its unique username ",(0,i.kt)("inlineCode",{parentName:"p"},"demeter")," wants to upload a file\ncontaining the most fertile grounds. The file gets assigned the UUID\n",(0,i.kt)("inlineCode",{parentName:"p"},"ec788a82-a12e-45a4-b906-3e69f78c94e4"),". The application adds the following\n",(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/relation-tuples"},"relation tuple")," to Ory Keto through the\n",(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/api-overview#write-apis"},"write-API"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"ec788a82-a12e-45a4-b906-3e69f78c94e4#owner@demeter\n")),(0,i.kt)("p",null,"To prepare for an important meeting with the user ",(0,i.kt)("inlineCode",{parentName:"p"},"athena"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"demeter")," wants to\nshare the file with fertile grounds with ",(0,i.kt)("inlineCode",{parentName:"p"},"athena"),' so that they can both read it.\nTherefore, he opens the "Olymp Library" and is presented with a list of all\nfiles he owns. The application will internally request all\n',(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/objects"},"objects")," (file IDs) with the owner ",(0,i.kt)("inlineCode",{parentName:"p"},"demeter")," by using\nthe ",(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/api-overview#list-relation-tuples"},"list-API"),". The response\nwill contain the object ",(0,i.kt)("inlineCode",{parentName:"p"},"ec788a82-a12e-45a4-b906-3e69f78c94e4"),", which the\napplication maps to the file in question."),(0,i.kt)("p",null,"The user ",(0,i.kt)("inlineCode",{parentName:"p"},"demeter")," will then ask the application to share the file with\n",(0,i.kt)("inlineCode",{parentName:"p"},"athena"),". The application will translate that request into a\n",(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/api-overview#write-apis"},"write-API request")," adding the\nfollowing relation tuple to Ory Keto:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"ec788a82-a12e-45a4-b906-3e69f78c94e4#access@athena\n")),(0,i.kt)("p",null,"To confirm the successful operation, the application uses Ory Keto's\n",(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/api-overview#expand-subject-sets"},"expand-API")," to compile a list\nof everyone who can access the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// The following subject set is expanded by Keto\nec788a82-a12e-45a4-b906-3e69f78c94e4#access\n")),(0,i.kt)("p",null,"which returns the expansion tree"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u222a ec788a82-a12e-45a4-b906-3e69f78c94e4#access\n\u251c\u2500 \u222a ec788a82-a12e-45a4-b906-3e69f78c94e4#owner\n\u2502  \u251c\u2500 \u2618 demeter\n\u251c\u2500 \u2618 athena\n")),(0,i.kt)("p",null,'The "Olymp Library" can then display this information to ',(0,i.kt)("inlineCode",{parentName:"p"},"demeter"),"."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"athena")," wants to get the file containing fertile grounds, the application\nuses the ",(0,i.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/api-overview#check-relation-tuple"},"check-API")," to\nverify that ",(0,i.kt)("inlineCode",{parentName:"p"},"athena")," has access to the file before it returns the file. This\nwill allow ",(0,i.kt)("inlineCode",{parentName:"p"},"demeter")," to revoke ",(0,i.kt)("inlineCode",{parentName:"p"},"athena"),"'s access at any point by deleting the\ncorresponding relation tuple."))}u.isMDXComponent=!0}}]);