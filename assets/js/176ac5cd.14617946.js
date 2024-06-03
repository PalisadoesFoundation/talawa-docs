"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[39836],{63616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(85893),i=n(11151);const r={},s="addEvent method",o={id:"talawa-mobile-docs/utils_event_queries/EventQueries/addEvent",title:"addEvent method",description:"String addEvent",source:"@site/docs/talawa-mobile-docs/utils_event_queries/EventQueries/addEvent.md",sourceDirName:"talawa-mobile-docs/utils_event_queries/EventQueries",slug:"/talawa-mobile-docs/utils_event_queries/EventQueries/addEvent",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/addEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_event_queries/EventQueries/addEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"EventQueries constructor",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/"},next:{title:"deleteEvent method",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/deleteEvent"}},d={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"addevent-method",children:"addEvent method"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," addEvent\n()"]}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:'String addEvent() {\n  return """\n   mutation createEvent( \\$organizationId: ID!,\n      \\$title:String!,\n      \\$description: String!,\n      \\$startTime: Time,\n      \\$endTime: Time,\n      \\$allDay: Boolean!,\n      \\$recurring: Boolean!,\n      \\$isPublic: Boolean!,\n      \\$isRegisterable: Boolean!,\n      \\$location: String,\n      \\$startDate : Date!,\n      \\$endDate : Date!,\n    ) {\n    createEvent(\n      data:{\n        organizationId: \\$organizationId,\n         title: \\$title,\n         description: \\$description,\n         isPublic: \\$isPublic,\n         isRegisterable: \\$isRegisterable,\n         recurring: \\$recurring,\n         allDay: \\$allDay,\n         startTime: \\$startTime,\n         endTime: \\$endTime,\n         startDate: \\$startDate,\n         endDate: \\$endDate,\n         location: \\$location,\n      }\n    ){\n      _id\n      title\n      description\n    }\n  }\n""";\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);