"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[81121],{43070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(85893),s=t(11151);const a={},r="loginUser method",o={id:"talawa-mobile-docs/utils_queries/Queries/loginUser",title:"loginUser method",description:"String loginUser",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/loginUser.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/loginUser",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/loginUser",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/loginUser.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"joinOrgById method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/joinOrgById"},next:{title:"logout method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/logout"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"loginuser-method",children:"loginUser method"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," loginUser\n(",(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," email, ",(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," password)"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:'String loginUser(String email, String password) {\n  return """\n      mutation {\n        login(data: {email: "$email", password: "$password"}){\n          accessToken\n          user{\n            _id\n            firstName\n            lastName\n            email\n            image\n            joinedOrganizations{\n              _id\n              name\n              image\n              description\n              isPublic\n              creator{\n                _id\n                firstName\n                lastName\n                image\n              }\n            }\n            createdOrganizations{\n              _id\n              name\n              image\n              description\n              isPublic\n              creator{\n                _id\n                firstName\n                lastName\n                image\n              }\n            }\n            membershipRequests{\n              organization{\n                _id\n                name\n                image\n                description\n                isPublic\n                creator{\n                  _id\n                  firstName\n                  lastName\n                  image\n                }\n              }\n            }\n            adminFor{\n              _id\n            }\n          }\n          refreshToken\n          androidFirebaseOptions {\n            apiKey\n            appId\n            messagingSenderId\n            projectId\n            storageBucket\n          }\n          iosFirebaseOptions {\n            apiKey\n            appId\n            messagingSenderId\n            projectId\n            storageBucket\n            iosClientId\n            iosBundleId\n          }\n        }\n      }\n  """;\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);