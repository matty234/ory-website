(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6872],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return E},kt:function(){return d}});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),u=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},E=function(n){var e=u(n.components);return a.createElement(l.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,E=r(n,["components","mdxType","originalType","parentName"]),c=u(t),d=i,S=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(S,s(s({ref:e},E),{},{components:t})):a.createElement(S,s({ref:e},E))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,s=new Array(o);s[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r.mdxType="string"==typeof n?n:i,s[1]=r;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},98412:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return E},default:function(){return c}});var a=t(22122),i=t(19756),o=(t(67294),t(3905)),s=["components"],r={id:"configuration",title:"Configuration"},l=void 0,u={unversionedId:"reference/configuration",id:"version-v0.6/reference/configuration",isDocsHomePage:!1,title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/versioned_docs/version-v0.6/reference/configuration.md",sourceDirName:"reference",slug:"/reference/configuration",permalink:"/keto/docs/reference/configuration",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/reference/configuration.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619704986,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"version-v0.6/docs",previous:{title:"Basic: Olymp Library",permalink:"/keto/docs/examples/olymp-file-sharing"},next:{title:"REST API",permalink:"/keto/docs/reference/rest-api"}},E=[],m={toc:E};function c(n){var e=n.components,t=(0,i.Z)(n,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If file ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.keto.yaml")," exists, it will be used as a configuration file which\nsupports all configuration settings listed below."),(0,o.kt)("p",null,"You can load the config file from another source using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",(0,o.kt)("inlineCode",{parentName:"p"},"keto --config path/to/config.yaml"),"."),(0,o.kt)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),(0,o.kt)("p",null,"This reference configuration documents all keys, also deprecated ones! It is a\nreference for all possible configuration values."),(0,o.kt)("p",null,"If you are looking for an example configuration, it is better to try out the\nquickstart."),(0,o.kt)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/configuring"},"Configuring ORY services"),"\nsection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"## ORY Keto Configuration\n#\n\n## serve ##\n#\nserve:\n  ## Write API (http and gRPC) ##\n  #\n  write:\n    ## Host ##\n    #\n    # The network interface to listen on.\n    #\n    # Examples:\n    # - localhost\n    # - 127.0.0.1\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_WRITE_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_WRITE_HOST=<value>\n    #\n    host: localhost\n\n    ## Cross Origin Resource Sharing (CORS) ##\n    #\n    # Configure [Cross Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/) using the following options.\n    #\n    cors:\n      ## Allowed Origins ##\n      #\n      # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penality. Only one wildcard can be used per origin.\n      #\n      # Default value: *\n      #\n      # Examples:\n      # - - https://example.com\n      #   - https://*.example.com\n      #   - https://*.foo.example.com\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n        - https://*.foo.example.com\n\n      ## Allowed HTTP Methods ##\n      #\n      # A list of methods the client is allowed to use with cross-domain requests.\n      #\n      # Default value: GET,POST,PUT,PATCH,DELETE\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - GET\n\n      ## Allowed Request HTTP Headers ##\n      #\n      # A list of non simple headers the client is allowed to use with cross-domain requests.\n      #\n      # Default value: Authorization,Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - ''\n\n      ## Allowed Response HTTP Headers ##\n      #\n      # Indicates which headers are safe to expose to the API of a CORS API specification\n      #\n      # Default value: Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - ''\n\n      ## Allow HTTP Credentials ##\n      #\n      # Indicates whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: false\n\n      ## Maximum Age ##\n      #\n      # Indicates how long (in seconds) the results of a preflight request can be cached. The default is 0 which stands for no max age.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_MAX_AGE=<value>\n      #\n      max_age: -100000000\n\n      ## Enable Debugging ##\n      #\n      # Set to true to debug server side CORS issues.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_DEBUG=<value>\n      #\n      debug: false\n\n      ## Enable CORS ##\n      #\n      # If set to true, CORS will be enabled and preflight-requests (OPTION) will be answered.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ENABLED=<value>\n      #\n      enabled: false\n\n    ## HTTPS ##\n    #\n    # Configure HTTP over TLS (HTTPS). All options can also be set using environment variables by replacing dots (`.`) with underscores (`_`) and uppercasing the key. For example, `some.prefix.tls.key.path` becomes `export SOME_PREFIX_TLS_KEY_PATH`. If all keys are left undefined, TLS will be disabled.\n    #\n    tls:\n      ## TLS Certificate (PEM) ##\n      #\n      cert:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_CERT_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_CERT_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_CERT_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_CERT_PATH=<value>\n        #\n        path: path/to/file.pem\n\n      ## Private Key (PEM) ##\n      #\n      key:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_KEY_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_KEY_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_KEY_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_KEY_PATH=<value>\n        #\n        path: path/to/file.pem\n\n    ## Port ##\n    #\n    # The port to listen on.\n    #\n    # Default value: 4467\n    #\n    # Minimum value: 1\n    #\n    # Maximum value: 65535\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_WRITE_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_WRITE_PORT=<value>\n    #\n    port: 1\n\n  ## Read API (http and gRPC) ##\n  #\n  read:\n    ## Host ##\n    #\n    # The network interface to listen on.\n    #\n    # Examples:\n    # - localhost\n    # - 127.0.0.1\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_READ_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_READ_HOST=<value>\n    #\n    host: localhost\n\n    ## Cross Origin Resource Sharing (CORS) ##\n    #\n    # Configure [Cross Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/) using the following options.\n    #\n    cors:\n      ## Allowed Origins ##\n      #\n      # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penality. Only one wildcard can be used per origin.\n      #\n      # Default value: *\n      #\n      # Examples:\n      # - - https://example.com\n      #   - https://*.example.com\n      #   - https://*.foo.example.com\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n        - https://*.foo.example.com\n\n      ## Allowed HTTP Methods ##\n      #\n      # A list of methods the client is allowed to use with cross-domain requests.\n      #\n      # Default value: GET,POST,PUT,PATCH,DELETE\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - GET\n\n      ## Allowed Request HTTP Headers ##\n      #\n      # A list of non simple headers the client is allowed to use with cross-domain requests.\n      #\n      # Default value: Authorization,Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - ''\n\n      ## Allowed Response HTTP Headers ##\n      #\n      # Indicates which headers are safe to expose to the API of a CORS API specification\n      #\n      # Default value: Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - ''\n\n      ## Allow HTTP Credentials ##\n      #\n      # Indicates whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: false\n\n      ## Maximum Age ##\n      #\n      # Indicates how long (in seconds) the results of a preflight request can be cached. The default is 0 which stands for no max age.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_MAX_AGE=<value>\n      #\n      max_age: -100000000\n\n      ## Enable Debugging ##\n      #\n      # Set to true to debug server side CORS issues.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_DEBUG=<value>\n      #\n      debug: false\n\n      ## Enable CORS ##\n      #\n      # If set to true, CORS will be enabled and preflight-requests (OPTION) will be answered.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ENABLED=<value>\n      #\n      enabled: false\n\n    ## HTTPS ##\n    #\n    # Configure HTTP over TLS (HTTPS). All options can also be set using environment variables by replacing dots (`.`) with underscores (`_`) and uppercasing the key. For example, `some.prefix.tls.key.path` becomes `export SOME_PREFIX_TLS_KEY_PATH`. If all keys are left undefined, TLS will be disabled.\n    #\n    tls:\n      ## TLS Certificate (PEM) ##\n      #\n      cert:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_CERT_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_CERT_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_CERT_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_CERT_PATH=<value>\n        #\n        path: path/to/file.pem\n\n      ## Private Key (PEM) ##\n      #\n      key:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_KEY_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_KEY_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_KEY_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_KEY_PATH=<value>\n        #\n        path: path/to/file.pem\n\n    ## Port ##\n    #\n    # The port to listen on.\n    #\n    # Default value: 4466\n    #\n    # Minimum value: 1\n    #\n    # Maximum value: 65535\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_READ_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_READ_PORT=<value>\n    #\n    port: 1\n\n## Profiling ##\n#\n# Enables CPU or memory profiling if set. For more details on profiling Go programs read [Profiling Go Programs](https://blog.golang.org/profiling-go-programs).\n#\n# One of:\n# - cpu\n# - mem\n# - \"\"\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export PROFILING=<value>\n# - Windows Command Line (CMD):\n#    > set PROFILING=<value>\n#\nprofiling: cpu\n\n## Log ##\n#\n# Configure logging using the following options. Logging will always be sent to stdout and stderr.\n#\nlog:\n  ## Format ##\n  #\n  # The log format can either be text or JSON.\n  #\n  # Default value: text\n  #\n  # One of:\n  # - text\n  # - json\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: text\n\n  ## Leak Sensitive Log Values ##\n  #\n  # If set will leak sensitive values (e.g. emails) in the logs.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEAK_SENSITIVE_VALUES=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEAK_SENSITIVE_VALUES=<value>\n  #\n  leak_sensitive_values: false\n\n  ## Level ##\n  #\n  # Debug enables stack traces on errors. Can also be set using environment variable LOG_LEVEL.\n  #\n  # Default value: info\n  #\n  # One of:\n  # - panic\n  # - fatal\n  # - error\n  # - warn\n  # - info\n  # - debug\n  # - trace\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: panic\n\n## tracing ##\n#\n# ORY Hydra supports distributed tracing.\n#\ntracing:\n  ## service_name ##\n  #\n  # Specifies the service name to use on the tracer.\n  #\n  # Examples:\n  # - ORY Hydra\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_SERVICE_NAME=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_SERVICE_NAME=<value>\n  #\n  service_name: ORY Hydra\n\n  ## providers ##\n  #\n  providers:\n    ## jaeger ##\n    #\n    # Configures the jaeger tracing backend.\n    #\n    jaeger:\n      ## propagation ##\n      #\n      # The tracing header format\n      #\n      # Examples:\n      # - jaeger\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      #\n      propagation: jaeger\n\n      ## sampling ##\n      #\n      # Examples:\n      # - type: const\n      #   value: 1\n      #   server_url: http://localhost:5778/sampling\n      #\n      sampling:\n        ## type ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        #\n        type: const\n\n        ## value ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        #\n        value: 1\n\n        ## server_url ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        #\n        server_url: http://localhost:5778/sampling\n\n      ## local_agent_address ##\n      #\n      # The address of the jaeger-agent where spans should be sent to.\n      #\n      # Examples:\n      # - 127.0.0.1:6831\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      #\n      local_agent_address: 127.0.0.1:6831\n\n  ## provider ##\n  #\n  # Set this to the tracing backend you wish to use. Currently supports jaeger. If omitted or empty, tracing will be disabled.\n  #\n  # One of:\n  # - jaeger\n  #\n  # Examples:\n  # - jaeger\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_PROVIDER=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_PROVIDER=<value>\n  #\n  provider: jaeger\n\n## namespaces ##\n#\n# Namespace configuration or it's location.\n#\n# Default value: file://./keto_namespaces\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export NAMESPACES=<value>\n# - Windows Command Line (CMD):\n#    > set NAMESPACES=<value>\n#\nnamespaces: http://a.aaa\n\n## The Keto version this config is written for. ##\n#\n# SemVer according to https://semver.org/ prefixed with `v` as in our releases.\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export VERSION=<value>\n# - Windows Command Line (CMD):\n#    > set VERSION=<value>\n#\nversion: v0.6.0-alpha.3\n\n## Data Source Name ##\n#\n# Sets the data source name. This configures the backend where ORY Keto persists data. If dsn is \"memory\", data will be written to memory and is lost when you restart this instance. ORY Hydra supports popular SQL databases. For more detailed configuration information go to: https://www.ory.sh/docs/hydra/dependencies-environment#sql\n#\n# Examples:\n# - postgres://user:password@host:123/database\n# - mysql://user:password@tcp(host:123)/database\n# - memory\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: postgres://user:password@host:123/database\n")))}c.isMDXComponent=!0}}]);