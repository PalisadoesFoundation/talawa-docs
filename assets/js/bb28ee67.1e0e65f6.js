"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[89192],{7679:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(85893),a=i(11151);const o={},l="initialize method",s={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/initialize",title:"initialize method",description:"Future&lt;void> initialize",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/initialize.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/initialize",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/initialize",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/initialize.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"getFabTitle method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/getFabTitle"},next:{title:"registerForEvent method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_event_info_view_model/EventInfoViewModel/registerForEvent"}},r={},d=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"initialize-method",children:"initialize method"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> initialize\n({required ",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> args})"]}),"\n",(0,n.jsx)("p",{children:"initialise with the event data fetched from the model."}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:'Future<void> initialize({required Map<String, dynamic> args}) async {\n  event = args["event"] as Event;\n  exploreEventsInstance =\n      args["exploreEventViewModel"] as ExploreEventsViewModel;\n  fabTitle = getFabTitle();\n  setState(ViewState.busy);\n  final fetchRegistrantsByEventQueryResult = await locator<EventService>()\n      .fetchRegistrantsByEvent(event.id!) as QueryResult;\n  final registrantsJsonList = fetchRegistrantsByEventQueryResult\n      .data![\'registrantsByEvent\'] as List<Object?>;\n  registrants = registrantsJsonList\n      .map(\n        (registrantJson) => User.fromJson(\n          registrantJson! as Map<String, dynamic>,\n          fromOrg: true,\n        ),\n      )\n      .toList();\n  setState(ViewState.idle);\n}\n'})})]})}function v(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>l});var n=i(67294);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);