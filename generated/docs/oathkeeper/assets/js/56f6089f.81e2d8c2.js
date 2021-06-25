(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[1765],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2384:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={id:"api-access-rules",title:"API Access Rules"},l=void 0,s={unversionedId:"api-access-rules",id:"version-v0.37/api-access-rules",isDocsHomePage:!1,title:"API Access Rules",description:"ORY Oathkeeper reaches decisions to allow or deny access by applying Access",source:"@site/versioned_docs/version-v0.37/api-access-rules.md",sourceDirName:".",slug:"/api-access-rules",permalink:"/oathkeeper/docs/v0.37/api-access-rules",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.37/api-access-rules.md",version:"v0.37",lastUpdatedBy:"Tom Fenech",lastUpdatedAt:1607191655,formattedLastUpdatedAt:"12/5/2020",frontMatter:{id:"api-access-rules",title:"API Access Rules"},sidebar:"version-v0.37/docs",previous:{title:"Installation",permalink:"/oathkeeper/docs/v0.37/install"},next:{title:"Access Rule Pipeline",permalink:"/oathkeeper/docs/v0.37/pipeline/index"}},p=[{value:"Access Rule Format",id:"access-rule-format",children:[]},{value:"Handler configuration",id:"handler-configuration",children:[]},{value:"Scoped Credentials",id:"scoped-credentials",children:[]},{value:"Match strategy behavior",id:"match-strategy-behavior",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Oathkeeper reaches decisions to allow or deny access by applying Access\nRules. Access Rules can be stored on the file system, set as an environment\nvariable, or fetched from HTTP(s) remotes. These repositories can be configured\nin the configuration file (",(0,i.kt)("inlineCode",{parentName:"p"},"oathkeeper -c ./path/to/config.yml ..."),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Configures Access Rules\naccess_rules:\n  # Locations (list of URLs) where access rules should be fetched from on boot.\n  # It is expected that the documents at those locations return a JSON or YAML Array containing ORY Oathkeeper Access Rules.\n  repositories:\n    # If the URL Scheme is `file://`, the access rules (an array of access rules is expected) will be\n    # fetched from the local file system.\n    - file://path/to/rules.json\n    # If the URL Scheme is `inline://`, the access rules (an array of access rules is expected)\n    # are expected to be a base64 encoded (with padding!) JSON/YAML string (base64_encode(`[{"id":"foo-rule","authenticators":[....]}]`)):\n    - inline://W3siaWQiOiJmb28tcnVsZSIsImF1dGhlbnRpY2F0b3JzIjpbXX1d\n    # If the URL Scheme is `http://` or `https://`, the access rules (an array of access rules is expected) will be\n    # fetched from the provided HTTP(s) location.\n    - https://path-to-my-rules/rules.json\n  # Determines a matching strategy for the access rules . Currently supported values are `glob` and `regexp`. Empty string defaults to regexp.\n  matching_strategy: glob\n')),(0,i.kt)("p",null,"or by setting the equivalent environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ export ACCESS_RULES_REPOSITORIES='file://path/to/rules.json,https://path-to-my-rules/rules.json,inline://W3siaWQiOiJmb28tcnVsZSIsImF1dGhlbnRpY2F0b3JzIjpbXX1d'\n")),(0,i.kt)("p",null,"The repository (file, inline, remote) must be formatted either as a JSON or a\nYAML array containing the access rules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat ./rules.json\n[{\n    "id": "my-first-rule"\n},{\n    "id": "my-second-rule"\n}]\n\n$ cat ./rules.yaml\n- id: my-first-rule\n  version: v0.36.0-beta.4\n  authenticators:\n    - handler: noop\n- id: my-second-rule\n  version: v0.36.0-beta.4\n  authorizer:\n    handler: allow\n')),(0,i.kt)("h2",{id:"access-rule-format"},"Access Rule Format"),(0,i.kt)("p",null,"Access Rules have four principal keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")," (string): The unique ID of the Access Rule.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"version")," (string): The version of ORY Oathkeeper this rule targets with out\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"+oryOS.<x>")," appendix. ORY Oathkeeper is able to migrate access rules\nacross versions. If left empty ORY Oathkeeper will assume that the rule is\nusing the same tag as the version that is running.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," (object): The location of the server where requests matching this\nrule should be forwarded to. This only needs to be set when using the ORY\nOathkeeper Proxy as the Decision API does not forward the request to the\nupstream."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," (string): The URL the request will be forwarded to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preserve_host")," (bool): If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," (default), the forwarded request\nwill include the host and port of the ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," value. If ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the host and\nport of the ORY Oathkeeper Proxy will be used instead:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false"),": Incoming HTTP Header ",(0,i.kt)("inlineCode",{parentName:"li"},"Host: mydomain.com"),"-> Forwarding HTTP\nHeader ",(0,i.kt)("inlineCode",{parentName:"li"},"Host: someservice.intranet.mydomain.com:1234")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strip_path")," (string): If set, replaces the provided path prefix when\nforwarding the requested URL to the upstream URL:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"set to ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v1"),": Incoming HTTP Request at ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v1/users")," -> Forwarding\nHTTP Request at ",(0,i.kt)("inlineCode",{parentName:"li"},"/users"),"."),(0,i.kt)("li",{parentName:"ul"},"unset: Incoming HTTP Request at ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v1/users")," -> Forwarding HTTP Request\nat ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v1/users"),"."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"match")," (object): Defines the URL(s) this Access Rule should match."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"methods")," (string[]): Array of HTTP methods (e.g. GET, POST, PUT, DELETE,\n...).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"url")," (string): The URL that should be matched. You can use regular\nexpressions or glob patterns in this field to match more than one url. The\nmatching strategy (glob or regexp) is defined in the global configuration\nfile as ",(0,i.kt)("inlineCode",{parentName:"p"},"access_rules.matching_strategy"),". This matcher ignores query\nparameters. Regular expressions (or glob patterns) are encapsulated in\nbrackets ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,i.kt)("inlineCode",{parentName:"p"},">"),"."),(0,i.kt)("p",{parentName:"li"},"Regular expressions examples:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/")," and does not match\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/foo")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<https|http>://mydomain.com/<.*>")," matches:",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/foo"),". Does not match: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://other-domain.com/")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/<[[:digit:]]+>")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/123")," and\ndoes not match ",(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain/abc"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/<(?!protected).*>")," matches\n",(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/resource")," and does not match\n",(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/protected"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"},"Glob"),"\npatterns examples:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/<m?n>")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/man")," and does\nnot match ",(0,i.kt)("inlineCode",{parentName:"li"},"http://mydomain.com/foo"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/<{foo*,bar*}>")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/foo")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/bar")," and does not match ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mydomain.com/any"),"."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"authenticators"),": A list of authentication handlers that authenticate the\nprovided credentials. Authenticators are checked iteratively from index ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"n"),' and the first authenticator to return a positive result will be the one\nused. If you want the rule to first check a specific authenticator before\n"falling back" to others, have that authenticator as the first item in the\narray. For the full list of available authenticators, click\n',(0,i.kt)("a",{parentName:"p",href:"/oathkeeper/docs/v0.37/pipeline/authn"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"authorizer"),': The authorization handler which will try to authorize the\nsubject ("user") from the previously validated credentials making the request.\nFor example, you could check if the subject ("user") is part of the "admin"\ngroup or if he/she has permission to perform that action. For the full list of\navailable authorizers, click ',(0,i.kt)("a",{parentName:"p",href:"/oathkeeper/docs/v0.37/pipeline/authz"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mutators"),": A list of mutation handlers that transform the HTTP request before\nforwarding it. A common use case is generating a new set of credentials (e.g.\nJWT) which then will be forwarded to the upstream server. When using ORY\nOathkeeper's Decision API, it is expected that the API Gateway forwards the\nmutated HTTP Headers to the upstream server. For the full list of available\nmutators, click ",(0,i.kt)("a",{parentName:"p",href:"/oathkeeper/docs/v0.37/pipeline/mutator"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"errors"),": A list of error handlers that are executed when any of the previous\nhandlers (e.g. authentication) fail. Error handlers define what to do in case\nof an error, for example redirect the user to the login endpoint when a\nunauthorized (HTTP Status Code 401) error occurs. If left unspecified, errors\nwill always be handled as JSON responses unless the global configuration key\n",(0,i.kt)("inlineCode",{parentName:"p"},"errors.fallback")," was changed. For more information on error handlers, click\n",(0,i.kt)("a",{parentName:"p",href:"/oathkeeper/docs/v0.37/pipeline/error"},"here"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Rule in JSON format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "some-id",\n  "version": "v0.36.0-beta.4",\n  "upstream": {\n    "url": "http://my-backend-service",\n    "preserve_host": true,\n    "strip_path": "/api/v1"\n  },\n  "match": {\n    "url": "http://my-app/some-route/<.*>",\n    "methods": ["GET", "POST"]\n  },\n  "authenticators": [{ "handler": "noop" }],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }],\n  "errors": [{ "handler": "json" }]\n}\n')),(0,i.kt)("p",null,"Rule in YAML format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"id: some-id\nversion: v0.36.0-beta.4\nupstream:\n  url: http://my-backend-service\n  preserve_host: true\n  strip_path: /api/v1\nmatch:\n  url: http://my-app/some-route/<.*>\n  methods:\n    - GET\n    - POST\nauthenticators:\n  - handler: noop\nauthorizer:\n  hander: allow\nmutators:\n  - handler: noop\nerrors:\n  - handler: json\n")),(0,i.kt)("h2",{id:"handler-configuration"},"Handler configuration"),(0,i.kt)("p",null,"Handlers (Authenticators, Mutators, Authorizers, Errors) sometimes require\nconfiguration. The configuration can be defined globally as well as per Access\nRule. The configuration from the Access Rule is overrides values from the global\nconfiguration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"oathkeeper.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"authenticators:\n  anonymous:\n    enabled: true\n    config:\n      subject: anon\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"rule.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service",\n    "preserve_host": true,\n    "strip_path": "/api/v1"\n  },\n  "match": {\n    "url": "http://my-app/some-route/<.*>",\n    "methods": ["GET", "POST"]\n  },\n  "authenticators": [\n    { "handler": "anonymous", "config": { "subject": "anon" } }\n  ],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }]\n}\n')),(0,i.kt)("h2",{id:"scoped-credentials"},"Scoped Credentials"),(0,i.kt)("p",null,'Some credentials are scoped. For example, OAuth 2.0 Access Tokens usually are\nscoped ("OAuth 2.0 Scope"). Scope validation depends on the meaning of the\nscope. Therefore, wherever ORY Oathkeeper validates a scope, these scope\nstrategies are supported:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hierarchic"),": Scope ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.bar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.baz")," but not ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wildcard"),": Scope ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.*")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.bar"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.baz")," but not ",(0,i.kt)("inlineCode",{parentName:"li"},"bar"),".\nScope ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," but not ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.bar")," nor ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exact"),": Scope ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," but not ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," nor ",(0,i.kt)("inlineCode",{parentName:"li"},"foo.bar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none"),": Scope validation is disabled. If however a scope is configured to be\nvalidated, the request will fail with an error message.")),(0,i.kt)("h2",{id:"match-strategy-behavior"},"Match strategy behavior"),(0,i.kt)("p",null,"With the ",(0,i.kt)("strong",{parentName:"p"},"Regular expression")," strategy, you can use the extracted groups in\nall handlers where the substitutions are supported by using the Go\n",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},(0,i.kt)("inlineCode",{parentName:"a"},"text/template"))," package, receiving the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L39"},"AuthenticationSession"),"\nstruct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type AuthenticationSession struct {\n    Subject      string\n    Extra        map[string]interface{}\n    Header       http.Header\n    MatchContext MatchContext\n}\n\ntype MatchContext struct {\n    RegexpCaptureGroups []string\n    URL                 *url.URL\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"If the match URL is ",(0,i.kt)("inlineCode",{parentName:"p"},"<https|http>://mydomain.com/<.*>")," and the request is\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://mydomain.com/foo"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"MatchContext")," field will contain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RegexpCaptureGroups"),": ",'["http", "foo"]'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"URL"),': "',(0,i.kt)("a",{parentName:"li",href:"http://mydomain.com/foo%22"},'http://mydomain.com/foo"'))))}c.isMDXComponent=!0}}]);