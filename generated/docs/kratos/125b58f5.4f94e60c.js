(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(324)),i={id:"index",title:"Overview"},s={id:"version-v0.2/concepts/index",title:"Overview",description:"ORY Kratos is a new software archetype Identity Infrastructure Service.",source:"@site/versioned_docs/version-v0.2/concepts/index.md",permalink:"/kratos/docs/v0.2/concepts/index",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.2/concepts/index.md",version:"v0.2",lastUpdatedBy:"aeneasr",lastUpdatedAt:1588605498,sidebar:"version-v0.2/docs",previous:{title:"Installation",permalink:"/kratos/docs/v0.2/install"},next:{title:"User Interface",permalink:"/kratos/docs/v0.2/concepts/ui-user-interface"}},c=[{value:"Full-stack Identity and Access Management (IAM)",id:"full-stack-identity-and-access-management-iam",children:[]},{value:"Identity as a Service (IDaaS)",id:"identity-as-a-service-idaas",children:[]},{value:"Use a library",id:"use-a-library",children:[]},{value:"Roll your own",id:"roll-your-own",children:[]},{value:"ORY Kratos",id:"ory-kratos",children:[{value:"Solving a specific problem domain",id:"solving-a-specific-problem-domain",children:[]},{value:"Software Architecture",id:"software-architecture",children:[]},{value:"Bring your own User Interface (Framework)",id:"bring-your-own-user-interface-framework",children:[]},{value:"Bring your own Identity Model(s)",id:"bring-your-own-identity-models",children:[]},{value:"Forget passport-js, oidc-client, ...",id:"forget-passport-js-oidc-client-",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Kratos is a new software archetype ",Object(o.b)("strong",{parentName:"p"},"Identity Infrastructure Service"),".\nTraditional identity systems - sometimes referred to as Identity and Access\nManagement (IAM), Identity Management (IdM), Identity Provider (I(d)P), or IDaaS\n(Identity as a Service) - have shortcomings that highlight the main differences\nbetween ORY Kratos and other systems."),Object(o.b)("p",null,"ORY Kratos solves identity on the network. It is not a on-device, for instance\nmobile phones, user database. In Ory Kratos there is always an exchange of\ncredentials. In the case of web applications and identity:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Username + Password -> Cookie, Token, ..."),Object(o.b)("li",{parentName:"ul"},"Email + Password -> Cookie, Token, ..."),Object(o.b)("li",{parentName:"ul"},"Passwordless login -> Cookie, Token, ...")),Object(o.b)("p",null,'Even for alternative use cases for example mobile, browser, or native\napplication there is either a cookie, which accesses the application directly\nthrough the browser, or a token that accesses the application using a\nprogrammatic client via an API. While it is nowadays common - but bad practice -\nto use tokens for "Single Page Apps" or apps running on the client-side browser,\nthere is no real difference between these two approaches as both represent a set\nof credentials valid for a certain domain or a number of domains.'),Object(o.b)("p",null,"Still there is a vast solution set available for OAuth2 and OpenID Connect. The\nreasons for this would perhaps include the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Assumptions - companies offer complexity as security (In Ory's view pretty\nbad);"),Object(o.b)("li",{parentName:"ul"},"Assumption - the nature of closed source does not allow for new, open and\nde-facto standards to emerge and instead uses a consenus driven feature set,\neven if it doesn't fit the use case 100%.")),Object(o.b)("p",null,"ORY Kratos tackles both assumptions as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"With inspiration from the approach taken in the Kubernetes Project, Ory\nprovides an open source project that hopefully becomes an open standard in the\nfuture.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Prioritise simplicity and ease of use for developers. Ory Kratos integrates\ncritical security components without relying on complex flows and protocols."))),Object(o.b)("p",null,"Using Ory Kratos it is possible to consume OAuth2 and OpenID Connect, and/or\ncreate an OAuth2 and OpenID Connect Provider by combining ORY Kratos with\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/ory/hydra"}),"ORY Hydra")," ."),Object(o.b)("p",null,"With a primary developer audience, Ory designs, secures, and tests critical\nnetwork flows, system architectures, user flows, protocols, and business logic."),Object(o.b)("h3",{id:"full-stack-identity-and-access-management-iam"},"Full-stack Identity and Access Management (IAM)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Disclaimer: There are neither product nor project names in this section. This\nsection's goal is to describe circumstances and problems that mostly stem from\nthe community's experience. For information purposes, there is a preliminary\ncomparision of ORY Kratos and other projects and products available at\n",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"/kratos/docs/v0.2/further-reading/comparison"}),"Comparison")),"."),Object(o.b)("p",null,"Full-stack IAM is usually sold as a one-size-fits-all solution. Due to size and\ncomplexity, these full-stack solutions are typically written in an enterprise\nclass programming language such as Java EE. The full-stack products have rich\nfeature sets that include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"theming to customize the user experience, and to constrain the anticipated\ntheming use case;"),Object(o.b)("li",{parentName:"ul"},"HTML Template Engines specific to the language used, such Java Server Pages or\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.keycloak.org/docs/latest/server_development/#html-templates"}),"Apache FreeMarker\u2122"),";"),Object(o.b)("li",{parentName:"ul"},"plugin loaders and APIs to add custom logic or even custom API endpoints,\nspecific to the language used by the project; and"),Object(o.b)("li",{parentName:"ul"},"features such as integrated Load Balancers, Service Discovery, and other\nfeatures designed prior to today's mature cloud architectures.")),Object(o.b)("p",null,"Full-stack software projects come with some overhead:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the software has a large disk, CPU, and memory footprint;"),Object(o.b)("li",{parentName:"ul"},"while scaling and clustering for High Availability is possible, it is complex\nsince inter-process-communication for caches and other features is required\nfor example using protocols such as ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://jgroups.org/"}),"JGroups"),"; and"),Object(o.b)("li",{parentName:"ul"},"starting off with pre-defined use cases is easy yet customization and\napplication specific features require much more work.")),Object(o.b)("p",null,"Most full-stack projects we've seen are in-house solutions for IAM problems.\nImagine Google releasing their IAM as an open source product. It's certainly\ngreat, and it covers a lot of ground, but it also comes with drawbacks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Strict data models specific to the company developing the product:"),Object(o.b)("li",{parentName:"ul"},"Inflexible login process with either a username or an email for login, but not\nboth or unable to change it later;"),Object(o.b)("li",{parentName:"ul"},"Any application specific additional attributes are stored as unstructured\ndata, sometimes even as plain key/value pairs;"),Object(o.b)("li",{parentName:"ul"},"Complex build pipelines when using modern frontend frameworks like React or\nAngular in the HTML Rendering engine;"),Object(o.b)("li",{parentName:"ul"},"The user model stays the same, even if when differentiating between customers\nand employees in your system; and"),Object(o.b)("li",{parentName:"ul"},"API consumption is usually an after-thought because most flows are built\naround the user doing something in the browser. All of the above leads to\nadded complexity in application development and deployment due to session\nmanagement, cookie management, CSRF protection, and other mechanisms related\nto identity and security.")),Object(o.b)("h3",{id:"identity-as-a-service-idaas"},"Identity as a Service (IDaaS)"),Object(o.b)("p",null,'In today\'s market, with many proprietary SAAS companies offering Identity as a\nService, it seems easy to make sign-on cumbersome for both developers and users.\nEven with delegated third party login processes such as "Login with Google,"\nwhere OAuth2 and OpenID Connect are often the primary protocols, the challenge\nis making a secure and simple login without any extra overhead, in this case,\nfor instance, Oauth2 and OpenID.'),Object(o.b)("p",null,"Ory's focus is on simplicity, user experience, and above all, using the right\ntools and technologies for the target application. Feedback from Ory's user\ncommunity as well as the open source development efforts involved in Ory Hydra-\nOAuth2 and OpenID Connect server ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra"}),"ORY Hydra"),", show\nthat implementing OAuth2 or OpenID Connect is often frustrating and too complex.\nThese technologies are not one size fits all, and not designed for every\nimplementation scenario."),Object(o.b)("p",null,"The main point is that OAuth2 and OpenID Connect protocols solve identity\nfederation. For instance, when the target application authenticates an identity\nor authorizes access by using a system, for instance within an enterprise or\ncompany domain, or with another third party service, outside of the\napplication's control. These protocols don't solve processes like updating a\nuser's profile, adding a secondary recovery email, solving 2FA, storing and\nmanaging sessions, or solving global logout. These processes are the developer's\nresponsibility while the OAuth2 and OpenID Connect protocols simply offer a way\nto securely solve identity federation over the Browser - they do not solve:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Storage and management of all these tokens. These would often end up in the\nlocalStore making them vulnerable to XSS attacks. Or in a cookie issued by an\nHTTP server; an extra function that would need to be developed."),Object(o.b)("li",{parentName:"ul"},"Managing and storing the user session. This would require the developer to\ncreate the cookie for the session, delete the cookie at logs out, and to make\nsure that the cookie implements best security practices."),Object(o.b)("li",{parentName:"ul"},"Refresh expiring tokens. While this function is straightforward for one\nrequest, synchronising for example fifteen concurrent requests can be\ndifficult.")),Object(o.b)("p",null,'The point is that OAuth2 is hard to use because the intended use cases, for\ninstance, "Facebook Photo Backups") are very specific, and the proper security\nmechanisms need to be in place to deal with malicious third parties. Ory Kratos\nsimplifies user login.'),Object(o.b)("h3",{id:"use-a-library"},"Use a library"),Object(o.b)("p",null,"Due to the mulitude of programming laguages across front end, backend and core\ninfrastructure, ORY Kratos embraced a polygot design. In other words Ory Kratos\nprovides Software Development Kit (SDK) and libraries for the main programming\nlanguages."),Object(o.b)("p",null,"As software development teams grow, product requirements change. In different\nparts of the development lifecycle, things, for instance humans, servers, and\ncode, need to scale to size. Over time, the original product splits into\nsmaller, more manageable chunks. The libraries chosen at the outset will need to\nrun on the newest version of the programming language. Sometimes even the\nprogramming language or implementation framework are subject to change as a\nwhole. Still, the identity system is often so interlinked with all of the source\ncode, middlewares, annotations, shared state, etc., that it becomes an absolute\nnightmare to decouple."),Object(o.b)("h3",{id:"roll-your-own"},"Roll your own"),Object(o.b)("p",null,"Starting from scratch is sometimes the only option to fulfill the product's\narchitectural requirements. In this case, the following are some of the main\nconsiderations and challenges faced in the Ory efforts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To manage changing user models;"),Object(o.b)("li",{parentName:"ul"},'To choose and use some encryption algorithms such as BCrypt, PBKDF2, Argon2,\nScrypt, Argon2, Argon2i, Argon2id, Argon2d. There are many alternatives and\nmost of the algorithms have numerous versions and parametrisation options for\nexample "Salt length parameter." The multitude of options makes it hard to\nconfigure the most secure setting;'),Object(o.b)("li",{parentName:"ul"},'To consider and implement a wide range of processes and process variants for\ninstance, the user signs up via email, and later uses "Sign up with Google"\nthat has the same email address. Or, the user previously signed up using the\nemail/password process or flow, and then signs up using "Sign up with Google"\nand vice versa. Even these fairly simple use cases warrant considerable\ndevelopment effort to correctly implement with some degree of user\nfriendliness;'),Object(o.b)("li",{parentName:"ul"},"To prevent security threats for example\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.owasp.org/index.php/Testing_for_User_Enumeration_and_Guessable_User_Account_(OWASP-AT-002)"}),"account enumeration attacks"),";"),Object(o.b)("li",{parentName:"ul"},"To implement two factor authentication (2FA), for instance when the user\nlooses access to a registered and approved device, and there should be a\nfallback phone number for SMS or offline security codes;"),Object(o.b)("li",{parentName:"ul"},"To understand and use all of the important rules such as activation, welcome,\netc., around sending emails that don't alert spam filters; and"),Object(o.b)("li",{parentName:"ul"},"To support a broad ecosystem of products and services for example in the event\nthat a target application needs to notify Stripe when a new customer signs up.")),Object(o.b)("p",null,"The list above is purposely kept short. There are very many things to consider\nwhen building Ory Kratos in concert with the other products Ory Keto, Ory Hydra,\nand Ory Oathkeeper. The list is really, really long."),Object(o.b)("h2",{id:"ory-kratos"},"ORY Kratos"),Object(o.b)("p",null,"Considering all of the information above, there would be enough context to\nunderstand why and how ORY Kratos started, and why it's different from other\nmore conventional approaches. Ory Kratos uses a new stack, is open source, and\npeer reviewed and developed in a broad community of experts."),Object(o.b)("h3",{id:"solving-a-specific-problem-domain"},"Solving a specific problem domain"),Object(o.b)("p",null,"ORY Kratos addresses a clearly defined problem domain:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"managing credentials such as passwords, recovery email addresses, and security\nquestions;"),Object(o.b)("li",{parentName:"ul"},"authentication including secure login, keeping track of sessions and devices;"),Object(o.b)("li",{parentName:"ul"},"selfservice account management for example update profile, add/update email\naddresses, and changing passwords;"),Object(o.b)("li",{parentName:"ul"},"account/identity administration such as create, read, delete, update, import,\nand get; and"),Object(o.b)("li",{parentName:"ul"},"managing identity data for example first name, last name, profile picture, and\nbirthday, etc.")),Object(o.b)("p",null,"Ory has numerous products that support the protocols OAuth2 or OpenID Connect in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/ory/hydra"}),"ORY Hydra"),", a permission system in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/ory/keto"}),"ORY Keto"),", and a Reverse Proxy in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/ory/oathkeeper"}),"ORY Oathkeeper"),"."),Object(o.b)("h3",{id:"software-architecture"},"Software Architecture"),Object(o.b)("p",null,"Ory's\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../ecosystem/software-architecture-philosophy.md"}),"Software Architecture and Philosophy"),"\ndocument, explains the architectural beliefs and framework behind the Ory\nProducts in particular:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Small runtime footprint with about five (5) MB binary running on all operating\nsystems without any system, library, or VM dependencies;"),Object(o.b)("li",{parentName:"ul"},"Fully virtualised in a fifteen (15) MB Docker image;"),Object(o.b)("li",{parentName:"ul"},"Easy to manage with exactly one binary for the server and the cli;"),Object(o.b)("li",{parentName:"ul"},"Run-time orchestration using the latest Kubernetes providing fast and easy to\nuse ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ory/k8s"}),"Helm charts"),"; and"),Object(o.b)("li",{parentName:"ul"},"Horizontal scaling with no etcd key value store or memcached or adjacent tool\nrequired.")),Object(o.b)("h3",{id:"bring-your-own-user-interface-framework"},"Bring your own User Interface (Framework)"),Object(o.b)("p",null,"Ory's approach to user interface and user experience is to provide for an\ninteraction concept with maximum flexibility and creativity. Some companies need\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.hubspot.com/blog/tabid/6307/bid/34155/how-to-capture-more-and-better-lead-intel-with-progressive-profiling.aspx"}),"progressive profiling"),"\nand build a NodeJS app. Other companies desire to capture everything in one go,\nusing Client-Side JavaScript library such as Angular or React. Some companies\nwant an iOS-native registration and login experience. While Ory's cloud native\nheadless API approach address many integration and UI issues, with ORY Kratos,\npredefined flows make it easy to implement a custom user interface for login,\nregistration, profile management, account reset, etc. Furthermore, to make to\nvery easy to get started there is a reference implementation\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/kratos-selfservice-ui-node"}),"github.com/ory/kratos-selfservice-ui-node"),"."),Object(o.b)("p",null,"For more details about each individual flow, consult the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.2/self-service/flows/index"}),"Self-Service Flows Chapter"),"."),Object(o.b)("h3",{id:"bring-your-own-identity-models"},"Bring your own Identity Model(s)"),Object(o.b)("p",null,"Sometimes it is necessary to store more than one type of identity in your\nsystem:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A customer that uses email + password to login, and needs to set a birthdate;\nor"),Object(o.b)("li",{parentName:"ul"},"An employee that uses a unique username + password to login with a cost center\nattached to the profile.")),Object(o.b)("p",null,"ORY Kratos implements both scenarios by using\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/kratos/docs/v0.2/concepts/identity-user-model"}),"JSON Schemas for Identity Traits")),Object(o.b)("h3",{id:"forget-passport-js-oidc-client-"},"Forget passport-js, oidc-client, ..."),Object(o.b)("p",null,"While proprietary and bespoke middleware can protect APIs and Web endpoints, Ory\nOpen Source provides a base solution for many use cases. For example, ORY Kratos\nintegrates with ORY Oathkeeper, a Reverse Proxy solution. Defining Access Rules\nis as easy as writing a few lines of JSON / JSON5 / YAML!"),Object(o.b)("p",null,"Please consult the Quick Start documentation ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../quickstart.md"}),"Quickstart"),", for\nfurther information."))}u.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);