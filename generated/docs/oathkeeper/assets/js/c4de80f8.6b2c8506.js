(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[7943],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6489:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={id:"install",title:"Installation"},i={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Oathkeeper on any system is straight forward. We provide",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/oathkeeper/docs/next/install",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/install.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1624392140,formattedLastUpdatedAt:"6/22/2021",frontMatter:{id:"install",title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/oathkeeper/docs/next/"},next:{title:"Contribution Guidelines",permalink:"/oathkeeper/docs/next/contributing"}},s=[{value:"Docker",id:"docker",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Download Binaries",id:"download-binaries",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing ORY Oathkeeper on any system is straight forward. We provide\npre-built binaries, Docker Images and support various package managers."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"We recommend using Docker to run ORY Oathkeeper:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/oathkeeper:v0.38.12-beta.1\n$ docker run --rm -it oryd/oathkeeper help\n")),(0,o.kt)("h2",{id:"macos"},"macOS"),(0,o.kt)("p",null,"You can install ORY Oathkeeper using ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/oathkeeper\n$ brew install ory/oathkeeper/oathkeeper\n$ oathkeeper help\n")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"On linux, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/oathkeeper/master/install.sh) -b . v0.38.12-beta.1\n$ ./oathkeeper help\n")),(0,o.kt)("p",null,"You may want to move ORY Oathkeeper to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./oathkeeper /usr/local/bin/\n$ oathkeeper help\n")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("p",null,"You can install ORY Oathkeeper using ",(0,o.kt)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-oathkeeper https://github.com/ory/scoop-oathkeeper.git\n> scoop install oathkeeper\n> oathkeeper help\n")),(0,o.kt)("h2",{id:"download-binaries"},"Download Binaries"),(0,o.kt)("p",null,"The client and server ",(0,o.kt)("strong",{parentName:"p"},"binaries are downloadable at the\n",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ory/oathkeeper/releases"},"releases tab")),". There is currently\nno installer available. You have to add the Oathkeeper binary to the PATH\nenvironment variable yourself or put the binary in a location that is already in\nyour ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),", ...)."),(0,o.kt)("p",null,"Once installed, you should be able to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ oathkeeper help\n")),(0,o.kt)("h2",{id:"building-from-source"},"Building from Source"),(0,o.kt)("p",null,"If you wish to compile ORY Oathkeeper yourself, you need to install and set up\n",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go 1.12+")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,o.kt)("p",null,"The following commands will check out the latest release tag of ORY Oathkeeper\nand compile it and set up flags so that ",(0,o.kt)("inlineCode",{parentName:"p"},"oathkeeper version")," works as expected.\nPlease note that this will only work with a linux shell like bash or sh."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go get -d -u github.com/ory/oathkeeper\n$ cd $(go env GOPATH)/src/github.com/ory/oathkeeper\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/oathkeeper help\n")))}u.isMDXComponent=!0}}]);