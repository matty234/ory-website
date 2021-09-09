(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[91197],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29705:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(22122),i=n(19756),a=(n(67294),n(3905)),r=["components"],s={id:"configuring-cookies",title:"Configuring Cookies"},c=void 0,l={unversionedId:"guides/configuring-cookies",id:"guides/configuring-cookies",isDocsHomePage:!1,title:"Configuring Cookies",description:"When working with cookies, keep the following in mind:",source:"@site/docs/guides/configuring-cookies.mdx",sourceDirName:"guides",slug:"/guides/configuring-cookies",permalink:"/kratos/docs/next/guides/configuring-cookies",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/configuring-cookies.mdx",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"configuring-cookies",title:"Configuring Cookies"},sidebar:"docs",previous:{title:"Configuring And Checking for Login Sessions",permalink:"/kratos/docs/next/guides/login-session"},next:{title:"Advanced Base URL, CSRF & Session Cookie Settings",permalink:"/kratos/docs/next/guides/multi-domain-cookies"}},p=[{value:"Session Cookies",id:"session-cookies",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When working with cookies, keep the following in mind:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"HTTP Cookies ",(0,a.kt)("strong",{parentName:"li"},"are not port specific"),". If a cookie is set on\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://mydomain.com:1234")," it is also valid for ",(0,a.kt)("inlineCode",{parentName:"li"},"https://mydomain.com:4321"),"\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),(0,a.kt)("li",{parentName:"ol"},"Unless ",(0,a.kt)("inlineCode",{parentName:"li"},"--dev")," is set, Ory Kratos' cookies are only sent over HTTPS."),(0,a.kt)("li",{parentName:"ol"},"Cookies in Ory Kratos are always ",(0,a.kt)("inlineCode",{parentName:"li"},"httpOnly"),"."),(0,a.kt)("li",{parentName:"ol"},"It is possible to set a cookie for ",(0,a.kt)("inlineCode",{parentName:"li"},"mydomain.com")," when the original request\nwas made to ",(0,a.kt)("inlineCode",{parentName:"li"},"subdomain.mydomain.com"),". It is however not possible to set a\ncookie for ",(0,a.kt)("inlineCode",{parentName:"li"},"anotherdomain.com")," when the original request was made to\n",(0,a.kt)("inlineCode",{parentName:"li"},"mydomain.com"),". See also\n",(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/18492576/share-cookie-between-subdomain-and-domain"},"this answer on StackOverflow"),".")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Ory Kratos uses pass-by-value cookies whose values are encrypted using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"secrets.default")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets.cookie")," secrets. If these secrets are changed\nwithout doing proper ",(0,a.kt)("a",{parentName:"p",href:"secret-key-rotation"},"secret / key rotation"),", all cookies\nwill be invalid which will cause users to be signed out, and other side effects."))),(0,a.kt)("h2",{id:"session-cookies"},"Session Cookies"),(0,a.kt)("p",null,'CloudRun, Heroku, and other "serverless" solutions commonly expose services\ndirectly to the public, and do not allow for fronting by a gateway or reverse\nproxy. In those cases, your application architecture may separate services by\nsubdomain (e.g. ',(0,a.kt)("inlineCode",{parentName:"p"},"service1.myproduct.com"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"service2.myproduct.com"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"service3.myproduct.com"),", ...)."),(0,a.kt)("p",null,"If that is the case you can change the session\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookie domain")," and\npath using the following configuration keys in your Ory Kratos configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  cookie:\n    domain: myproduct.com\n")),(0,a.kt)("p",null,"It is also possible to restrict the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookie path"),":"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is very unlikely that you need to change this!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  cookie:\n    path: /some/sub-directory\n")),(0,a.kt)("p",null,"You can also modify the new\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite"},"HTTP Cookie SameSite Attribute"),"\nusing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"session:\n  cookie:\n    same_site: Lax\n")))}d.isMDXComponent=!0}}]);