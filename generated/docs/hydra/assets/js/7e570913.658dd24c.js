(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(3),o=n(8),a=(n(0),n(568)),l=(n(569),n(575),n(572),n(573),{id:"logout",title:"Logout Flow"}),c={unversionedId:"concepts/logout",id:"version-v1.8/concepts/logout",isDocsHomePage:!1,title:"Logout Flow",description:"ORY Hydra implements",source:"@site/versioned_docs/version-v1.8/concepts/logout.mdx",slug:"/concepts/logout",permalink:"/hydra/docs/v1.8/concepts/logout",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/concepts/logout.mdx",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601676726,formattedLastUpdatedAt:"10/2/2020",sidebar:"version-v1.8/docs",previous:{title:"Consent Flow",permalink:"/hydra/docs/v1.8/concepts/consent"},next:{title:"JSON Web Key Sets",permalink:"/hydra/docs/v1.8/jwks"}},s=[{value:"Logout Flow",id:"logout-flow",children:[]},{value:"OpenID Connect Front-Channel Logout 1.0",id:"openid-connect-front-channel-logout-10",children:[]},{value:"OpenID Connect Back-Channel Logout 1.0",id:"openid-connect-back-channel-logout-10",children:[]}],r={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ORY Hydra implements\n",Object(a.b)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html"},"OpenID Connect RP-Initiated Logout 1.0"),"\nand supports\n",Object(a.b)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"},"OpenID Connect Front-Channel Logout 1.0"),"\nand\n",Object(a.b)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"},"OpenID Connect Back-Channel Logout 1.0"),"\nflows."),Object(a.b)("p",null,"A logout request may be initiated by the OpenID Provider (OP - ",Object(a.b)("strong",{parentName:"p"},"you"),") or by\nthe Relying Party (RP - the OAuth2 Client). Both requests follow the same\npattern as user login and user consent. Before the logout is completed, the user\nis redirected to the ",Object(a.b)("strong",{parentName:"p"},"Logout UI")," (similar to Login UI and Consent UI) to\nconfirm the logout request."),Object(a.b)("p",null,"A logout request can provide a ",Object(a.b)("inlineCode",{parentName:"p"},"id_token_hint")," and may optionally define ",Object(a.b)("inlineCode",{parentName:"p"},"state"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),". Because of that there are several possible\npathways for executing this flow, explained in the following diagram:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58IHxSUElbSGFzIGlkX3Rva2VuX2hpbnQqXTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnwgfE9QSVtEb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqXVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZSoqfExVSVtMb2dvdXQgVUkgd2l0aCA_bG9nb3V0X2NoYWxsZW5nZT0uLi5dXG5PUEktLT58bm8gc2Vzc2lvbiBjb29raWUqKnxFbmRbUmV0dXJuIHRvIHBvc3RfbG9nb3V0X3VybCoqKl1cblJQSS0tPnxoYXMgYWN0aXZlIHNlc3Npb24qKnxMVUlcblJQSS0tPnxubyBhY3RpdmUgc2Vzc2lvbioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjRUNFQ0ZGIiwic2Vjb25kYXJ5Q29sb3IiOiIjZmZmZmRlIiwidGVydGlhcnlDb2xvciI6ImhzbCg4MCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDI0MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg2MCwgNjAlLCA4My41Mjk0MTE3NjQ3JSkiLCJ0ZXJ0aWFyeUJvcmRlckNvbG9yIjoiaHNsKDgwLCA2MCUsIDg2LjI3NDUwOTgwMzklKSIsInByaW1hcnlUZXh0Q29sb3IiOiIjMTMxMzAwIiwic2Vjb25kYXJ5VGV4dENvbG9yIjoiIzAwMDAyMSIsInRlcnRpYXJ5VGV4dENvbG9yIjoicmdiKDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxLCA5LjUwMDAwMDAwMDEpIiwibGluZUNvbG9yIjoiIzMzMzMzMyIsInRleHRDb2xvciI6IiMzMzMiLCJtYWluQmtnIjoiI0VDRUNGRiIsInNlY29uZEJrZyI6IiNmZmZmZGUiLCJib3JkZXIxIjoiIzkzNzBEQiIsImJvcmRlcjIiOiIjYWFhYTMzIiwiYXJyb3doZWFkQ29sb3IiOiIjMzMzMzMzIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwibGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsIm5vZGVCa2ciOiIjRUNFQ0ZGIiwibm9kZUJvcmRlciI6IiM5MzcwREIiLCJjbHVzdGVyQmtnIjoiI2ZmZmZkZSIsImNsdXN0ZXJCb3JkZXIiOiIjYWFhYTMzIiwiZGVmYXVsdExpbmtDb2xvciI6IiMzMzMzMzMiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJhY3RvckJrZyI6IiNFQ0VDRkYiLCJhY3RvclRleHRDb2xvciI6ImJsYWNrIiwiYWN0b3JMaW5lQ29sb3IiOiJncmV5Iiwic2lnbmFsQ29sb3IiOiIjMzMzIiwic2lnbmFsVGV4dENvbG9yIjoiIzMzMyIsImxhYmVsQm94QmtnQ29sb3IiOiIjRUNFQ0ZGIiwibGFiZWxCb3hCb3JkZXJDb2xvciI6ImhzbCgyNTkuNjI2MTY4MjI0MywgNTkuNzc2NTM2MzEyOCUsIDg3LjkwMTk2MDc4NDMlKSIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjYWFhYTMzIiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoicmdiYSgxMDIsIDEwMiwgMjU1LCAwLjQ5KSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiNmZmY0MDAiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwidGFza0JrZ0NvbG9yIjoiIzhhOTBkZCIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiM1MzRmYmMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjYmZjN2ZmIiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMTMxMzAwIiwiZmlsbFR5cGUwIjoiI0VDRUNGRiIsImZpbGxUeXBlMSI6IiNmZmZmZGUiLCJmaWxsVHlwZTIiOiJoc2woMzA0LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTMiOiJoc2woMTI0LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTQiOiJoc2woMTc2LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTUiOiJoc2woLTQsIDEwMCUsIDkzLjUyOTQxMTc2NDclKSIsImZpbGxUeXBlNiI6ImhzbCg4LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTciOiJoc2woMTg4LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkifX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"},Object(a.b)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58IHxSUElbSGFzIGlkX3Rva2VuX2hpbnQqXTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnwgfE9QSVtEb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqXVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZSoqfExVSVtMb2dvdXQgVUkgd2l0aCA_bG9nb3V0X2NoYWxsZW5nZT0uLi5dXG5PUEktLT58bm8gc2Vzc2lvbiBjb29raWUqKnxFbmRbUmV0dXJuIHRvIHBvc3RfbG9nb3V0X3VybCoqKl1cblJQSS0tPnxoYXMgYWN0aXZlIHNlc3Npb24qKnxMVUlcblJQSS0tPnxubyBhY3RpdmUgc2Vzc2lvbioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjRUNFQ0ZGIiwic2Vjb25kYXJ5Q29sb3IiOiIjZmZmZmRlIiwidGVydGlhcnlDb2xvciI6ImhzbCg4MCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDI0MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg2MCwgNjAlLCA4My41Mjk0MTE3NjQ3JSkiLCJ0ZXJ0aWFyeUJvcmRlckNvbG9yIjoiaHNsKDgwLCA2MCUsIDg2LjI3NDUwOTgwMzklKSIsInByaW1hcnlUZXh0Q29sb3IiOiIjMTMxMzAwIiwic2Vjb25kYXJ5VGV4dENvbG9yIjoiIzAwMDAyMSIsInRlcnRpYXJ5VGV4dENvbG9yIjoicmdiKDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxLCA5LjUwMDAwMDAwMDEpIiwibGluZUNvbG9yIjoiIzMzMzMzMyIsInRleHRDb2xvciI6IiMzMzMiLCJtYWluQmtnIjoiI0VDRUNGRiIsInNlY29uZEJrZyI6IiNmZmZmZGUiLCJib3JkZXIxIjoiIzkzNzBEQiIsImJvcmRlcjIiOiIjYWFhYTMzIiwiYXJyb3doZWFkQ29sb3IiOiIjMzMzMzMzIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwibGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsIm5vZGVCa2ciOiIjRUNFQ0ZGIiwibm9kZUJvcmRlciI6IiM5MzcwREIiLCJjbHVzdGVyQmtnIjoiI2ZmZmZkZSIsImNsdXN0ZXJCb3JkZXIiOiIjYWFhYTMzIiwiZGVmYXVsdExpbmtDb2xvciI6IiMzMzMzMzMiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJhY3RvckJrZyI6IiNFQ0VDRkYiLCJhY3RvclRleHRDb2xvciI6ImJsYWNrIiwiYWN0b3JMaW5lQ29sb3IiOiJncmV5Iiwic2lnbmFsQ29sb3IiOiIjMzMzIiwic2lnbmFsVGV4dENvbG9yIjoiIzMzMyIsImxhYmVsQm94QmtnQ29sb3IiOiIjRUNFQ0ZGIiwibGFiZWxCb3hCb3JkZXJDb2xvciI6ImhzbCgyNTkuNjI2MTY4MjI0MywgNTkuNzc2NTM2MzEyOCUsIDg3LjkwMTk2MDc4NDMlKSIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjYWFhYTMzIiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoicmdiYSgxMDIsIDEwMiwgMjU1LCAwLjQ5KSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiNmZmY0MDAiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwidGFza0JrZ0NvbG9yIjoiIzhhOTBkZCIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiM1MzRmYmMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjYmZjN2ZmIiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMTMxMzAwIiwiZmlsbFR5cGUwIjoiI0VDRUNGRiIsImZpbGxUeXBlMSI6IiNmZmZmZGUiLCJmaWxsVHlwZTIiOiJoc2woMzA0LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTMiOiJoc2woMTI0LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTQiOiJoc2woMTc2LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTUiOiJoc2woLTQsIDEwMCUsIDkzLjUyOTQxMTc2NDclKSIsImZpbGxUeXBlNiI6ImhzbCg4LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTciOiJoc2woMTg4LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkifX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"User Logout"}))),Object(a.b)("p",null,"Legend:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"*"),": This is a query parameter, for example\n",Object(a.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=...")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"**"),' Here, an "active session" implies that there has been at least one login\nrequest completed with ',Object(a.b)("inlineCode",{parentName:"li"},"remember: true")," for that user. If that's not the case,\nthe system \"does not know\" what to do (because there has never been a session\nissued that was remembered - hence it's not possible to forget it)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"***"),': Here, the "valid session cookies" implies that the browser has a valid\nauthentication cookie when calling ',Object(a.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout"),". If you have\nproblems at this step, check if there is a cookie\n",Object(a.b)("inlineCode",{parentName:"li"},"oauth2_authentication_session")," for the domain ORY Hydra is running at. ",Object(a.b)("strong",{parentName:"li"},"Do\nnot mix up IP (e.g. ",Object(a.b)("inlineCode",{parentName:"strong"},"127.0.0.1"),", ",Object(a.b)("inlineCode",{parentName:"strong"},"192.168.1.1"),") addresses and FQDNs (e.g.\n",Object(a.b)("inlineCode",{parentName:"strong"},"localhost"),", ",Object(a.b)("inlineCode",{parentName:"strong"},"google.com"),").")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"****"),": The ",Object(a.b)("inlineCode",{parentName:"li"},"post_logout_redirect")," defaults to the configuration value of\n",Object(a.b)("inlineCode",{parentName:"li"},"urls.post_logout_redirect"),". If a ",Object(a.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," was set and that\nURL is in the array of the OAuth2 Client's ",Object(a.b)("inlineCode",{parentName:"li"},"urls.post_logout_redirect"),", the\nbrowser will be redirected there instead.")),Object(a.b)("h3",{id:"logout-flow"},"Logout Flow"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgVXNlciBBZ2VudC0-Pk9SWSBIeWRyYTogQ2FsbHMgbG9nb3V0IGVuZHBvaW50XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogVmFsaWRhdGVzIGxvZ291dCBlbmRwb2ludFxuICAgIE9SWSBIeWRyYS0-PkxvZ291dCBQcm92aWRlcjogUmVkaXJlY3RzIGVuZCB1c2VyIHdpdGggbG9nb3V0IGNoYWxsZW5nZVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dvdXQgcmVxdWVzdCBpbmZvXG4gICAgTG9nb3V0IFByb3ZpZGVyLS0-PkxvZ291dCBQcm92aWRlcjogQWNxdWlyZXMgdXNlciBjb25zZW50IGZvciBsb2dvdXQgKG9wdGlvbmFsKVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogSW5mb3JtcyB0aGF0IGxvZ291dCByZXF1ZXN0IGlzIGdyYW50ZWRcbiAgICBMb2dvdXQgUHJvdmlkZXItPj5PUlkgSHlkcmE6IFJlZGlyZWN0cyBlbmQgdXNlciB0byByZWRpcmVjdCB1cmwgd2l0aCBsb2dvdXQgY2hhbGxlbmdlXG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogUGVyZm9ybXMgbG9nb3V0IHJvdXRpbmVzXG4gICAgT1JZIEh5ZHJhLS0-VXNlciBBZ2VudDogUmVkaXJlY3RzIHRvIHNwZWNpZmllZCByZWRpcmVjdCB1cmwiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"},Object(a.b)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgVXNlciBBZ2VudC0-Pk9SWSBIeWRyYTogQ2FsbHMgbG9nb3V0IGVuZHBvaW50XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogVmFsaWRhdGVzIGxvZ291dCBlbmRwb2ludFxuICAgIE9SWSBIeWRyYS0-PkxvZ291dCBQcm92aWRlcjogUmVkaXJlY3RzIGVuZCB1c2VyIHdpdGggbG9nb3V0IGNoYWxsZW5nZVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dvdXQgcmVxdWVzdCBpbmZvXG4gICAgTG9nb3V0IFByb3ZpZGVyLS0-PkxvZ291dCBQcm92aWRlcjogQWNxdWlyZXMgdXNlciBjb25zZW50IGZvciBsb2dvdXQgKG9wdGlvbmFsKVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogSW5mb3JtcyB0aGF0IGxvZ291dCByZXF1ZXN0IGlzIGdyYW50ZWRcbiAgICBMb2dvdXQgUHJvdmlkZXItPj5PUlkgSHlkcmE6IFJlZGlyZWN0cyBlbmQgdXNlciB0byByZWRpcmVjdCB1cmwgd2l0aCBsb2dvdXQgY2hhbGxlbmdlXG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogUGVyZm9ybXMgbG9nb3V0IHJvdXRpbmVzXG4gICAgT1JZIEh5ZHJhLS0-VXNlciBBZ2VudDogUmVkaXJlY3RzIHRvIHNwZWNpZmllZCByZWRpcmVjdCB1cmwiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ",alt:"User Logout Flow Diagram"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A user-agent (browser) requests the logout endpoint\n(",Object(a.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout"),"). If the URL query contains an ID Token issued by\nORY Hydra as the ",Object(a.b)("inlineCode",{parentName:"li"},"id_token_hint"),"\n(",Object(a.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=..."),") then:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The URL query MAY contain key ",Object(a.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," indicating where\nthe user agent should be redirected after the logout completed\nsuccessfully. Each OAuth 2.0 Client can whitelist a list of URIs that can\nbe used as the value using the ",Object(a.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uris")," metadata field:\n",Object(a.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=...&post_logout_redirect_uri=https://i-must-be-whitelisted/")),Object(a.b)("li",{parentName:"ul"},"If ",Object(a.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," is set, the URL query SHOULD contain a\n",Object(a.b)("inlineCode",{parentName:"li"},"state")," value. On successful redirection, this state value will be appended\nto the ",Object(a.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),". The functionality is equal to the\n",Object(a.b)("inlineCode",{parentName:"li"},"state")," parameter when performing OAuth2 flows."))),Object(a.b)("li",{parentName:"ol"},"The user-agent is redirected to the logout provider URL (configuration item\n",Object(a.b)("inlineCode",{parentName:"li"},"urls.logout"),") and contains a challenge:\n",Object(a.b)("inlineCode",{parentName:"li"},"https://my-logout-provider/logout?challenge=...")),Object(a.b)("li",{parentName:"ol"},"The logout provider uses the ",Object(a.b)("inlineCode",{parentName:"li"},"challenge")," query parameter to fetch metadata\nabout the request. The logout provider may choose to show a UI where the user\nhas to accept the logout request. Alternatively, the logout provider MAY\nchoose to silently accept the logout request."),Object(a.b)("li",{parentName:"ol"},"To accept the logout request, the logout provider makes a ",Object(a.b)("inlineCode",{parentName:"li"},"PUT")," call to\n",Object(a.b)("inlineCode",{parentName:"li"},"/oauth2/auth/requests/logout/accept?challenge=..."),". No request body is\nrequired."),Object(a.b)("li",{parentName:"ol"},"The response contains a ",Object(a.b)("inlineCode",{parentName:"li"},"redirect_to")," value where the logout provider\nredirects the user back to."),Object(a.b)("li",{parentName:"ol"},"ORY Hydra performs OpenID Connect Front- and Back-Channel logout."),Object(a.b)("li",{parentName:"ol"},"The user agent is being redirected to a specified redirect URL. This may\neither be the default redirect URL set by ",Object(a.b)("inlineCode",{parentName:"li"},"urls.post_logout_redirect")," or to\nthe value specified by query parameter ",Object(a.b)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),".")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This endpoint does not remove any Access/Refresh Tokens.")),Object(a.b)("h4",{id:"logout-provider-example-nodejs-pseudo-code"},"Logout Provider Example (NodeJS Pseudo-code)"),Object(a.b)("p",null,"Following step 1 from the flow above, the user-agent is redirected to the logout\nprovider (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"https://my-logout-provider/logout?challenge=..."),"). Next, the\nlogout provider fetches information about the logout request:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-node"},"// This is node-js pseudo code and will not work if you copy it 1:1\n\nchallenge = req.url.query.logout_challenge\n\nfetch(\n  'https://hydra/oauth2/auth/requests/logout?' +\n    querystring.stringify({ logout_challenge: challenge })\n)\n  .then(function (response) {\n    return response.json()\n  })\n  .then(function (response) {\n    // ...\n  })\n")),Object(a.b)("p",null,"The server response is a JSON object with the following keys:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n    // The user for whom the logout was request.\n    "subject": "user-id",\n\n    // The login session ID that was requested to log out.\n    "sid": "abc..",\n\n    // The original request URL.\n    "request_url": "https://hydra/oauth2/sessions/logout?id_token_hint=...",\n\n    // True if the request did not include a id_token_hint. False otherwise.\n    "rp_initiated": true|false\n}\n')),Object(a.b)("p",null,"Next, the logout provider should decide if the end-user should perform a UI\naction such as confirming the logout request. It is RECOMMENDED to request\nlogout confirmation from the end-user when ",Object(a.b)("inlineCode",{parentName:"p"},"rp_initiated")," is set to true."),Object(a.b)("p",null,"When the logout provider decides to accept the logout request, the flow is\ncompleted as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-node"},"fetch(\n  'https://hydra/oauth2/auth/requests/logout/accept?' +\n    querystring.stringify({ logout_challenge: challenge }),\n  {\n    method: 'PUT'\n  }\n)\n  .then(function (response) {\n    return response.json()\n  })\n  .then(function (response) {\n    // The response will contain a `redirect_to` key which contains the URL where the user's user agent must be redirected to next.\n    res.redirect(response.redirect_to)\n  })\n")),Object(a.b)("p",null,"You can also reject a logout request (e.g. if the user chose to not log out):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-node"},"fetch(\n  'https://hydra/oauth2/auth/requests/logout/reject?' +\n    querystring.stringify({ logout_challenge: challenge }),\n  {\n    method: 'PUT'\n  }\n).then(function (response) {\n  // Now you can do whatever you want - redirect the user back to your home page or whatever comes to mind.\n})\n")),Object(a.b)("p",null,"If the logout request was granted and the user agent redirected back to ORY\nHydra, all OpenID Connect Front-/Back-channel logout flows (if set) will be\nperformed and the user will be redirect back to his/her final destination."),Object(a.b)("h3",{id:"openid-connect-front-channel-logout-10"},Object(a.b)("a",{parentName:"h3",href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"},"OpenID Connect Front-Channel Logout 1.0")),Object(a.b)("p",null,"In summary\n(",Object(a.b)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"},"read the spec"),")\nthis feature allows an OAuth 2.0 Client to register fields\n",Object(a.b)("inlineCode",{parentName:"p"},"frontchannel_logout_uri")," and ",Object(a.b)("inlineCode",{parentName:"p"},"frontchannel_logout_session_required"),"."),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"frontchannel_logout_uri")," is set to a valid URL (the host, port, path must\nall match those of one of the Redirect URIs), ORY Hydra will redirect the\nuser-agent (typically browser) to that URL after a logout occurred. This allows\nthe OAuth 2.0 Client Application to log out the end-user in its own system as\nwell - for example by deleting a Cookie or otherwise invalidating the user\nsession."),Object(a.b)("p",null,"ORY Hydra always appends query parameters values ",Object(a.b)("inlineCode",{parentName:"p"},"iss")," and ",Object(a.b)("inlineCode",{parentName:"p"},"sid")," to the\nFront-Channel Logout URI, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"https://rp.example.org/frontchannel_logout\n  ?iss=https://server.example.com\n  &sid=08a5019c-17e1-4977-8f42-65a12843ea02\n")),Object(a.b)("p",null,"Each OpenID Connect ID Token is issued with a ",Object(a.b)("inlineCode",{parentName:"p"},"sid")," claim that will match the\n",Object(a.b)("inlineCode",{parentName:"p"},"sid")," value from the Front-Channel Logout URI."),Object(a.b)("p",null,"ORY Hydra will automatically execute the required HTTP Redirects to make this\nwork. No extra work is required."),Object(a.b)("h3",{id:"openid-connect-back-channel-logout-10"},Object(a.b)("a",{parentName:"h3",href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"},"OpenID Connect Back-Channel Logout 1.0")),Object(a.b)("p",null,"In summary\n(",Object(a.b)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"},"read the spec"),")\nthis feature allows an OAuth 2.0 Client to register fields\n",Object(a.b)("inlineCode",{parentName:"p"},"backchannel_logout_uri")," and ",Object(a.b)("inlineCode",{parentName:"p"},"backchannel_logout_session_required"),"."),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"backchannel_logout_uri")," is set to a valid URL, a HTTP Post request with\nContent-Type ",Object(a.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," and a ",Object(a.b)("inlineCode",{parentName:"p"},"logout_token")," will be\nmade to that URL when a end-user logs out. The ",Object(a.b)("inlineCode",{parentName:"p"},"logout_token")," is a JWT signed\nwith the same key that is used to sign OpenID Connect ID Tokens. You should thus\nvalidate the ",Object(a.b)("inlineCode",{parentName:"p"},"logout_token")," using the ID Token Public Key (can be fetched from\n",Object(a.b)("inlineCode",{parentName:"p"},"/.well-known/jwks.json"),"). The ",Object(a.b)("inlineCode",{parentName:"p"},"logout_token")," contains the following claims:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"iss")," - Issuer Identifier, as specified in Section 2 of ","[OpenID.Core]","."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"aud")," - Audience(s), as specified in Section 2 of ","[OpenID.Core]","."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"iat")," - Issued at time, as specified in Section 2 of ","[OpenID.Core]","."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"jti")," - Unique identifier for the token, as specified in Section 9 of\n","[OpenID.Core]","."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"events")," - Claim whose value is a JSON object containing the member name\n",Object(a.b)("a",{parentName:"li",href:"http://schemas.openid.net/event/backchannel-logout"},"http://schemas.openid.net/event/backchannel-logout"),". This declares that the JWT\nis a Logout Token. The corresponding member value MUST be a JSON object and\nSHOULD be the empty JSON object {}."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sid")," - Session ID - String identifier for a Session. This represents a\nSession of a User Agent or device for a logged-in End-User at an RP. Different\nsid values are used to identify distinct sessions at an OP. The sid value need\nonly be unique in the context of a particular issuer. Its contents are opaque\nto the RP. Its syntax is the same as an OAuth 2.0 Client Identifier.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n  "iss": "https://server.example.com",\n  "aud": "s6BhdRkqt3",\n  "iat": 1471566154,\n  "jti": "bWJq",\n  "sid": "08a5019c-17e1-4977-8f42-65a12843ea02",\n  "events": {\n     "http://schemas.openid.net/event/backchannel-logout": {}\n   }\n}\n')),Object(a.b)("p",null,"An exemplary Back-Channel Logout Request looks as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"POST /backchannel_logout HTTP/1.1\nHost: rp.example.org\nContent-Type: application/x-www-form-urlencoded\n\nlogout_token=eyJhbGci ... .eyJpc3Mi ... .T3BlbklE ...\n")),Object(a.b)("p",null,"The Logout Token must be validated as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Validate the Logout Token signature in the same way that an ID Token signature\nis validated, with the following refinements."),Object(a.b)("li",{parentName:"ul"},"Validate the iss, aud, and iat Claims in the same way they are validated in ID\nTokens."),Object(a.b)("li",{parentName:"ul"},"Verify that the Logout Token contains a sid Claim."),Object(a.b)("li",{parentName:"ul"},"Verify that the Logout Token contains an events Claim whose value is JSON\nobject containing the member name\n",Object(a.b)("a",{parentName:"li",href:"http://schemas.openid.net/event/backchannel-logout"},"http://schemas.openid.net/event/backchannel-logout"),"."),Object(a.b)("li",{parentName:"ul"},"Verify that the Logout Token does not contain a nonce Claim."),Object(a.b)("li",{parentName:"ul"},"Optionally verify that another Logout Token with the same jti value has not\nbeen recently received.")),Object(a.b)("p",null,"The endpoint then returns a HTTP 200 OK response. Cache-Control headers should\nbe set to:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Cache-Control: no-cache, no-store\nPragma: no-cache\n")),Object(a.b)("p",null,"Because the OpenID Connect Back-Channel Logout Flow is not executed using the\nuser-agent (e.g. Browser) but from ORY Hydra directly, the session cookie of the\nend-user will not be available to the OAuth 2.0 Client and the session has to be\ninvalidated by some other means (e.g. by blacklisting the session ID)."))}b.isMDXComponent=!0},569:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l}));var i=n(16),o=n(570);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,l=a.forcePrependBaseUrl,c=void 0!==l&&l,s=a.absolute,r=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+b:b}(a,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},570:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},575:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(580),l=n.n(a),c=n(55),s=n.n(c),r=n(579),b=n.n(r);l.a.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});t.a=function(e){var t,n=e.chart,a=Object(i.useState)(!1),c=a[0],r=a[1],d=Object(i.useState)(void 0),I=d[0],u=d[1],m=Object(i.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],h=function(){return r(!c)};return Object(i.useEffect)((function(){l.a.render(m,n,(function(e){u(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onClick:h,className:b()(s.a.graph,s.a.pointer),dangerouslySetInnerHTML:{__html:I}}),o.a.createElement("div",{onClick:h,className:b()(s.a.overlay,s.a.pointer,s.a.graph,(t={},t[s.a.visible]=c,t))},o.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:b()(s.a.backdrop,s.a.graph),dangerouslySetInnerHTML:{__html:I}})))}},582:function(e,t,n){var i={"./locale":574,"./locale.js":574};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id=582}}]);