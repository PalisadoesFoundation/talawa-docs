"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[39347],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),p=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},i=function(e){var r=p(e.components);return a.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=o,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||s;return t?a.createElement(m,n(n({ref:r},i),{},{components:t})):a.createElement(m,n({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,n=new Array(s);n[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<s;p++)n[p]=t[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const s={},n=void 0,l={unversionedId:"talawa-api-docs/modules/resolvers_Query_groupChats",id:"talawa-api-docs/modules/resolvers_Query_groupChats",title:"resolvers_Query_groupChats",description:"talawa-api / Exports / resolvers/Query/groupChats",source:"@site/docs/talawa-api-docs/modules/resolvers_Query_groupChats.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Query_groupChats",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_groupChats",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Query_groupChats.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Query_groupChatMessages",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_groupChatMessages"},next:{title:"resolvers_Query_groups",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_groups"}},u={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"groupChats",id:"groupchats",level:3},{value:"Defined in",id:"defined-in",level:4}],i={toc:p},c="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Query/groupChats"),(0,o.kt)("h1",{id:"module-resolversquerygroupchats"},"Module: resolvers/Query/groupChats"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"variables"},"Variables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Query_groupChats#groupchats"},"groupChats"))),(0,o.kt)("h2",{id:"variables-1"},"Variables"),(0,o.kt)("h3",{id:"groupchats"},"groupChats"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,o.kt)("strong",{parentName:"p"},"groupChats"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#queryresolvers"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,o.kt)("inlineCode",{parentName:"p"},'"groupChats"'),"]"),(0,o.kt)("p",null,"This query fetch all the group chat from the database."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"src/resolvers/Query/groupChats.ts:7"))}d.isMDXComponent=!0}}]);