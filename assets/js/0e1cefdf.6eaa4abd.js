"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[89222],{18728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=a(85893),i=a(11151);const r={},n="fetchDirectChatMessagesByChatId method",c={id:"talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId",title:"fetchDirectChatMessagesByChatId method",description:"String fetchDirectChatMessagesByChatId",source:"@site/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId.md",sourceDirName:"talawa-mobile-docs/utils_chat_queries/ChatQueries",slug:"/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId",permalink:"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatMessagesByChatId.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"ChatQueries constructor",permalink:"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/"},next:{title:"fetchDirectChatsByUserId method",permalink:"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatsByUserId"}},h={},o=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"fetchdirectchatmessagesbychatid-method",children:"fetchDirectChatMessagesByChatId method"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchDirectChatMessagesByChatId\n(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," chatId)"]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"String fetchDirectChatMessagesByChatId(String chatId) {\n  return '''\n      query {\n        directChatsMessagesByChatID(id: \"$chatId\") {\n          _id\n          messageContent\n          sender {\n            _id\n            firstName\n            image\n          }\n          receiver {\n            _id\n            firstName\n            image\n          }\n        }\n      }\n  ''';\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>n});var s=a(67294);const i={},r=s.createContext(i);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);