"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[19818],{77838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>_,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(85893),o=n(11151);const r={},s="registerForEvent method",a={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/registerForEvent",title:"registerForEvent method",description:"Future&lt;void> registerForEvent",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/registerForEvent.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/registerForEvent",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/registerForEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/registerForEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"initialize method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/initialize"},next:{title:"registrants property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/registrants"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function v(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"registerforevent-method",children:"registerForEvent method"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> registerForEvent\n()"]}),"\n",(0,i.jsx)("p",{children:"This function helps the user to register for an event."}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"Future<void> registerForEvent() async {\n  // if event registration is open and user not already registered for the event.\n  if (event.isRegisterable == true && event.isRegistered == false) {\n    navigationService.pushDialog(\n      const CustomProgressDialog(\n        key: Key('RegisterEvent'),\n      ),\n    );\n\n    // use `registerForAnEvent` function provided by `EventService` service.\n    final registerResult =\n        await locator<EventService>().registerForAnEvent(event.id!);\n    //final registerResult = await EventService().registerForAnEvent(event.id!);\n    // if the registration is successful.\n    if (registerResult != null) {\n      event.isRegistered = true;\n      registrants.add(locator<UserConfig>().currentUser);\n    }\n    print(registerResult);\n    fabTitle = getFabTitle();\n    navigationService.pop();\n    notifyListeners();\n  }\n}\n"})})]})}function _(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);