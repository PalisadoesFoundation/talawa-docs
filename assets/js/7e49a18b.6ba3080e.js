"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"talawa-api-docs/modules/resolvers_Mutation_acceptMembershipRequest",id:"talawa-api-docs/modules/resolvers_Mutation_acceptMembershipRequest",title:"resolvers_Mutation_acceptMembershipRequest",description:"talawa-api / Exports / resolvers/Mutation/acceptMembershipRequest",source:"@site/docs/talawa-api-docs/modules/resolvers_Mutation_acceptMembershipRequest.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Mutation_acceptMembershipRequest",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_acceptMembershipRequest",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Mutation_acceptMembershipRequest.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Mutation_acceptAdmin",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_acceptAdmin"},next:{title:"resolvers_Mutation_addLanguageTranslation",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_addLanguageTranslation"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"acceptMembershipRequest",id:"acceptmembershiprequest",level:3},{value:"Defined in",id:"defined-in",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Mutation/acceptMembershipRequest"),(0,n.kt)("h1",{id:"module-resolversmutationacceptmembershiprequest"},"Module: resolvers/Mutation/acceptMembershipRequest"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Mutation_acceptMembershipRequest#acceptmembershiprequest"},"acceptMembershipRequest"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"acceptmembershiprequest"},"acceptMembershipRequest"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"acceptMembershipRequest"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#mutationresolvers"},(0,n.kt)("inlineCode",{parentName:"a"},"MutationResolvers")),"[",(0,n.kt)("inlineCode",{parentName:"p"},'"acceptMembershipRequest"'),"]"),(0,n.kt)("p",null,"This function accepts the membership request sent by a user."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"parent of current request"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"payload provided with the request"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"context of entire application"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"The following checks are done:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Whether the membership request exists or not."),(0,n.kt)("li",{parentName:"ol"},"Whether thr organization exists or not"),(0,n.kt)("li",{parentName:"ol"},"Whether the user exists"),(0,n.kt)("li",{parentName:"ol"},"whether currentUser with _id === context.userId is an admin of organization."),(0,n.kt)("li",{parentName:"ol"},"Whether user is already a member of organization.")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/resolvers/Mutation/acceptMembershipRequest.ts:23"))}d.isMDXComponent=!0}}]);