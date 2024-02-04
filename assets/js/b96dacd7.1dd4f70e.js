"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[26657],{72219:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var s=n(85893),t=n(11151),l=n(67294);const c={id:"language",title:"Language",hide_table_of_contents:!1},d=void 0,r={id:"schema/objects/language",title:"Language",description:"No description",source:"@site/docs/schema/objects/language.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/language",permalink:"/docs/schema/objects/language",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/language.mdx",tags:[],version:"current",frontMatter:{id:"language",title:"Language",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LanguageModel",permalink:"/docs/schema/objects/language-model"},next:{title:"MaximumLengthError",permalink:"/docs/schema/objects/maximum-length-error"}},o={},i=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:"badge badge--"+e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Language.<b>_id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"language_idid--",level:4},{value:'<code>Language.<b>en</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"languageenstring--",level:4},{value:'<code>Language.<b>translation</b></code><Bullet></Bullet><code>[LanguageModel]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"languagetranslationlanguagemodel--",level:4},{value:'<code>Language.<b>createdAt</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"languagecreatedatstring--",level:4},{value:"Returned by",id:"returned-by",level:3}],x=({dataOpen:e,dataClose:a,children:n,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,t.a)()},[r,o]=(0,l.useState)(c);return(0,s.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&n]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type Language {\n  _id: ID!\n  en: String!\n  translation: [LanguageModel]\n  createdAt: String!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"language_idid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Language.",(0,s.jsx)("b",{children:"_id"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"../../../docs/schema/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"languageenstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Language.",(0,s.jsx)("b",{children:"en"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"../../../docs/schema/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"languagetranslationlanguagemodel--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Language.",(0,s.jsx)("b",{children:"translation"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"../../../docs/schema/objects/language-model",children:(0,s.jsx)(a.code,{children:"[LanguageModel]"})})," ",(0,s.jsx)(u,{class:"secondary",text:"list"})," ",(0,s.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"languagecreatedatstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Language.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"../../../docs/schema/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"../../../docs/schema/mutations/add-language-translation",children:(0,s.jsx)(a.code,{children:"addLanguageTranslation"})})," ",(0,s.jsx)(u,{class:"secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>d,a:()=>c});var s=n(67294);const t={},l=s.createContext(t);function c(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);