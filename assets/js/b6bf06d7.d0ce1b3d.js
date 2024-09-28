"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86051],{22257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(85893),i=a(11151);const s={},r=void 0,o={id:"talawa-api-docs/resolvers/Mutation/createActionItem/variables/createActionItem",title:"createActionItem",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createActionItem/variables/createActionItem.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createActionItem/variables",slug:"/talawa-api-docs/resolvers/Mutation/createActionItem/variables/createActionItem",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createActionItem/variables/createActionItem",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createActionItem/variables/createActionItem.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(t.strong,{children:"talawa-api"})})," \u2022 ",(0,n.jsx)(t.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createActionItem/",children:"resolvers/Mutation/createActionItem"})," / createActionItem"]}),"\n",(0,n.jsx)(t.h1,{id:"variable-createactionitem",children:"Variable: createActionItem"}),"\n",(0,n.jsxs)(t.p,{children:["> ",(0,n.jsx)(t.code,{children:"const"})," ",(0,n.jsx)(t.strong,{children:"createActionItem"}),": ",(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,n.jsx)(t.code,{children:"MutationResolvers"})}),"[",(0,n.jsx)(t.code,{children:'"createActionItem"'}),"]"]}),"\n",(0,n.jsx)(t.p,{children:"Creates a new action item and assigns it to a user."}),"\n",(0,n.jsx)(t.p,{children:"This function performs several checks:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Verifies if the current user exists."}),"\n",(0,n.jsx)(t.li,{children:"Ensures that the current user has an associated app user profile."}),"\n",(0,n.jsx)(t.li,{children:"Checks if the assignee exists."}),"\n",(0,n.jsx)(t.li,{children:"Validates if the action item category exists and is not disabled."}),"\n",(0,n.jsx)(t.li,{children:"Confirms that the assignee is a member of the organization associated with the action item category."}),"\n",(0,n.jsx)(t.li,{children:"If the action item is related to an event, checks if the event exists and whether the current user is an admin of that event."}),"\n",(0,n.jsx)(t.li,{children:"Verifies if the current user is an admin of the organization or a superadmin."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"param",children:"Param"}),"\n",(0,n.jsx)(t.p,{children:"The parent object for the mutation (not used in this function)."}),"\n",(0,n.jsx)(t.h2,{id:"param-1",children:"Param"}),"\n",(0,n.jsx)(t.p,{children:"The arguments provided with the request, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"data"}),": An object containing:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"assigneeId"}),": The ID of the user to whom the action item is assigned."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"preCompletionNotes"}),": Notes to be added before the action item is completed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"dueDate"}),": The due date for the action item."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"eventId"})," (optional): The ID of the event associated with the action item."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"actionItemCategoryId"}),": The ID of the action item category."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"param-2",children:"Param"}),"\n",(0,n.jsx)(t.p,{children:"The context of the entire application, including user information and other context-specific data."}),"\n",(0,n.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Mutation/createActionItem.ts#L58",children:"src/resolvers/Mutation/createActionItem.ts:58"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(67294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);