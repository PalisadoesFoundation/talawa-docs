"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={id:"data-management-overview",title:"Overview"},i=void 0,l={unversionedId:"features/data-management/data-management-overview",id:"features/data-management/data-management-overview",title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/data-management/overview.md",sourceDirName:"features/data-management",slug:"/features/data-management/data-management-overview",permalink:"/docs/features/data-management/data-management-overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/data-management/overview.md",tags:[],version:"current",frontMatter:{id:"data-management-overview",title:"Overview"},sidebar:"someSidebar",previous:{title:"Follow Tag Support",permalink:"/docs/features/notifications/follow-tag-support"},next:{title:"Data Compression",permalink:"/docs/features/data-management/data-management-compression"}},s={},c=[{value:"Overall Guidance",id:"overall-guidance",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,n.kt)("h2",{id:"overall-guidance"},"Overall Guidance"),(0,n.kt)("p",null,"These relate to how data is managed by the app. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Each organisation should create a new database."),(0,n.kt)("li",{parentName:"ol"},"The ability should exist from the admin portal to specify",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The duration that objects and data are retained in the database"),(0,n.kt)("li",{parentName:"ol"},"The type of data or objects to be retained/ purged based on the age criteria"),(0,n.kt)("li",{parentName:"ol"},"Limit the size and duration of audio/ video files uploaded to the newsfeed"))),(0,n.kt)("li",{parentName:"ol"},"There should be a preset encoding algorithm for audio and video")))}p.isMDXComponent=!0}}]);