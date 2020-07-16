(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{188:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return S}));var i=t(2),a=t(9),r=(t(0),t(390)),o={id:"configuration",title:"Configuration"},s={id:"version-v0.1/reference/configuration",isDocsHomePage:!1,title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/versioned_docs/version-v0.1/reference/configuration.md",permalink:"/kratos/docs/v0.1/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.1/reference/configuration.md",version:"v0.1",lastUpdatedBy:"koenmtb1",lastUpdatedAt:1586597846,sidebar:"version-v0.1/docs",previous:{title:"After Jobs",permalink:"/kratos/docs/v0.1/self-service/workflows/jobs/after"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/v0.1/reference/json-schema-json-paths"},latestVersionMainDocPermalink:"/kratos/docs"},l=[],u={rightToc:l};function S(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file which supports all\nconfiguration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the ",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml"),"\nflag: ",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values support reloading without server restart.\nAll configuration values can be set using environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through environmental variables head to the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services")," section."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"## ORY Kratos Configuration\n#\n\n\n## dsn ##\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: postgres://user:password@localhost:5432/database\n\n## identity ##\n#\nidentity:\n  \n  ## traits ##\n  #\n  traits:\n    \n    ## default_schema_url ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: http://WBwVKWvcJYnRFLOpuTSaootvh.bwCxwHzemclRM,p2bR9wN.avr4J5iwFryiF\n\n    ## schemas ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - 59663280.313260764\n      - true\n      - elit\n      - null\n      - true\n\n## selfservice ##\n#\nselfservice:\n  \n  ## logout ##\n  #\n  logout:\n    \n    ## redirect_to ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: http://TPNXSkIbeASVeSLyyRTbVjdkX.ygfeQk8llwnWZ+NeenrZJJHgd8BAoqaQ5iHO9BW-DeqlXBuYKVlL0ijQpJw9Q\n\n  ## strategies ##\n  #\n  strategies:\n    \n    ## password ##\n    #\n    password:\n      \n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: false\n\n    ## oidc ##\n    #\n    oidc:\n      \n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: true\n\n      ## config ##\n      #\n      config:\n        \n        ## providers ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: ullamco\n            provider: generic\n            client_id: velit dolore Duis reprehenderit nisi\n            client_secret: in consequat dolore\n            schema_url: http://lpoYQWvHuSDrJljhVjOCONOS.bbfmvV-\n            issuer_url: http://XaQqjEDUcXllKKimZtGo.ntupaSho,,H5SxzjVm6F8\n            auth_url: http://HZ.xxzFv8\n            token_url: https://ujCgzKnVDjBnAp.gzxei+BObHmgpLrbeJz8e-zVywPpN-wap+fAWWq4\n            scope:\n              - tempor eu do\n              - mollit anim incididunt in irure\n              - id ut sint deserunt commodo\n\n  ## profile ##\n  #\n  profile:\n    \n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_PROFILE_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_PROFILE_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 6389090690ns\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_PROFILE_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_PROFILE_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 4926695us\n\n  ## verify ##\n  #\n  verify:\n    \n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 2892813086ms\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 76658s\n\n  ## login ##\n  #\n  login:\n    \n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 261924674us\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: https://LZuL.nvTjdRbGlnQ5BkDs7Zsz\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://v.pwlI+GKKH5Pux,sNH1wU4fGbfkt0NmRtlVjj7FQQPBBzZs9EbfyO\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://OH.olzn+m.xe-6Kgs137g9lEn5LoChjMW2ECFLRp9k.\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://teHyPcra.bonyF50e-GPaGsOOOLDBpR4ZbyeXdr.gxXWn-\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: https://KqeIwKYdUYHYPNbCHuqANnEQxOqLUet.qvcf7rYxwxTFNKXDpk1FwLllKiEeXMcI0Ga94bmUnUNfTqUbpV\n          allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      \n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: session\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: revoke_active_sessions\n        - job: redirect\n          config:\n            default_redirect_url: http://TJpEMihFHEbvDTr.fbH04HGSBxwZWwiI,fl3tnRgZzaFK3Vf1CD\n            allow_user_defined_redirect: true\n\n  ## registration ##\n  #\n  registration:\n    \n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 32118264ns\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://ubxIxHSXZdAFmtpNOWW.jfzQsBcHwDgtadjbGtuabQB2\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: https://iebhoGPqxM.vyA6f8LWYiTlokLrGXo5VboE\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://EfZCcuFccKLA.kqFt96m\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://yWrLhTQqdWvktATVW.iyvioS-Lan.m7JaD6ZGb\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: http://dKpGhABBIQhDutIAcuGFMtJytuNccC.rcqk+0nhhGiAAB82WPG9EfYBoOv3nmPr6syGv6dWyW90F6xNkO+DQuUw1\n          allow_user_defined_redirect: false\n\n    ## after ##\n    #\n    after:\n      \n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: verify\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: session\n        - job: verify\n        - job: redirect\n          config:\n            default_redirect_url: http://FVJpZlF.hfauWp\n            allow_user_defined_redirect: false\n        - job: redirect\n          config:\n            default_redirect_url: http://MxYouifavjiddhfCRhVxEdCo.oiyhO1RNkxr0Fgtohdl5JbiRdZfvSmK+YgXDahIOY+E7sRyf0HEc1rnan-6S37UZ8D\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: https://s.moiB9e8fSa\n            allow_user_defined_redirect: false\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  \n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    \n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: J4LNi@lKDckRnZblhfGKt.vtou\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: magna nulla officia\n\n## serve ##\n#\nserve:\n  \n  ## admin ##\n  #\n  admin:\n    \n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: ut aliqua amet pariatur Lorem\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    \n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: eiusmod ea\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  \n  ## profile_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_PROFILE_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_PROFILE_UI=<value>\n  #\n  profile_ui: http://BMvdJD.oumrvPl+.YTtiPL6I21HYzlRsoTW-Dd1-lDUCJltAHcth.+eggbpCfQvWY.YSS3i\n\n  ## mfa_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: http://jJAIvAwZyxLFzQjBYtcGhLGuzwudpru.dbF.OeGVZf-fC\n\n  ## login_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: http://bC.dsmw,wLBWDeODw.jzOSI\n\n  ## registration_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: http://aFuZJoeUxZWbuTpHLFZvK.gxlPs3in99K,qmGgreVGQFtdAJbjtOmf4,oaXujXoOfC9\n\n  ## error_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: http://XyOnfsMVwIYMBlWKnkCPLOEjjM.czcUWzDof8Yf3EfshOx2zlNKWInKZLdpwX6P+UoqMabq6j7wR2Wpgx+zXrxhS34dr\n\n  ## Verify User Interface URL ##\n  #\n  # The URL of the Verify User Interface, the page where users can request activate and / or verify their email or telephone number.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: https://AFOEiEYuMWbJuHEggEbQ.pfQWlSMyPl,,pcK80YpSmfTu4+8fJfb9nsteihlmuak\n\n  ## default_return_to ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: http://zkQAiAiiIYb.ccihU+5ATPZJD2Pw8g,BV1p3ttrEDUdvY1.smb0rA\n\n  ## self ##\n  #\n  self:\n    \n    ## public ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://soaSpPGphWtHdGE.jnisR2qXIxFM6sRpbYF6B9pd1FBsbPIWBKPsXHYbqlRhdmG0xq.pO0IJ4m\n\n    ## admin ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: http://AW.pbumgzDhx3hSJ+clKU7Oe,amEjmmbm1Ru2yMg0k6kV7cdSKDcPsn1QYXOVUB1071goU\n\n  ## whitelisted_return_to_domains ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  #\n  whitelisted_return_to_domains:\n    - http://CTLQXiigUbkVwraZAOiDopaD.lzwMQNslH,m2aPn\n\n## log ##\n#\nlog:\n  \n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: debug\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: text\n\n## secrets ##\n#\nsecrets:\n  \n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - laboris dolore quis\n    - cupidatatexercitation sunt\n\n## hashers ##\n#\nhashers:\n  \n  ## argon2 ##\n  #\n  argon2:\n    \n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 11883317\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 21236220\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 71551855\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 80719037\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 86477135\n\n## security ##\n#\nsecurity:\n  \n  ## session ##\n  #\n  session:\n    \n    ## cookie ##\n    #\n    cookie:\n      \n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: Strict\n\n")))}S.isMDXComponent=!0},390:function(n,e,t){"use strict";t.d(e,"a",(function(){return _})),t.d(e,"b",(function(){return E}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),S=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},_=function(n){var e=S(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},v={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),_=S(t),d=i,E=_["".concat(o,".").concat(d)]||_[d]||v[d]||r;return t?a.a.createElement(E,s(s({ref:e},u),{},{components:t})):a.a.createElement(E,s({ref:e},u))}));function E(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);