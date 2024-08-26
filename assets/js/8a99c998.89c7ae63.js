"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1869],{15849:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=r(85893),s=r(11151);const c={},a=void 0,i={id:"talawa-api-docs/helpers/event/recurringEventHelpers/getRecurringInstanceDates/functions/getRecurringInstanceDates",title:"getRecurringInstanceDates",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/helpers/event/recurringEventHelpers/getRecurringInstanceDates/functions/getRecurringInstanceDates.md",sourceDirName:"talawa-api-docs/helpers/event/recurringEventHelpers/getRecurringInstanceDates/functions",slug:"/talawa-api-docs/helpers/event/recurringEventHelpers/getRecurringInstanceDates/functions/getRecurringInstanceDates",permalink:"/docs/talawa-api-docs/helpers/event/recurringEventHelpers/getRecurringInstanceDates/functions/getRecurringInstanceDates",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/helpers/event/recurringEventHelpers/getRecurringInstanceDates/functions/getRecurringInstanceDates.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(n.a,{href:"/docs/talawa-api-docs/helpers/event/recurringEventHelpers/getRecurringInstanceDates/",children:"helpers/event/recurringEventHelpers/getRecurringInstanceDates"})," / getRecurringInstanceDates"]}),"\n",(0,t.jsx)(n.h1,{id:"function-getrecurringinstancedates",children:"Function: getRecurringInstanceDates()"}),"\n",(0,t.jsxs)(n.p,{children:["> ",(0,t.jsx)(n.strong,{children:"getRecurringInstanceDates"}),"(",(0,t.jsx)(n.code,{children:"recurrenceRuleString"}),", ",(0,t.jsx)(n.code,{children:"recurrenceStartDate"}),", ",(0,t.jsx)(n.code,{children:"recurrenceEndDate"}),", ",(0,t.jsx)(n.code,{children:"queryUptoDate"}),"): ",(0,t.jsx)(n.code,{children:"Date"}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"Generates dates of recurrence for the recurring event based on provided recurrence rules."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"recurrenceRuleString"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"The rrule string defining the recurrence rules."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"recurrenceStartDate"}),": ",(0,t.jsx)(n.code,{children:"Date"})]}),"\n",(0,t.jsx)(n.p,{children:"The starting date from which to generate instances."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"recurrenceEndDate"}),": ",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"Date"})]}),"\n",(0,t.jsx)(n.p,{children:"The end date of the event."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"queryUptoDate"}),": ",(0,t.jsx)(n.code,{children:"Date"})," = ",(0,t.jsx)(n.code,{children:"recurrenceStartDate"})]}),"\n",(0,t.jsx)(n.p,{children:"The limit date for querying recurrence rules (used for dynamic instance generation during queries)."}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Date"}),"[]"]}),"\n",(0,t.jsx)(n.p,{children:"Dates for recurring instances to be generated during this operation."}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"This function performs the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Determines the date limit for instance generation based on the recurrence frequency."}),"\n",(0,t.jsx)(n.li,{children:"Retrieves dates for recurring event instances within the specified limits."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/helpers/event/recurringEventHelpers/getRecurringInstanceDates.ts#L23",children:"src/helpers/event/recurringEventHelpers/getRecurringInstanceDates.ts:23"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(67294);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);