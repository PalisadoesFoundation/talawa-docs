"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[62972],{3069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var o=n(85893),r=n(11151);const s={},c="createComments method",a={id:"talawa-mobile-docs/services_comment_service/CommentService/createComments",title:"createComments method",description:"Future&lt;void> createComments",source:"@site/docs/talawa-mobile-docs/services_comment_service/CommentService/createComments.md",sourceDirName:"talawa-mobile-docs/services_comment_service/CommentService",slug:"/talawa-mobile-docs/services_comment_service/CommentService/createComments",permalink:"/docs/talawa-mobile-docs/services_comment_service/CommentService/createComments",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_comment_service/CommentService/createComments.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"CommentService constructor",permalink:"/docs/talawa-mobile-docs/services_comment_service/CommentService/"},next:{title:"getCommentsForPost method",permalink:"/docs/talawa-mobile-docs/services_comment_service/CommentService/getCommentsForPost"}},m={},i=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"createcomments-method",children:"createComments method"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> createComments\n(",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postId, ",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," text)"]}),"\n",(0,o.jsx)("p",{children:"This function is used to add comment on the post."}),"\n",(0,o.jsx)("p",{children:"parameters:"}),"\n",(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"postId"})," - Post id where comment need to be added."]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"text"})," - content of the comment."]})]}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<void> createComments(String postId, String text) async {\n  print(\"comment service called\");\n  final String createCommentQuery = CommentQueries().createComment();\n  final result = await _dbFunctions.gqlAuthMutation(\n    createCommentQuery,\n    variables: {\n      'postId': postId, //Add your variables here\n      'text': text\n    },\n  );\n  print(\"comment added\");\n  print(result);\n  return result;\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var o=n(67294);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);