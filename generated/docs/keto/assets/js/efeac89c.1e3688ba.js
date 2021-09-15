(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[8806],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(r),y=s,m=l["".concat(p,".").concat(y)]||l[y]||d[y]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=l;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},28084:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s},useAllPluginInstancesData:function(){return i},usePluginData:function(){return o}});var n=r(52263);function s(){var e=(0,n.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var t=s()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function o(e,t){void 0===t&&(t="default");var r=i(e)[t];if(!r)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return r}},39634:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return m}});var n=r(22122),s=r(19756),i=r(67294),o=r(3905),a=r(79559);var p=function(e){var t=e.spec;return i.createElement(a.Z,{spec:t})},c=JSON.parse('{"consumes":["application/json"],"produces":["application/json"],"schemes":["http","https"],"swagger":"2.0","info":{"description":"Ory Keto is a cloud native access control server providing best-practice patterns (RBAC, ABAC, ACL, AWS IAM Policies, Kubernetes Roles, ...) via REST APIs.","title":"ORY Keto","contact":{"name":"ORY","url":"https://www.ory.sh","email":"hi@ory.sh"},"license":{"name":"Apache 2.0","url":"https://github.com/ory/keto/blob/master/LICENSE"},"version":"Latest"},"basePath":"/","paths":{"/check":{"get":{"description":"To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).","consumes":["application/x-www-form-urlencoded"],"produces":["application/json"],"schemes":["http","https"],"tags":["read"],"summary":"Check a relation tuple","operationId":"getCheck","parameters":[{"type":"string","description":"Namespace of the Relation Tuple","name":"namespace","in":"query","required":true},{"type":"string","description":"Object of the Relation Tuple","name":"object","in":"query","required":true},{"type":"string","description":"Relation of the Relation Tuple","name":"relation","in":"query","required":true},{"type":"string","description":"Subject of the Relation Tuple\\n\\nThe subject follows the subject string encoding format.","name":"subject","in":"query"}],"responses":{"200":{"description":"getCheckResponse","schema":{"$ref":"#/definitions/getCheckResponse"}},"400":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"403":{"description":"getCheckResponse","schema":{"$ref":"#/definitions/getCheckResponse"}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}},"post":{"description":"To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).","consumes":["application/json"],"produces":["application/json"],"schemes":["http","https"],"tags":["read"],"summary":"Check a relation tuple","operationId":"postCheck","parameters":[{"name":"Payload","in":"body","schema":{"$ref":"#/definitions/InternalRelationTuple"}}],"responses":{"200":{"description":"getCheckResponse","schema":{"$ref":"#/definitions/getCheckResponse"}},"400":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"403":{"description":"getCheckResponse","schema":{"$ref":"#/definitions/getCheckResponse"}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}}},"/expand":{"get":{"description":"Use this endpoint to expand a relation tuple.","consumes":["application/x-www-form-urlencoded"],"produces":["application/json"],"schemes":["http","https"],"tags":["read"],"summary":"Expand a Relation Tuple","operationId":"getExpand","parameters":[{"type":"string","description":"Namespace of the Relation Tuple","name":"namespace","in":"query","required":true},{"type":"string","description":"Object of the Relation Tuple","name":"object","in":"query","required":true},{"type":"string","description":"Relation of the Relation Tuple","name":"relation","in":"query","required":true},{"type":"integer","format":"int64","name":"max-depth","in":"query"}],"responses":{"200":{"description":"expandTree","schema":{"$ref":"#/definitions/expandTree"}},"400":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"404":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}}},"/health/alive":{"get":{"description":"This endpoint returns a 200 status code when the HTTP server is up running.\\nThis status does currently not include checks whether the database connection is working.\\n\\nIf the service supports TLS Edge Termination, this endpoint does not require the\\n`X-Forwarded-Proto` header to be set.\\n\\nBe aware that if you are running multiple nodes of this service, the health status will never\\nrefer to the cluster state, only to a single instance.","produces":["application/json"],"tags":["health"],"summary":"Check alive status","operationId":"isInstanceAlive","responses":{"200":{"description":"healthStatus","schema":{"$ref":"#/definitions/healthStatus"}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}}},"/health/ready":{"get":{"description":"This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g.\\nthe database) are responsive as well.\\n\\nIf the service supports TLS Edge Termination, this endpoint does not require the\\n`X-Forwarded-Proto` header to be set.\\n\\nBe aware that if you are running multiple nodes of this service, the health status will never\\nrefer to the cluster state, only to a single instance.","produces":["application/json"],"tags":["health"],"summary":"Check readiness status","operationId":"isInstanceReady","responses":{"200":{"description":"healthStatus","schema":{"$ref":"#/definitions/healthStatus"}},"503":{"description":"healthNotReadyStatus","schema":{"$ref":"#/definitions/healthNotReadyStatus"}}}}},"/relation-tuples":{"get":{"description":"Get all relation tuples that match the query. Only the namespace field is required.","consumes":["application/x-www-form-urlencoded"],"produces":["application/json"],"schemes":["http","https"],"tags":["read"],"summary":"Query relation tuples","operationId":"getRelationTuples","parameters":[{"type":"string","name":"namespace","in":"query","required":true},{"type":"string","name":"object","in":"query"},{"type":"string","name":"relation","in":"query"},{"type":"string","name":"subject","in":"query"},{"type":"string","name":"page_token","in":"query"},{"type":"integer","format":"int64","name":"page_size","in":"query"}],"responses":{"200":{"description":"getRelationTuplesResponse","schema":{"$ref":"#/definitions/getRelationTuplesResponse"}},"404":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}},"put":{"description":"Use this endpoint to create a relation tuple.","consumes":["application/json"],"produces":["application/json"],"schemes":["http","https"],"tags":["write"],"summary":"Create a Relation Tuple","operationId":"createRelationTuple","parameters":[{"name":"Payload","in":"body","schema":{"$ref":"#/definitions/InternalRelationTuple"}}],"responses":{"201":{"description":"InternalRelationTuple","schema":{"$ref":"#/definitions/InternalRelationTuple"}},"400":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}},"delete":{"description":"Use this endpoint to delete a relation tuple.","consumes":["application/x-www-form-urlencoded"],"produces":["application/json"],"schemes":["http","https"],"tags":["write"],"summary":"Delete a Relation Tuple","operationId":"deleteRelationTuple","parameters":[{"type":"string","description":"Namespace of the Relation Tuple","name":"namespace","in":"query","required":true},{"type":"string","description":"Object of the Relation Tuple","name":"object","in":"query","required":true},{"type":"string","description":"Relation of the Relation Tuple","name":"relation","in":"query","required":true},{"type":"string","description":"Subject of the Relation Tuple\\n\\nThe subject follows the subject string encoding format.","name":"subject","in":"query"}],"responses":{"204":{"description":"Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201."},"400":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}},"patch":{"description":"Use this endpoint to patch one or more relation tuples.","consumes":["application/json"],"produces":["application/json"],"schemes":["http","https"],"tags":["write"],"summary":"Patch Multiple Relation Tuples","operationId":"patchRelationTuples","parameters":[{"name":"Payload","in":"body","schema":{"type":"array","items":{"$ref":"#/definitions/PatchDelta"}}}],"responses":{"204":{"description":"Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201."},"400":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"404":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}},"500":{"description":"The standard error format","schema":{"type":"object","properties":{"code":{"type":"integer","format":"int64"},"details":{"type":"array","items":{"type":"object","additionalProperties":true}},"message":{"type":"string"},"reason":{"type":"string"},"request":{"type":"string"},"status":{"type":"string"}}}}}}},"/version":{"get":{"description":"This endpoint returns the service version typically notated using semantic versioning.\\n\\nIf the service supports TLS Edge Termination, this endpoint does not require the\\n`X-Forwarded-Proto` header to be set.\\n\\nBe aware that if you are running multiple nodes of this service, the health status will never\\nrefer to the cluster state, only to a single instance.","produces":["application/json"],"tags":["version"],"summary":"Get service version","operationId":"getVersion","responses":{"200":{"description":"version","schema":{"$ref":"#/definitions/version"}}}}}},"definitions":{"InternalRelationTuple":{"type":"object","required":["namespace","object","relation","subject"],"properties":{"namespace":{"description":"Namespace of the Relation Tuple\\n\\nin: query","type":"string"},"object":{"description":"Object of the Relation Tuple\\n\\nin: query","type":"string"},"relation":{"description":"Relation of the Relation Tuple\\n\\nin: query","type":"string"},"subject":{"$ref":"#/definitions/subject"}}},"PatchDelta":{"type":"object","properties":{"action":{"$ref":"#/definitions/patchAction"},"relation_tuple":{"$ref":"#/definitions/InternalRelationTuple"}}},"expandTree":{"type":"object","required":["type","subject"],"properties":{"children":{"type":"array","items":{"$ref":"#/definitions/expandTree"}},"subject":{"$ref":"#/definitions/subject"},"type":{"type":"string","enum":["union","exclusion","intersection","leaf"]}}},"getCheckResponse":{"description":"The content of the allowed field is mirrored in the HTTP status code.","type":"object","title":"Represents the response for a check request.","required":["allowed"],"properties":{"allowed":{"description":"whether the relation tuple is allowed","type":"boolean"}}},"getRelationTuplesResponse":{"type":"object","properties":{"next_page_token":{"description":"The opaque token to provide in a subsequent request\\nto get the next page. It is the empty string iff this is\\nthe last page.","type":"string"},"relation_tuples":{"type":"array","items":{"$ref":"#/definitions/InternalRelationTuple"}}}},"healthNotReadyStatus":{"type":"object","properties":{"errors":{"description":"Errors contains a list of errors that caused the not ready status.","type":"object","additionalProperties":{"type":"string"}}}},"healthStatus":{"type":"object","properties":{"status":{"description":"Status always contains \\"ok\\".","type":"string"}}},"patchAction":{"type":"string"},"subject":{"type":"string"},"version":{"type":"object","properties":{"version":{"description":"Version is the service\'s version.","type":"string"}}}}}'),u=["components"],d={id:"api",hide_title:!0,title:"HTTP API Documentation",description:"Ory Keto HTTP API Documentation",sidebar_label:"HTTP API"},l=void 0,y={unversionedId:"reference/api",id:"reference/api",isDocsHomePage:!1,title:"HTTP API Documentation",description:"Ory Keto HTTP API Documentation",source:"@site/docs/reference/api.mdx",sourceDirName:"reference",slug:"/reference/api",permalink:"/keto/docs/next/reference/api",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/reference/api.mdx",tags:[],version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1625576282,formattedLastUpdatedAt:"7/6/2021",frontMatter:{id:"api",hide_title:!0,title:"HTTP API Documentation",description:"Ory Keto HTTP API Documentation",sidebar_label:"HTTP API"}},m=[],h={toc:m};function g(e){var t=e.components,r=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{spec:c,mdxType:"API"}))}g.isMDXComponent=!0},86010:function(e,t,r){"use strict";function n(e){var t,r,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(s&&(s+=" "),s+=r);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,r=0,s="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(s&&(s+=" "),s+=t);return s}r.d(t,{Z:function(){return s}})},15101:function(){},23197:function(){},52361:function(){},94616:function(){},49702:function(){}}]);