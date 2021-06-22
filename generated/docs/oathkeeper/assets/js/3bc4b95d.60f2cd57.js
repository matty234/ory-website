(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4013],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5680:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={id:"authz",title:"Authorizers"},l={unversionedId:"pipeline/authz",id:"version-v0.38/pipeline/authz",isDocsHomePage:!1,title:"Authorizers",description:'An "authorizer" is responsible for properly permissioning a subject. ORY',source:"@site/versioned_docs/version-v0.38/pipeline/authz.md",sourceDirName:"pipeline",slug:"/pipeline/authz",permalink:"/oathkeeper/docs/pipeline/authz",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.38/pipeline/authz.md",version:"v0.38",lastUpdatedBy:"aeneasr",lastUpdatedAt:1624392140,formattedLastUpdatedAt:"6/22/2021",frontMatter:{id:"authz",title:"Authorizers"},sidebar:"version-v0.38/docs",previous:{title:"Authenticators",permalink:"/oathkeeper/docs/pipeline/authn"},next:{title:"Mutators",permalink:"/oathkeeper/docs/pipeline/mutator"}},s=[{value:"<code>allow</code>",id:"allow",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Access Rule Example",id:"access-rule-example",children:[]}]},{value:"<code>deny</code>",id:"deny",children:[{value:"Configuration",id:"configuration-1",children:[]},{value:"Access Rule Example",id:"access-rule-example-1",children:[]}]},{value:"<code>keto_engine_acp_ory</code>",id:"keto_engine_acp_ory",children:[{value:"Configuration",id:"configuration-2",children:[]},{value:"Access Rule Example",id:"access-rule-example-2",children:[]}]},{value:"<code>remote</code>",id:"remote",children:[{value:"Configuration",id:"configuration-3",children:[]},{value:"Access Rule Example",id:"access-rule-example-3",children:[]}]},{value:"<code>remote_json</code>",id:"remote_json",children:[{value:"Configuration",id:"configuration-4",children:[]},{value:"Access Rule Example",id:"access-rule-example-4",children:[]}]}],u={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'An "authorizer" is responsible for properly permissioning a subject. ORY\nOathkeeper supports different kinds of authorizers. The list of authorizers\nincreases over time due to new features and requirements.'),(0,o.kt)("p",null,'Authorizers assure that a subject, for instance a "user", has the permissions\nnecessary to access or perform a particular service. For example, an authorizer\ncan permit access to an endpoint or URL for specific subjects or "users" from a\nspecific group "admin". The authorizer permits the subjects the desired access\nto the endpoint.'),(0,o.kt)("p",null,"Each authorizer has two keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"handler")," (string, required): Defines the handler, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"noop"),", to be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," (object, optional): Configures the handler. Configuration keys can\nvary for each handler.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "authorizer": {\n    "handler": "noop",\n    "config": {}\n  }\n}\n')),(0,o.kt)("p",null,"There is a 1:1 mandatory relationship between an authoriser and an access rule.\nIt is not possible to configure more than one authorizer per Access Rule."),(0,o.kt)("h2",{id:"allow"},(0,o.kt)("inlineCode",{parentName:"h2"},"allow")),(0,o.kt)("p",null,"This authorizer permits every action allowed."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"This handler is not configurable."),(0,o.kt)("p",null,"To enable this handler, set as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Global configuration file oathkeeper.yml\nauthorizers:\n  allow:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n')),(0,o.kt)("h3",{id:"access-rule-example"},"Access Rule Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ cat ./rules.json\n\n[{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/some-route",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [{ "handler": "anonymous" }],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }]\n}]\n\n$ curl -X GET http://my-app/some-route\n\nHTTP/1.0 200 Status OK\nThe request has been allowed!\n')),(0,o.kt)("h2",{id:"deny"},(0,o.kt)("inlineCode",{parentName:"h2"},"deny")),(0,o.kt)("p",null,'This authorizer considers every action unauthorized therefore "forbidden" or\n"disallowed".'),(0,o.kt)("h3",{id:"configuration-1"},"Configuration"),(0,o.kt)("p",null,"This handler is not configurable."),(0,o.kt)("p",null,"To enable this handler, set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Global configuration file oathkeeper.yml\nauthorizers:\n  deny:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n')),(0,o.kt)("h3",{id:"access-rule-example-1"},"Access Rule Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ cat ./rules.json\n\n[{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/some-route",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [{ "handler": "anonymous" }],\n  "authorizer": { "handler": "deny" },\n  "mutators": [{ "handler": "noop" }]\n}]\n\n$ curl -X GET http://my-app/some-route\n\nHTTP/1.0 403 Forbidden\nThe request is forbidden!\n')),(0,o.kt)("h2",{id:"keto_engine_acp_ory"},(0,o.kt)("inlineCode",{parentName:"h2"},"keto_engine_acp_ory")),(0,o.kt)("p",null,'This authorizer uses the ORY Keto API to carry out access control using\n"ORY-flavored" Access Control Policies. The conventions used in the ORY Keto\nproject are located on ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/keto"},"GitHub ORY Keto")," for\nconsultation prior to using this authorizer."),(0,o.kt)("h3",{id:"configuration-2"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base_url")," (string, required) - The base URL of ORY Keto, typically something\nlike https://hostname:port/"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"required_action")," (string, required) - See section below."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"required_resource")," (string, required) - See section below."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subject")," (string, optional) - See section below."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flavor")," (string, optional) - See section below.")),(0,o.kt)("h4",{id:"resource-action-subject"},"Resource, Action, Subject"),(0,o.kt)("p",null,"This authorizer has four configuration options, ",(0,o.kt)("inlineCode",{parentName:"p"},"required_action"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"required_resource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subject"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"flavor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "handler": "keto_engine_acp_ory",\n  "config": {\n    "required_action": "...",\n    "required_resource": "...",\n    "subject": "...",\n    "flavor": "..."\n  }\n}\n')),(0,o.kt)("p",null,"All configuration options except ",(0,o.kt)("inlineCode",{parentName:"p"},"flavor")," support Go\n",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},(0,o.kt)("inlineCode",{parentName:"a"},"text/template")),". For example in the\nfollowing match configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": ["GET"]\n  }\n}\n')),(0,o.kt)("p",null,"The following example shows how to reference the values matched by or resulting\nfrom the two regular expressions, ",(0,o.kt)("inlineCode",{parentName:"p"},"<[0-9]+>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<[a-zA-Z]+>"),". using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationSession")," struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "handler": "keto_engine_acp_ory",\n  "config": {\n    "required_action": "my:action:{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}",\n    "required_resource": "my:resource:{{ printIndex .MatchContext.RegexpCaptureGroups 1 }}:foo:{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}"\n  }\n}\n')),(0,o.kt)("p",null,"Assuming a request to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-api/api/users/1234/foobar")," was made, the config\nfrom above would expand to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "handler": "keto_engine_acp_ory",\n  "config": {\n    "required_action": "my:action:1234",\n    "required_resource": "my:resource:foobar:foo:1234"\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," field configures the subject that passes to the ORY Keto endpoint.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"subject")," is not specified it will default to\n",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationSession.Subject"),"."),(0,o.kt)("p",null,"For more details about supported Go template substitution, see.\n",(0,o.kt)("a",{parentName:"p",href:"/oathkeeper/docs/pipeline#session"},"How to use session variables")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Global configuration file oathkeeper.yml\nauthorizers:\n  keto_engine_acp_ory:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n\n    config:\n      base_url: http://my-keto/\n      required_action: ...\n      required_resource: ...\n      subject: ...\n      flavor: ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nauthorizers:\n  - handler: keto_engine_acp_ory\n    config:\n      base_url: http://my-keto/\n      required_action: ...\n      required_resource: ...\n      subject: ...\n      flavor: ...\n")),(0,o.kt)("h3",{id:"access-rule-example-2"},"Access Rule Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat ./rules.json\n\n[{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/users/<[0-9]+>/<[a-zA-Z]+>",\n    "methods": [\n      "GET"\n    ]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "keto_engine_acp_ory",\n    "config": {\n      "required_action": "my:action:$1",\n      "required_resource": "my:resource:$2:foo:$1"\n      "subject": "{{ .Extra.email }}",\n      "flavor": "exact"\n    }\n  }\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}]\n')),(0,o.kt)("h2",{id:"remote"},(0,o.kt)("inlineCode",{parentName:"h2"},"remote")),(0,o.kt)("p",null,'This authorizer performs authorization using a remote authorizer. The authorizer\nmakes a HTTP POST request to a remote endpoint with the original body request as\nbody. If the endpoint returns a "200 OK" response code, the access is allowed,\nif it returns a "403 Forbidden" response code, the access is denied.'),(0,o.kt)("h3",{id:"configuration-3"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remote"),' (string, required) - The remote authorizer\'s URL. The remote\nauthorizer is expected to return either "200 OK" or "403 Forbidden" to\nallow/deny access.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"headers")," (map of strings, optional) - The HTTP headers sent to the remote\nauthorizer. The values will be parsed by the Go\n",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/pkg/text/template/"},(0,o.kt)("inlineCode",{parentName:"a"},"text/template"))," package and applied\nto an\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L40"},(0,o.kt)("inlineCode",{parentName:"a"},"AuthenticationSession")),"\nobject. See ",(0,o.kt)("a",{parentName:"li",href:"/oathkeeper/docs/pipeline#session"},"Session")," for more details."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forward_response_headers_to_upstream")," (slice of strings, optional) - The HTTP\nheaders that will be allowed from remote authorizer responses. If returned,\nheaders on this list will be forward to upstream services.")),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Global configuration file oathkeeper.yml\nauthorizers:\n  remote:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n\n    config:\n      remote: http://my-remote-authorizer/authorize\n      headers:\n        X-Subject: \'{{ print .Subject }}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nauthorizers:\n  - handler: remote\n    config:\n      remote: http://my-remote-authorizer/authorize\n      headers:\n        X-Subject: '{{ print .Subject }}'\n")),(0,o.kt)("h3",{id:"access-rule-example-3"},"Access Rule Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "remote",\n    "config": {\n      "remote": "http://my-remote-authorizer/authorize",\n      "headers": {\n        "X-Subject": "{{ print .Subject }}"\n      },\n      "forward_response_headers_to_upstream": [\n        "X-Foo"\n      ]\n    }\n  }\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"remote_json"},(0,o.kt)("inlineCode",{parentName:"h2"},"remote_json")),(0,o.kt)("p",null,'This authorizer performs authorization using a remote authorizer. The authorizer\nmakes a HTTP POST request to a remote endpoint with a JSON body. If the endpoint\nreturns a "200 OK" response code, the access is allowed, if it returns a "403\nForbidden" response code, the access is denied.'),(0,o.kt)("h3",{id:"configuration-4"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remote"),' (string, required) - The remote authorizer\'s URL. The remote\nauthorizer is expected to return either "200 OK" or "403 Forbidden" to\nallow/deny access.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload")," (string, required) - The request's JSON payload sent to the remote\nauthorizer. The string will be parsed by the Go\n",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/pkg/text/template/"},(0,o.kt)("inlineCode",{parentName:"a"},"text/template"))," package and applied\nto an\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L40"},(0,o.kt)("inlineCode",{parentName:"a"},"AuthenticationSession")),"\nobject. See ",(0,o.kt)("a",{parentName:"li",href:"/oathkeeper/docs/pipeline#session"},"Session")," for more details."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forward_response_headers_to_upstream")," (slice of strings, optional) - The HTTP\nheaders that will be allowed from remote authorizer responses. If returned,\nheaders on this list will be forward to upstream services.")),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Global configuration file oathkeeper.yml\nauthorizers:\n  remote_json:\n    # Set enabled to "true" to enable the authenticator, and "false" to disable the authenticator. Defaults to "false".\n    enabled: true\n\n    config:\n      remote: http://my-remote-authorizer/authorize\n      payload: |\n        {\n          "subject": "{{ print .Subject }}",\n          "resource": "{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}"\n        }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Some Access Rule: access-rule-1.yaml\nid: access-rule-1\n# match: ...\n# upstream: ...\nauthorizers:\n  - handler: remote_json\n    config:\n      remote: http://my-remote-authorizer/authorize\n      payload: |\n        {\n          "subject": "{{ print .Subject }}",\n          "resource": "{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}"\n        }\n')),(0,o.kt)("h3",{id:"access-rule-example-4"},"Access Rule Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service"\n  },\n  "match": {\n    "url": "http://my-app/api/<.*>",\n    "methods": ["GET"]\n  },\n  "authenticators": [\n    {\n      "handler": "anonymous"\n    }\n  ],\n  "authorizer": {\n    "handler": "remote_json",\n    "config": {\n      "remote": "http://my-remote-authorizer/authorize",\n      "payload": "{\\"subject\\": \\"{{ print .Subject }}\\", \\"resource\\": \\"{{ printIndex .MatchContext.RegexpCaptureGroups 0 }}\\"}"\n    },\n    "forward_response_headers_to_upstream": [\n      "X-Foo"\n    ]\n  }\n  "mutators": [\n    {\n      "handler": "noop"\n    }\n  ]\n}\n')))}p.isMDXComponent=!0}}]);