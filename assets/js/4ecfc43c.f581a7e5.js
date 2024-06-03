"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[68913],{90628:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=t(85893),o=t(11151);const d={},l="dbLanguageUpdate method",i={id:"talawa-mobile-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate",title:"dbLanguageUpdate method",description:"Future&lt;void> dbLanguageUpdate",source:"@site/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate.md",sourceDirName:"talawa-mobile-docs/view_model_lang_view_model/AppLanguage",slug:"/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"databaseFunctions property",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/databaseFunctions"},next:{title:"fetchLocale method",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale"}},s={},c=[{value:"Implementation",id:"implementation",level:2}];function u(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"dblanguageupdate-method",children:"dbLanguageUpdate method"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> dbLanguageUpdate\n()"]}),"\n",(0,n.jsxs)("p",{children:["This function updates the Database Language by running the graphQL ",(0,n.jsx)("code",{children:"mutations"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-dart",children:"Future<void> dbLanguageUpdate() async {\n  try {\n    await databaseFunctions\n        .gqlAuthMutation(queries.updateLanguage(_appLocale.languageCode));\n    print('Language Updated in Database');\n  } catch (e) {\n    print(e);\n  }\n}\n"})})]})}function p(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>l});var n=t(67294);const o={},d=n.createContext(o);function l(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);