(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[5538],{82924:function(e,t,a){"use strict";var n=a(67294).createContext(void 0);t.Z=n},85350:function(e,t,a){"use strict";var n=a(67294),r=a(82924);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},14239:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return y}});var n=a(22122),r=a(19756),s=a(67294),o=a(3905),i=a(83300),l=a.n(i),p=a(11756),c="container_2x1S",d=a(25108),u=function(e,t){if(!e)return 0;var a=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===a?0:a},m=function(e){var t=e.src,a=e.title,n=(0,s.useState)(""),r=n[0],o=n[1];(0,s.useEffect)((function(){var a,n,r;l()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((a=e,n=a.startAt,r=a.endAt,function(e){var t=e.split("\n"),a=u(n,t);a>0&&(t=["// ..."].concat(t.slice(a,-1)));var s=u(r,t);return s>0&&(t=[].concat(t.slice(0,s+1),["// ..."])),t.join("\n")})).then(o).catch(d.error)}),[]);var i="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),m='title="'+(a||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return s.createElement("div",{className:c},s.createElement(p.Z,{metastring:m,className:i,children:r}))},h=["components"],g={id:"server-side-web-app",sidebar_label:"Server-Side Web App",title:"Build a Server-Side Web App with Ory"},k=void 0,f={unversionedId:"start-building/server-side-web-app",id:"start-building/server-side-web-app",isDocsHomePage:!1,title:"Build a Server-Side Web App with Ory",description:"Ory supports server-side web apps natively. To get building, pick the technology",source:"@site/docs/start-building/server-side-web-app.mdx",sourceDirName:"start-building",slug:"/start-building/server-side-web-app",permalink:"/docs/start-building/server-side-web-app",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/start-building/server-side-web-app.mdx",tags:[],version:"current",lastUpdatedBy:"Alano Terblanche",lastUpdatedAt:1629711945,formattedLastUpdatedAt:"8/23/2021",frontMatter:{id:"server-side-web-app",sidebar_label:"Server-Side Web App",title:"Build a Server-Side Web App with Ory"},sidebar:"docs",previous:{title:"Install the Ory CLI",permalink:"/docs/start-building/ory-cli-install-use"},next:{title:"Single Page App",permalink:"/docs/start-building/single-page-app-spa"}},y=[{value:"ExpressJS / NodeJS",id:"expressjs--nodejs",children:[{value:"Code Examples",id:"code-examples",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]}],N={toc:y};function v(e){var t=e.components,s=(0,r.Z)(e,h);return(0,o.kt)("wrapper",(0,n.Z)({},N,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ory supports server-side web apps natively. To get building, pick the technology\nyou are using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#expressjs--nodejs"},"NodeJS")," / ",(0,o.kt)("a",{parentName:"li",href:"#expressjs--nodejs"},"ExpressJS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/start-building/other-languages"},"Golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/start-building/other-languages"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/start-building/other-languages"},"PHP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/start-building/other-languages"},"Django")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/start-building/other-languages"},"Other language / framework"))),(0,o.kt)("p",null,"Before you get started, please install the ",(0,o.kt)("a",{parentName:"p",href:"/docs/start-building/ory-cli-install-use"},"Ory CLI"),"\non your system, and have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/get-started"},"running Ory Project")," and a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/create-personal-access-token"},"Personal Access Token")," ready."),(0,o.kt)("p",null,"For more information on the Ory Cloud SDK and Services and please see the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/services-api"},"Services & APIs docs"),"."),(0,o.kt)("h2",{id:"expressjs--nodejs"},"ExpressJS / NodeJS"),(0,o.kt)("p",null,"This example uses NodeJS with TypeScript support and ExpressJS to set up an app\nwith two endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/"),": can be accessed without an active Ory Session;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/public"),": can be accessed without an active Ory Session;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/protected"),": can only be accessed after registration / login - with an active\nOry Session.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can find this\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/docs/tree/master/examples/typescript-express"},"example's source code on GitHub"),"."))),(0,o.kt)("p",null,"To get started open a new terminal and set the environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ORY_ACCESS_TOKEN"),": Use a personal access token here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export ORY_ACCESS_TOKEN=...\n# e.g.\n# export ORY_ACCESS_TOKEN=2123l8jJhSIYQZvfasd53YoRvcseg1\n")),(0,o.kt)("p",null,"To get started, check out the example's source code, install the node packages,\nand run the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ory/docs.git\ncd docs/examples/typescript-express\nnpm i\n\nexport ORY_ACCESS_TOKEN=...\n# e.g.\n# export ORY_ACCESS_TOKEN=2123l8jJhSIYQZvfasd53YoRvcseg1\n\n## ATTENTION ##\n# Node, similar to Firefox, does not use the Operating System Certificate store.\n# To get the self-signed SSL certificates working, we need to disable TLS Verification.\n# NEVER, EVER do this in a live system.\nexport NODE_TLS_REJECT_UNAUTHORIZED=0\n\nnpm start\n")),(0,o.kt)("p",null,"Open another terminal and copy set the ",(0,o.kt)("inlineCode",{parentName:"p"},"ORY_ACCESS_TOKEN")," env var to your\nPersonal Access Token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export ORY_ACCESS_TOKEN=...\n")),(0,o.kt)("p",null,"Next, run the Ory Proxy with"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--port 4000"),": the port on which the proxy should listen on;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/"),": the host and port of the NodeJS app you are\nprotecting.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ory proxy local --port 4000 http://localhost:8000/\n")),(0,o.kt)("p",null,"Your operating system will prompt you for your administrative password. The Ory\nProxy sets up a temporary SSL certificate in your operating system's certificate\nstore to enable HTTPS integration."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The registration of the self-signed SSL certificate works only in Chrome and\nSafari but not yet in Firefox. Also, programming languages like Golang, NodeJS,\nand others often do not respect the operating system certificate store. In those\ncases, you must disable TLS verification. This is not an issue in production!"))),(0,o.kt)("p",null,"To see what the app can do, open it at the original endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://localhost:8000/"},"localhost:8000/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://localhost:8000/protected"},"localhost:8000/protected"))),(0,o.kt)("p",null,"The second URL ",(0,o.kt)("inlineCode",{parentName:"p"},"/protected")," will greet you with an error because no Ory Session\nis available."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NodeJS route is not available without authentication",src:a(26867).Z})),(0,o.kt)("p",null,"However, if you open the URL through the proxy at\n",(0,o.kt)("a",{parentName:"p",href:"https://localhost:4000/protected"},"https://localhost:4000/protected"),", your\nbrowser will be redirected to a login screen! Once you created an account or\nsigned in, the application will show information about the session:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NodeJS route is not available without authentication",src:a(77352).Z})),(0,o.kt)("h3",{id:"code-examples"},"Code Examples"),(0,o.kt)("p",null,"To get the app integrated with Ory, we use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@ory/client"},(0,o.kt)("inlineCode",{parentName:"a"},"@ory/client"))," contains the Ory\nSDK. While not needed, the app includes an example of how to set up the SDK\nand use it;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},(0,o.kt)("inlineCode",{parentName:"a"},"dotenv"))," loads environment variables\nfrom a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/express-jwt"},(0,o.kt)("inlineCode",{parentName:"a"},"express-jwt"))," is an express\nmiddleware for JWTs;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/jwks-rsa"},(0,o.kt)("inlineCode",{parentName:"a"},"jwks-rsa"))," a library to load the\ncryptographic keys for verifying JWTs using a remote URL.")),(0,o.kt)("p",null,"Let's take a look at the annotated code!"),(0,o.kt)("h4",{id:"root-app"},"Root App"),(0,o.kt)("p",null,"All you need is a plain ExpressJS skeleton:"),(0,o.kt)(m,{lang:"js",link:"https://github.com/ory/docs/blob/master/examples/typescript-express/src/index.ts",src:"https://raw.githubusercontent.com/ory/docs/master/examples/typescript-express/src/index.ts",mdxType:"CodeFromRemote"}),(0,o.kt)("h4",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"The Ory Session Cookie is converted to a JSON Web Token by ",(0,o.kt)("inlineCode",{parentName:"p"},"ory proxy local"),".\nThe cryptographic key to verify the JSON Web Token is available at\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://<proxy>/.ory/proxy/.well-known"),"."),(0,o.kt)("p",null,"If the JSON Web Token is not available, or not valid, we redirect to the login:"),(0,o.kt)(m,{lang:"js",link:"https://github.com/ory/docs/blob/master/examples/typescript-express/src/middleware.ts",src:"https://raw.githubusercontent.com/ory/docs/master/examples/typescript-express/src/middleware.ts",mdxType:"CodeFromRemote"}),(0,o.kt)("h4",{id:"protected-page"},"Protected Page"),(0,o.kt)("p",null,"The protected page is doing a few extra things, such as fetching the identity\nfrom Ory Cloud's Administrative APIs, and also creates a logout URL for the\nuser:"),(0,o.kt)(m,{lang:"js",link:"https://github.com/ory/docs/blob/master/examples/typescript-express/src/routes/protected.ts",src:"https://raw.githubusercontent.com/ory/docs/master/examples/typescript-express/src/routes/protected.ts",mdxType:"CodeFromRemote"}),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Great! You've made it! Integrating Ory is easy and straight forward. There are\nmany more things to come, and we are excited to have you on board!"))}v.isMDXComponent=!0},83300:function(e,t){"use strict";var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();e.exports=t=a.fetch,a.fetch&&(t.default=a.fetch.bind(a)),t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response},77352:function(e,t,a){"use strict";t.Z=a.p+"assets/images/proxy-auth-7ecdb74c8cd76872fdef23df11764e20.png"},26867:function(e,t,a){"use strict";t.Z=a.p+"assets/images/proxy-unauth-310f4200059e412511bc832ae67f4442.png"}}]);