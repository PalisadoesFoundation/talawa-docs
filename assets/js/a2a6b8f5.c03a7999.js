"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[38595],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(r),c=n,v=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27081:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"talawa-api-docs/modules/resolvers_Mutation_removeAdmin",id:"talawa-api-docs/modules/resolvers_Mutation_removeAdmin",title:"resolvers_Mutation_removeAdmin",description:"talawa-api / Exports / resolvers/Mutation/removeAdmin",source:"@site/docs/talawa-api-docs/modules/resolvers_Mutation_removeAdmin.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Mutation_removeAdmin",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_removeAdmin",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Mutation_removeAdmin.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Mutation_rejectMembershipRequest",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_rejectMembershipRequest"},next:{title:"resolvers_Mutation_removeComment",permalink:"/docs/talawa-api-docs/modules/resolvers_Mutation_removeComment"}},s={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"removeAdmin",id:"removeadmin",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Mutation/removeAdmin"),(0,n.kt)("h1",{id:"module-resolversmutationremoveadmin"},"Module: resolvers/Mutation/removeAdmin"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Mutation_removeAdmin#removeadmin"},"removeAdmin"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"removeadmin"},"removeAdmin"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"removeAdmin"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#mutationresolvers"},(0,n.kt)("inlineCode",{parentName:"a"},"MutationResolvers")),"[",(0,n.kt)("inlineCode",{parentName:"p"},'"removeAdmin"'),"]"),(0,n.kt)("p",null,"This function enables to remove an admin."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"parent of current request"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"payload provided with the request"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"context of entire application"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"The following checks are done:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the user exists"),(0,n.kt)("li",{parentName:"ol"},"If the organization exists."),(0,n.kt)("li",{parentName:"ol"},"If the user to be removed is an admin."),(0,n.kt)("li",{parentName:"ol"},"If the user removing the admin is the creator of the organization")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/resolvers/Mutation/removeAdmin.ts:22"))}u.isMDXComponent=!0}}]);