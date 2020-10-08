/*! For license information please see 3.7c9854f0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{343:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},344:function(e,t,n){"use strict";var a=n(0),r=n(343);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},346:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===c)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},349:function(e,t,n){"use strict";var a=n(0),r=n(350);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},350:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},424:function(e,t,n){"use strict";var a=n(2),r=n(0),c=n.n(r),o=n(338),i=n(413),l=n(333),s=n(334),u=n(7),d="light",f="dark",m=function(e){return e===f?f:d},h=function(){return u.a.canUseDOM?m(document.documentElement.getAttribute("data-theme")):d},v=function(e){try{localStorage.setItem("theme",m(e))}catch(t){console.error(t)}},b=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,a=(n=void 0===n?{}:n).disableSwitch,c=void 0!==a&&a,o=Object(r.useState)(h),i=o[0],s=o[1],u=Object(r.useCallback)((function(){s(d),v(d)}),[]),b=Object(r.useCallback)((function(){s(f),v(f)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",m(i))}),[i]),Object(r.useEffect)((function(){if(!c)try{var e=localStorage.getItem("theme");null!==e&&s(m(e))}catch(t){console.error(t)}}),[s]),Object(r.useEffect)((function(){c||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;s(t?f:d)}))}),[]),{isDarkTheme:i===f,setLightTheme:u,setDarkTheme:b}},p=n(350);var g=function(e){var t=b(),n=t.isDarkTheme,a=t.setLightTheme,r=t.setDarkTheme;return c.a.createElement(p.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:r}},e.children)},k="docusaurus.tab.",O=function(){var e=Object(r.useState)({}),t=e[0],n=e[1],a=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(k))e[a.substring(k.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),a(e,t)}}},E="docusaurus.announcement.dismiss",y="docusaurus.announcement.id",j=function(){var e=Object(l.a)().siteConfig.themeConfig.announcementBar,t=Object(r.useState)(!0),n=t[0],a=t[1],c=Object(r.useCallback)((function(){localStorage.setItem(E,"true"),a(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(y);"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;localStorage.setItem(y,t),r&&localStorage.setItem(E,"false"),(r||"false"===localStorage.getItem(E))&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:c}},C=n(343);var w=function(e){var t=O(),n=t.tabGroupChoices,a=t.setTabGroupChoices,r=j(),o=r.isAnnouncementBarClosed,i=r.closeAnnouncementBar;return c.a.createElement(C.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},_=n(344),S=n(54),N=n.n(S);var T=function(){var e,t=Object(l.a)().siteConfig,n=(t=void 0===t?{}:t).themeConfig,a=(n=void 0===n?{}:n).announcementBar,r=void 0===a?{}:a,i=r.content,s=r.backgroundColor,u=r.textColor,d=r.isCloseable,f=Object(_.a)(),m=f.isAnnouncementBarClosed,h=f.closeAnnouncementBar;return!i||d&&m?null:c.a.createElement("div",{className:N.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},c.a.createElement("div",{className:Object(o.a)(N.a.announcementBarContent,(e={},e[N.a.announcementBarCloseable]=d,e)),dangerouslySetInnerHTML:{__html:i}}),d?c.a.createElement("button",{type:"button",className:N.a.announcementBarClose,onClick:h,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=n(371),I=n(22),D=n(400),M=n(516);function B(){return c.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},c.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var P=n(517);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var U="Ctrl";function V(){return"undefined"==typeof navigator?U:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var X=c.a.forwardRef((function(e,t){var n=A(Object(r.useState)((function(){return V()?"\u2318":U})),2),a=n[0],o=n[1];return Object(r.useEffect)((function(){V()&&o("\u2318")}),[]),c.a.createElement("button",x({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),c.a.createElement(P.a,null),c.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),c.a.createElement("span",{className:"DocSearch-Button-Key"},a===U?c.a.createElement(B,null):a),c.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),F=null;function H(e){var t=e.hit,n=e.children;return c.a.createElement(L.a,{to:t.url},n)}function K(e){var t=e.state,n=e.onClose,a=Object(M.a)().generateSearchPageLink;return c.a.createElement(L.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function Y(e){var t=Object(l.a)().siteMetadata,o=Object(s.b)().withBaseUrl,u=Object(D.useHistory)(),d=Object(r.useRef)(null),f=Object(r.useState)(!1),m=f[0],h=f[1],v=Object(r.useState)(null),b=v[0],p=v[1],g=Object(r.useCallback)((function(){return F?Promise.resolve():Promise.all([n.e(276).then(n.bind(null,1032)),Promise.all([n.e(0),n.e(277)]).then(n.bind(null,1031)),n.e(0).then(n.t.bind(null,331,7))]).then((function(e){var t=e[0].DocSearchModal;F=t}))}),[]),k=Object(r.useCallback)((function(){g().then((function(){h(!0)}))}),[g,h]),O=Object(r.useCallback)((function(){h(!1)}),[h]),E=Object(r.useCallback)((function(e){g().then((function(){h(!0),p(e.key)}))}),[g,h,p]),y=Object(r.useRef)({navigate:function(e){var t=e.suggestionUrl;u.push(t)}}).current,j=Object(r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:o(""+t.pathname+t.hash)})}))})).current,C=Object(r.useMemo)((function(){return function(e){return c.a.createElement(K,Object(a.a)({},e,{onClose:O}))}}),[O]),w=Object(r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}),[t.docusaurusVersion]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,o=e.searchButtonRef;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,o])}({isOpen:m,onOpen:k,onClose:O,onInput:E,searchButtonRef:d}),c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null,c.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),c.a.createElement(X,{onTouchStart:g,onFocus:g,onMouseOver:g,onClick:k,ref:d}),m&&Object(I.createPortal)(c.a.createElement(F,Object(a.a)({onClose:O,initialScrollY:window.scrollY,initialQuery:b,navigator:y,transformItems:j,hitComponent:H,resultsFooterComponent:C,transformSearchClient:w},e)),document.body))}var q=function(){var e=Object(l.a)().siteConfig;return c.a.createElement(Y,e.themeConfig.algolia)},G=n(646),W=n.n(G),z=n(55),J=n.n(z),Q=function(e){var t=e.icon,n=e.style;return c.a.createElement("span",{className:Object(o.a)(J.a.toggle,J.a.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return c.a.createElement("span",{className:Object(o.a)(J.a.toggle,J.a.light),style:n},t)},$=function(e){var t=Object(l.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,r=n.darkIcon,o=n.darkIconStyle,i=n.lightIcon,s=n.lightIconStyle,u=t.isClient;return c.a.createElement(W.a,Object(a.a)({disabled:!u,icons:{checked:c.a.createElement(Q,{icon:r,style:o}),unchecked:c.a.createElement(Z,{icon:i,style:s})}},e))},ee=n(349);var te=function(e){var t=Object(r.useState)(e),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){return a(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,a]},ne=n(518),ae=function(e){var t=Object(r.useState)(!0),n=t[0],a=t[1],c=Object(r.useState)(!1),o=c[0],i=c[1],l=Object(r.useState)(0),s=l[0],u=l[1],d=Object(r.useState)(0),f=d[0],m=d[1],h=Object(r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(D.useLocation)(),b=te(v.hash),p=b[0],g=b[1];return Object(ne.a)((function(t){var n=t.scrollY;if(e&&(0===n&&a(!0),!(n<f))){if(o)return i(!1),a(!1),void u(n);var r=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&n>=s?a(!1):n+c<r&&a(!0),u(n)}}),[s,f]),Object(r.useEffect)((function(){e&&(a(!0),g(v.hash))}),[v]),Object(r.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:h,isNavbarVisible:n}},re=n(519),ce=n(520),oe=n(521),ie=n(56),le=n.n(ie),se=n(6),ue=n(514),de={default:function(){return ue.a},docsVersion:function(){return n(650).default},docsVersionDropdown:function(){return n(654).default}};function fe(e){var t=e.type,n=Object(se.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=de[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return c.a.createElement(a,n)}var me="right";var he=function(){var e,t,n=Object(l.a)(),i=n.siteConfig.themeConfig,s=i.navbar,u=(s=void 0===s?{}:s).title,d=void 0===u?"":u,f=s.items,m=void 0===f?[]:f,h=s.hideOnScroll,v=void 0!==h&&h,b=s.style,p=void 0===b?void 0:b,g=i.colorMode,k=(g=void 0===g?{}:g).disableSwitch,O=void 0!==k&&k,E=n.isClient,y=Object(r.useState)(!1),j=y[0],C=y[1],w=Object(r.useState)(!1),_=w[0],S=w[1],N=Object(ee.a)(),T=N.isDarkTheme,I=N.setLightTheme,D=N.setDarkTheme,M=ae(v),B=M.navbarRef,P=M.isNavbarVisible,x=Object(oe.a)(),A=x.logoLink,R=x.logoLinkProps,U=x.logoImageUrl,V=x.logoAlt;Object(re.a)(j);var X=Object(r.useCallback)((function(){C(!0)}),[C]),F=Object(r.useCallback)((function(){C(!1)}),[C]),H=Object(r.useCallback)((function(e){return e.target.checked?D():I()}),[I,D]),K=Object(ce.a)();Object(r.useEffect)((function(){K===ce.b.desktop&&C(!1)}),[K]);var Y=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:me)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:me)}))}}(m),G=Y.leftItems,W=Y.rightItems;return c.a.createElement("nav",{ref:B,className:Object(o.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===p,"navbar--primary":"primary"===p,"navbar-sidebar--show":j},e[le.a.navbarHideable]=v,e[le.a.navbarHidden]=!P,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:X,onKeyDown:X},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(L.a,Object(a.a)({className:"navbar__brand",to:A},R),null!=U&&c.a.createElement("img",{key:E,className:"navbar__logo",src:U,alt:V}),null!=d&&c.a.createElement("strong",{className:Object(o.a)("navbar__title",(t={},t[le.a.hideLogoText]=_,t))},d)),G.map((function(e,t){return c.a.createElement(fe,Object(a.a)({},e,{key:t}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},W.map((function(e,t){return c.a.createElement(fe,Object(a.a)({},e,{key:t}))})),!O&&c.a.createElement($,{className:le.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:H}),c.a.createElement(q,{handleSearchBarToggle:S,isSearchBarExpanded:_}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(L.a,Object(a.a)({className:"navbar__brand",onClick:F,to:A},R),null!=U&&c.a.createElement("img",{key:E,className:"navbar__logo",src:U,alt:V}),null!=d&&c.a.createElement("strong",{className:"navbar__title"},d)),!O&&j&&c.a.createElement($,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:H})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return c.a.createElement(fe,Object(a.a)({mobile:!0},e,{onClick:F,key:t}))})))))))},ve=n(426);n(57);function be(e){var t=e.children;return c.a.createElement(g,null,c.a.createElement(w,null,t))}t.a=function(e){var t=Object(l.a)().siteConfig,n=t.favicon,r=t.title,u=t.themeConfig,d=u.image,f=u.metadatas,m=t.url,h=t.titleDelimiter,v=e.children,b=e.title,p=e.noFooter,g=e.description,k=e.image,O=e.keywords,E=e.permalink,y=e.wrapperClassName,j=b?b+" "+h+" "+r:r,C=k||d,w=Object(s.a)(C,{absolute:!0}),_=Object(s.a)(n);return c.a.createElement(be,null,c.a.createElement(i.a,null,c.a.createElement("html",{lang:"en"}),j&&c.a.createElement("title",null,j),j&&c.a.createElement("meta",{property:"og:title",content:j}),n&&c.a.createElement("link",{rel:"shortcut icon",href:_}),g&&c.a.createElement("meta",{name:"description",content:g}),g&&c.a.createElement("meta",{property:"og:description",content:g}),O&&O.length&&c.a.createElement("meta",{name:"keywords",content:O.join(",")}),C&&c.a.createElement("meta",{property:"og:image",content:w}),C&&c.a.createElement("meta",{property:"twitter:image",content:w}),C&&c.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),E&&c.a.createElement("meta",{property:"og:url",content:m+E}),E&&c.a.createElement("link",{rel:"canonical",href:m+E}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),c.a.createElement(i.a,null,f.map((function(e,t){return c.a.createElement("meta",Object(a.a)({key:"metadata_"+t},e))}))),c.a.createElement(T,null),c.a.createElement(he,null),c.a.createElement("div",{className:Object(o.a)("main-wrapper",y)},v),!p&&c.a.createElement(ve.a,null))}},514:function(e,t,n){"use strict";var a,r=n(2),c=n(6),o=n(0),i=n.n(o),l=n(338),s=n(371),u=n(334);var d=function(){if(void 0!==a)return a;var e=!1,t={get passive(){e=!0}},n=function(){};return window.addEventListener("t",n,t),window.removeEventListener("t",n,t),a=e,e},f=o.useLayoutEffect,m=function(e){var t=Object(o.useRef)(e);return f((function(){t.current=e})),t},h="touchstart",v=["mousedown",h],b=function(e){if(e===h)return d()?{passive:!0}:void 0};var p=function(e,t){var n=m(t);Object(o.useEffect)((function(){if(t){var a=function(t){e.current&&n.current&&!e.current.contains(t.target)&&n.current(t)};return v.forEach((function(e){document.addEventListener(e,a,b(e))})),function(){v.forEach((function(e){document.removeEventListener(e,a,b(e))}))}}}),[!t])};function g(e){var t=e.activeBasePath,n=e.activeBaseRegex,a=e.to,o=e.href,l=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(c.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(u.a)(a),b=Object(u.a)(t),p=Object(u.a)(o,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(r.a)({},o?{target:"_blank",rel:"noopener noreferrer",href:m?p:o}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}}:null),h),l)}function k(e){var t=e.items,n=e.position,a=e.className,s=Object(c.a)(e,["items","position","className"]),u=i.a.useRef(null),d=i.a.useRef(null),f=Object(o.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,n,a=null==d||null===(t=d.current)||void 0===t||null===(n=t.firstChild)||void 0===n?void 0:n.firstChild;a&&a.focus()}h(e)}p(u,(function(){return v(!1)}));var b=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?i.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":m})},i.a.createElement(g,Object(r.a)({className:b(a)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),i.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,n){var a=e.className,o=Object(c.a)(e,["className"]);return i.a.createElement("li",{key:n},i.a.createElement(g,Object(r.a)({onKeyDown:function(e){n===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:b(a,!0)},o)))})))):i.a.createElement(g,Object(r.a)({className:b(a)},s))}function O(e){var t=e.items,n=(e.position,e.className),a=Object(c.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(g,Object(r.a)({className:o(n,!0)},a),a.label),i.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,l=Object(c.a)(e,["className"]);return i.a.createElement("li",{className:"menu__list-item",key:t},i.a.createElement(g,Object(r.a)({activeClassName:"menu__link--active",className:o(n)},l,{onClick:a.onClick})))})))):i.a.createElement("li",{className:"menu__list-item"},i.a.createElement(g,Object(r.a)({className:o(n)},a)))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(c.a)(e,["mobile"]),r=n?O:k;return i.a.createElement(r,a)}},516:function(e,t,n){"use strict";var a=n(400),r=n(7),c=n(333);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.a)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},517:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},518:function(e,t,n){"use strict";var a=n(0),r=n(7),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(c()),r=n[0],o=n[1],i=function(){var t=c();o(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},519:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},520:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),c=n[0],o=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){o(t())}}),[]),c}},521:function(e,t,n){"use strict";var a=n(333),r=n(349),c=n(334),o=n(335);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(c.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(f),logoAlt:l.alt}}},646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=f(c),i=f(n(346)),l=f(n(8)),s=f(n(647)),u=f(n(648)),d=n(649);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},647:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},650:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),c=n(0),o=n.n(c),i=n(514),l=n(425);function s(e){var t=e.label,n=e.to,c=e.docsPluginId,s=Object(r.a)(e,["label","to","docsPluginId"]),u=Object(l.useActiveVersion)(c),d=Object(l.useLatestVersion)(c),f=null!=u?u:d,m=null!=t?t:f.label,h=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(f).path;return o.a.createElement(i.a,Object(a.a)({},s,{label:m,to:h}))}},654:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=n(0),o=n.n(c),i=n(514),l=n(425),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n=e.mobile,c=e.docsPluginId,u=Object(r.a)(e,["mobile","docsPluginId"]),d=Object(l.useActiveDocContext)(c),f=Object(l.useVersions)(c),m=Object(l.useLatestVersion)(c);var h=null!==(t=d.activeVersion)&&void 0!==t?t:m,v=n?"Versions":h.label,b=n?void 0:s(h).path;return o.a.createElement(i.a,Object(a.a)({},u,{mobile:n,label:v,to:b,items:function(){if(!(f.length<=1))return f.map((function(e){var t=(null==d?void 0:d.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==d?void 0:d.activeVersion)}}}))}()}))}}}]);