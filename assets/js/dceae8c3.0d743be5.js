"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[99021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39554:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905);const l={id:"events",title:"events",hide_table_of_contents:!1},s=void 0,c={unversionedId:"schema/queries/events",id:"schema/queries/events",title:"events",description:"No description",source:"@site/docs/schema/queries/events.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/events",permalink:"/docs/schema/queries/events",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/events.mdx",tags:[],version:"current",frontMatter:{id:"events",title:"events",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"eventsByOrganization",permalink:"/docs/schema/queries/events-by-organization"},next:{title:"getDonationById",permalink:"/docs/schema/queries/get-donation-by-id"}},i={},d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>events.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-eventsbidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>events.<b>orderBy</b></code><Bullet /><code>EventOrderByInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-eventsborderbybcodeeventorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Event</code> <Badge class="secondary" text="object"/>',id:"event-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:s=!1}=e;const[c,i]=(0,a.useState)(s);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:y},v="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"events(\n  id: ID\n  orderBy: EventOrderByInput\n): [Event]\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-eventsbidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"events.",(0,o.kt)("b",null,"id"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-eventsborderbybcodeeventorderbyinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"events.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/enums/event-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"EventOrderByInput"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"event-"},(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);