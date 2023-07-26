"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[53493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),y=s,m=u["".concat(i,".").concat(y)]||u[y]||p[y]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},11912:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>y});var n=r(87462),s=r(67294),a=r(3905);const o={id:"registered-events-by-user",title:"registeredEventsByUser",hide_table_of_contents:!1},l=void 0,i={unversionedId:"schema/queries/registered-events-by-user",id:"schema/queries/registered-events-by-user",title:"registeredEventsByUser",description:"No description",source:"@site/docs/schema/queries/registered-events-by-user.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/registered-events-by-user",permalink:"/docs/schema/queries/registered-events-by-user",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/registered-events-by-user.mdx",tags:[],version:"current",frontMatter:{id:"registered-events-by-user",title:"registeredEventsByUser",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"posts",permalink:"/docs/schema/queries/posts"},next:{title:"registrantsByEvent",permalink:"/docs/schema/queries/registrants-by-event"}},d={},c=()=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(s.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>registeredEventsByUser.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registeredeventsbyuserbidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>registeredEventsByUser.<b>orderBy</b></code><Bullet /><code>EventOrderByInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-registeredeventsbyuserborderbybcodeeventorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Event</code> <Badge class="secondary" text="object"/>',id:"event-",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:l=!1}=e;const[i,d]=(0,s.useState)(l);return(0,a.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&o)},b={Bullet:c,SpecifiedBy:u,Badge:p,toc:y,Details:m},g="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"registeredEventsByUser(\n  id: ID\n  orderBy: EventOrderByInput\n): [Event]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registeredeventsbyuserbidbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"registeredEventsByUser.",(0,a.kt)("b",null,"id"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registeredeventsbyuserborderbybcodeeventorderbyinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"registeredEventsByUser.",(0,a.kt)("b",null,"orderBy"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/enums/event-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"EventOrderByInput"))," ",(0,a.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"event-"},(0,a.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}f.isMDXComponent=!0}}]);