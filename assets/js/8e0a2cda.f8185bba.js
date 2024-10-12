"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[10415],{34101:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>n,contentTitle:()=>a,default:()=>_,frontMatter:()=>d,metadata:()=>l,toc:()=>r});var o=i(85893),s=i(11151);const d={},a="dispose method",l={id:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/dispose",title:"dispose method",description:"- @override",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/dispose.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/dispose",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/dispose",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/dispose.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"chats property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/chats"},next:{title:"getChatMessages method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/getChatMessages"}},n={},r=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"dispose-method",children:"dispose method"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["@",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"void dispose\n()"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,o.jsxs)("p",{children:["Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"})," will throw after the object is disposed)."]}),"\n",(0,o.jsx)("p",{children:"This method should only be called by the object's owner."}),"\n",(0,o.jsx)("p",{children:"This method does not notify listeners, and clears the listener list once\nit is called. Consumers of this class must decide on whether to notify\nlisteners or not immediately before disposal."}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nvoid dispose() {\n  _chatMessageSubscription?.cancel();\n  _chatListSubscription.cancel();\n  super.dispose();\n}\n"})})]})}function _(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>a});var o=i(67294);const s={},d=o.createContext(s);function a(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);