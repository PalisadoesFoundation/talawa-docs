"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[95249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"talawa-api-docs/modules/utilities_graphqlConnectionFactory",id:"talawa-api-docs/modules/utilities_graphqlConnectionFactory",title:"utilities_graphqlConnectionFactory",description:"talawa-api / Exports / utilities/graphqlConnectionFactory",source:"@site/docs/talawa-api-docs/modules/utilities_graphqlConnectionFactory.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/utilities_graphqlConnectionFactory",permalink:"/docs/talawa-api-docs/modules/utilities_graphqlConnectionFactory",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/utilities_graphqlConnectionFactory.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"utilities_encodedImageStorage_uploadEncodedImage",permalink:"/docs/talawa-api-docs/modules/utilities_encodedImageStorage_uploadEncodedImage"},next:{title:"utilities_imageAlreadyInDbCheck",permalink:"/docs/talawa-api-docs/modules/utilities_imageAlreadyInDbCheck"}},c={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"graphqlConnectionFactory",id:"graphqlconnectionfactory",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/"},"talawa-api")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/talawa-api-docs/modules"},"Exports")," / utilities/graphqlConnectionFactory"),(0,r.kt)("h1",{id:"module-utilitiesgraphqlconnectionfactory"},"Module: utilities/graphqlConnectionFactory"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/talawa-api-docs/modules/utilities_graphqlConnectionFactory#graphqlconnectionfactory"},"graphqlConnectionFactory"))),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"graphqlconnectionfactory"},"graphqlConnectionFactory"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"graphqlConnectionFactory"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Interface_Connection"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Interface_Connection"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"src/utilities/graphqlConnectionFactory.ts:28"))}u.isMDXComponent=!0}}]);