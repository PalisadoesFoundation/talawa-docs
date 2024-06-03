"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[16150],{95575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(85893),a=n(11151);const o={},i="createDonation method",s={id:"talawa-mobile-docs/utils_queries/Queries/createDonation",title:"createDonation method",description:"String createDonation",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/createDonation.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/createDonation",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/createDonation",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/createDonation.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"Queries constructor",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/"},next:{title:"fetchJoinInOrg property",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrg"}},l={},c=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"createdonation-method",children:"createDonation method"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," createDonation\n(",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," userId, ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId, ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," nameOfOrg, ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," nameOfUser, ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," payPalId, ",(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",children:"double"})," amount)"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:"createDonation"})," creates a new donation transaction by taking the userId ,orgId ,nameOfOrg ,nameOfUser as parameters"]}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:'String createDonation(\n  String userId,\n  String orgId,\n  String nameOfOrg,\n  String nameOfUser,\n  String payPalId,\n  double amount,\n) {\n  return \'\'\'\n    mutation createDonationMutation { createDonation(\n          userId :"$userId"\n          orgId :"$orgId",\n          nameOfOrg:"$nameOfOrg",\n          nameOfUser:"$nameOfUser",\n          payPalId:"$payPalId"\n          amount :$amount\n      ){\n          _id\n          payPalId\n          userId\n          orgId\n          payPalId\n          nameOfUser\n      }\n    }\n    \'\'\';\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(67294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);