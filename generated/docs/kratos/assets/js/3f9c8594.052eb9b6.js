"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[14628],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43962:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},s=void 0,m={unversionedId:"concepts/email-sms",id:"concepts/email-sms",isDocsHomePage:!1,title:"Out-of-band communication via E-Mail and SMS",description:"Ory Kratos sends out-of-band messages via SMS or E-Mail. The following exemplary",source:"@site/docs/concepts/email-sms.md",sourceDirName:"concepts",slug:"/concepts/email-sms",permalink:"/kratos/docs/next/concepts/email-sms",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/concepts/email-sms.md",tags:[],version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1641847334,formattedLastUpdatedAt:"1/10/2022",frontMatter:{id:"email-sms",title:"Out-of-band communication via E-Mail and SMS"},sidebar:"docs",previous:{title:"HTTP Redirection Configuration",permalink:"/kratos/docs/next/concepts/browser-redirect-flow-completion"},next:{title:"REST API Design",permalink:"/kratos/docs/next/concepts/rest-api"}},p=[{value:"Mail courier",id:"mail-courier",children:[{value:"Single instance",id:"single-instance",children:[],level:3},{value:"Multi-instance",id:"multi-instance",children:[],level:3}],level:2},{value:"Sending E-Mails via SMTP",id:"sending-e-mails-via-smtp",children:[{value:"Sender Address and Template Customization",id:"sender-address-and-template-customization",children:[],level:3},{value:"The Identity attribute",id:"the-identity-attribute",children:[],level:3},{value:"Nested templates",id:"nested-templates",children:[{value:"Example: i18n customization",id:"example-i18n-customization",children:[],level:4}],level:3},{value:"Custom Headers",id:"custom-headers",children:[],level:3}],level:2},{value:"Sending SMS",id:"sending-sms",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ory Kratos sends out-of-band messages via SMS or E-Mail. The following exemplary\nuse cases require these messages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send an account activation email"),(0,r.kt)("li",{parentName:"ul"},"Verify an E-Mail address or mobile phone number using SMS"),(0,r.kt)("li",{parentName:"ul"},"Preventing Account Enumeration Attacks"),(0,r.kt)("li",{parentName:"ul"},"Sending a 2FA Codes"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h2",{id:"mail-courier"},"Mail courier"),(0,r.kt)("p",null,"Ory Kratos processes email dispatch using a mail courier worker, which must run\nas a singleton in order to process the mail queue correctly. It can be run as a\nbackground worker on a single-instance Kratos setup or as a distinct singleton\nforeground worker in multi-instance deployments."),(0,r.kt)("h3",{id:"single-instance"},"Single instance"),(0,r.kt)("p",null,"To run the mail courier in the background on your single Kratos instance, add\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"--watch-courier")," flag to your ",(0,r.kt)("inlineCode",{parentName:"p"},"kratos serve")," command, as outlined in the\n",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/next/cli/kratos-serve"},"CLI docs")),(0,r.kt)("h3",{id:"multi-instance"},"Multi-instance"),(0,r.kt)("p",null,"If you're running multiple instances of Kratos (eg replicated Kubernetes\ndeployment), you need to run the mail courier as a separate singleton job. The\ncourier can be started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"kratos courier watch")," command\n(",(0,r.kt)("a",{parentName:"p",href:"/kratos/docs/next/cli/kratos-courier"},"CLI docs"),")."),(0,r.kt)("h2",{id:"sending-e-mails-via-smtp"},"Sending E-Mails via SMTP"),(0,r.kt)("p",null,"To have E-Mail delivery running with Ory Kratos requires an SMTP server. This is\nset up in the configuration file using an absolute URL with the ",(0,r.kt)("inlineCode",{parentName:"p"},"smtp")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"smtps")," scheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},'# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  smtp:\n    connection_uri: smtps://foo:bar@my-smtp-server:1234/\n    # Examples:\n    # - "smtp://foo:bar@my-mailserver:1234/?disable_starttls=true\n    #   (NOT RECOMMENDED: Cleartext smtp for devel and legacy infrastructure\n    #   only)"\n    # - smtp://foo:bar@my-mailserver:1234/ (Explicit StartTLS with certificate\n    #   trust verification)\n    # - "smtp://foo:bar@my-mailserver:1234/?skip_ssl_verify=true (NOT\n    #   RECOMMENDED: Explicit StartTLS without certificate trust verification)"\n    # - smtps://foo:bar@my-mailserver:1234/ (Implicit TLS with certificate trust\n    #   verification)\n    # - "smtps://foo:bar@my-mailserver:1234/?skip_ssl_verify=true (NOT\n    #   RECOMMENDED: Implicit TLS without certificate trust verification)"\n')),(0,r.kt)("h3",{id:"sender-address-and-template-customization"},"Sender Address and Template Customization"),(0,r.kt)("p",null,"You can customize the sender address and email templates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  ## SMTP Sender Address ##\n  #\n  # The recipient of an email will see this as the sender address.\n  #\n  # Default value: no-reply@ory.kratos.sh\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n  #\n  smtp:\n    from_address: no-reply@ory.kratos.sh\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Examples:\n  # - /conf/courier-templates\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: /conf/courier-templates\n")),(0,r.kt)("p",null,"Ory Kratos comes with built-in templates. If you wish to define your own, custom\ntemplates, you should define ",(0,r.kt)("inlineCode",{parentName:"p"},"template_override_path"),", as shown above, to\nindicate where your custom templates are located. This will become the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<template-root>")," for your custom templates, as indicated below."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"email.subject.gotmpl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.gotmpl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.plaintext.gotmpl"),"\nare common template file names expected in the sub directories of the root\ndirectory, corresponding to the respective methods for filling e-mail subject\nand body. Both plain text and HTML templates are required. The courier uses them\nas\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/871ee0475a27771dd6395aad617f41a22ccc3b9a/courier/courier.go#L205"},"alternatives"),"\nfor fallback."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Templates use the golang template engine in the ",(0,r.kt)("inlineCode",{parentName:"p"},"text/template")," package for\nrendering the ",(0,r.kt)("inlineCode",{parentName:"p"},"email.subject.gotmpl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.plaintext.gotmpl"),"\ntemplates, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"html/template")," package for rendering the\n",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.gotmpl")," template: ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/text/template"},"https://pkg.go.dev/text/template")," >\n",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/html/template"},"https://pkg.go.dev/html/template")),(0,r.kt)("p",{parentName:"blockquote"},"Templates can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Masterminds/sprig"},"Sprig")," library,\nwhich provides more than 100 commonly used template functions:\n",(0,r.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"http://masterminds.github.io/sprig/"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"recovery"),": recovery email templates directory, expected to be located in\n",(0,r.kt)("inlineCode",{parentName:"li"},"<root_directory>/recovery"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"valid: sub directory, expected to be located in\n",(0,r.kt)("inlineCode",{parentName:"li"},"<template-root>/recovery/valid"),", containing templates with variables ",(0,r.kt)("inlineCode",{parentName:"li"},"To"),",\n",(0,r.kt)("inlineCode",{parentName:"li"},"RecoveryURL")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Identity")," for validating a recovery"),(0,r.kt)("li",{parentName:"ul"},"invalid: sub directory, expected to be located in\n",(0,r.kt)("inlineCode",{parentName:"li"},"<template-root>/recovery/invalid"),", containing templates with variables ",(0,r.kt)("inlineCode",{parentName:"li"},"To"),"\nfor invalidating a recovery"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"verification"),": verification email templates directory, expected to be\nlocated in ",(0,r.kt)("inlineCode",{parentName:"li"},"<root_directory>/verification"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"valid: sub directory, expected to be located in\n",(0,r.kt)("inlineCode",{parentName:"li"},"<template-root>/verification/valid"),", containing templates with variables\n",(0,r.kt)("inlineCode",{parentName:"li"},"To"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"VerificationURL")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Identity")," for validating a verification"),(0,r.kt)("li",{parentName:"ul"},"invalid: sub directory, expected to be located in\n",(0,r.kt)("inlineCode",{parentName:"li"},"<template-root>/verification/invalid"),", containing templates with variables\n",(0,r.kt)("inlineCode",{parentName:"li"},"To")," for invalidating a verification")))),(0,r.kt)("p",null,"For example:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/kratos/blob/master/courier/template/courier/builtin/templates/verification/valid/email.body.gotmpl"},(0,r.kt)("inlineCode",{parentName:"a"},"https://github.com/ory/kratos/blob/master/courier/template/courier/builtin/templates/verification/valid/email.body.gotmpl"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmpl",metastring:'title="courier/template/templates/verification/valid/email.body.gotmpl"',title:'"courier/template/templates/verification/valid/email.body.gotmpl"'},'Hi, please verify your account by clicking the following link:\n\n<a href="{{ .VerificationURL }}">{{ .VerificationURL }}</a>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gotmp",metastring:'title="courier/template/templates/verification/valid/email.body.plaintext.gotmpl"',title:'"courier/template/templates/verification/valid/email.body.plaintext.gotmpl"'},"Hi, please verify your account by clicking the following link: {{ .VerificationURL }}\n")),(0,r.kt)("p",null,"If you're running multiple instances of Kratos and separate courier job, make\nsure to provide templates to all instances (both Kratos and courier)."),(0,r.kt)("h3",{id:"the-identity-attribute"},"The Identity attribute"),(0,r.kt)("p",null,"To be able to customize the content of templates based on the identity of the\nrecipient of the e-mail, the identity has been made available as ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),".\nThis object is a map containing all the attributes of an identity, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"recovery_addresses"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"verifiable_addresses")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"traits"),"."),(0,r.kt)("h3",{id:"nested-templates"},"Nested templates"),(0,r.kt)("p",null,"You can use nested templates to render ",(0,r.kt)("inlineCode",{parentName:"p"},"email.subject.gotmpl"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.gotmpl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.plaintext.gotmpl")," templates."),(0,r.kt)("h4",{id:"example-i18n-customization"},"Example: i18n customization"),(0,r.kt)("p",null,"Using nested templates, you can either use in-line template definitions, or as\nin this example, use separate templates. In this example, we will define the\nemail body for recovery e-mails. Assuming that we have an attribute named ",(0,r.kt)("inlineCode",{parentName:"p"},"lang"),"\nthat contains the required language in the ",(0,r.kt)("inlineCode",{parentName:"p"},"traits")," of the identity, we can\ndefine our templates as indicated below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'file="<template-root>/recovery/valid/email.body.gotmpl"',file:'"<template-root>/recovery/valid/email.body.gotmpl"'},'\n{{- if eq .Identity.traits.language "de" -}}\n{{ template "email.body.de.gotmpl" . }}\n{{- else -}}\n{{ template "email.body.en.gotmpl" . }}\n{{- end -}}\n<a href="{{ .RecoveryURL }}">{{.RecoveryURL }}</a>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'file="<template-root>/recovery/valid/email.body.de.gotmpl"',file:'"<template-root>/recovery/valid/email.body.de.gotmpl"'},"\nHallo {{ upper .Identity.traits.firstName }},\n\nUm Ihr Konto wiederherzustellen, klicken Sie bitte auf den folgenden Link:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'file="<template-root>/recovery/valid/email.body.en.gotmpl"',file:'"<template-root>/recovery/valid/email.body.en.gotmpl"'},"\n\nHello {{ upper .Identity.traits.firstName }},\n\nto recover your account, please click on the link below:\n")),(0,r.kt)("p",null,"As indicated by the example, we need a root template, which is the\n",(0,r.kt)("inlineCode",{parentName:"p"},"email.body.gotmpl")," template, and then we define sub templates that conform to\nthe following pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"email.body*"),". You can also see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity")," of\nthe user is available in all templates, and that you can use Sprig functions\nalso in the nested templates."),(0,r.kt)("h3",{id:"custom-headers"},"Custom Headers"),(0,r.kt)("p",null,"You can configure custom SMTP headers. For example, if integrating with AWS SES\nSMTP interface, the headers can be configured for cross-account sending:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos/config.yml"',title:'"path/to/my/kratos/config.yml"'},"# $ kratos -c path/to/my/kratos/config.yml serve\ncourier:\n  smtp:\n    headers:\n      X-SES-SOURCE-ARN: arn:aws:ses:us-west-2:123456789012:identity/example.com\n      X-SES-FROM-ARN: arn:aws:ses:us-west-2:123456789012:identity/example.com\n      X-SES-RETURN-PATH-ARN: arn:aws:ses:us-west-2:123456789012:identity/example.com\n")),(0,r.kt)("h2",{id:"sending-sms"},"Sending SMS"),(0,r.kt)("p",null,"The Sending SMS feature is not supported at present. It will be available in a\nfuture version of Ory Kratos."))}d.isMDXComponent=!0}}]);