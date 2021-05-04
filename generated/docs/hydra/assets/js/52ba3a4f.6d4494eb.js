(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(571)),o={id:"hydra-clients-update",title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client"},s={unversionedId:"cli/hydra-clients-update",id:"version-v1.10/cli/hydra-clients-update",isDocsHomePage:!1,title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client",source:"@site/versioned_docs/version-v1.10/cli/hydra-clients-update.md",sourceDirName:"cli",slug:"/cli/hydra-clients-update",permalink:"/hydra/docs/cli/hydra-clients-update",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/cli/hydra-clients-update.md",version:"v1.10",lastUpdatedBy:"aeneasr",lastUpdatedAt:1616672187,formattedLastUpdatedAt:"3/25/2021",frontMatter:{id:"hydra-clients-update",title:"hydra clients update",description:"hydra clients update Update an entire OAuth 2.0 Client"},sidebar:"version-v1.10/docs",previous:{title:"hydra clients list",permalink:"/hydra/docs/cli/hydra-clients-list"},next:{title:"hydra janitor",permalink:"/hydra/docs/cli/hydra-janitor"}},l=[{value:"hydra clients update",id:"hydra-clients-update",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-clients-update"},"hydra clients update"),Object(a.b)("p",null,"Update an entire OAuth 2.0 Client"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"This command replaces an OAuth 2.0 Client by its ID."),Object(a.b)("p",null,"Please be aware that this command replaces the entire client. To update only the\nname, a full client should be provided, for example: hydra clients update\nclient-1 -n ",'"',"my updated app",'"'," -c http://localhost/cb -g\nauthorization_code -r code -a core,foobar"),Object(a.b)("p",null,"If only the name flag (-n ",'"',"my updated app",'"',") is provided, the all other\nfields are updated to their default values."),Object(a.b)("p",null,"To encrypt auto generated client secret, use ",'"',"--pgp-key",'"',",\n",'"',"--pgp-key-url",'"'," or ",'"',"--keybase",'"'," flag, for example: hydra clients\nupdate client-1 -n ",'"',"my updated app",'"'," -g client_credentials -r token -a\ncore,foobar --keybase keybase_username"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"hydra clients update &lt;id&gt; [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"      --allowed-cors-origins strings           The list of URLs allowed to make CORS requests. Requires CORS_ENABLED.\n      --audience strings                       The audience this client is allowed to request\n      --backchannel-logout-callback string     Client URL that will cause the client to log itself out when sent a Logout Token by Hydra.\n      --backchannel-logout-session-required    Boolean flag specifying whether the client requires that a sid (session ID) Claim be included in the Logout Token to identify the client session with the OP when the backchannel-logout-callback is used. If omitted, the default value is false.\n  -c, --callbacks strings                      REQUIRED list of allowed callback URLs\n      --client-uri string                      A URL string of a web page providing information about the client\n      --frontchannel-logout-callback string    Client URL that will cause the client to log itself out when rendered in an iframe by Hydra.\n      --frontchannel-logout-session-required   Boolean flag specifying whether the client requires that a sid (session ID) Claim be included in the Logout Token to identify the client session with the OP when the frontchannel-logout-callback is used. If omitted, the default value is false.\n  -g, --grant-types strings                    A list of allowed grant types (default [authorization_code])\n  -h, --help                                   help for update\n      --jwks-uri string                        Define the URL where the JSON Web Key Set should be fetched from when performing the &#34;private_key_jwt&#34; client authentication method\n      --keybase string                         Keybase username for encrypting client secret\n      --logo-uri string                        A URL string that references a logo for the client\n  -n, --name string                            The client&#39;s name\n      --pgp-key string                         Base64 encoded PGP encryption key for encrypting client secret\n      --pgp-key-url string                     PGP encryption key URL for encrypting client secret\n      --policy-uri string                      A URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data\n      --post-logout-callbacks strings          List of allowed URLs to be redirected to after a logout\n  -r, --response-types strings                 A list of allowed response types (default [code])\n  -a, --scope strings                          The scope the client is allowed to request\n      --secret string                          Provide the client&#39;s secret\n      --subject-type string                    A identifier algorithm. Valid values are &#34;public&#34; and &#34;pairwise&#34; (default &#34;public&#34;)\n      --token-endpoint-auth-method string      Define which authentication method the client may use at the Token Endpoint. Valid values are &#34;client_secret_post&#34;, &#34;client_secret_basic&#34;, &#34;private_key_jwt&#34;, and &#34;none&#34; (default &#34;client_secret_basic&#34;)\n      --tos-uri string                         A URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL. A unix socket can be set in the form unix:///path/to/socket\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   Fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"hydra-clients"},"hydra clients")," - Manage OAuth 2.0 Clients")))}d.isMDXComponent=!0},571:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,f=u["".concat(o,".").concat(h)]||u[h]||p[h]||a;return n?i.a.createElement(f,s(s({ref:t},c),{},{components:n})):i.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);