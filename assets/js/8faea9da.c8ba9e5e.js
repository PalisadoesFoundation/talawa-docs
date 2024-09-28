"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[45370],{2114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(85893),a=n(11151);const i={},s=void 0,d={id:"talawa-api-docs/resolvers/Mutation/createAdvertisement/variables/createAdvertisement",title:"createAdvertisement",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createAdvertisement/variables/createAdvertisement.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createAdvertisement/variables",slug:"/talawa-api-docs/resolvers/Mutation/createAdvertisement/variables/createAdvertisement",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createAdvertisement/variables/createAdvertisement",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createAdvertisement/variables/createAdvertisement.md",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(t.strong,{children:"talawa-api"})})," \u2022 ",(0,r.jsx)(t.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createAdvertisement/",children:"resolvers/Mutation/createAdvertisement"})," / createAdvertisement"]}),"\n",(0,r.jsx)(t.h1,{id:"variable-createadvertisement",children:"Variable: createAdvertisement"}),"\n",(0,r.jsxs)(t.p,{children:["> ",(0,r.jsx)(t.code,{children:"const"})," ",(0,r.jsx)(t.strong,{children:"createAdvertisement"}),": ",(0,r.jsx)(t.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,r.jsx)(t.code,{children:"MutationResolvers"})}),"[",(0,r.jsx)(t.code,{children:'"createAdvertisement"'}),"]"]}),"\n",(0,r.jsx)(t.p,{children:"Mutation resolver function to create a new advertisement."}),"\n",(0,r.jsx)(t.p,{children:"This function performs the following actions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Verifies that the current user, identified by ",(0,r.jsx)(t.code,{children:"context.userId"}),", exists."]}),"\n",(0,r.jsxs)(t.li,{children:["Ensures that the organization specified by ",(0,r.jsx)(t.code,{children:"args.input.organizationId"})," exists."]}),"\n",(0,r.jsx)(t.li,{children:"Uploads the media file if provided, determining its type (image or video)."}),"\n",(0,r.jsx)(t.li,{children:"Creates a new advertisement with the provided details."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"param",children:"Param"}),"\n",(0,r.jsx)(t.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,r.jsx)(t.h2,{id:"param-1",children:"Param"}),"\n",(0,r.jsx)(t.p,{children:"The arguments for the mutation, including:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"input"}),": An object containing:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"organizationId"}),": The ID of the organization where the advertisement will be created."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"mediaFile"}),": The encoded media file (image or video) to be uploaded."]}),"\n",(0,r.jsx)(t.li,{children:"Other advertisement details."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"param-2",children:"Param"}),"\n",(0,r.jsx)(t.p,{children:"The context for the mutation, including:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"apiRootUrl"}),": The root URL for the API to construct the media URL."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Mutation/createAdvertisement.ts#L37",children:"src/resolvers/Mutation/createAdvertisement.ts:37"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var r=n(67294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);