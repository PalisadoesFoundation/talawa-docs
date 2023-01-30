"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"organization",title:"Organization"},o=void 0,s={unversionedId:"talawa-api/constraints/organization",id:"talawa-api/constraints/organization",title:"Organization",description:"What Is An Organization?",source:"@site/docs/talawa-api/constraints/organization.md",sourceDirName:"talawa-api/constraints",slug:"/talawa-api/constraints/organization",permalink:"/docs/talawa-api/constraints/organization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/talawa-api/constraints/organization.md",tags:[],version:"current",frontMatter:{id:"organization",title:"Organization"},sidebar:"someSidebar",previous:{title:"User",permalink:"/docs/talawa-api/constraints/user"},next:{title:"Admin",permalink:"/docs/talawa-api/constraints/admin"}},l={},c=[{value:"What Is An <code>Organization</code>?",id:"what-is-an-organization",level:2},{value:"How to create <code>Organization</code> ?",id:"how-to-create-organization-",level:2},{value:"<code>Organization</code> Model",id:"organization-model",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-an-organization"},"What Is An ",(0,r.kt)("inlineCode",{parentName:"h2"},"Organization"),"?"),(0,r.kt)("p",null,"An organization is simply a body of one or more people. This includes but isn't limited to businesses, schools and religious institutions. An Organization comprises of ",(0,r.kt)("inlineCode",{parentName:"p"},"Users"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Administrators"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Group chats"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," and a general news feed."),(0,r.kt)("h2",{id:"how-to-create-organization-"},"How to create ",(0,r.kt)("inlineCode",{parentName:"h2"},"Organization")," ?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A user should create an account by signing up with their credentials. Steps for signing up are given ",(0,r.kt)("a",{parentName:"p",href:"../authentication#sign-up"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upon creating an account the necessary information would get stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Database"),". Now to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Organization")," a request should be send to api having given fields."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Organisation Name,"),(0,r.kt)("li",{parentName:"ol"},"Privacy Settings (Public Or Private)"),(0,r.kt)("li",{parentName:"ol"},"Primary Contact Information"),(0,r.kt)("li",{parentName:"ol"},"Organisation Address (If applicable)")))),(0,r.kt)("h2",{id:"organization-model"},(0,r.kt)("inlineCode",{parentName:"h2"},"Organization")," Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiUrl: string\nimage: string\nname: string\ndescription: string\nisPublic: string\ncreator: string\nmembers: [User]\nadmins: [User]\ngroupChats: [Message]\nposts: [Post]\nmembershipRequest: [MembershipRequest]\nblockedUser: [User]\nvisibleInSearch: boolean\n")))}d.isMDXComponent=!0}}]);