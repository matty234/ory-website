(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[28253],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24099:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=["components"],i={id:"setting-up-password-hashing-parameters",title:"Setting up Argon2 Password Hashing Parameters"},u=void 0,p={unversionedId:"guides/setting-up-password-hashing-parameters",id:"guides/setting-up-password-hashing-parameters",isDocsHomePage:!1,title:"Setting up Argon2 Password Hashing Parameters",description:"Currently, Ory Kratos supports password hashing using Argon2 in the Argon2id",source:"@site/docs/guides/setting-up-password-hashing-parameters.md",sourceDirName:"guides",slug:"/guides/setting-up-password-hashing-parameters",permalink:"/kratos/docs/next/guides/setting-up-password-hashing-parameters",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/setting-up-password-hashing-parameters.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619624197,formattedLastUpdatedAt:"4/28/2021",frontMatter:{id:"setting-up-password-hashing-parameters",title:"Setting up Argon2 Password Hashing Parameters"},sidebar:"docs",previous:{title:"Setting up HTTPS (TLS)",permalink:"/kratos/docs/next/guides/https-tls"},next:{title:"Integration using Web-Hooks",permalink:"/kratos/docs/next/guides/integration-with-other-systems-using-web-hooks"}},c=[],l={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Currently, Ory Kratos supports password hashing using Argon2 in the Argon2id\nvariant. It is important to set up it's parameters to ensure a stable and\nreliable operation of Ory Kratos. In essence, you want to fulfill the following\nconstrains:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Duration: the execution time of one hashing operation - this translates to\nthe response time of Ory Kratos on login and registration."),(0,a.kt)("li",{parentName:"ol"},"Memory: the amount of available memory on the server"),(0,a.kt)("li",{parentName:"ol"},"Space: the amount of space for persistent storage")),(0,a.kt)("p",null,"We recommend choosing a duration of 0.5s to 1s and as much memory as possible.\nTo determine the exact recommended values following security best practices, run\nthe CLI helper included in Ory Kratos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kratos hashers argon2 calibrate 1s\n")),(0,a.kt)("p",null,"It will output the exact values to use in the\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/next/reference/configuration"},"configuration"),"."),(0,a.kt)("p",null,"Head to\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ory.sh/choose-recommended-argon2-parameters-password-hashing/"},"our blogpost"),"\nabout Argon2 parameters to learn how this command and password checking in Ory\nKratos works."),(0,a.kt)("p",null,"If you encounter any problems like timeouts or out-of-memory errors, consolidate\nour\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/next/debug/performance-out-of-memory-password-hashing-argon2"},"troubleshooting guide"),"."))}d.isMDXComponent=!0}}]);