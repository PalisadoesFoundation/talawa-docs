"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[69856],{81677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(85893),o=a(11151);const r={},l="shouldRepaint method",s={id:"talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint",title:"shouldRepaint method",description:"- @override",source:"@site/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md",sourceDirName:"talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo",slug:"/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint",permalink:"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"paint method",permalink:"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/paint"},next:{title:"TelegramLogo class",permalink:"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo-class"}},i={},d=[{value:"Implementation",id:"implementation",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"shouldrepaint-method",children:"shouldRepaint method"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["@",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," shouldRepaint\n(covariant ",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/rendering/CustomPainter-class.html",children:"CustomPainter"})," oldDelegate)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,n.jsxs)("p",{children:["Called whenever a new instance of the custom painter delegate class is\nprovided to the ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/rendering/RenderCustomPaint-class.html",children:"RenderCustomPaint"})," object, or any time that a new\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/CustomPaint-class.html",children:"CustomPaint"})," object is created with a new instance of the custom painter\ndelegate class (which amounts to the same thing, because the latter is\nimplemented in terms of the former)."]}),"\n",(0,n.jsx)("p",{children:"If the new instance represents different information than the old\ninstance, then the method should return true, otherwise it should return\nfalse."}),"\n",(0,n.jsxs)("p",{children:["If the method returns false, then the ",(0,n.jsx)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/paint.md",children:"paint"})," call might be optimized\naway."]}),"\n",(0,n.jsxs)("p",{children:["It's possible that the ",(0,n.jsx)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/paint.md",children:"paint"})," method will get called even if\n",(0,n.jsx)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md",children:"shouldRepaint"})," returns false (e.g. if an ancestor or descendant needed to\nbe repainted). It's also possible that the ",(0,n.jsx)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/paint.md",children:"paint"})," method will get called\nwithout ",(0,n.jsx)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md",children:"shouldRepaint"})," being called at all (e.g. if the box changes\nsize)."]}),"\n",(0,n.jsxs)("p",{children:["If a custom delegate has a particularly expensive paint function such that\nrepaints should be avoided as much as possible, a ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/RepaintBoundary-class.html",children:"RepaintBoundary"})," or\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/rendering/RenderRepaintBoundary-class.html",children:"RenderRepaintBoundary"})," (or other render object with\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/rendering/RenderObject/isRepaintBoundary.html",children:"RenderObject.isRepaintBoundary"})," set to true) might be helpful."]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:"oldDelegate"})," argument will never be null."]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"@override\nbool shouldRepaint(covariant CustomPainter oldDelegate) {\n  return true;\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>l});var n=a(67294);const o={},r=n.createContext(o);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);