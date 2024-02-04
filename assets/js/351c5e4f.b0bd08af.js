"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[29509],{6186:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var t=l(85893),a=l(11151);const n={},r="build method",o={id:"talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/build.md",sourceDirName:"talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider",slug:"/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/build",permalink:"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"TalawaPluginProvider constructor",permalink:"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/"},next:{title:"checkFromPluginList method",permalink:"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList"}},d={},s=[{value:"Implementation",id:"implementation",level:2}];function c(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"build-method",children:"build method"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["@",(0,t.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,t.jsx)(i.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:(0,t.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,t.jsxs)("p",{children:["build the Plugin combining local ",(0,t.jsx)("code",{children:"visibility"})," property and ",(0,t.jsx)("code",{children:"serverVisible"})," property"]}),"\n",(0,t.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) {\n  var serverVisible = false;\n  serverVisible = checkFromPluginList();\n  return serverVisible || visible ? child! : Container();\n}\n"})})]})}function u(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,i,l)=>{l.d(i,{Z:()=>o,a:()=>r});var t=l(67294);const a={},n=t.createContext(a);function r(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);