"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3287],{46742:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=s(85893),n=s(11151);const o={},r="Task.fromJson constructor",c={id:"talawa-mobile-docs/models_task_task_model/Task/Task.fromJson",title:"Task.fromJson constructor",description:"Task.fromJson(Map&lt;String, dynamic> json)",source:"@site/docs/talawa-mobile-docs/models_task_task_model/Task/Task.fromJson.md",sourceDirName:"talawa-mobile-docs/models_task_task_model/Task",slug:"/talawa-mobile-docs/models_task_task_model/Task/Task.fromJson",permalink:"/docs/talawa-mobile-docs/models_task_task_model/Task/Task.fromJson",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_task_task_model/Task/Task.fromJson.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"Task constructor",permalink:"/docs/talawa-mobile-docs/models_task_task_model/Task/"},next:{title:"createdAt property",permalink:"/docs/talawa-mobile-docs/models_task_task_model/Task/createdAt"}},d={},i=[{value:"Implementation",id:"implementation",level:2}];function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"taskfromjson-constructor",children:"Task.fromJson constructor"}),"\n",(0,a.jsxs)(e.p,{children:["Task.fromJson(",(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> json)"]}),"\n",(0,a.jsx)("p",{children:"/Creating a new Task instance from a map structure."}),"\n",(0,a.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-dart",children:"factory Task.fromJson(\n  Map<String, dynamic> json,\n) {\n  return Task(\n    id: json['_id'] as String,\n    title: json['title'] as String,\n    creator: User.fromJson(\n      json['creator'] as Map<String, dynamic>,\n      fromOrg: true,\n    ),\n    event: Event.fromJson(\n      json['event'] as Map<String, dynamic>,\n    ),\n    createdAt: json['createdAt'] as String,\n    description: json['description'] as String?,\n    deadline: json['deadline'] as String?,\n  );\n}\n"})})]})}function m(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},11151:(t,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var a=s(67294);const n={},o=a.createContext(n);function r(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:r(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);