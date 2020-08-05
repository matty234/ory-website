(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),a=(n(0),n(395)),i={id:"kratos-video-tutorials",title:"Video Tutorials"},l={id:"version-v0.4/guides/kratos-video-tutorials",isDocsHomePage:!1,title:"Video Tutorials",description:"In this document we will gather video guides for ORY Kratos.",source:"@site/versioned_docs/version-v0.4/guides/kratos-video-tutorials.mdx",permalink:"/kratos/docs/guides/kratos-video-tutorials",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/guides/kratos-video-tutorials.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226},s=[],c={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this document we will gather video guides for ORY Kratos."),Object(a.b)("p",null,"Below each video you will find a transcript of the video. If you think we can\nimprove the video or should make any other changes, you can open an issue here."),Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5t1Zr_zJc7E",frameborder:"0",allowfullscreen:!0}),Object(a.b)("details",null,Object(a.b)("summary",null,"Transcript Kratos Quickstart"),"Welcome to the Quickstart Introduction of ORY Kratos on Windows.",Object(a.b)("p",null,"First of all you need Docker Desktop and Git to launch this quickstart."),Object(a.b)("p",null,"You will find download links for those in the description."),Object(a.b)("p",null,"I already have my git bash open here and I am starting Docker now."),Object(a.b)("p",null,"Next I will open my browser to navigate to the Kratos Quickstart."),Object(a.b)("p",null,"If you have not already read the whole quickstart, I really recommend it, but I\nwill focus on the practical steps now."),Object(a.b)("p",null,"So scroll down a little bit and you will see the commands you have to put into\nyour console to get Kratos running."),Object(a.b)("p",null,"The first command here will clone the Kratos repository to your machine."),Object(a.b)("p",null,"This will take a little bit depending on your internet speed."),Object(a.b)("p",null,"Then you want to set your directory to your Kratos directory and lastly switch\nthe branch to the 0.3.0alpha version, since this is the version this quickstart\nis tailored to."),Object(a.b)("p",null,"As I don't have make installed, I need to docker pull the latest SQL and the\nself service as well, that is our SecureApp."),Object(a.b)("p",null,"And now we have all the building parts ready and can use the docker-compose\ncommand to get this thing going."),Object(a.b)("p",null,"So just copy the docker-compose command and cross your fingers that everything\nwill work correctly."),Object(a.b)("p",null,"This part can actually take a few minutes, but once the output has slowed down\nyou can see the last two lines here indicate that everything has been set up and\neverything is working fine."),Object(a.b)("p",null,"Now we can actually test our SecureApp login and registration."),Object(a.b)("p",null,"So I go back to the quickstart and scroll down where we find the URL to our\nSecureApp dashboard."),Object(a.b)("p",null,'In this case I will just use my email to create an account and I will use a very\nsecure password, which in this case actually "securepassword".'),Object(a.b)("p",null,"But oh look, there is an error already since this password is not actually\nsecure but has been found in more than 200 data leaks, so this is some basic\nsecurity that is already set up in your SecureApp."),Object(a.b)("p",null,"And I will try this again with an actually secure password now, I copied it down\nin my notepad here. And there we are, we are logged in, everything has worked\ncorrectly."),Object(a.b)("p",null,"Here you will see a bunch of information about your login."),Object(a.b)("p",null,"Now I want to show you the email confirmation real quick. Since we actually\ndidn't send an email to a real address, but are using Mailslurper as a testing\nenvironment, you can go back to the quickstart page and scroll down a little\nbit, there is the url."),Object(a.b)("p",null,"Just click on it and you will see there is our email. And there it is, we have\nconfirmed our email."),Object(a.b)("p",null,"Now I will logout once more and see if we can get back in. And it seems to work\nfine, very nice!"),Object(a.b)("p",null,"This is the basic quickstart for Kratos on Windows and I hope this video will\nhelp to get you started."),Object(a.b)("p",null,"If you have any further questions, please leave a comment or visit our community\nforum or slack, the links are in the description."),Object(a.b)("p",null,"Don't forget to star us on github and like, subscribe for more upcoming\ntutorials.")))}u.isMDXComponent=!0},395:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);