"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[95818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,g=p["".concat(d,".").concat(m)]||p[m]||b[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72779:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905);const i={id:"android-firebase-options",title:"AndroidFirebaseOptions",hide_table_of_contents:!1},s=void 0,d={unversionedId:"schema/objects/android-firebase-options",id:"schema/objects/android-firebase-options",title:"AndroidFirebaseOptions",description:"No description",source:"@site/docs/schema/objects/android-firebase-options.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/android-firebase-options",permalink:"/docs/schema/objects/android-firebase-options",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/android-firebase-options.mdx",tags:[],version:"current",frontMatter:{id:"android-firebase-options",title:"AndroidFirebaseOptions",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AggregateUser",permalink:"/docs/schema/objects/aggregate-user"},next:{title:"AuthData",permalink:"/docs/schema/objects/auth-data"}},l={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AndroidFirebaseOptions.<b>apiKey</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-androidfirebaseoptionsbapikeybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AndroidFirebaseOptions.<b>appId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-androidfirebaseoptionsbappidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AndroidFirebaseOptions.<b>messagingSenderId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-androidfirebaseoptionsbmessagingsenderidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AndroidFirebaseOptions.<b>projectId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-androidfirebaseoptionsbprojectidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AndroidFirebaseOptions.<b>storageBucket</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-androidfirebaseoptionsbstoragebucketbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:s=!1}=e;const[d,l]=(0,r.useState)(s);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&i)},f={Bullet:c,SpecifiedBy:p,Badge:b,toc:m,Details:g},u="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AndroidFirebaseOptions {\n  apiKey: String\n  appId: String\n  messagingSenderId: String\n  projectId: String\n  storageBucket: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-androidfirebaseoptionsbapikeybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AndroidFirebaseOptions.",(0,o.kt)("b",null,"apiKey"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-androidfirebaseoptionsbappidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AndroidFirebaseOptions.",(0,o.kt)("b",null,"appId"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-androidfirebaseoptionsbmessagingsenderidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AndroidFirebaseOptions.",(0,o.kt)("b",null,"messagingSenderId"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-androidfirebaseoptionsbprojectidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AndroidFirebaseOptions.",(0,o.kt)("b",null,"projectId"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-androidfirebaseoptionsbstoragebucketbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AndroidFirebaseOptions.",(0,o.kt)("b",null,"storageBucket"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/auth-data"},(0,o.kt)("inlineCode",{parentName:"a"},"AuthData"))," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);