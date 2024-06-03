"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[2389],{95203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(85893),a=n(11151);const s={},r="updateEvent method",o={id:"talawa-mobile-docs/utils_event_queries/EventQueries/updateEvent",title:"updateEvent method",description:"String updateEvent",source:"@site/docs/talawa-mobile-docs/utils_event_queries/EventQueries/updateEvent.md",sourceDirName:"talawa-mobile-docs/utils_event_queries/EventQueries",slug:"/talawa-mobile-docs/utils_event_queries/EventQueries/updateEvent",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/updateEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_event_queries/EventQueries/updateEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"registrantsByEvent method",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/registrantsByEvent"},next:{title:"EventQueries class",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries-class"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"updateevent-method",children:"updateEvent method"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," updateEvent\n({dynamic eventId})"]}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:'String updateEvent({\n  eventId,\n}) {\n  return """mutation updateEvent(\n      \\$title:String!,\n      \\$description: String!,\n      \\$startTime: Time,\n      \\$endTime: Time,\n      \\$allDay: Boolean!,\n      \\$recurring: Boolean!,\n      \\$isPublic: Boolean!,\n      \\$isRegisterable: Boolean!,\n      \\$location: String,\n    ) {\n    updateEvent(\n       id: "$eventId"\n       data:{\n         title: \\$title,\n         description: \\$description,\n         isPublic: \\$isPublic,\n         isRegisterable: \\$isRegisterable,\n         recurring: \\$recurring,\n         allDay: \\$allDay,\n         startTime: \\$startTime\n         endTime: \\$endTime\n         location: \\$location\n       }\n       ){\n          _id\n          title\n          description\n        }\n    }""";\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);