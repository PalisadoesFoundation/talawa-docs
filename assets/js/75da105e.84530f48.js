"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[24197],{61557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var a=i(85893),r=i(11151);const t={},o=void 0,s={id:"talawa-api-docs/resolvers/Mutation/adminRemoveGroup/variables/adminRemoveGroup",title:"adminRemoveGroup",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/adminRemoveGroup/variables/adminRemoveGroup.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/adminRemoveGroup/variables",slug:"/talawa-api-docs/resolvers/Mutation/adminRemoveGroup/variables/adminRemoveGroup",permalink:"/docs/talawa-api-docs/resolvers/Mutation/adminRemoveGroup/variables/adminRemoveGroup",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/adminRemoveGroup/variables/adminRemoveGroup.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,a.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,a.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/adminRemoveGroup/",children:"resolvers/Mutation/adminRemoveGroup"})," / adminRemoveGroup"]}),"\n",(0,a.jsx)(n.h1,{id:"variable-adminremovegroup",children:"Variable: adminRemoveGroup"}),"\n",(0,a.jsxs)(n.p,{children:["> ",(0,a.jsx)(n.code,{children:"const"})," ",(0,a.jsx)(n.strong,{children:"adminRemoveGroup"}),": ",(0,a.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,a.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,a.jsx)(n.code,{children:'"adminRemoveGroup"'}),"]"]}),"\n",(0,a.jsx)(n.p,{children:"Mutation resolver function to remove a group chat."}),"\n",(0,a.jsx)(n.p,{children:"This function performs the following actions:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Checks if the group chat specified by ",(0,a.jsx)(n.code,{children:"args.groupId"})," exists."]}),"\n",(0,a.jsx)(n.li,{children:"Verifies that the organization associated with the group chat exists."}),"\n",(0,a.jsxs)(n.li,{children:["Ensures that the current user (identified by ",(0,a.jsx)(n.code,{children:"context.userId"}),") exists."]}),"\n",(0,a.jsx)(n.li,{children:"Checks that the current user is authorized as an admin of the organization."}),"\n",(0,a.jsx)(n.li,{children:"Deletes the group chat from the database."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,a.jsx)(n.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,a.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,a.jsx)(n.p,{children:"The arguments for the mutation, including:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"groupId"}),": The ID of the group chat to be removed."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,a.jsx)(n.p,{children:"The context for the mutation, including:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"A promise that resolves to the deleted group chat document."}),"\n",(0,a.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"GroupChat - The GroupChat model used to interact with the group chats collection in the database."}),"\n",(0,a.jsx)(n.li,{children:"Organization - The Organization model used to interact with the organizations collection in the database."}),"\n",(0,a.jsx)(n.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,a.jsx)(n.li,{children:"AppUserProfile - The AppUserProfile model used to retrieve the user's profile information."}),"\n",(0,a.jsx)(n.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,a.jsx)(n.li,{children:"adminCheck - Utility function to check if the current user is an admin of the organization."}),"\n",(0,a.jsx)(n.li,{children:"findOrganizationsInCache - Service function to retrieve organizations from cache."}),"\n",(0,a.jsx)(n.li,{children:"cacheOrganizations - Service function to cache updated organization data."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Mutation/adminRemoveGroup.ts#L41",children:"src/resolvers/Mutation/adminRemoveGroup.ts:41"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var a=i(67294);const r={},t=a.createContext(r);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);