"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[70935],{28785:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(85893),t=n(11151);const r={},s=void 0,o={id:"talawa-api-docs/resolvers/Mutation/createOrganization/variables/createOrganization",title:"createOrganization",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createOrganization/variables/createOrganization.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createOrganization/variables",slug:"/talawa-api-docs/resolvers/Mutation/createOrganization/variables/createOrganization",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createOrganization/variables/createOrganization",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createOrganization/variables/createOrganization.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createOrganization/",children:"resolvers/Mutation/createOrganization"})," / createOrganization"]}),"\n",(0,i.jsx)(a.h1,{id:"variable-createorganization",children:"Variable: createOrganization"}),"\n",(0,i.jsxs)(a.p,{children:["> ",(0,i.jsx)(a.code,{children:"const"})," ",(0,i.jsx)(a.strong,{children:"createOrganization"}),": ",(0,i.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,i.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,i.jsx)(a.code,{children:'"createOrganization"'}),"]"]}),"\n",(0,i.jsx)(a.p,{children:"Creates a new organization."}),"\n",(0,i.jsx)(a.p,{children:"This resolver performs the following steps:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Verifies the existence of the current user making the request."}),"\n",(0,i.jsx)(a.li,{children:"Checks the user's app profile to ensure they are authenticated and authorized as a super admin."}),"\n",(0,i.jsx)(a.li,{children:"Validates the provided input data, including organization name, description, and address."}),"\n",(0,i.jsx)(a.li,{children:"Uploads an optional image file associated with the organization."}),"\n",(0,i.jsx)(a.li,{children:"Creates a new organization with the provided data and image."}),"\n",(0,i.jsx)(a.li,{children:"Creates a default action item category for the new organization."}),"\n",(0,i.jsxs)(a.li,{children:["Updates the current user's document to include the new organization in their ",(0,i.jsx)(a.code,{children:"joinedOrganizations"}),", ",(0,i.jsx)(a.code,{children:"createdOrganizations"}),", and ",(0,i.jsx)(a.code,{children:"adminFor"})," lists."]}),"\n",(0,i.jsx)(a.li,{children:"Caches the newly created organization."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(a.p,{children:"The parent object, not used in this resolver."}),"\n",(0,i.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(a.p,{children:"The input arguments for the mutation, including:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"data"}),": An object containing:","\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"name"}),": The name of the organization."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"description"}),": A description of the organization."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"address"}),": An optional address object for the organization."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"file"}),": An optional encoded image file for the organization."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,i.jsx)(a.p,{children:"The context object containing user information (context.userId)."}),"\n",(0,i.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(a.p,{children:"The created organization object."}),"\n",(0,i.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(a.p,{children:"This function creates an organization, uploads an optional image, validates the input data, creates a default action item category, updates user records, and manages caching."}),"\n",(0,i.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/createOrganization.ts#L55",children:"src/resolvers/Mutation/createOrganization.ts:55"})})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>s});var i=n(67294);const t={},r=i.createContext(t);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);