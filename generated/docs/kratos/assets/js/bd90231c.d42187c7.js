(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[34488],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64418:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(22122),a=r(19756),s=(r(67294),r(3905)),o=["components"],i={id:"index",title:"Before you start reading"},l=void 0,c={unversionedId:"self-service/index",id:"version-v0.2/self-service/index",isDocsHomePage:!1,title:"Before you start reading",description:"ORY Kratos implements flows that users perform themselves as opposed to",source:"@site/versioned_docs/version-v0.2/self-service/index.md",sourceDirName:"self-service",slug:"/self-service/index",permalink:"/kratos/docs/v0.2/self-service/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/self-service/index.md",tags:[],version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1600065426,formattedLastUpdatedAt:"9/14/2020",frontMatter:{id:"index",title:"Before you start reading"},sidebar:"version-v0.2/docs",previous:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/v0.2/concepts/security"},next:{title:"Overview",permalink:"/kratos/docs/v0.2/self-service/flows/index"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"ORY Kratos implements flows that users perform themselves as opposed to\nadministrative intervention. Facebook and Google both provide self-service\nregistration and profile management features as you are able to make changes to\nyour profile and sign up yourself."),(0,s.kt)("p",null,"Most believe that user management systems are easy to implement because picking\nthe right password hashing algorithm and sending an account verification code is\na solvable challenge. The real complexity however hides in the details and\nattack vectors of self-service flows. Most data leaks happen because someone is\nable to exploit"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"registration: with attack vectors such as account enumeration (), ...;"),(0,s.kt)("li",{parentName:"ul"},"login: phishing, account enumeration, leaked password databases, brute-force,\n...;"),(0,s.kt)("li",{parentName:"ul"},"user settings: account enumeration, account takeover, ...;"),(0,s.kt)("li",{parentName:"ul"},"account recovery: social engineering attacks, account takeover, spoofing, and\nso on.")),(0,s.kt)("p",null,"ORY Kratos applies best practices established by experts (National Institute of\nSciences NIST, Internet Engineering Task Force IETF, Microsoft Research, Google\nResearch, Troy Hunt, ...) and implements the following flows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-login-user-registration"},"Login and Registration")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-logout"},"Logout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-settings-profile-management"},"User Settings")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/password-reset-account-recovery"},"Account Recovery")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/verify-email-account-activation"},"Address Verification")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/user-facing-errors"},"User-Facing Error")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/flows/2fa-mfa-multi-factor-authentication"},"2FA / MFA"))),(0,s.kt)("p",null,"Some flows break down into strategies which implement some of the flow's\nbusiness logic:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/strategies/username-email-password"},"Password Strategy"),' implements\nlogin and registration flows (with email/username and password), account\nrecovery flows ("reset your password"), and user settings flows ("change your\npassword").'),(0,s.kt)("li",{parentName:"ul"},"The\n",(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/strategies/openid-connect-social-sign-in-oauth2"},"OpenID Connect Strategy"),'\nimplements login and registration flows (with email/username and password),\nand user settings flows ("un/link another social account").'),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"/kratos/docs/v0.2/self-service/strategies/user-settings-profile"},"Profile Strategy"),' implement the settings flow\n("change your first/last name, ...").')),(0,s.kt)("p",null,"Some flows additionally implement the ability ",(0,s.kt)("a",{parentName:"p",href:"/kratos/docs/v0.2/self-service/hooks/index"},"to run hooks")," which allow users\nto be immediately signed in after registration, notify another system on\nsuccessful registration (e.g. Mailchimp)."))}f.isMDXComponent=!0}}]);