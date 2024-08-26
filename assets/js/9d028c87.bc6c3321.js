"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[60252],{86824:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var i=n(85893),d=n(11151);const s={},r=void 0,t={id:"talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign",title:"addPledgeToFundraisingCampaign",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables",slug:"/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign",permalink:"/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/variables/addPledgeToFundraisingCampaign.md",tags:[],version:"current",frontMatter:{}},o={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.a)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(e.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(e.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/addPledgeToFundraisingCampaign/",children:"resolvers/Mutation/addPledgeToFundraisingCampaign"})," / addPledgeToFundraisingCampaign"]}),"\n",(0,i.jsx)(e.h1,{id:"variable-addpledgetofundraisingcampaign",children:"Variable: addPledgeToFundraisingCampaign"}),"\n",(0,i.jsxs)(e.p,{children:["> ",(0,i.jsx)(e.code,{children:"const"})," ",(0,i.jsx)(e.strong,{children:"addPledgeToFundraisingCampaign"}),": ",(0,i.jsx)(e.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,i.jsx)(e.code,{children:"MutationResolvers"})}),"[",(0,i.jsx)(e.code,{children:'"addPledgeToFundraisingCampaign"'}),"]"]}),"\n",(0,i.jsx)(e.p,{children:"Mutation resolver to add a pledge to a fundraising campaign."}),"\n",(0,i.jsx)(e.p,{children:"This function adds a specified pledge to a fundraising campaign. It performs several checks:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Verifies that the current user exists."}),"\n",(0,i.jsx)(e.li,{children:"Confirms that the pledge exists."}),"\n",(0,i.jsx)(e.li,{children:"Checks that the campaign exists."}),"\n",(0,i.jsx)(e.li,{children:"Ensures the user has made the pledge."}),"\n",(0,i.jsx)(e.li,{children:"Verifies that the campaign is not already associated with the pledge."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"If any of these conditions are not met, appropriate errors are thrown."}),"\n",(0,i.jsx)(e.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(e.p,{children:"The parent object for the mutation (not used in this function)."}),"\n",(0,i.jsx)(e.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(e.p,{children:"The arguments provided with the request, including:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"pledgeId"}),": The ID of the pledge to be added."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"campaignId"}),": The ID of the campaign to which the pledge will be added."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"param-2",children:"Param"}),"\n",(0,i.jsx)(e.p,{children:"The context of the entire application, containing user information and other context-specific data."}),"\n",(0,i.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts#L41",children:"src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts:41"})})]})}function p(a={}){const{wrapper:e}={...(0,d.a)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(c,{...a})}):c(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>t,a:()=>r});var i=n(67294);const d={},s=i.createContext(d);function r(a){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function t(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(d):a.components||d:r(a.components),i.createElement(s.Provider,{value:e},a.children)}}}]);