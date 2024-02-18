"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[76207],{55652:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=s(85893),o=s(11151);const i={},r="getPostsById method",d={id:"talawa-mobile-docs/utils_post_queries/PostQueries/getPostsById",title:"getPostsById method",description:"String getPostsById",source:"@site/docs/talawa-mobile-docs/utils_post_queries/PostQueries/getPostsById.md",sourceDirName:"talawa-mobile-docs/utils_post_queries/PostQueries",slug:"/talawa-mobile-docs/utils_post_queries/PostQueries/getPostsById",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/getPostsById",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_post_queries/PostQueries/getPostsById.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"addLike method",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/addLike"},next:{title:"removeLike method",permalink:"/docs/talawa-mobile-docs/utils_post_queries/PostQueries/removeLike"}},a={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getpostsbyid-method",children:"getPostsById method"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," getPostsById\n(",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId)"]}),"\n",(0,n.jsx)("p",{children:"Getting Posts by Id."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"params"}),":"]}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"orgId"}),": The organisation id"]})}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"String"}),": The query related to gettingPostsbyId"]})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:'String getPostsById(String orgId) {\n  return """\n    query {\n      postsByOrganization(id: "$orgId",orderBy: createdAt_DESC )\n      {\n        _id\n        text\n        createdAt\n        imageUrl\n        videoUrl\n        title\n        commentCount\n        likeCount\n        creator{\n          _id\n          firstName\n          lastName\n          image\n        }\n        organization{\n          _id\n        }\n        likedBy{\n          _id\n        }\n        comments{\n          _id\n        }\n      }\n    }\n""";\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>r});var n=s(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);