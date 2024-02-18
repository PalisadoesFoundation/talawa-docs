"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[84019],{30044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>o});var s=r(85893),l=r(11151);const n={},i="Event class",a={id:"talawa-mobile-docs/models_events_event_model/Event-class",title:"Event class",description:"This class creates an event model and returns an Event instance.",source:"@site/docs/talawa-mobile-docs/models_events_event_model/Event-class.md",sourceDirName:"talawa-mobile-docs/models_events_event_model",slug:"/talawa-mobile-docs/models_events_event_model/Event-class",permalink:"/docs/talawa-mobile-docs/models_events_event_model/Event-class",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_events_event_model/Event-class.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"title property",permalink:"/docs/talawa-mobile-docs/models_events_event_model/Event/title"},next:{title:"event_model library",permalink:"/docs/talawa-mobile-docs/models_events_event_model/models_events_event_model-library"}},d={},o=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"admins \u2194 List&lt;User&gt;?",id:"admins--listuser",level:5},{value:"allDay \u2194 bool?",id:"allday--bool",level:5},{value:"attendees \u2194 String?",id:"attendees--string",level:5},{value:"creator \u2194 User?",id:"creator--user",level:5},{value:"description \u2194 String?",id:"description--string",level:5},{value:"endDate \u2194 String?",id:"enddate--string",level:5},{value:"endTime \u2194 String?",id:"endtime--string",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"id \u2194 String?",id:"id--string",level:5},{value:"isPublic \u2194 bool?",id:"ispublic--bool",level:5},{value:"isRegisterable \u2194 bool?",id:"isregisterable--bool",level:5},{value:"isRegistered \u2194 bool?",id:"isregistered--bool",level:5},{value:"latitude \u2194 double?",id:"latitude--double",level:5},{value:"location \u2194 String?",id:"location--string",level:5},{value:"longitude \u2194 double?",id:"longitude--double",level:5},{value:"organization \u2194 OrgInfo?",id:"organization--orginfo",level:5},{value:"recurrence \u2194 String?",id:"recurrence--string",level:5},{value:"recurring \u2194 bool?",id:"recurring--bool",level:5},{value:"registrants \u2194 List&lt;User&gt;?",id:"registrants--listuser",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"startDate \u2194 String?",id:"startdate--string",level:5},{value:"startTime \u2194 String?",id:"starttime--string",level:5},{value:"title \u2194 String?",id:"title--string",level:5},{value:"Methods",id:"methods",level:2},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function c(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h5:"h5",p:"p",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"event-class",children:"Event class"}),"\n",(0,s.jsx)("p",{children:"This class creates an event model and returns an Event instance."}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/",children:"Event"})," ({",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? id, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? title, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? description, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? attendees, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? location, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",children:"double"}),"? latitude, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",children:"double"}),"? longitude, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"? recurring, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"? allDay, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? startDate, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? endDate, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? startTime, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? endTime, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? recurrence, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"? isPublic, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"? isRegistered, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"? isRegisterable, ",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),"? creator, ",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfo-class",children:"OrgInfo"}),"? organization, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),">? admins, ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),">? registrants})"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/Event.fromJson",children:"Event.fromJson"})," (",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> json)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"factory"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.h5,{id:"admins--listuser",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/admins",children:"admins"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),">?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"allday--bool",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/allDay",children:"allDay"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"attendees--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/attendees",children:"attendees"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"creator--user",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/creator",children:"creator"})," \u2194 ",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"description--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/description",children:"description"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"enddate--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/endDate",children:"endDate"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"endtime--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/endTime",children:"endTime"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"hashcode--int",children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"})," \u2192 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,s.jsxs)(t.p,{children:["The hash code for this object.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsxs)(t.em,{children:[(0,s.jsx)("span",{class:"feature",children:"read-only"}),(0,s.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,s.jsxs)(t.h5,{id:"id--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/id",children:"id"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"ispublic--bool",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/isPublic",children:"isPublic"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"isregisterable--bool",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/isRegisterable",children:"isRegisterable"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"isregistered--bool",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/isRegistered",children:"isRegistered"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"latitude--double",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/latitude",children:"latitude"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",children:"double"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"location--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/location",children:"location"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"longitude--double",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/longitude",children:"longitude"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",children:"double"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"organization--orginfo",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/organization",children:"organization"})," \u2194 ",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfo-class",children:"OrgInfo"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"recurrence--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/recurrence",children:"recurrence"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"recurring--bool",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/recurring",children:"recurring"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"registrants--listuser",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/registrants",children:"registrants"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),">?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,s.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsxs)(t.em,{children:[(0,s.jsx)("span",{class:"feature",children:"read-only"}),(0,s.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,s.jsxs)(t.h5,{id:"startdate--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/startDate",children:"startDate"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"starttime--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/startTime",children:"startTime"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsxs)(t.h5,{id:"title--string",children:[(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_events_event_model/Event/title",children:"title"})," \u2194 ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,s.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,s.jsxs)(t.h5,{id:"tostring-string",children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"() ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,s.jsxs)(t.p,{children:["A string representation of this object.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,s.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,s.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,s.jsxs)(t.p,{children:["The equality operator.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"inherited"})})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var s=r(67294);const l={},n=s.createContext(l);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);