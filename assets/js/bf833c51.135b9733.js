"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[29142],{20545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(85893),m=n(11151);const a={},s="createComment method",r={id:"talawa-mobile-docs/utils_comment_queries/CommentQueries/createComment",title:"createComment method",description:"String createComment",source:"@site/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/createComment.md",sourceDirName:"talawa-mobile-docs/utils_comment_queries/CommentQueries",slug:"/talawa-mobile-docs/utils_comment_queries/CommentQueries/createComment",permalink:"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/createComment",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/createComment.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"CommentQueries constructor",permalink:"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/"},next:{title:"getPostsComments method",permalink:"/docs/talawa-mobile-docs/utils_comment_queries/CommentQueries/getPostsComments"}},i={},c=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,m.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"createcomment-method",children:"createComment method"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," createComment\n()"]}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:'String createComment() {\n  return """\n   mutation createComment(\\$postId: ID!, \\$text: String!) {\n    createComment(postId: \\$postId,\n      data:{\n        text: \\$text,\n      }\n    ){\n      _id\n    }\n  }\n""";\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,m.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(67294);const m={},a=o.createContext(m);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(m):e.components||m:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);