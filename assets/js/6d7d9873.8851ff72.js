"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[79407],{40561:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>m,metadata:()=>a,toc:()=>c});var n=s(85893),o=s(11151);const m={},r="getPostsComments method",a={id:"talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments",title:"getPostsComments method",description:"String getPostsComments",source:"@site/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments.md",sourceDirName:"talawa-mobile-docs/utils_comment_queries/CommentQueries",slug:"/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments",permalink:"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"createComment method",permalink:"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/createComment"},next:{title:"CommentQueries class",permalink:"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries-class"}},i={},c=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getpostscomments-method",children:"getPostsComments method"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," getPostsComments\n(",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postId)"]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:'String getPostsComments(String postId) {\n  return """\n  query{\n    commentsByPost(id: "$postId"){\n      _id\n      text\n      createdAt\n      creator{\n        firstName\n        lastName\n      }\n    }\n  }\n  """;\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(67294);const o={},m=n.createContext(o);function r(e){const t=n.useContext(m);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(m.Provider,{value:t},e.children)}}}]);