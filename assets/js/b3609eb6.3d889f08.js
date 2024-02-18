"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[39920],{36345:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var l=i(85893),a=i(11151);const t={},o="checkFromPluginList method",r={id:"talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList",title:"checkFromPluginList method",description:"bool checkFromPluginList",source:"@site/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList.md",sourceDirName:"talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider",slug:"/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList",permalink:"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/checkFromPluginList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"build method",permalink:"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/build"},next:{title:"child property",permalink:"/docs/talawa-mobile-docs/plugins_talawa_plugin_provider/TalawaPluginProvider/child"}},s={},c=[{value:"Implementation",id:"implementation",level:2}];function u(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"checkfrompluginlist-method",children:"checkFromPluginList method"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," checkFromPluginList\n()"]}),"\n",(0,l.jsxs)("p",{children:["return ",(0,l.jsx)("code",{children:"bool"})," decides the final visibility of the verifying from database and current OrgId"]}),"\n",(0,l.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-dart",children:'bool checkFromPluginList() {\n  final UserConfig userConfig = locator<UserConfig>();\n  final Box box;\n  bool res = false;\n  box = Hive.box(\'pluginBox\');\n  var pluginList = box.get(\'plugins\');\n  pluginList ??= []; // if null then make it  []\n\n  ///mapping over the list from the server\n  pluginList\n      .map(\n        (plugin) => {\n          if (plugin["pluginName"] == pluginName)\n            {\n              if (plugin["pluginInstallStatus"] as bool)\n                {\n                  res = plugin["pluginInstallStatus"] as bool ||\n                      plugin["installedOrgs"]\n                          .contains(userConfig.currentOrg.id) as bool\n                }\n            }\n        },\n      )\n      .toList();\n  return res;\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>o});var l=i(67294);const a={},t=l.createContext(a);function o(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);