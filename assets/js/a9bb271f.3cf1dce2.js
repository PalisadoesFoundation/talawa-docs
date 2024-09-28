"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[23931],{55423:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(85893),t=s(11151);const i={},n=void 0,l={id:"talawa-api-docs/resolvers/Mutation/createUserFamily/variables/createUserFamily",title:"createUserFamily",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createUserFamily/variables/createUserFamily.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createUserFamily/variables",slug:"/talawa-api-docs/resolvers/Mutation/createUserFamily/variables/createUserFamily",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createUserFamily/variables/createUserFamily",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createUserFamily/variables/createUserFamily.md",tags:[],version:"current",frontMatter:{}},c={},o=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,r.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createUserFamily/",children:"resolvers/Mutation/createUserFamily"})," / createUserFamily"]}),"\n",(0,r.jsx)(a.h1,{id:"variable-createuserfamily",children:"Variable: createUserFamily"}),"\n",(0,r.jsxs)(a.p,{children:["> ",(0,r.jsx)(a.code,{children:"const"})," ",(0,r.jsx)(a.strong,{children:"createUserFamily"}),": ",(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,r.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,r.jsx)(a.code,{children:'"createUserFamily"'}),"]"]}),"\n",(0,r.jsx)(a.p,{children:"Creates a new user family and associates users with it."}),"\n",(0,r.jsx)(a.p,{children:"This function performs the following actions:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Verifies the existence of the current user and retrieves their details and application profile."}),"\n",(0,r.jsx)(a.li,{children:"Checks if the current user is a super admin."}),"\n",(0,r.jsx)(a.li,{children:"Validates the user family name to ensure it does not exceed 256 characters."}),"\n",(0,r.jsx)(a.li,{children:"Ensures that the user family has at least two members."}),"\n",(0,r.jsx)(a.li,{children:"Creates the user family and associates it with the provided users."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,r.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The arguments for the mutation, including:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.title"}),": The title of the user family (must be a string with a maximum length of 256 characters)."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data.userIds"}),": An array of user IDs to be included in the user family (must contain at least 2 members)."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The context for the mutation, including:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"userId"}),": The ID of the current user creating the user family."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"see",children:"See"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"User - The User model used to interact with user data in the database."}),"\n",(0,r.jsx)(a.li,{children:"AppUserProfile - The AppUserProfile model used to interact with user profile data in the database."}),"\n",(0,r.jsx)(a.li,{children:"UserFamily - The UserFamily model used to interact with user family data in the database."}),"\n",(0,r.jsx)(a.li,{children:"superAdminCheck - A utility function to check if the user is a super admin."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Mutation/createUserFamily.ts#L45",children:"src/resolvers/Mutation/createUserFamily.ts:45"})})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>l,a:()=>n});var r=s(67294);const t={},i=r.createContext(t);function n(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);