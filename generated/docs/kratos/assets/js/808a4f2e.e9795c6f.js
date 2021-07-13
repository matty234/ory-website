(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[85500],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=s,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},41317:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(22122),s=r(19756),o=(r(67294),r(3905)),a=["components"],i={id:"self-service",title:"Self-Service Flows",sidebar_label:"Before you start reading"},l=void 0,c={unversionedId:"self-service",id:"version-v0.4/self-service",isDocsHomePage:!1,title:"Self-Service Flows",description:"ORY Kratos implements flows that users perform themselves as opposed to",source:"@site/versioned_docs/version-v0.4/self-service.mdx",sourceDirName:".",slug:"/self-service",permalink:"/kratos/docs/v0.4/self-service",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/self-service.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,formattedLastUpdatedAt:"7/8/2020",frontMatter:{id:"self-service",title:"Self-Service Flows",sidebar_label:"Before you start reading"},sidebar:"version-v0.4/docs",previous:{title:"Threat Models and Security Profiles",permalink:"/kratos/docs/v0.4/concepts/security"},next:{title:"Overview",permalink:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration"}},u=[{value:"Network Flows for Browsers",id:"network-flows-for-browsers",children:[]}],f={toc:u};function p(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ORY Kratos implements flows that users perform themselves as opposed to\nadministrative intervention. Facebook and Google both provide self-service\nregistration and profile management features as you are able to make changes to\nyour profile and sign up yourself."),(0,o.kt)("p",null,"Most believe that user management systems are easy to implement because picking\nthe right password hashing algorithm and sending an account verification code is\na solvable challenge. The real complexity however hides in the details and\nattack vectors of self-service flows. Most data leaks happen because someone is\nable to exploit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"registration: with attack vectors such as account enumeration (), ...;"),(0,o.kt)("li",{parentName:"ul"},"login: phishing, account enumeration, leaked password databases, brute-force,\n...;"),(0,o.kt)("li",{parentName:"ul"},"user settings: account enumeration, account takeover, ...;"),(0,o.kt)("li",{parentName:"ul"},"account recovery: social engineering attacks, account takeover, spoofing, and\nso on.")),(0,o.kt)("p",null,"ORY Kratos applies best practices established by experts (National Institute of\nSciences NIST, Internet Engineering Task Force IETF, Microsoft Research, Google\nResearch, Troy Hunt, ...) and implements the following flows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration"},"Login and Registration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-logout"},"Logout")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-settings"},"User Settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/account-recovery"},"Account Recovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/verify-email-account-activation"},"Address Verification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-facing-errors"},"User-Facing Error")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/2fa-mfa-multi-factor-authentication"},"2FA / MFA"))),(0,o.kt)("p",null,"Some flows break down into strategies which implement some of the flow's\nbusiness logic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"password")," strategy implement the\n",(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration/username-email-password"},"login and registration flow (with email/username and password)"),',\naccount recovery flow ("reset your password"), and\n',(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-settings/change-password"},'user settings flow ("change your password")'),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"oidc")," (OpenID Connect, OAuth2, Social Sign In) strategy implements\n",(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration/openid-connect-social-sign-in-oauth2"},'login and registration flow ("Sign in with ...")'),",\nand\n",(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-settings/link-unlink-openid-connect-oauth2"},'user settings flow ("un/link another social account")'),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"profile")," strategy implements the\n",(0,o.kt)("a",{parentName:"li",href:"/kratos/docs/v0.4/self-service/flows/user-settings/user-profile-management"},'settings flow ("update your profile", "change your first/last name, ...")'),".")),(0,o.kt)("p",null,"Some flows additionally implement the ability\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/hooks/index"},"to run hooks")," which allow users to be immediately\nsigned in after registration, notify another system on successful registration\n(e.g. Mailchimp), and so on."),(0,o.kt)("h2",{id:"network-flows-for-browsers"},"Network Flows for Browsers"),(0,o.kt)("p",null,"All Self-Service Flows such as\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration"},"User Login"),",\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-login-user-registration"},"User Registration"),",\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.4/self-service/flows/user-settings"},"Profile Management")," use the same\ntemplate:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Browser makes an HTTP request to the flow's initialization endpoint (e.g.\n",(0,o.kt)("inlineCode",{parentName:"li"},"/auth/browser/login"),");"),(0,o.kt)("li",{parentName:"ol"},"The initialization endpoint processes data and associates it with a request\nID and redirects the browser to the flow's configured UI URL (e.g.\n",(0,o.kt)("inlineCode",{parentName:"li"},"selfservice.flows.login.ui_url"),"), appending the request ID as the ",(0,o.kt)("inlineCode",{parentName:"li"},"request"),"\nURL Query Parameter;"),(0,o.kt)("li",{parentName:"ol"},"The endpoint responsible for the UI URL uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"request")," URL Query\nParameter (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"http://my-app/auth/login?request=abcde"),") to fetch the data\npreviously associated with the Request ID from either ORY Kratos's Public or\nAdmin API."),(0,o.kt)("li",{parentName:"ol"},"The UI endpoint renders the fetched data in any way it sees it fit. The flow\nis typically completed by the browser making another request to one of ORY\nKratos' endpoints, which is usually described in the fetched request data.")))}p.isMDXComponent=!0}}]);