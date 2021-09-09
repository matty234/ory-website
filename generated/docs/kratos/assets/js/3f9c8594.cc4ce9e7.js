(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[14628],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43962:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=["components"],l={id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},s=void 0,c={unversionedId:"concepts/email-sms",id:"concepts/email-sms",isDocsHomePage:!1,title:"Out-of-band communication via E-Mail and SMS",description:"Ory Kratos sends out-of-band messages via SMS or E-Mail. These messages are",source:"@site/docs/concepts/email-sms.md",sourceDirName:"concepts",slug:"/concepts/email-sms",permalink:"/kratos/docs/next/concepts/email-sms",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/email-sms.md",tags:[],version:"current",lastUpdatedBy:"Yagiz Nizipli",lastUpdatedAt:1621626619,formattedLastUpdatedAt:"5/21/2021",frontMatter:{id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},sidebar:"docs",previous:{title:"HTTP Redirection Configuration",permalink:"/kratos/docs/next/concepts/browser-redirect-flow-completion"},next:{title:"REST API Design",permalink:"/kratos/docs/next/concepts/rest-api"}},m=[{value:"Mail courier",id:"mail-courier",children:[{value:"Single instance",id:"single-instance",children:[]},{value:"Multi-instance",id:"multi-instance",children:[]}]},{value:"Sending E-Mails via SMTP",id:"sending-e-mails-via-smtp",children:[{value:"Sender Address and Template Customization",id:"sender-address-and-template-customization",children:[]}]},{value:"Sending SMS",id:"sending-sms",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ory Kratos sends out-of-band messages via SMS or E-Mail. These messages are\nrequired for The following exemplary use cases require these messages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send an account activation email"),(0,r.kt)("li",{parentName:"ul"},"Verify an E-Mail address or mobile phone number using SMS"),(0,r.kt)("li",{parentName:"ul"},"Preventing Account Enumeration Attacks"),(0,r.kt)("li",{parentName:"ul"},"Sending a 2FA Codes"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h2",{id:"mail-courier"},"Mail courier"),(0,r.kt)("p",null,"Ory Kratos processes email dispatch using a mail courier worker, which must run\nas a singleton in order to process the mail queue correctly. It can be run as a\nbackground worker on a single-instance Kratos setup or as a distinct singleton\nforeground worker in multi-instance deployments."),(0,r.kt)("h3",{id:"single-instance"},"Single instance"),(0,r.kt)("p",null,"To run the mail courier in the background on your single Kratos instance, add\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"--watch-courier")," flag to your ",(0,r.kt)("inlineCode",{parentName:"p"},"kratos serve")," command, as outlined in the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/next/cli/kratos-serve"},"CLI docs")),(0,r.kt)("h3",{id:"multi-instance"},"Multi-instance"),(0,r.kt)("p",null,"If you're running multiple instances of Kratos (eg replicated Kubernetes\ndeployment), you need to run the mail courier as a separate singleton job. The\ncourier can be started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"kratos courier watch")," command\n(",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/next/cli/kratos-courier"},"CLI docs"),")."),(0,r.kt)("h2",{id:"sending-e-mails-via-smtp"},"Sending E-Mails via SMTP"),(0,r.kt)("p",null,"To have E-Mail delivery running with Ory Kratos requires an SMTP server. This is\nset up in the configuration file using an absolute URL with the ",(0,r.kt)("inlineCode",{parentName:"p"},"smtp")," schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  smtp:\n    connection_uri: smtps://test:test@my-smtp-server:1025/\n")),(0,r.kt)("h3",{id:"sender-address-and-template-customization"},"Sender Address and Template Customization"),(0,r.kt)("p",null,"You can customize the sender address and email templates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  ## SMTP Sender Address ##\n  #\n  # The recipient of an email will see this as the sender address.\n  #\n  # Default value: no-reply@ory.kratos.sh\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n  #\n  smtp:\n    from_address: no-reply@ory.kratos.sh\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Examples:\n  # - /conf/courier-templates\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: /conf/courier-templates\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"email.subject.gotmpl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.gotmpl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.plaintext.gotmpl"),"\nare common template file names expected in remainder directories corresponding\nto respective methods for filling E-mail subject and body."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Templates use the engine golang text template for text/html email rendering:\n",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template"},"https://golang.org/pkg/text/template"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"recovery: recovery email templates root directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"valid: sub directory containing templates with variables ",(0,r.kt)("inlineCode",{parentName:"li"},"To")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"RecoveryURL")," for validating a recovery"),(0,r.kt)("li",{parentName:"ul"},"invalid: sub directory containing templates with variables ",(0,r.kt)("inlineCode",{parentName:"li"},"To")," for\ninvalidating a recovery"))),(0,r.kt)("li",{parentName:"ul"},"verification: verification email templates root directory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"valid: sub directory containing templates with variables ",(0,r.kt)("inlineCode",{parentName:"li"},"To")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"VerificationURL")," for validating a verification"),(0,r.kt)("li",{parentName:"ul"},"invalid: sub directory containing templates with variables ",(0,r.kt)("inlineCode",{parentName:"li"},"To")," for\ninvalidating a verification")))),(0,r.kt)("p",null,"For example:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/courier/template/courier/builtin/templates/verification/valid/email.body.gotmpl"},(0,r.kt)("inlineCode",{parentName:"a"},"https://github.com/ory/kratos/blob/master/courier/template/courier/builtin/templates/verification/valid/email.body.gotmpl"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:'title="courier/template/templates/verification/valid/email.body.gotmpl"',title:'"courier/template/templates/verification/valid/email.body.gotmpl"'},'Hi, please verify your account by clicking the following link:\n\n<a href="{{ .VerificationURL }}">{{ .VerificationURL }}</a>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmp",metastring:'title="courier/template/templates/verification/valid/email.body.plaintext.gotmpl"',title:'"courier/template/templates/verification/valid/email.body.plaintext.gotmpl"'},"Hi, please verify your account by clicking the following link: {{ .VerificationURL }}\n")),(0,r.kt)("h2",{id:"sending-sms"},"Sending SMS"),(0,r.kt)("p",null,"The Sending SMS feature is not supported at present. It will be available in a\nfuture version of Ory Kratos."))}u.isMDXComponent=!0}}]);