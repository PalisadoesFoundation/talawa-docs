"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[6937],{34273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(85893),r=n(11151);const s={},a="editEvent method",c={id:"talawa-mobile-docs/services_event_service/EventService/editEvent",title:"editEvent method",description:"Future&lt;void> editEvent",source:"@site/docs/talawa-mobile-docs/services_event_service/EventService/editEvent.md",sourceDirName:"talawa-mobile-docs/services_event_service/EventService",slug:"/talawa-mobile-docs/services_event_service/EventService/editEvent",permalink:"/docs/talawa-mobile-docs/services_event_service/EventService/editEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_event_service/EventService/editEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"dispose method",permalink:"/docs/talawa-mobile-docs/services_event_service/EventService/dispose"},next:{title:"eventStream property",permalink:"/docs/talawa-mobile-docs/services_event_service/EventService/eventStream"}},d={},o=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"editevent-method",children:"editEvent method"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> editEvent\n({required ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId, required ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> variables})"]}),"\n",(0,i.jsx)("p",{children:"This function is used to edit an event."}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"params"}),":"]}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"eventId"}),": id of an event"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"variables"}),": this will be ",(0,i.jsx)("code",{children:"map"})," type and contain all the event details need to be update."]})]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"Future<void>"}),": void return"]})}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"Future<void> editEvent({\n  required String eventId,\n  required Map<String, dynamic> variables,\n}) async {\n  navigationService.pushDialog(\n    const CustomProgressDialog(\n      key: Key('EditEventProgress'),\n    ),\n  );\n  final tokenResult = await _dbFunctions\n      .refreshAccessToken(userConfig.currentUser.refreshToken!);\n  debugPrint(tokenResult.toString());\n  final result = await _dbFunctions.gqlAuthMutation(\n    EventQueries().updateEvent(eventId: eventId),\n    variables: variables,\n  );\n  navigationService.pop();\n  if (result != null) {\n    navigationService.removeAllAndPush(\n      Routes.exploreEventsScreen,\n      Routes.mainScreen,\n      arguments: MainScreenArgs(mainScreenIndex: 0, fromSignUp: false),\n    );\n  }\n}\n"})})]})}function v(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var i=n(67294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);