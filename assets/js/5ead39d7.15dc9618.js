"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86352],{46339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(85893),a=t(11151);const r={},i=void 0,d={id:"talawa-api-docs/helpers/event/updateEventHelpers/updateSingleEvent/functions/updateSingleEvent",title:"updateSingleEvent",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateSingleEvent/functions/updateSingleEvent.md",sourceDirName:"talawa-api-docs/helpers/event/updateEventHelpers/updateSingleEvent/functions",slug:"/talawa-api-docs/helpers/event/updateEventHelpers/updateSingleEvent/functions/updateSingleEvent",permalink:"/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateSingleEvent/functions/updateSingleEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateSingleEvent/functions/updateSingleEvent.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,s.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/updateEventHelpers/updateSingleEvent/",children:"helpers/event/updateEventHelpers/updateSingleEvent"})," / updateSingleEvent"]}),"\n",(0,s.jsx)(n.h1,{id:"function-updatesingleevent",children:"Function: updateSingleEvent()"}),"\n",(0,s.jsxs)(n.p,{children:["> ",(0,s.jsx)(n.strong,{children:"updateSingleEvent"}),"(",(0,s.jsx)(n.code,{children:"args"}),", ",(0,s.jsx)(n.code,{children:"event"}),", ",(0,s.jsx)(n.code,{children:"session"}),"): ",(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,s.jsx)(n.code,{children:"InterfaceEvent"})}),">"]}),"\n",(0,s.jsx)(n.p,{children:"This function updates a single non-recurring event."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"args"}),": ",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationUpdateEventArgs",children:(0,s.jsx)(n.code,{children:"MutationUpdateEventArgs"})})]}),"\n",(0,s.jsx)(n.p,{children:"the arguments provided for the updateEvent mutation."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"event"}),": ",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,s.jsx)(n.code,{children:"InterfaceEvent"})})]}),"\n",(0,s.jsx)(n.p,{children:"the single event to be updated."}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"session"}),": ",(0,s.jsx)(n.code,{children:"ClientSession"})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Promise"}),"<",(0,s.jsx)(n.a,{href:"/docs/talawa-api-docs/models/Event/interfaces/InterfaceEvent",children:(0,s.jsx)(n.code,{children:"InterfaceEvent"})}),">"]}),"\n",(0,s.jsx)(n.p,{children:"The updated event."}),"\n",(0,s.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"The following steps are followed:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"If the single event is made recurring with this update:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"get the appropriate data to create the baseRecurringEvent and recurring event instances."}),"\n",(0,s.jsx)(n.li,{children:"generate the instances with createRecurringEvent function."}),"\n",(0,s.jsx)(n.li,{children:"remove the current event and its associations as a new series has been created."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"If it's still a non-recurring event:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"just perform a regular update."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/helpers/event/updateEventHelpers/updateSingleEvent.ts#L28",children:"src/helpers/event/updateEventHelpers/updateSingleEvent.ts:28"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var s=t(67294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);