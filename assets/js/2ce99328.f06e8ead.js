"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[56769],{21030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>_,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var o=n(85893),l=n(11151);const i={},s="deleteEvent method",d={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/deleteEvent",title:"deleteEvent method",description:"Future&lt;void> deleteEvent",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/deleteEvent.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/deleteEvent",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/deleteEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/deleteEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"chosenValue property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/chosenValue"},next:{title:"dispose method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/dispose"}},a={},r=[{value:"Implementation",id:"implementation",level:2}];function v(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"deleteevent-method",children:"deleteEvent method"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> deleteEvent\n({required ",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId})"]}),"\n",(0,o.jsx)("p",{children:"This function deletes the event."}),"\n",(0,o.jsx)("p",{children:"params:"}),"\n",(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"eventId"})," : id of the event that need to be delete."]})}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> deleteEvent({required String eventId}) async {\n  // push the custom alert dialog to ask for confirmation.\n  navigationService.pushDialog(\n    CustomAlertDialog(\n      reverse: true,\n      dialogSubTitle: 'Are you sure you want to delete this event?',\n      successText: 'Delete',\n      success: () {\n        navigationService.pop();\n        _eventService.deleteEvent(eventId).then(\n          (result) async {\n            if (result != null) {\n              navigationService.pop();\n              setState(ViewState.busy);\n              print(result);\n              _uniqueEventIds.remove(eventId);\n              _events.removeWhere((element) => element.id == eventId);\n              await Future.delayed(const Duration(milliseconds: 500));\n              setState(ViewState.idle);\n            }\n          },\n        );\n      },\n    ),\n  );\n}\n"})})]})}function _(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var o=n(67294);const l={},i=o.createContext(l);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);