"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[90703],{41712:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(85893),a=t(11151);const o={},l="initialise method",s={id:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/initialise",title:"initialise method",description:"Future&lt;void> initialise",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/initialise.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/initialise",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/initialise",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/initialise.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchMoreHelper method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/fetchMoreHelper"},next:{title:"onTapContinue method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/onTapContinue"}},r={},d=[{value:"Implementation",id:"implementation",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"initialise-method",children:"initialise method"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> initialise\n(",(0,n.jsx)(i.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," initialData)"]}),"\n",(0,n.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"Future<void> initialise(String initialData) async {\n  searchFocus.addListener(searchActive);\n  if (!initialData.contains('-1')) {\n    databaseFunctions.init();\n    final fetch = await databaseFunctions.fetchOrgById(initialData);\n    if (fetch.runtimeType == OrgInfo) {\n      selectedOrganization = fetch as OrgInfo;\n      if (userConfig.currentUser.refreshToken?.isEmpty ?? true) {\n        navigationService.pushScreen(\n          Routes.signupDetailScreen,\n          arguments: selectedOrganization,\n        );\n      } else {\n        selectOrg(selectedOrganization);\n      }\n      setState(ViewState.idle);\n    }\n  }\n}\n"})})]})}function _(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>s,a:()=>l});var n=t(67294);const a={},o=n.createContext(a);function l(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);