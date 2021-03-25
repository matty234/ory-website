(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{535:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(568)),i={id:"dependencies-environment",title:"Database Setup and Configuration"},c={unversionedId:"dependencies-environment",id:"dependencies-environment",isDocsHomePage:!1,title:"Database Setup and Configuration",description:"ORY Hydra is built cloud native and implements",source:"@site/docs/dependencies-environment.md",slug:"/dependencies-environment",permalink:"/hydra/docs/next/dependencies-environment",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/dependencies-environment.md",version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1605630369,formattedLastUpdatedAt:"11/17/2020",sidebar:"docs",previous:{title:"Run ORY Hydra in Docker",permalink:"/hydra/docs/next/configure-deploy"},next:{title:"Preparing for Production",permalink:"/hydra/docs/next/production"}},s=[{value:"Database Configuration",id:"database-configuration",children:[{value:"Configuration",id:"configuration",children:[]}]}],d={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Hydra is built cloud native and implements\n",Object(o.b)("a",{parentName:"p",href:"https://www.12factor.net/"},"12factor")," principles. The Docker Image is 5 MB light\nand versioned with\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"},"verbose upgrade instructions"),"\nand\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/CHANGELOG.md"},"detailed changelogs"),".\nAuto-scaling, migrations, health checks, it all works with zero additional work\nrequired. It is possible to run ORY Hydra on any platform, including but not\nlimited to OSX, Linux, Windows, ARM, FreeBSD and more."),Object(o.b)("p",null,"ORY Hydra has two operational modes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'In-memory: This mode does not work with more than one instance ("cluster") and\nany state is lost after restarting the instance. ORY Hydra uses SQLite with\nin-memory mode to achieve this.'),Object(o.b)("li",{parentName:"ul"},"SQL: This mode works with more than one instance and state is not lost after\nrestarts.")),Object(o.b)("p",null,"No further dependencies are required for a production-ready instance."),Object(o.b)("h2",{id:"database-configuration"},"Database Configuration"),Object(o.b)("p",null,"For more information on configuring"),Object(o.b)("p",null,"The SQL adapter supports PostgreSQL 9.6+, MySQL 5.7+ and SQLite. Please note\nthat older MySQL versions have issues with ORY Hydra's database schema. For more\ninformation ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues/377"},"go here"),"."),Object(o.b)("p",null,"If you do run the SQL adapter, you must first create the database schema. The\n",Object(o.b)("inlineCode",{parentName:"p"},"hydra serve")," command does not do this automatically, instead you must run\n",Object(o.b)("inlineCode",{parentName:"p"},"hydra migrate sql")," to create the schemas. The ",Object(o.b)("inlineCode",{parentName:"p"},"hydra migrate sql")," command also\nruns database migrations in case of an upgrade. Please follow the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"},"upgrade instructions")," to\nsee when you need to run this command. Always create a backup before running\n",Object(o.b)("inlineCode",{parentName:"p"},"hydra migrate sql"),"!"),Object(o.b)("p",null,"Running SQL migrations in Docker is very easy, check out the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/quickstart-postgres.yml"},"docker-compose"),"\nexample to see how we did it!"),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"For more information on configuring the DSN (Data-Source-Name), head over to\n",Object(o.b)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/deployment"},"Deployment Fundamentals and Requirements"),"."))}u.isMDXComponent=!0},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||l[m]||o;return n?a.a.createElement(b,c(c({ref:t},d),{},{components:n})):a.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);