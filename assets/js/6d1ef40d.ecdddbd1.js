"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[85951],{23192:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>x});var n=s(85893),a=s(11151),t=s(67294);const i={id:"minimum-value-error",title:"MinimumValueError",hide_table_of_contents:!1},l=void 0,o={id:"schema/objects/minimum-value-error",title:"MinimumValueError",description:"No description",source:"@site/docs/schema/objects/minimum-value-error.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/minimum-value-error",permalink:"/docs/schema/objects/minimum-value-error",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/minimum-value-error.mdx",tags:[],version:"current",frontMatter:{id:"minimum-value-error",title:"MinimumValueError",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MinimumLengthError",permalink:"/docs/schema/objects/minimum-length-error"},next:{title:"OrganizationCustomField",permalink:"/docs/schema/objects/organization-custom-field"}},c={},d=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const r={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:"badge badge--"+e.class,children:e.text})})},h=({dataOpen:e,dataClose:r,children:s,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,a.a)()},[o,c]=(0,t.useState)(i);return(0,n.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:r}),o&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>MinimumValueError.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"minimumvalueerrormessagestring--",level:4},{value:'<code>MinimumValueError.<b>path</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"minimumvalueerrorpathstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FieldError</code> <Badge class="secondary"></Badge>',id:"fielderror-",level:4}];function g(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type MinimumValueError implements FieldError {\n  message: String!\n  path: [String!]!\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"minimumvalueerrormessagestring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MinimumValueError.",(0,n.jsx)("b",{children:"message"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(r.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(r.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"minimumvalueerrorpathstring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MinimumValueError.",(0,n.jsx)("b",{children:"path"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(r.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(r.code,{children:"[String!]!"})})," ",(0,n.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsx)(r.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(r.h4,{id:"fielderror-",children:[(0,n.jsx)(r.a,{href:"../../../docs/schema/interfaces/field-error",children:(0,n.jsx)(r.code,{children:"FieldError"})})," ",(0,n.jsx)(u,{class:"secondary",text:"interface"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>i});var n=s(67294);const a={},t=n.createContext(a);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);