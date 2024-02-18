"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[69640],{88333:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=s(85893),t=s(11151),c=s(67294);const a={id:"post-connection",title:"PostConnection",hide_table_of_contents:!1},d=void 0,i={id:"schema/objects/post-connection",title:"PostConnection",description:"A connection to a list of items.",source:"@site/docs/schema/objects/post-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/post-connection",permalink:"/docs/schema/objects/post-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/post-connection.mdx",tags:[],version:"current",frontMatter:{id:"post-connection",title:"PostConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Plugin",permalink:"/docs/schema/objects/plugin"},next:{title:"Post",permalink:"/docs/schema/objects/post"}},l={},r=()=>{const e={span:"span",...(0,t.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,t.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,t.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>PostConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postconnectionpageinfopageinfo--",level:4},{value:'<code>PostConnection.<b>edges</b></code><Bullet></Bullet><code>[Post]!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postconnectionedgespost--",level:4},{value:'<code>PostConnection.<b>aggregate</b></code><Bullet></Bullet><code>AggregatePost!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postconnectionaggregateaggregatepost--",level:4},{value:"Returned by",id:"returned-by",level:3}],u=({dataOpen:e,dataClose:n,children:s,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,t.a)()},[i,l]=(0,c.useState)(a);return(0,o.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"A connection to a list of items."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type PostConnection {\n  pageInfo: PageInfo!\n  edges: [Post]!\n  aggregate: AggregatePost!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"postconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PostConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Information to aid in pagination."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"postconnectionedgespost--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PostConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/objects/post",children:(0,o.jsx)(n.code,{children:"[Post]!"})})," ",(0,o.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"A list of edges."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"postconnectionaggregateaggregatepost--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["PostConnection.",(0,o.jsx)("b",{children:"aggregate"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"../../../docs/schema/objects/aggregate-post",children:(0,o.jsx)(n.code,{children:"AggregatePost!"})})," ",(0,o.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"../../../docs/schema/queries/posts-by-organization-connection",children:(0,o.jsx)(n.code,{children:"postsByOrganizationConnection"})})," ",(0,o.jsx)(h,{class:"secondary",text:"query"})]})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>a});var o=s(67294);const t={},c=o.createContext(t);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);