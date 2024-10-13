"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[79065],{73247:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=a(85893),r=a(11151);const s={},t=void 0,d={id:"talawa-api-docs/resolvers/Mutation/createAdmin/variables/createAdmin",title:"createAdmin",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createAdmin/variables/createAdmin.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createAdmin/variables",slug:"/talawa-api-docs/resolvers/Mutation/createAdmin/variables/createAdmin",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createAdmin/variables/createAdmin",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createAdmin/variables/createAdmin.md",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createAdmin/",children:"resolvers/Mutation/createAdmin"})," / createAdmin"]}),"\n",(0,i.jsx)(n.h1,{id:"variable-createadmin",children:"Variable: createAdmin"}),"\n",(0,i.jsxs)(n.p,{children:["> ",(0,i.jsx)(n.code,{children:"const"})," ",(0,i.jsx)(n.strong,{children:"createAdmin"}),": ",(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,i.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,i.jsx)(n.code,{children:'"createAdmin"'}),"]"]}),"\n",(0,i.jsx)(n.p,{children:"Creates an admin for an organization by adding the specified user to the organization's admin list."}),"\n",(0,i.jsx)(n.p,{children:"This function performs several checks:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Verifies if the specified organization exists."}),"\n",(0,i.jsx)(n.li,{children:"Ensures the current user is found and has an associated app user profile."}),"\n",(0,i.jsx)(n.li,{children:"Checks if the current user is the creator of the organization."}),"\n",(0,i.jsx)(n.li,{children:"Checks if the specified user exists and is a member of the organization."}),"\n",(0,i.jsx)(n.li,{children:"Ensures the specified user is not already an admin of the organization."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(n.p,{children:"The parent object for the mutation (not used in this function)."}),"\n",(0,i.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(n.p,{children:"The arguments provided with the request, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"}),": An object containing:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"organizationId"}),": The ID of the organization to which the user will be added as an admin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"userId"}),": The ID of the user to be made an admin."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,i.jsx)(n.p,{children:"The context of the entire application, including user information and other context-specific data."}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"An object containing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"user"}),": The updated app user profile of the user being added as an admin."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"userErrors"}),": An array of error objects if any errors occurred, otherwise an empty array."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(n.p,{children:"The function handles the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Caches and retrieves the organization data."}),"\n",(0,i.jsx)(n.li,{children:"Verifies the existence and profile of the current user."}),"\n",(0,i.jsx)(n.li,{children:"Ensures the user to be added is a member of the organization and is not already an admin."}),"\n",(0,i.jsx)(n.li,{children:"Updates the organization's admin list and the app user profile of the newly added admin."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/createAdmin.ts#L47",children:"src/resolvers/Mutation/createAdmin.ts:47"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>t});var i=a(67294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);