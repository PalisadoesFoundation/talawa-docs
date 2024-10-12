"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[59219],{358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(85893),i=a(11151);const r={},l="checkURLandNavigate method",o={id:"talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/checkURLandNavigate",title:"checkURLandNavigate method",description:"Future&lt;void> checkURLandNavigate",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/checkURLandNavigate.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/checkURLandNavigate",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/checkURLandNavigate",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/checkURLandNavigate.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"SetUrlViewModel constructor",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/"},next:{title:"checkURLandShowPopUp method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_set_url_view_model/SetUrlViewModel/checkURLandShowPopUp"}},d={},s=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"checkurlandnavigate-method",children:"checkURLandNavigate method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> checkURLandNavigate\n(",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," navigateTo, ",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," argument)"]}),"\n",(0,n.jsx)("p",{children:"This function check the URL and navigate to the respective URL."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"params"}),":"]}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"navigateTo"}),": url"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"argument"}),": message"]})]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"Future<void>"}),": void"]})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"Future<void> checkURLandNavigate(String navigateTo, String argument) async {\n  urlFocus.unfocus();\n  validate = AutovalidateMode.always;\n\n  /// if the url is valid.\n  if (formKey.currentState!.validate()) {\n    navigationService\n        .pushDialog(const CustomProgressDialog(key: Key('UrlCheckProgress')));\n    validate = AutovalidateMode.disabled;\n    final String uri = url.text.trim();\n    final bool? urlPresent =\n        await locator<Validator>().validateUrlExistence(uri);\n    if (urlPresent! == true) {\n      final box = Hive.box('url');\n      box.put(urlKey, uri);\n      box.put(imageUrlKey, \"$uri/talawa/\");\n\n      navigationService.pop();\n      graphqlConfig.getOrgUrl();\n      navigationService.pushScreen(navigateTo, arguments: argument);\n    } else {\n      navigationService.pop();\n      navigationService.showTalawaErrorSnackBar(\n        \"URL doesn't exist/no connection please check\",\n        MessageType.error,\n      );\n    }\n  }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>l});var n=a(67294);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);