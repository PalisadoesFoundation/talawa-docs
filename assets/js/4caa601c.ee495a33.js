"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[40157],{46755:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var n=o(85893),s=o(11151);const i={},l="fetchNewEvents method",a={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents",title:"fetchNewEvents method",description:"Future&lt;void> fetchNewEvents",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"events property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/events"},next:{title:"initialise method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise"}},d={},r=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fetchnewevents-method",children:"fetchNewEvents method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> fetchNewEvents\n()"]}),"\n",(0,n.jsxs)("p",{children:["This function is used to fetch new events in the organization.\nThe function uses ",(0,n.jsx)("code",{children:"getEvents"})," method from ",(0,n.jsx)("code",{children:"EventService"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"Future<void> fetchNewEvents() async {\n  setState(ViewState.busy);\n  notifyListeners();\n  await _eventService.getEvents();\n  setState(ViewState.idle);\n}\n"})})]})}function v(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>l});var n=o(67294);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);