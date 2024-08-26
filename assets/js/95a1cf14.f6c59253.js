"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[94271],{3621:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=n(85893),s=n(11151);const i={},l=void 0,r={id:"talawa-api-docs/resolvers/Mutation/addLanguageTranslation/variables/addLanguageTranslation",title:"addLanguageTranslation",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/addLanguageTranslation/variables/addLanguageTranslation.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/addLanguageTranslation/variables",slug:"/talawa-api-docs/resolvers/Mutation/addLanguageTranslation/variables/addLanguageTranslation",permalink:"/docs/talawa-api-docs/resolvers/Mutation/addLanguageTranslation/variables/addLanguageTranslation",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/addLanguageTranslation/variables/addLanguageTranslation.md",tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"See",id:"see",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:(0,t.jsx)(e.strong,{children:"talawa-api"})})," \u2022 ",(0,t.jsx)(e.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,t.jsx)(e.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/addLanguageTranslation/",children:"resolvers/Mutation/addLanguageTranslation"})," / addLanguageTranslation"]}),"\n",(0,t.jsx)(e.h1,{id:"variable-addlanguagetranslation",children:"Variable: addLanguageTranslation"}),"\n",(0,t.jsxs)(e.p,{children:["> ",(0,t.jsx)(e.code,{children:"const"})," ",(0,t.jsx)(e.strong,{children:"addLanguageTranslation"}),": ",(0,t.jsx)(e.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,t.jsx)(e.code,{children:"MutationResolvers"})}),"[",(0,t.jsx)(e.code,{children:'"addLanguageTranslation"'}),"]"]}),"\n",(0,t.jsx)(e.p,{children:"Mutation resolver function to add a translation for a language."}),"\n",(0,t.jsx)(e.p,{children:"This function performs the following actions:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Checks if the language with the provided English value exists in the database."}),"\n",(0,t.jsx)(e.li,{children:"If the language exists, checks if the translation for the specified language code already exists."}),"\n",(0,t.jsx)(e.li,{children:"If the translation already exists, throws a conflict error."}),"\n",(0,t.jsx)(e.li,{children:"If the translation does not exist, updates the language with the new translation."}),"\n",(0,t.jsx)(e.li,{children:"If the language does not exist, creates a new language entry with the provided translation."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"param",children:"Param"}),"\n",(0,t.jsx)(e.p,{children:"The parent object for the mutation. Typically, this is not used in this resolver."}),"\n",(0,t.jsx)(e.h2,{id:"param-1",children:"Param"}),"\n",(0,t.jsx)(e.p,{children:"The arguments for the mutation, including:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"data.en_value"}),": The English value of the language to which the translation is being added."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"data.translation_lang_code"}),": The language code for the translation being added."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"data.translation_value"}),": The translation value to be added."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"see",children:"See"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Language - The Language model used to interact with the languages collection in the database."}),"\n",(0,t.jsx)(e.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(e.p,{children:["The function uses the ",(0,t.jsx)(e.code,{children:"findOne"})," method to locate an existing language entry by its English value.\nIf the language exists, it checks the existing translations to prevent duplicate entries.\nIf the language does not exist, a nsnew entry is created with the provided tralation."]}),"\n",(0,t.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Mutation/addLanguageTranslation.ts#L33",children:"src/resolvers/Mutation/addLanguageTranslation.ts:33"})})]})}function h(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(c,{...a})}):c(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>r,a:()=>l});var t=n(67294);const s={},i=t.createContext(s);function l(a){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function r(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:l(a.components),t.createElement(i.Provider,{value:e},a.children)}}}]);