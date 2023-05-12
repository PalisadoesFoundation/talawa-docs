"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[5094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"contributing",title:"Contributing"},i=void 0,l={unversionedId:"developers/contributing",id:"developers/contributing",title:"Contributing",description:"Each GitHub repository contains important files in their topmost, or root, directories that you should know about. These include:",source:"@site/docs/developers/contributing.md",sourceDirName:"developers",slug:"/developers/contributing",permalink:"/docs/developers/contributing",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/contributing.md",tags:[],version:"current",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"docs",previous:{title:"Technical Introduction",permalink:"/docs/developers/technical-introduction"},next:{title:"Talawa",permalink:"/docs/category/talawa"}},s={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each GitHub repository contains important files in their topmost, or root, directories that you should know about. These include:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"README.md"),(0,o.kt)("td",{parentName:"tr",align:null},"The README.md file contains a summary of project's purpose. It includes links to other important files in the repository that you should read before starting")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CODE_OF_CONDUCT.md"),(0,o.kt)("td",{parentName:"tr",align:null},"This file contains guidelines of how each contributor in the community should behave and communicate with each other. It also states the consequences of going against these rules. By doing this we aim to provide a harassment-free environment and also an inclusive, healthy and diverse community.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CONTRIBUTING.md"),(0,o.kt)("td",{parentName:"tr",align:null},"Everything you need to know to start contributing to our projects can be found here. It also includes ways to communicate with the community.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DOCUMENTATION.md"),(0,o.kt)("td",{parentName:"tr",align:null},"This file points out some useful tips on where to find our documentation and how to use Docusaurus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INSTALLATION.md"),(0,o.kt)("td",{parentName:"tr",align:null},"The installation guide for the project. It will tell you step by step what you need to do to get the software running. This includes the dependencies to install, the required versions of supporting software and the necessary tips to get things working on your operating system.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CONFIGURATION.md"),(0,o.kt)("td",{parentName:"tr",align:null},"Some repositories have this file to specify the configurations necessary to enable various features to make Talawa run smoothly.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ISSUE_GUIDELINES.md"),(0,o.kt)("td",{parentName:"tr",align:null},"If you find a bug or feel a new feature is necessary, then open an issue. Don't ask for permission to create one, we need your contributions! However, if you want to do the work yourself, don't start before being assigned the task as we only accept Pull Requests (PRs) from people who have been assigned the corresponding issue.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PR_GUIDELINES.md"),(0,o.kt)("td",{parentName:"tr",align:null},"When you are ready submit new code this document will explain what we need in your Pull Request (PR). We take this guide seriously as it tells you how to make sure your code will meet our standards and be accepted.")))),(0,o.kt)("p",null,"Reading these files will help to make you contribute to Talawa even faster. We know you can't wait!"))}p.isMDXComponent=!0}}]);