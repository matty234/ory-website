(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[50855],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25861:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],c={id:"mfa",title:"This should be the Mfa UI"},l=void 0,u={unversionedId:"fallback/mfa",id:"version-v0.6/fallback/mfa",isDocsHomePage:!1,title:"This should be the Mfa UI",description:"You ended up here because you did not set the following configuration value:",source:"@site/versioned_docs/version-v0.6/fallback/mfa.mdx",sourceDirName:"fallback",slug:"/fallback/mfa",permalink:"/kratos/docs/v0.6/fallback/mfa",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/fallback/mfa.mdx",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"mfa",title:"This should be the Mfa UI"}},s=[],f={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You ended up here because you did not set the following configuration value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'},"selfservice:\n  flows:\n    mfa:\n      ui_url: http://my-app.com/mfa\n")),(0,a.kt)("p",null,"You can set this configuration value using environment variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"SELFSERVICE_FLOWS_MFA_UI_URL")," as well!"),(0,a.kt)("p",null,"If you don't know what that means, head over to our\n",(0,a.kt)("a",{parentName:"p",href:"/kratos/docs/v0.6/self-service/flows/2fa-mfa-multi-factor-authentication"},"MFA Documentation"),"!"))}p.isMDXComponent=!0}}]);