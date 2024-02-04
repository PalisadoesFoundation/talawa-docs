"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[93527],{92795:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var a=s(85893),o=s(11151);const l={},i="fetchTasks method",d={id:"talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasks",title:"fetchTasks method",description:"Future&lt;void> fetchTasks",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasks.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasks",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasks",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasks.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"deleteTask method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/deleteTask"},next:{title:"fetchTasksByUser method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_task_view_models_explore_tasks_view_model/ExploreTasksViewModel/fetchTasksByUser"}},n={},r=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"fetchtasks-method",children:"fetchTasks method"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> fetchTasks\n(",(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId)"]}),"\n",(0,a.jsxs)("p",{children:["This function fetch all the task for an event.\nThe function uses ",(0,a.jsx)("code",{children:"getTasksForEvent"})," method of Task Service."]}),"\n",(0,a.jsx)("p",{children:"params:"}),"\n",(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"eventId"})," : id of an event for which tasks need to be fetched."]})}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"Future<void> fetchTasks(String eventId) async {\n  setState(ViewState.busy);\n  await _taskService.getTasksForEvent(eventId);\n  setState(ViewState.idle);\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>i});var a=s(67294);const o={},l=a.createContext(o);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);