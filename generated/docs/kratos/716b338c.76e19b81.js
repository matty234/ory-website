(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(447)),o={id:"docker",title:"Docker Images"},s={unversionedId:"guides/docker",id:"guides/docker",isDocsHomePage:!1,title:"Docker Images",description:"Supported tags and respective Dockerfile links",source:"@site/docs/guides/docker.md",slug:"/guides/docker",permalink:"/kratos/docs/next/guides/docker",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/docker.md",version:"current",lastUpdatedBy:"NickUfer",lastUpdatedAt:1604799647,sidebar:"docs",previous:{title:"High Availability",permalink:"/kratos/docs/next/guides/high-availability-ha"},next:{title:"Setting up Password Hashing Parameters",permalink:"/kratos/docs/next/guides/setting-up-password-hashing-parameters"}},c=[{value:"Supported tags and respective <code>Dockerfile</code> links",id:"supported-tags-and-respective-dockerfile-links",children:[]},{value:"Image Variants",id:"image-variants",children:[]},{value:"How to use these images",id:"how-to-use-these-images",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Volumes",id:"volumes",children:[]},{value:"Examples",id:"examples",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"supported-tags-and-respective-dockerfile-links"},"Supported tags and respective ",Object(i.b)("inlineCode",{parentName:"h2"},"Dockerfile")," links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ory/kratos/blob/v0.4.3-alpha.1/.docker/Dockerfile"}),Object(i.b)("inlineCode",{parentName:"a"},"latest"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0.4.3-alpha.1"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0.4.3"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0.4"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ory/kratos/blob/v0.4.3-alpha.1/.docker/Dockerfile-sqlite"}),Object(i.b)("inlineCode",{parentName:"a"},"latest-sqlite"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0.4.3-alpha.1-sqlite"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0.4.3-sqlite"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0.4-sqlite"),", ",Object(i.b)("inlineCode",{parentName:"a"},"v0-sqlite")))),Object(i.b)("h2",{id:"image-variants"},"Image Variants"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Kratos")," Docker images come in two different flavors, one with and one\nwithout SQLite support. All Docker images with the postfix\n",Object(i.b)("inlineCode",{parentName:"p"},"kratos:<version>-sqlite")," in the tag are compiled with embed SQLite support and\nuses libmusl. All Docker images (",Object(i.b)("inlineCode",{parentName:"p"},"kratos:<version>"),") without the postfix\n",Object(i.b)("inlineCode",{parentName:"p"},"-sqlite")," are compiled without SQLite support and therefore also don't include\nlibmusl."),Object(i.b)("p",null,"If you don't make use of the embedded SQLite support we recommend to use the\nDocker images without SQLite support as they are smaller in size, include fewer\nlibraries and therefore have a smaller attack surface."),Object(i.b)("h2",{id:"how-to-use-these-images"},"How to use these images"),Object(i.b)("p",null,"In order to make the provided Docker images as useful as possible they can be\nconfigured through a set of supported Environment variables. In addition the\ndefault configuration directory can be bound to a directory of choice to make it\nsimple to pass in your own configuration files."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("h4",{id:"dsn"},Object(i.b)("inlineCode",{parentName:"h4"},"DSN")),Object(i.b)("p",null,"This environment variable allows you to specify the database source name. As the\n",Object(i.b)("inlineCode",{parentName:"p"},"DSN")," normally consists of the url to the database system and the credentials to\naccess the database it is recommended to specify the ",Object(i.b)("inlineCode",{parentName:"p"},"DSN")," using a Environment\nvariable."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'docker run -e DSN="memory" oryd/kratos:latest')),Object(i.b)("h4",{id:"secrets_default"},Object(i.b)("inlineCode",{parentName:"h4"},"SECRETS_DEFAULT")),Object(i.b)("p",null,"This environment variable allows you to specify the secret used to sign and\nverify signatures and encrypt things:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'docker run -e SECRETS_DEFAULT="CHANGE-ME" oryd/kratos:v0.4.3-alpha.1')),Object(i.b)("h3",{id:"volumes"},"Volumes"),Object(i.b)("p",null,"If the file ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as the configuration\nfile. The provided Kratos Docker images currently do not include a default\nconfiguration file, but make it easy to pass in your own configuration file(s)\nby either binding a local directory or by creating your own custom Docker Image\nand adding the configuration file(s) to the custom image."),Object(i.b)("h4",{id:"binding-host-directory"},"Binding host directory"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example:")," In this example we start the standard Docker container with SQLite\nsupport and use the quickstart email-password example configuration files by\nbind mounting the local directory. This example assumes that you checked out the\nKratos Git repo and execute the Docker command in the Kratos Git repo directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'docker run -it -e DSN="memory" \\\n       --mount type=bind,source="$(pwd)"/contrib/quickstart/kratos/email-password,target=/home/ory \\\n       oryd/kratos:latest-sqlite\n')),Object(i.b)("p",null,"In general we only recommend this approach for local development."),Object(i.b)("h4",{id:"creating-custom-docker-image"},"Creating custom Docker image"),Object(i.b)("p",null,"You can create your own, custom Kratos Docker images which embeds your\nconfiguration files by simply using the official Kratos Docker images as the\nBase Image and just adding your configuration file(s) as shown in the example\nbelow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dockerfile"}),"FROM oryd/kratos:latest\nCOPY contrib/quickstart/kratos/email-password/.kratos.yml /ory/home\n")),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("p",null,"Below you find different examples how to use the official Kratos Docker images."))}d.isMDXComponent=!0},447:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);