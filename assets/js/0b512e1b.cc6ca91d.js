"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[50081],{85068:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=n(85893),o=n(11151);const i={},s="showSnackBar method",r={id:"talawa-mobile-docs/services_navigation_service/NavigationService/showSnackBar",title:"showSnackBar method",description:"void showSnackBar",source:"@site/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showSnackBar.md",sourceDirName:"talawa-mobile-docs/services_navigation_service/NavigationService",slug:"/talawa-mobile-docs/services_navigation_service/NavigationService/showSnackBar",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showSnackBar",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showSnackBar.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"removeAllAndPush method",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/removeAllAndPush"},next:{title:"showTalawaErrorDialog method",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"showsnackbar-method",children:"showSnackBar method"}),"\n",(0,t.jsxs)(a.p,{children:["void showSnackBar\n(",(0,t.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," message, {",(0,t.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-core/Duration-class.html",children:"Duration"})," duration = const Duration(seconds: 2)})"]}),"\n",(0,t.jsxs)("p",{children:["This is used for the quick alert of ",(0,t.jsx)("code",{children:"duration: 2 seconds"})," with text message(passed)."]}),"\n",(0,t.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-dart",children:"void showSnackBar(\n  String message, {\n  Duration duration = const Duration(seconds: 2),\n}) {\n  ScaffoldMessenger.of(navigatorKey.currentContext!).showSnackBar(\n    SnackBar(\n      behavior: SnackBarBehavior.floating,\n      duration: duration,\n      content: Text(message),\n    ),\n  );\n}\n"})})]})}function v(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>s});var t=n(67294);const o={},i=t.createContext(o);function s(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);