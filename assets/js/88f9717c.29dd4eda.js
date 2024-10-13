"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[83857],{81898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(85893),r=s(11151);const c={},l=void 0,i={id:"talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances",title:"deleteRecurringEventInstances",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances.md",sourceDirName:"talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions",slug:"/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances",permalink:"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/functions/deleteRecurringEventInstances.md",tags:[],version:"current",frontMatter:{}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/deleteEventHelpers/deleteRecurringEventInstances/",children:"helpers/event/deleteEventHelpers/deleteRecurringEventInstances"})," / deleteRecurringEventInstances"]}),"\n",(0,t.jsx)(n.h1,{id:"function-deleterecurringeventinstances",children:"Function: deleteRecurringEventInstances()"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.strong,{children:"deleteRecurringEventInstances"}),"(",(0,t.jsx)(n.code,{children:"event"}),", ",(0,t.jsx)(n.code,{children:"recurrenceRule"}),", ",(0,t.jsx)(n.code,{children:"baseRecurringEvent"}),", ",(0,t.jsx)(n.code,{children:"session"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Deletes all instances or thisAndFollowingInstances of a recurring event."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"event"}),": ",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,t.jsx)(n.code,{children:"InterfaceEvent"})})]}),"\n",(0,t.jsx)(n.p,{children:"The event instance to be deleted:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For thisAndFollowingInstances, represents the starting instance."}),"\n",(0,t.jsx)(n.li,{children:"For allInstances, should be null."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"recurrenceRule"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/RecurrenceRule/interfaces/InterfaceRecurrenceRule",children:(0,t.jsx)(n.code,{children:"InterfaceRecurrenceRule"})})]}),"\n",(0,t.jsx)(n.p,{children:"The recurrence rule associated with the instances."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"baseRecurringEvent"}),": ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,t.jsx)(n.code,{children:"InterfaceEvent"})})]}),"\n",(0,t.jsx)(n.p,{children:"The base recurring event from which instances are derived."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"session"}),": ",(0,t.jsx)(n.code,{children:"ClientSession"})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"This function performs the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Constructs a query object to fetch instances based on the delete type."}),"\n",(0,t.jsx)(n.li,{children:"Retrieves and deletes all associated documents (attendees, users, profiles, action items)."}),"\n",(0,t.jsx)(n.li,{children:"Deletes the instances themselves."}),"\n",(0,t.jsx)(n.li,{children:"Updates the recurrence rule and base recurring event as needed."}),"\n",(0,t.jsx)(n.li,{children:"Removes any dangling documents related to the recurrence rule and base recurring event."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts#L32",children:"src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts:32"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const r={},c=t.createContext(r);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);