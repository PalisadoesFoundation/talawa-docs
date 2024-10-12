"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[92104],{60941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const r={},a="fetchUserInfo property",o={id:"talawa-mobile-docs/utils_queries/Queries/fetchUserInfo",title:"fetchUserInfo property",description:"String fetchUserInfo",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/fetchUserInfo.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/fetchUserInfo",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchUserInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/fetchUserInfo.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchOrgDetailsById method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById"},next:{title:"getPluginsList method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/getPluginsList"}},c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fetchuserinfo-property",children:"fetchUserInfo property"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchUserInfo"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"String fetchUserInfo = '''\n     query Users(\\$id: ID!){\n        users(where: { id: \\$id }) {\n          _id\n          firstName\n          lastName\n          email\n          image\n          joinedOrganizations{\n            _id\n            name\n            image\n            description\n            isPublic\n            creator{\n              _id\n              firstName\n              lastName\n              image\n            }\n\n          }\n          createdOrganizations{\n            _id\n            name\n            image\n            description\n            isPublic\n            creator{\n              _id\n              firstName\n              lastName\n              image\n            }\n          }\n          membershipRequests{\n            organization{\n              _id\n              name\n              image\n              isPublic\n              creator{\n                _id\n                firstName\n                lastName\n                image\n              }\n            }\n          }\n          adminFor{\n           _id\n          }\n        }\n      }\n  ''';\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);