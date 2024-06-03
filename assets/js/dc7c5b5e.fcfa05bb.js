"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[10303],{60841:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=t(85893),r=t(11151);const n={},i="getTasksByUser method",o={id:"talawa-mobile-docs/services_task_service/TaskService/getTasksByUser",title:"getTasksByUser method",description:"Future&lt;void> getTasksByUser",source:"@site/docs/talawa-mobile-docs/services_task_service/TaskService/getTasksByUser.md",sourceDirName:"talawa-mobile-docs/services_task_service/TaskService",slug:"/talawa-mobile-docs/services_task_service/TaskService/getTasksByUser",permalink:"/docs/talawa-mobile-docs/services_task_service/TaskService/getTasksByUser",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_task_service/TaskService/getTasksByUser.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"editTask method",permalink:"/docs/talawa-mobile-docs/services_task_service/TaskService/editTask"},next:{title:"getTasksForEvent method",permalink:"/docs/talawa-mobile-docs/services_task_service/TaskService/getTasksForEvent"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"gettasksbyuser-method",children:"getTasksByUser method"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> getTasksByUser\n()"]}),"\n",(0,a.jsx)("p",{children:"This function is used to fetch and return all tasks added by the current user."}),"\n",(0,a.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-dart",children:"Future<void> getTasksByUser() async {\n  await _databaseMutationFunctions\n      .refreshAccessToken(_userConfig.currentUser.refreshToken!);\n  final res = await _databaseMutationFunctions\n      .gqlNonAuthQuery(TaskQueries.userTasks(_userConfig.currentUser.id!));\n\n  if (res != null) {\n    _tasks.clear();\n    final tasksList = res.data!['tasksByUser'] as List;\n    tasksList.forEach((task) {\n      _tasks.add(Task.fromJson(task as Map<String, dynamic>));\n    });\n  }\n}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>i});var a=t(67294);const r={},n=a.createContext(r);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);