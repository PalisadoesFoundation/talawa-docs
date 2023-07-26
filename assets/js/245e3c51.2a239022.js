"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[31161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72395:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=n(87462),r=n(67294),i=n(3905);const a={id:"users-connection-input",title:"UsersConnectionInput",hide_table_of_contents:!1},s=void 0,c={unversionedId:"schema/inputs/users-connection-input",id:"schema/inputs/users-connection-input",title:"UsersConnectionInput",description:"No description",source:"@site/docs/schema/inputs/users-connection-input.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/users-connection-input",permalink:"/docs/schema/inputs/users-connection-input",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/inputs/users-connection-input.mdx",tags:[],version:"current",frontMatter:{id:"users-connection-input",title:"UsersConnectionInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserWhereInput",permalink:"/docs/schema/inputs/user-where-input"},next:{title:"Interfaces",permalink:"/docs/category/interfaces"}},l={},u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UsersConnectionInput.<b>cursor</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usersconnectioninputbcursorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UsersConnectionInput.<b>direction</b></code><Bullet /><code>PaginationDirection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-usersconnectioninputbdirectionbcodepaginationdirection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UsersConnectionInput.<b>limit</b></code><Bullet /><code>PositiveInt!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usersconnectioninputblimitbcodepositiveint--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:s=!1}=e;const[c,l]=(0,r.useState)(s);return(0,i.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&a)},y={Bullet:u,SpecifiedBy:d,Badge:p,toc:m,Details:f},g="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input UsersConnectionInput {\n  cursor: String\n  direction: PaginationDirection!\n  limit: PositiveInt!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-usersconnectioninputbcursorbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UsersConnectionInput.",(0,i.kt)("b",null,"cursor"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-usersconnectioninputbdirectionbcodepaginationdirection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UsersConnectionInput.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"../../../docs/schema/enums/pagination-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginationDirection!"))," ",(0,i.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-usersconnectioninputblimitbcodepositiveint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UsersConnectionInput.",(0,i.kt)("b",null,"limit"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/positive-int"},(0,i.kt)("inlineCode",{parentName:"a"},"PositiveInt!"))," ",(0,i.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);