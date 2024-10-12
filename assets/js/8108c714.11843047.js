"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[45089],{78482:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>r,frontMatter:()=>l,metadata:()=>s,toc:()=>_});var i=o(85893),d=o(11151);const l={},n="toggleIsLiked method",s={id:"talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel/toggleIsLiked",title:"toggleIsLiked method",description:"void toggleIsLiked",source:"@site/docs/talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel/toggleIsLiked.md",sourceDirName:"talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel",slug:"/talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel/toggleIsLiked",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel/toggleIsLiked",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel/toggleIsLiked.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"likesCount property",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel/likesCount"},next:{title:"updatePost method",permalink:"/docs/talawa-mobile-docs/view_model_widgets_view_models_like_button_view_model/LikeButtonViewModel/updatePost"}},a={},_=[{value:"Implementation",id:"implementation",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"toggleisliked-method",children:"toggleIsLiked method"})}),"\n",(0,i.jsx)(t.p,{children:"void toggleIsLiked\n()"}),"\n",(0,i.jsx)("p",{children:"This function add like to the post if not liked and\nremove the like from the post if liked."}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"void toggleIsLiked() {\n  if (!_isLiked) {\n    _postService.addLike(_postID);\n  } else {\n    _postService.removeLike(_postID);\n  }\n}\n"})})]})}function r(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>n});var i=o(67294);const d={},l=i.createContext(d);function n(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);