(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{455:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return h})),t.d(r,"default",(function(){return c}));var a=t(3),n=t(8),o=(t(0),t(551)),s={id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},i={unversionedId:"cli/kratos-hashers-argon2-hash",id:"version-v0.6/cli/kratos-hashers-argon2-hash",isDocsHomePage:!1,title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters",source:"@site/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-hash.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-hash",permalink:"/kratos/docs/cli/kratos-hashers-argon2-hash",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-hash.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"kratos-hashers-argon2-hash",title:"kratos hashers argon2 hash",description:"kratos hashers argon2 hash Hash a list of passwords for benchmarking the hashing parameters"},sidebar:"version-v0.6/docs",previous:{title:"kratos hashers argon2 calibrate",permalink:"/kratos/docs/cli/kratos-hashers-argon2-calibrate"},next:{title:"kratos hashers argon2 load-test",permalink:"/kratos/docs/cli/kratos-hashers-argon2-load-test"}},h=[{value:"kratos hashers argon2 hash",id:"kratos-hashers-argon2-hash",children:[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:h};function c(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-hashers-argon2-hash"},"kratos hashers argon2 hash"),Object(o.b)("p",null,"Hash a list of passwords for benchmarking the hashing parameters"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kratos hashers argon2 hash &lt;password1&gt; [&lt;password2&gt; ...] [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -h, --help                          help for hash\n      --iterations uint32             Number of iterations to start probing at. (default 1)\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --memory byte_size              Memory to use. (default 128.00MB)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallel                      Run all hashing operations in parallel.\n      --parallelism uint8             Number of threads to use. (default 72)\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}c.isMDXComponent=!0},551:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),c=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=h(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return t?n.a.createElement(f,i(i({ref:r},l),{},{components:t})):n.a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var h in r)hasOwnProperty.call(r,h)&&(i[h]=r[h]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);