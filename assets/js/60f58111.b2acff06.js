"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[36085],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,u=c["".concat(d,".").concat(m)]||c[m]||f[m]||r;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const r={},i=void 0,l={unversionedId:"talawa-api-docs/interfaces/models_Donation.Interface_Donation",id:"talawa-api-docs/interfaces/models_Donation.Interface_Donation",title:"models_Donation.Interface_Donation",description:"talawa-api / Exports / models/Donation / Interface\\Donation",source:"@site/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation.md",sourceDirName:"talawa-api-docs/interfaces",slug:"/talawa-api-docs/interfaces/models_Donation.Interface_Donation",permalink:"/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"models_DirectChatMessage.Interface_DirectChatMessage",permalink:"/docs/talawa-api-docs/interfaces/models_DirectChatMessage.Interface_DirectChatMessage"},next:{title:"models_EncodedImage.Interface_EncodedImage",permalink:"/docs/talawa-api-docs/interfaces/models_EncodedImage.Interface_EncodedImage"}},d={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nameOfOrg",id:"nameoforg",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"nameOfUser",id:"nameofuser",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"orgId",id:"orgid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"payPalId",id:"paypalid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"userId",id:"userid",level:3},{value:"Defined in",id:"defined-in-5",level:4}],p={toc:s},c="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/models_Donation"},"models/Donation")," / Interface","_","Donation"),(0,o.kt)("h1",{id:"interface-interface_donation"},"Interface: Interface","_","Donation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules/models_Donation"},"models/Donation"),".Interface_Donation"),(0,o.kt)("p",null,"This is an interface representing a document for a donation in the database(MongoDB)."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation#amount"},"amount")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation#nameoforg"},"nameOfOrg")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation#nameofuser"},"nameOfUser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation#orgid"},"orgId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation#paypalid"},"payPalId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/interfaces/models_Donation.Interface_Donation#userid"},"userId"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"amount"},"amount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"amount"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"src/models/Donation.ts:11"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nameoforg"},"nameOfOrg"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"nameOfOrg"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,"src/models/Donation.ts:8"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nameofuser"},"nameOfUser"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"nameOfUser"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,"src/models/Donation.ts:10"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"orgid"},"orgId"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"orgId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectId")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,"src/models/Donation.ts:7"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"paypalid"},"payPalId"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"payPalId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,"src/models/Donation.ts:9"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"userid"},"userId"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"userId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectId")),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,"src/models/Donation.ts:6"))}f.isMDXComponent=!0}}]);