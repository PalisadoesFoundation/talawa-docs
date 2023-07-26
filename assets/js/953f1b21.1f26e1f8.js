"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[43297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=s,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||n;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const n={},o=void 0,l={unversionedId:"talawa-api-docs/modules/resolvers_DirectChatMessage_sender",id:"talawa-api-docs/modules/resolvers_DirectChatMessage_sender",title:"resolvers_DirectChatMessage_sender",description:"talawa-api / Exports / resolvers/DirectChatMessage/sender",source:"@site/docs/talawa-api-docs/modules/resolvers_DirectChatMessage_sender.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_DirectChatMessage_sender",permalink:"/docs/talawa-api-docs/modules/resolvers_DirectChatMessage_sender",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_DirectChatMessage_sender.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_DirectChatMessage_receiver",permalink:"/docs/talawa-api-docs/modules/resolvers_DirectChatMessage_receiver"},next:{title:"resolvers_DirectChat_creator",permalink:"/docs/talawa-api-docs/modules/resolvers_DirectChat_creator"}},i={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"sender",id:"sender",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,s.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/DirectChatMessage/sender"),(0,s.kt)("h1",{id:"module-resolversdirectchatmessagesender"},"Module: resolvers/DirectChatMessage/sender"),(0,s.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,s.kt)("h3",{id:"variables"},"Variables"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_DirectChatMessage_sender#sender"},"sender"))),(0,s.kt)("h2",{id:"variables-1"},"Variables"),(0,s.kt)("h3",{id:"sender"},"sender"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,s.kt)("strong",{parentName:"p"},"sender"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#directchatmessageresolvers"},(0,s.kt)("inlineCode",{parentName:"a"},"DirectChatMessageResolvers")),"[",(0,s.kt)("inlineCode",{parentName:"p"},'"sender"'),"]"),(0,s.kt)("p",null,"This resolver function will fetch and return the sender(user) of the Direct chat from the database."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,s.kt)("p",null,"An object that is the return value of the resolver for this field's parent."),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,"src/resolvers/DirectChatMessage/sender.ts:8"))}u.isMDXComponent=!0}}]);