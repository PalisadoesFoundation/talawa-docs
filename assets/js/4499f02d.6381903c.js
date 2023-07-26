"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[49525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=n,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},87165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"talawa-api-docs/modules/resolvers_Query_postsByOrganization",id:"talawa-api-docs/modules/resolvers_Query_postsByOrganization",title:"resolvers_Query_postsByOrganization",description:"talawa-api / Exports / resolvers/Query/postsByOrganization",source:"@site/docs/talawa-api-docs/modules/resolvers_Query_postsByOrganization.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Query_postsByOrganization",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_postsByOrganization",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Query_postsByOrganization.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Query_posts",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_posts"},next:{title:"resolvers_Query_postsByOrganizationConnection",permalink:"/docs/talawa-api-docs/modules/resolvers_Query_postsByOrganizationConnection"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"postsByOrganization",id:"postsbyorganization",level:3},{value:"Defined in",id:"defined-in",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Query/postsByOrganization"),(0,n.kt)("h1",{id:"module-resolversquerypostsbyorganization"},"Module: resolvers/Query/postsByOrganization"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Query_postsByOrganization#postsbyorganization"},"postsByOrganization"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"postsbyorganization"},"postsByOrganization"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"postsByOrganization"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#queryresolvers"},(0,n.kt)("inlineCode",{parentName:"a"},"QueryResolvers")),"[",(0,n.kt)("inlineCode",{parentName:"p"},'"postsByOrganization"'),"]"),(0,n.kt)("p",null,"This query will fetch the list of all post within an Organization from database."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"An object that contains ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," of the organization, ",(0,n.kt)("inlineCode",{parentName:"p"},"orderBy")," fields."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"The query function uses ",(0,n.kt)("inlineCode",{parentName:"p"},"getSort()")," function to sort the data in specified order."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/resolvers/Query/postsByOrganization.ts:13"))}d.isMDXComponent=!0}}]);