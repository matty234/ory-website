(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[20918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4027:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"index",title:"Overview"},l=void 0,c={unversionedId:"concepts/index",id:"version-v0.6/concepts/index",isDocsHomePage:!1,title:"Overview",description:"Ory Kratos is a new software archetype Identity Infrastructure Service.",source:"@site/versioned_docs/version-v0.6/concepts/index.md",sourceDirName:"concepts",slug:"/concepts/index",permalink:"/kratos/docs/v0.6/concepts/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/concepts/index.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"index",title:"Overview"},sidebar:"version-v0.6/docs",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/kratos/docs/v0.6/faq"},next:{title:"Terminology",permalink:"/kratos/docs/v0.6/concepts/terminology"}},u=[{value:"Today&#39;s Landscape",id:"todays-landscape",children:[{value:"Full-stack Identity and Access Management (IAM)",id:"full-stack-identity-and-access-management-iam",children:[]},{value:"Identity as a Service (IDaaS)",id:"identity-as-a-service-idaas",children:[]},{value:"Use a library",id:"use-a-library",children:[]},{value:"Roll your own",id:"roll-your-own",children:[]}]},{value:"Introducing Ory Kratos",id:"introducing-ory-kratos",children:[{value:"Solving a specific problem domain",id:"solving-a-specific-problem-domain",children:[]},{value:"Software Architecture",id:"software-architecture",children:[]},{value:"Bring your own User Interface (Framework)",id:"bring-your-own-user-interface-framework",children:[]},{value:"Bring your own Identity Model(s)",id:"bring-your-own-identity-models",children:[]},{value:"Forget passport-js, oidc-client, ...",id:"forget-passport-js-oidc-client-",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ory Kratos is a new software archetype ",(0,o.kt)("strong",{parentName:"p"},"Identity Infrastructure Service"),".\nTraditional identity systems - sometimes referred to as Identity and Access\nManagement (IAM), Identity Management (IdM), Identity Provider (IP/IdP), or\nIdentity as a Service (IDaaS) - have shortcomings that highlight the main\ndifferences between Ory Kratos and other systems."),(0,o.kt)("p",null,"Ory Kratos solves identity on the network. It is not an on-device, for instance\nmobile phones, user database. In Ory Kratos there is always an exchange of\ncredentials. In the case of web applications and identity:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Username + Password -> Cookie, Token, ..."),(0,o.kt)("li",{parentName:"ul"},"Email + Password -> Cookie, Token, ..."),(0,o.kt)("li",{parentName:"ul"},"Passwordless login -> Cookie, Token, ...")),(0,o.kt)("p",null,'Even for alternative use cases for example mobile, browser, or native\napplication there is either a cookie, which accesses the application directly\nthrough the browser, or a token that accesses the application using a\nprogrammatic client via an API. While it is nowadays common - but bad practice -\nto use tokens for "Single Page Apps" or apps running on the client-side browser,\nthere is no real difference between these two approaches as both represent a set\nof credentials valid for a certain domain or a number of domains.'),(0,o.kt)("p",null,"Still, many identity systems primarily rely on OAuth2 and OpenID Connect. The\nreasons for this would perhaps include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assumption - it is certifiable;"),(0,o.kt)("li",{parentName:"ul"},"Assumption - it offloads complexity to developers who need to interact with\nand figure out e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"AppAuth"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PassportJS"),", and similar OAuth2 and OpenID\nConnect SDKs developed by open source communities;"),(0,o.kt)("li",{parentName:"ul"},"Assumption - selling complexity as security;"),(0,o.kt)("li",{parentName:"ul"},"Assumption - the nature of closed source does not allow for new, open and\nde-facto standards to emerge and instead uses a consenus driven feature set,\neven if it doesn't fit the use case 100%.")),(0,o.kt)("p",null,"While Ory Kratos is currently not certifiable, it tackles these topics as\nfollows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With inspiration from the approach taken in the Kubernetes Project, Ory\nprovides an open source project that hopefully becomes an open standard in the\nfuture."),(0,o.kt)("li",{parentName:"ul"},"Prioritise simplicity and ease of use for developers. Ory Kratos integrates\ncritical security components without relying on complex flows and protocols.")),(0,o.kt)("p",null,"Using Ory Kratos it is possible to consume OAuth2 and OpenID Connect, and/or\ncreate an OAuth2 and OpenID Connect Provider by combining Ory Kratos with\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/hydra"},"Ory Hydra")," ."),(0,o.kt)("p",null,"With a primary developer audience, Ory designs, secures, and tests critical\nnetwork flows, system architectures, user flows, protocols, and business logic."),(0,o.kt)("h2",{id:"todays-landscape"},"Today's Landscape"),(0,o.kt)("p",null,"Let's take a look at different approaches and software systems today."),(0,o.kt)("h3",{id:"full-stack-identity-and-access-management-iam"},"Full-stack Identity and Access Management (IAM)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Disclaimer: There are neither product nor project names in this section. This\nsection's goal is to describe circumstances and problems that mostly stem from\nthe community's experience. For information purposes, there is a preliminary\ncomparison of Ory Kratos and other projects and products available at\n",(0,o.kt)("a",{parentName:"em",href:"/kratos/docs/v0.6/further-reading/comparison"},"Comparison")),"."),(0,o.kt)("p",null,"Full-stack IAM is usually sold as a one-size-fits-all solution. Due to size and\ncomplexity, these full-stack solutions are typically written in an enterprise\nclass programming language such as Java EE. The full-stack products have rich\nfeature sets that include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"theming to customize the user experience, and to constrain the anticipated\ntheming use case;"),(0,o.kt)("li",{parentName:"ul"},"HTML Template Engines specific to the language used, such as Java Server Pages\nor\n",(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/server_development/#html-templates"},"Apache FreeMarker\u2122"),";"),(0,o.kt)("li",{parentName:"ul"},"plugin loaders and APIs to add custom logic or even custom API endpoints,\nspecific to the language used by the project; and"),(0,o.kt)("li",{parentName:"ul"},"features such as integrated Load Balancers, Service Discovery, and other\nfeatures designed prior to today's mature cloud architectures.")),(0,o.kt)("p",null,"Full-stack software projects come with some overhead:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the software has a large disk, CPU, and memory footprint;"),(0,o.kt)("li",{parentName:"ul"},"while scaling and clustering for High Availability is possible, it is complex\nsince inter-process-communication for caches and other features is required\nfor example using protocols such as ",(0,o.kt)("a",{parentName:"li",href:"http://jgroups.org/"},"JGroups"),"; and"),(0,o.kt)("li",{parentName:"ul"},"starting off with pre-defined use cases is easy, yet customization and\napplication specific features require much more work.")),(0,o.kt)("p",null,"Most full-stack projects we've seen are in-house solutions for IAM problems.\nImagine Google releasing their IAM as an open source product. It's certainly\ngreat, and it covers a lot of ground, but it also comes with drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Strict data models specific to the company developing the product:"),(0,o.kt)("li",{parentName:"ul"},"Inflexible login process with either a username or an email for login, but not\nboth or unable to change it later;"),(0,o.kt)("li",{parentName:"ul"},"Any application specific additional attributes are stored as unstructured\ndata, sometimes even as plain key/value pairs;"),(0,o.kt)("li",{parentName:"ul"},"Complex build pipelines when using modern frontend frameworks like React or\nAngular in the HTML Rendering engine;"),(0,o.kt)("li",{parentName:"ul"},"The user model stays the same, even when differentiating between customers and\nemployees in your system; and"),(0,o.kt)("li",{parentName:"ul"},"API consumption is usually an after-thought because most flows are built\naround the user doing something in the browser. All of the above leads to\nadded complexity in application development and deployment due to session\nmanagement, cookie management, CSRF protection, and other mechanisms related\nto identity and security.")),(0,o.kt)("h3",{id:"identity-as-a-service-idaas"},"Identity as a Service (IDaaS)"),(0,o.kt)("p",null,'In today\'s market, with many proprietary SAAS companies offering Identity as a\nService, it seems easy to make sign-on cumbersome for both developers and users.\nEven with delegated third party login processes such as "Login with Google,"\nwhere OAuth2 and OpenID Connect are often the primary protocols, the challenge\nis making a secure and simple login without any extra overhead, for instance,\nwith Oauth2 and OpenID.'),(0,o.kt)("p",null,"Ory's focus is on simplicity, user experience, and above all, using the right\ntools and technologies for the target application. Feedback from Ory's user\ncommunity as well as the open source development efforts involved in Ory Hydra-\nOAuth2 and OpenID Connect server ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra"},"Ory Hydra"),", show\nthat implementing OAuth2 or OpenID Connect is often frustrating and too complex.\nThese technologies are not one size fits all, and not designed for every\nimplementation scenario."),(0,o.kt)("p",null,"The main point is that OAuth2 and OpenID Connect protocols solve identity\nfederation. For instance, when the target application authenticates an identity\nor authorizes access by using a system outside of the application's control, for\nexample within an enterprise, company domain or another third party service.\nThese protocols don't solve processes like updating a user's profile, adding a\nsecondary recovery email, solving 2FA, storing and managing sessions, or solving\nglobal logout. These processes are the developer's responsibility and while the\nOAuth2 and OpenID Connect protocols offer a way to securely solve identity\nfederation over the browser, they do not solve:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storage and management of all these tokens. These would often end up in the\nlocalStore making them vulnerable to XSS attacks. Or in a cookie issued by an\nHTTP server; here an extra function would need to be developed."),(0,o.kt)("li",{parentName:"ul"},"Managing and storing the user session. This would require the developer to\ncreate the cookie for the session, delete the cookie at log out, and to make\nsure that the cookie implements best security practices."),(0,o.kt)("li",{parentName:"ul"},"Refreshing expiring tokens. While this function is straightforward for one\nrequest, synchronising for example fifteen concurrent requests can be\ndifficult.")),(0,o.kt)("p",null,'The point is that OAuth2 is hard to use because the intended use cases (for\ninstance "Facebook Photo Backups") are very specific, and the proper security\nmechanisms need to be in place to deal with malicious third parties. Ory Kratos\nsimplifies user login.'),(0,o.kt)("h3",{id:"use-a-library"},"Use a library"),(0,o.kt)("p",null,"Due to the multitude of programming languages across front end, backend and core\ninfrastructure, Ory Kratos embraced a polyglot design. In other words Ory Kratos\nprovides Software Development Kits (SDK) and libraries for the main programming\nlanguages."),(0,o.kt)("p",null,"As software development teams grow, product requirements change. During a\ndevelopment lifecycle different parts, for instance humans, servers, and code,\nneed to scale to size. Over time, the original product splits into smaller, more\nmanageable chunks. The libraries chosen at the outset will need to run on the\nnewest version of the programming language. Sometimes even the programming\nlanguage or implementation framework are subject to change as a whole. Still,\nthe identity system is often so interlinked with all of the source code,\nmiddlewares, annotations, shared state, etc., that it becomes an absolute\nnightmare to decouple."),(0,o.kt)("h3",{id:"roll-your-own"},"Roll your own"),(0,o.kt)("p",null,"Starting from scratch is sometimes the only option to fulfill the product's\narchitectural requirements. In this case, the following are some of the main\nconsiderations and challenges in Ory's efforts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To manage changing user models;"),(0,o.kt)("li",{parentName:"ul"},'To choose and use some encryption algorithms such as BCrypt, PBKDF2, Scrypt,\nArgon2, Argon2i, Argon2id, Argon2d. There are many alternatives and most of\nthe algorithms have numerous versions and parametrization options for example\n"Salt length parameter." The multitude of options makes it hard to configure\nthe most secure setting;'),(0,o.kt)("li",{parentName:"ul"},'To consider and implement a wide range of processes and process variants. For\ninstance, the user signs up via email, and later uses "Sign up with Google"\nthat has the same email address. Or, the user previously signed up using the\nemail/password process or flow, and then signs up using "Sign up with Google"\nand vice versa. Even these fairly simple use cases warrant considerable\ndevelopment effort to correctly implement with some degree of user\nfriendliness;'),(0,o.kt)("li",{parentName:"ul"},"To prevent security threats for example\n",(0,o.kt)("a",{parentName:"li",href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)"},"account enumeration attacks"),";"),(0,o.kt)("li",{parentName:"ul"},"To implement two factor authentication (2FA). When the user loses access to a\nregistered and approved device, there should be a fallback phone number for\nSMS or offline security codes;"),(0,o.kt)("li",{parentName:"ul"},"To understand and use all of the important rules such as activation, welcome,\netc., around sending emails that don't alert spam filters;"),(0,o.kt)("li",{parentName:"ul"},"To support a broad ecosystem of products and services. For example in the\nevent that a target application needs to notify Stripe when a new customer\nsigns up.")),(0,o.kt)("p",null,"The list above is purposely kept short. There are very many things to consider\nwhen building Kratos in concert with the other products Ory Keto, Ory Hydra, and\nOry Oathkeeper. The list is really, really long."),(0,o.kt)("h2",{id:"introducing-ory-kratos"},"Introducing Ory Kratos"),(0,o.kt)("p",null,"Considering all of the information above, there would be enough context to\nunderstand why and how Ory Kratos started, and why it's different from other\nmore conventional approaches. Ory Kratos uses a new stack, is open source, and\npeer reviewed and developed in a broad community of experts."),(0,o.kt)("h3",{id:"solving-a-specific-problem-domain"},"Solving a specific problem domain"),(0,o.kt)("p",null,"Ory Kratos addresses a clearly defined problem domain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"managing credentials such as passwords, recovery email addresses, and security\nquestions;"),(0,o.kt)("li",{parentName:"ul"},"authentication including secure login, keeping track of sessions and devices;"),(0,o.kt)("li",{parentName:"ul"},"selfservice account management for example update profile, add/update email\naddresses, and changing passwords;"),(0,o.kt)("li",{parentName:"ul"},"account/identity administration such as create, read, delete, update, import,\nand get; and"),(0,o.kt)("li",{parentName:"ul"},"managing identity data for example first name, last name, profile picture, and\nbirthday, etc.")),(0,o.kt)("p",null,"Ory has numerous products that support the protocols OAuth2 or OpenID Connect in\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/hydra"},"Ory Hydra"),", a permission system in\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/keto"},"Ory Keto"),", and a Reverse Proxy in\n",(0,o.kt)("a",{parentName:"p",href:"http://github.com/ory/oathkeeper"},"Ory Oathkeeper"),"."),(0,o.kt)("h3",{id:"software-architecture"},"Software Architecture"),(0,o.kt)("p",null,"Ory's\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/software-architecture-philosophy"},"Software Architecture and Philosophy"),"\ndocument, explains the architectural beliefs and framework behind the Ory\nProducts in particular:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Small runtime footprint with an about five (5) MB binary running on all\noperating systems without any system, library, or VM dependencies;"),(0,o.kt)("li",{parentName:"ul"},"Fully virtualized in a fifteen (15) MB Docker image;"),(0,o.kt)("li",{parentName:"ul"},"Easy to manage with exactly one binary for the server and the cli;"),(0,o.kt)("li",{parentName:"ul"},"Run-time orchestration using the latest Kubernetes providing fast and easy to\nuse ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/k8s"},"Helm charts"),";"),(0,o.kt)("li",{parentName:"ul"},"Horizontal scaling with no etcd key value store or memcached or adjacent tool\nrequired.")),(0,o.kt)("h3",{id:"bring-your-own-user-interface-framework"},"Bring your own User Interface (Framework)"),(0,o.kt)("p",null,"Ory's approach to user interface and user experience is to provide for an\ninteraction concept with maximum flexibility and creativity. Some companies need\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.hubspot.com/blog/tabid/6307/bid/34155/how-to-capture-more-and-better-lead-intel-with-progressive-profiling.aspx"},"progressive profiling"),"\nand build a NodeJS app. Other companies desire to capture everything in one go,\nusing Client-Side JavaScript library such as Angular or React. Some companies\nwant an iOS-native registration and login experience. While Ory's cloud native\nheadless API approach address many integration and UI issues, with Ory Kratos,\npredefined flows make it easy to implement a custom user interface for login,\nregistration, profile management, account reset, etc. Furthermore, to make it\nvery easy to get started there is a reference implementation\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos-selfservice-ui-node"},"github.com/ory/kratos-selfservice-ui-node"),"."),(0,o.kt)("p",null,"For more details about each individual flow, consult the\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.6/self-service"},"Self-Service Flows Chapter"),"."),(0,o.kt)("h3",{id:"bring-your-own-identity-models"},"Bring your own Identity Model(s)"),(0,o.kt)("p",null,"Sometimes it is necessary to store more than one type of identity in your\nsystem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A customer that uses email + password to login, and needs to set a birthdate;\nor"),(0,o.kt)("li",{parentName:"ul"},"An employee that uses a unique username + password to login with a cost center\nattached to the profile.")),(0,o.kt)("p",null,"Ory Kratos implements both scenarios by using\n",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.6/concepts/identity-data-model"},"JSON Schemas for Identities")),(0,o.kt)("h3",{id:"forget-passport-js-oidc-client-"},"Forget passport-js, oidc-client, ..."),(0,o.kt)("p",null,"While proprietary and bespoke middleware can protect APIs and Web endpoints, Ory\nOpen Source provides a base solution for many use cases. For example, Ory Kratos\nintegrates with Ory Oathkeeper, a Reverse Proxy solution. Defining Access Rules\nis as easy as writing a few lines of JSON / JSON5 / YAML!"),(0,o.kt)("p",null,"Please consult the ",(0,o.kt)("a",{parentName:"p",href:"/kratos/docs/v0.6/quickstart"},"Quickstart documentation"),", for further\ninformation."))}p.isMDXComponent=!0}}]);