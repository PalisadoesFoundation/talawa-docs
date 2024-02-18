"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86957],{73288:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>r,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var o=i(85893),n=i(11151);const s={},l="initialise method",m={id:"talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/initialise",title:"initialise method",description:"Future initialise",source:"@site/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/initialise.md",sourceDirName:"talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel",slug:"/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/initialise",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/initialise",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/initialise.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"getComments method",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/getComments"},next:{title:"postId property",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_comments_view_model/CommentsViewModel/postId"}},a={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"initialise-method",children:"initialise method"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," initialise\n(",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postID)"]}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future initialise(String postID) async {\n  _commentlist = [];\n  _postID = postID;\n  _commentService = locator<CommentService>();\n  _userConfig = locator<UserConfig>();\n  _postService = locator<PostService>();\n  notifyListeners();\n  await getComments();\n}\n"})})]})}function r(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>m,a:()=>l});var o=i(67294);const n={},s=o.createContext(n);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function m(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);