"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[96371],{40524:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>r,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var m=o(85893),n=o(11151);const s={},i="getComments method",d={id:"talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/getComments",title:"getComments method",description:"Future getComments",source:"@site/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/getComments.md",sourceDirName:"talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel",slug:"/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/getComments",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/getComments",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/getComments.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"createComment method",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/createComment"},next:{title:"initialise method",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/initialise"}},a={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.h1,{id:"getcomments-method",children:"getComments method"}),"\n",(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," getComments\n()"]}),"\n",(0,m.jsxs)("p",{children:["This methods fetch all comments on the post.\nThe function uses ",(0,m.jsx)("code",{children:"getCommentsForPost"})," method by Comment Service."]}),"\n",(0,m.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-dart",children:"Future getComments() async {\n  setState(ViewState.busy);\n  final List commentsJSON =\n      await _commentService.getCommentsForPost(_postID) as List;\n  print(commentsJSON);\n  commentsJSON.forEach((commentJson) {\n    _commentlist.add(Comment.fromJson(commentJson as Map<String, dynamic>));\n  });\n  setState(ViewState.idle);\n}\n"})})]})}function r(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>i});var m=o(67294);const n={},s=m.createContext(n);function i(e){const t=m.useContext(s);return m.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),m.createElement(s.Provider,{value:t},e.children)}}}]);