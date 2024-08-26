"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[62477],{64837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(85893),l=t(11151);const r={},i=void 0,d={id:"talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent",title:"deleteSingleEvent",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent.md",sourceDirName:"talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions",slug:"/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent",permalink:"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/functions/deleteSingleEvent.md",tags:[],version:"current",frontMatter:{}},c={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,s.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteSingleEvent/",children:"helpers/event/deleteEventHelpers/deleteSingleEvent"})," / deleteSingleEvent"]}),"\n",(0,s.jsx)(n.h1,{id:"function-deletesingleevent",children:"Function: deleteSingleEvent()"}),"\n",(0,s.jsxs)(n.p,{children:["> ",(0,s.jsx)(n.strong,{children:"deleteSingleEvent"}),"(",(0,s.jsx)(n.code,{children:"eventId"}),", ",(0,s.jsx)(n.code,{children:"session"}),", ",(0,s.jsx)(n.code,{children:"recurrenceRule"}),"?, ",(0,s.jsx)(n.code,{children:"baseRecurringEvent"}),"?): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.p,{children:"Deletes a single event."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"eventId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"The ID of the event to be deleted."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"session"}),": ",(0,s.jsx)(n.code,{children:"ClientSession"})]}),"\n",(0,s.jsx)(n.p,{children:"The MongoDB client session for transactional operations."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"recurrenceRule?"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Optional ID of the recurrence rule associated with the event (for recurring events)."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"baseRecurringEvent?"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"Optional ID of the base recurring event (for recurring events)."}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"This function performs the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Removes all associations (attendees, users, profiles, action items) related to the event."}),"\n",(0,s.jsx)(n.li,{children:"Deletes the event document itself."}),"\n",(0,s.jsx)(n.li,{children:"If provided, removes any dangling documents related to the recurrence rule and base recurring event."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts#L25",children:"src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts:25"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var s=t(67294);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);