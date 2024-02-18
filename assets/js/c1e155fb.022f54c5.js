"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[90662],{49290:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=s(85893),n=s(11151);const i={},r="removeLike method",a={id:"talawa-mobile-docs/utils_post_queries/PostQueries/removeLike",title:"removeLike method",description:"String removeLike",source:"@site/docs/talawa-mobile-docs/utils_post_queries/PostQueries/removeLike.md",sourceDirName:"talawa-mobile-docs/utils_post_queries/PostQueries",slug:"/talawa-mobile-docs/utils_post_queries/PostQueries/removeLike",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/removeLike",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_post_queries/PostQueries/removeLike.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"getPostsById method",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/getPostsById"},next:{title:"uploadPost method",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/uploadPost"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"removelike-method",children:"removeLike method"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," removeLike\n()"]}),"\n",(0,o.jsx)("p",{children:"Remove Like from a post."}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"String"}),": The query related to removingLike"]})}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:'String removeLike() {\n  return """\n   mutation unlikePost(\\$postID: ID!) {\n    unlikePost( id: \\$postID,)\n    {\n      _id\n      likedBy{\n      _id\n      }\n    }\n  }\n""";\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var o=s(67294);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);