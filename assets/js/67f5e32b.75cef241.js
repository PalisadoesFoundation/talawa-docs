"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9057],{60726:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>g,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=a(85893),t=a(11151),l=a(67294);const r={id:"language-input",title:"LanguageInput",hide_table_of_contents:!1},c=void 0,i={id:"schema/inputs/language-input",title:"LanguageInput",description:"No description",source:"@site/docs/schema/inputs/language-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/language-input",permalink:"/docs/schema/inputs/language-input",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/inputs/language-input.mdx",tags:[],version:"current",frontMatter:{id:"language-input",title:"LanguageInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ForgotPasswordData",permalink:"/docs/schema/inputs/forgot-password-data"},next:{title:"LoginInput",permalink:"/docs/schema/inputs/login-input"}},o={},d=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:a,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[i,o]=(0,l.useState)(r);return(0,s.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>LanguageInput.<b>en_value</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"languageinputen_valuestring--",level:4},{value:'<code>LanguageInput.<b>translation_lang_code</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"languageinputtranslation_lang_codestring--",level:4},{value:'<code>LanguageInput.<b>translation_value</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"languageinputtranslation_valuestring--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input LanguageInput {\n  en_value: String!\n  translation_lang_code: String!\n  translation_value: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"languageinputen_valuestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["LanguageInput.",(0,s.jsx)("b",{children:"en_value"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"languageinputtranslation_lang_codestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["LanguageInput.",(0,s.jsx)("b",{children:"translation_lang_code"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"languageinputtranslation_valuestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["LanguageInput.",(0,s.jsx)("b",{children:"translation_value"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"../../../docs/schema/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../../../docs/schema/mutations/add-language-translation",children:(0,s.jsx)(n.code,{children:"addLanguageTranslation"})})," ",(0,s.jsx)(g,{class:"secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>r});var s=a(67294);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);