"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[48837],{70626:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>a,default:()=>b,frontMatter:()=>d,metadata:()=>l,toc:()=>j});var n=t(85893),c=t(11151),o=t(67294);const d={id:"comment",title:"Comment",hide_table_of_contents:!1},a=void 0,l={id:"schema/objects/comment",title:"Comment",description:"No description",source:"@site/docs/schema/objects/comment.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/comment",permalink:"/docs/schema/objects/comment",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/comment.mdx",tags:[],version:"current",frontMatter:{id:"comment",title:"Comment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CheckIn",permalink:"/docs/schema/objects/check-in"},next:{title:"ConnectionPageInfo",permalink:"/docs/schema/objects/connection-page-info"}},r={},i=()=>{const e={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const s={a:"a",...(0,c.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:"badge badge--"+e.class,children:e.text})})},x=({dataOpen:e,dataClose:s,children:t,startOpen:d=!1})=>{const a={details:"details",summary:"summary",...(0,c.a)()},[l,r]=(0,o.useState)(d);return(0,n.jsxs)(a.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&t]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Comment.<b>_id</b></code><Bullet></Bullet><code>ID</code> <Badge class="secondary"></Badge>',id:"comment_idid-",level:4},{value:'<code>Comment.<b>text</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"commenttextstring--",level:4},{value:'<code>Comment.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="secondary"></Badge>',id:"commentcreatedatdatetime-",level:4},{value:'<code>Comment.<b>creator</b></code><Bullet></Bullet><code>User!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"commentcreatoruser--",level:4},{value:'<code>Comment.<b>post</b></code><Bullet></Bullet><code>Post!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"commentpostpost--",level:4},{value:'<code>Comment.<b>likedBy</b></code><Bullet></Bullet><code>[User]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"commentlikedbyuser--",level:4},{value:'<code>Comment.<b>likeCount</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"commentlikecountint-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type Comment {\n  _id: ID\n  text: String!\n  createdAt: DateTime\n  creator: User!\n  post: Post!\n  likedBy: [User]\n  likeCount: Int\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"comment_idid-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Comment.",(0,n.jsx)("b",{children:"_id"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,n.jsx)(s.code,{children:"ID"})})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"commenttextstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Comment.",(0,n.jsx)("b",{children:"text"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"commentcreatedatdatetime-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Comment.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime"})})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"commentcreatoruser--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Comment.",(0,n.jsx)("b",{children:"creator"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,n.jsx)(s.code,{children:"User!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"commentpostpost--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Comment.",(0,n.jsx)("b",{children:"post"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/post",children:(0,n.jsx)(s.code,{children:"Post!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"commentlikedbyuser--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Comment.",(0,n.jsx)("b",{children:"likedBy"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,n.jsx)(s.code,{children:"[User]"})})," ",(0,n.jsx)(h,{class:"secondary",text:"list"})," ",(0,n.jsx)(h,{class:"secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"commentlikecountint-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Comment.",(0,n.jsx)("b",{children:"likeCount"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/scalars/int",children:(0,n.jsx)(s.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/create-comment",children:(0,n.jsx)(s.code,{children:"createComment"})})," ",(0,n.jsx)(h,{class:"secondary",text:"mutation"}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/like-comment",children:(0,n.jsx)(s.code,{children:"likeComment"})})," ",(0,n.jsx)(h,{class:"secondary",text:"mutation"}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-comment",children:(0,n.jsx)(s.code,{children:"removeComment"})})," ",(0,n.jsx)(h,{class:"secondary",text:"mutation"}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"../../../docs/schema/mutations/unlike-comment",children:(0,n.jsx)(s.code,{children:"unlikeComment"})})," ",(0,n.jsx)(h,{class:"secondary",text:"mutation"})]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../docs/schema/objects/post",children:(0,n.jsx)(s.code,{children:"Post"})})," ",(0,n.jsx)(h,{class:"secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>d});var n=t(67294);const c={},o=n.createContext(c);function d(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);