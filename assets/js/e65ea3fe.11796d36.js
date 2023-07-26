"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[69550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return r?a.createElement(b,o(o({ref:t},m),{},{components:r})):a.createElement(b,o({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={},o=void 0,i={unversionedId:"talawa-api-docs/modules/resolvers_Organization_membershipRequests",id:"talawa-api-docs/modules/resolvers_Organization_membershipRequests",title:"resolvers_Organization_membershipRequests",description:"talawa-api / Exports / resolvers/Organization/membershipRequests",source:"@site/docs/talawa-api-docs/modules/resolvers_Organization_membershipRequests.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/resolvers_Organization_membershipRequests",permalink:"/docs/talawa-api-docs/modules/resolvers_Organization_membershipRequests",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/resolvers_Organization_membershipRequests.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"resolvers_Organization_members",permalink:"/docs/talawa-api-docs/modules/resolvers_Organization_members"},next:{title:"resolvers_Organization_pinnedPosts",permalink:"/docs/talawa-api-docs/modules/resolvers_Organization_pinnedPosts"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Variables",id:"variables-1",level:2},{value:"membershipRequests",id:"membershiprequests",level:3},{value:"Defined in",id:"defined-in",level:4}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / resolvers/Organization/membershipRequests"),(0,n.kt)("h1",{id:"module-resolversorganizationmembershiprequests"},"Module: resolvers/Organization/membershipRequests"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"variables"},"Variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/resolvers_Organization_membershipRequests#membershiprequests"},"membershipRequests"))),(0,n.kt)("h2",{id:"variables-1"},"Variables"),(0,n.kt)("h3",{id:"membershiprequests"},"membershipRequests"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,n.kt)("strong",{parentName:"p"},"membershipRequests"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/types_generatedGraphQLTypes#organizationresolvers"},(0,n.kt)("inlineCode",{parentName:"a"},"OrganizationResolvers")),"[",(0,n.kt)("inlineCode",{parentName:"p"},'"membershipRequests"'),"]"),(0,n.kt)("p",null,"This resolver function will fetch and return the list of Membership requests for the Organization from database."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,n.kt)("p",null,"An object that is the return value of the resolver for this field's parent."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,"src/resolvers/Organization/membershipRequests.ts:8"))}c.isMDXComponent=!0}}]);