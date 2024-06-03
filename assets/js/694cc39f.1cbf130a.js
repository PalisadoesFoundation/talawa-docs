"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[19803],{69202:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=s(85893),a=s(11151);const l={},r="DirectChatViewModel class",d={id:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel-class",title:"DirectChatViewModel class",description:"This ViewModel class have different functions that are used interact with model in the context of Direct Chat.",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel-class.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel-class",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel-class",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel-class.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"sendMessageToDirectChat method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/sendMessageToDirectChat"},next:{title:"direct_chat_view_model library",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model-library"}},h={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"chatMessagesByUser \u2192 Map&lt;String, List&lt;ChatMessage&gt;&gt;",id:"chatmessagesbyuser--mapstring-listchatmessage",level:5},{value:"chats \u2192 List&lt;ChatListTileDataModel&gt;",id:"chats--listchatlisttiledatamodel",level:5},{value:"chatState \u2194 ChatState",id:"chatstate--chatstate",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"hasListeners \u2192 bool",id:"haslisteners--bool",level:5},{value:"isBusy \u2192 bool",id:"isbusy--bool",level:5},{value:"listKey \u2192 GlobalKey&lt;AnimatedListState&gt;",id:"listkey--globalkeyanimatedliststate",level:5},{value:"name \u2194 String?",id:"name--string",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"state \u2192 ViewState",id:"state--viewstate",level:5},{value:"Methods",id:"methods",level:2},{value:"addListener(VoidCallback listener) void",id:"addlistenervoidcallback-listener-void",level:5},{value:"chatName(dynamic chatId) void",id:"chatnamedynamic-chatid-void",level:5},{value:"dispose() void",id:"dispose-void",level:5},{value:"getChatMessages(String chatId) Future&lt;void&gt;",id:"getchatmessagesstring-chatid-futurevoid",level:5},{value:"initialise() Future&lt;void&gt;",id:"initialise-futurevoid",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"notifyListeners() void",id:"notifylisteners-void",level:5},{value:"refreshChats() void",id:"refreshchats-void",level:5},{value:"removeListener(VoidCallback listener) void",id:"removelistenervoidcallback-listener-void",level:5},{value:"sendMessageToDirectChat(String chatId, String messageContent) Future&lt;void&gt;",id:"sendmessagetodirectchatstring-chatid-string-messagecontent-futurevoid",level:5},{value:"setState(ViewState viewState) void",id:"setstateviewstate-viewstate-void",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function n(e){const t={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"directchatviewmodel-class",children:"DirectChatViewModel class"}),"\n",(0,i.jsx)("p",{children:"This ViewModel class have different functions that are used interact with model in the context of Direct Chat."}),"\n",(0,i.jsx)("p",{children:"Functions include:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"initialise"})," : Initialise the states."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"getChatMessages"})," : to get all the messages of a chat."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"sendMessageToDirectChat"})," : to send the message to chat."]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Inheritance"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier-class.html",children:"ChangeNotifier"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel-class",children:"BaseModel"})}),"\n",(0,i.jsx)(t.li,{children:"DirectChatViewModel"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/",children:"DirectChatViewModel"})," ()"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.h5,{id:"chatmessagesbyuser--mapstring-listchatmessage",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/chatMessagesByUser",children:"chatMessagesByUser"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_chats_chat_message/ChatMessage-class",children:"ChatMessage"}),">>"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read-only"})})}),"\n",(0,i.jsxs)(t.h5,{id:"chats--listchatlisttiledatamodel",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/chats",children:"chats"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_chats_chat_list_tile_data_model/ChatListTileDataModel-class",children:"ChatListTileDataModel"}),">"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read-only"})})}),"\n",(0,i.jsxs)(t.h5,{id:"chatstate--chatstate",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/chatState",children:"chatState"})," \u2194 ",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ChatState",children:"ChatState"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,i.jsxs)(t.h5,{id:"hashcode--int",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,i.jsxs)(t.p,{children:["The hash code for this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,i.jsxs)(t.h5,{id:"haslisteners--bool",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/hasListeners.html",children:"hasListeners"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["Whether any listeners are currently registered.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,i.jsxs)(t.h5,{id:"isbusy--bool",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/isBusy",children:"isBusy"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})}),"\n",(0,i.jsxs)(t.h5,{id:"listkey--globalkeyanimatedliststate",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/listKey",children:"listKey"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/GlobalKey-class.html",children:"GlobalKey"}),"<",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/AnimatedListState-class.html",children:"AnimatedListState"}),">"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"final"})})}),"\n",(0,i.jsxs)(t.h5,{id:"name--string",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/name",children:"name"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"?"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})}),"\n",(0,i.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,i.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,i.jsxs)(t.h5,{id:"state--viewstate",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/state",children:"state"})," \u2192 ",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(t.h5,{id:"addlistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Register a closure to be called when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"chatnamedynamic-chatid-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/chatName",children:"chatName"}),"(dynamic chatId) void"]}),"\n",(0,i.jsxs)(t.h5,{id:"dispose-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/dispose",children:"dispose"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:["Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"})," will throw after the object is disposed).",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"override"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"getchatmessagesstring-chatid-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages",children:"getChatMessages"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," chatId) ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function get all messages for a chat."}),"\n",(0,i.jsxs)(t.h5,{id:"initialise-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/initialise",children:"initialise"}),"() ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,i.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"notifylisteners-void",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/notifyListeners.html",children:"notifyListeners"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:["Call all the registered listeners.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"refreshchats-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats",children:"refreshChats"}),"() void"]}),"\n",(0,i.jsx)(t.p,{children:"This function refresh the chats."}),"\n",(0,i.jsxs)(t.h5,{id:"removelistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/removeListener.html",children:"removeListener"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Remove a previously registered closure from the list of closures that are\nnotified when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"sendmessagetodirectchatstring-chatid-string-messagecontent-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/sendMessageToDirectChat",children:"sendMessageToDirectChat"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," chatId, ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," messageContent) ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function send the message to Direct Chat."}),"\n",(0,i.jsxs)(t.h5,{id:"setstateviewstate-viewstate-void",children:[(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/setState",children:"setState"}),"(",(0,i.jsx)(t.a,{href:"/docs/talawa-mobile-docs/enums_enums/ViewState",children:"ViewState"})," viewState) void"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})}),"\n",(0,i.jsxs)(t.h5,{id:"tostring-string",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"() ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsxs)(t.p,{children:["A string representation of this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,i.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["The equality operator.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]})]})}function o(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(n,{...e})}):n(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>r});var i=s(67294);const a={},l=i.createContext(a);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);