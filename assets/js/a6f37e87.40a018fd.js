"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[5950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4420:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"mdx",title:"Powered by MDX"},c=void 0,i={unversionedId:"mdx",id:"mdx",title:"Powered by MDX",description:"You can write JSX and use React components within your Markdown thanks to MDX.",source:"@site/docs/interactiveDoc.mdx",sourceDirName:".",slug:"/mdx",permalink:"/docs/mdx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interactiveDoc.mdx",tags:[],version:"current",frontMatter:{id:"mdx",title:"Powered by MDX"}},l={},p=[],u=e=>{let{children:t,color:r}=e;return(0,o.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"},onClick:()=>alert("Highlight pressed!")},t)},s={toc:p,Highlight:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can write JSX and use React components within your Markdown thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," extension is not required, but will enable better support from tooling (IDE, Prettier...)."),(0,o.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,o.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,o.kt)("p",null,"I can write ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,o.kt)("em",{parentName:"p"},"JSX"),"!"))}d.isMDXComponent=!0}}]);