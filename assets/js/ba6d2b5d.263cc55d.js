"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9239],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={id:"expectations",title:"Expectations"},i=void 0,l={unversionedId:"talawa-api/expectations",id:"talawa-api/expectations",title:"Expectations",description:"API Primary Expectations",source:"@site/docs/talawa-api/expectations.md",sourceDirName:"talawa-api",slug:"/talawa-api/expectations",permalink:"/docs/talawa-api/expectations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/talawa-api/expectations.md",tags:[],version:"current",frontMatter:{id:"expectations",title:"Expectations"},sidebar:"someSidebar",previous:{title:"Functionality",permalink:"/docs/talawa-api/functionality"},next:{title:"Overview",permalink:"/docs/talawa-admin/talawa-admin-introduction"}},c={},p=[{value:"API Primary Expectations",id:"api-primary-expectations",level:2},{value:"Better TypeScript Workflow",id:"better-typescript-workflow",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"api-primary-expectations"},"API Primary Expectations"),(0,n.kt)("p",null,"The API is expected to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Centralize all functionality, meaning all applications must see the api as the source of truth."),(0,n.kt)("li",{parentName:"ol"},"Allow a secure connection to both frontend interfaces ie: Admin console and Mobile application using industry standard API authorization."),(0,n.kt)("li",{parentName:"ol"},"Allow support for multiple file systems via centralized configuration eg: server storage, AWS s3 etc.."),(0,n.kt)("li",{parentName:"ol"},"Allow centralized configuration for all external service dependencies such as the email service and the database."),(0,n.kt)("li",{parentName:"ol"},"Support multi tenancy at its core")),(0,n.kt)("h2",{id:"better-typescript-workflow"},"Better TypeScript Workflow"),(0,n.kt)("p",null,"Any improvements to the already existing typescript workflow are greatly appreciated. We want the contributers and developers to have good experience when working on the project. The improvements should try to automate as much stuff as possible so that there is less manual work required to work within the typescript environment."))}u.isMDXComponent=!0}}]);