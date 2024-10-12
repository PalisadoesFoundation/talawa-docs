"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[47154],{51596:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(85893),l=a(11151);const r={},i="validateEventForm method",o={id:"talawa-mobile-docs/utils_validators/Validator/validateEventForm",title:"validateEventForm method",description:"String? validateEventForm",source:"@site/docs/talawa-mobile-docs/utils_validators/Validator/validateEventForm.md",sourceDirName:"talawa-mobile-docs/utils_validators/Validator",slug:"/talawa-mobile-docs/utils_validators/Validator/validateEventForm",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateEventForm",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_validators/Validator/validateEventForm.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"validateEmail method",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateEmail"},next:{title:"validateFirstName method",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateFirstName"}},s={},d=[{value:"Implementation",id:"implementation",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"validateeventform-method",children:"validateEventForm method"})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? validateEventForm\n(",(0,n.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," value, ",(0,n.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? label)"]}),"\n",(0,n.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-dart",children:"static String? validateEventForm(String value, String? label) {\n  if (value.isEmpty) {\n    return '$label must not be left blank.';\n  }\n  // ignore: unnecessary_raw_strings\n  const String pattern = r'(?=.*?[A-Za-z]).+';\n  final RegExp regex = RegExp(pattern);\n  if (!regex.hasMatch(value)) {\n    return \"Invalid $label\";\n  }\n  return null;\n}\n"})})]})}function m(t={}){const{wrapper:e}={...(0,l.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>o,a:()=>i});var n=a(67294);const l={},r=n.createContext(l);function i(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:i(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);