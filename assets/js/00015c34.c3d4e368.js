"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[23982],{67499:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var d=n(85893),r=n(11151);const i={},s=void 0,o={id:"talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware",title:"createLoggingMiddleware",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware.md",sourceDirName:"talawa-api-docs/libraries/dbLogger/functions",slug:"/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware",permalink:"/docs/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/libraries/dbLogger/functions/createLoggingMiddleware.md",tags:[],version:"current",frontMatter:{}},a={},l=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function t(e){const c={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.p,{children:[(0,d.jsx)(c.a,{href:"/docs/talawa-api-docs/",children:(0,d.jsx)(c.strong,{children:"talawa-api"})})," \u2022 ",(0,d.jsx)(c.strong,{children:"Docs"})]}),"\n",(0,d.jsx)(c.hr,{}),"\n",(0,d.jsxs)(c.p,{children:[(0,d.jsx)(c.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,d.jsx)(c.a,{href:"/docs/talawa-api-docs/libraries/dbLogger/",children:"libraries/dbLogger"})," / createLoggingMiddleware"]}),"\n",(0,d.jsx)(c.h1,{id:"function-createloggingmiddleware",children:"Function: createLoggingMiddleware()"}),"\n",(0,d.jsxs)(c.p,{children:["> ",(0,d.jsx)(c.strong,{children:"createLoggingMiddleware"}),"<",(0,d.jsx)(c.code,{children:"T"}),">(",(0,d.jsx)(c.code,{children:"schema"}),", ",(0,d.jsx)(c.code,{children:"modelName"}),"): ",(0,d.jsx)(c.code,{children:"void"})]}),"\n",(0,d.jsx)(c.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,d.jsxs)(c.p,{children:["\u2022 ",(0,d.jsx)(c.strong,{children:"T"})," ",(0,d.jsx)(c.em,{children:"extends"})," ",(0,d.jsx)(c.code,{children:"Document"}),"<",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"any"}),">"]}),"\n",(0,d.jsx)(c.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(c.p,{children:["\u2022 ",(0,d.jsx)(c.strong,{children:"schema"}),": ",(0,d.jsx)(c.code,{children:"Schema"}),"<",(0,d.jsx)(c.code,{children:"T"}),", ",(0,d.jsx)(c.code,{children:"Model"}),"<",(0,d.jsx)(c.code,{children:"T"}),", ",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"IfAny"}),"<",(0,d.jsx)(c.code,{children:"T"}),", ",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"Document"}),"<",(0,d.jsx)(c.code,{children:"unknown"}),", ",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"T"}),"> & ",(0,d.jsx)(c.code,{children:"Require_id"}),"<",(0,d.jsx)(c.code,{children:"T"}),">>, ",(0,d.jsx)(c.code,{children:"any"}),">, ",(0,d.jsx)(c.code,{children:"object"}),", ",(0,d.jsx)(c.code,{children:"object"}),", ",(0,d.jsx)(c.code,{children:"object"}),", ",(0,d.jsx)(c.code,{children:"object"}),", ",(0,d.jsx)(c.code,{children:"DefaultSchemaOptions"}),", ",(0,d.jsx)(c.code,{children:"ObtainDocumentType"}),"<",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"T"}),", ",(0,d.jsx)(c.code,{children:"ResolveSchemaOptions"}),"<",(0,d.jsx)(c.code,{children:"DefaultSchemaOptions"}),">>, ",(0,d.jsx)(c.code,{children:"IfAny"}),"<",(0,d.jsx)(c.code,{children:"FlatRecord"}),"<",(0,d.jsx)(c.code,{children:"ObtainDocumentType"}),"<",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"T"}),", ",(0,d.jsx)(c.code,{children:"ResolveSchemaOptions"}),"<",(0,d.jsx)(c.code,{children:"DefaultSchemaOptions"}),">>>, ",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"Document"}),"<",(0,d.jsx)(c.code,{children:"unknown"}),", ",(0,d.jsx)(c.code,{children:"object"}),", ",(0,d.jsx)(c.code,{children:"FlatRecord"}),"<",(0,d.jsx)(c.code,{children:"ObtainDocumentType"}),"<",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"T"}),", ",(0,d.jsx)(c.code,{children:"ResolveSchemaOptions"}),"<",(0,d.jsx)(c.code,{children:"DefaultSchemaOptions"}),">>>> & ",(0,d.jsx)(c.code,{children:"Require_id"}),"<",(0,d.jsx)(c.code,{children:"FlatRecord"}),"<",(0,d.jsx)(c.code,{children:"ObtainDocumentType"}),"<",(0,d.jsx)(c.code,{children:"any"}),", ",(0,d.jsx)(c.code,{children:"T"}),", ",(0,d.jsx)(c.code,{children:"ResolveSchemaOptions"}),"<",(0,d.jsx)(c.code,{children:"DefaultSchemaOptions"}),">>>>>>"]}),"\n",(0,d.jsxs)(c.p,{children:["\u2022 ",(0,d.jsx)(c.strong,{children:"modelName"}),": ",(0,d.jsx)(c.code,{children:"string"})]}),"\n",(0,d.jsx)(c.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(c.p,{children:(0,d.jsx)(c.code,{children:"void"})}),"\n",(0,d.jsx)(c.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(c.p,{children:(0,d.jsx)(c.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/libraries/dbLogger.ts#L40",children:"src/libraries/dbLogger.ts:40"})})]})}function h(e={}){const{wrapper:c}={...(0,r.a)(),...e.components};return c?(0,d.jsx)(c,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>o,a:()=>s});var d=n(67294);const r={},i=d.createContext(r);function s(e){const c=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:c},e.children)}}}]);