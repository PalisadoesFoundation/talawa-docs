"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[50797],{3349:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(85893),i=n(11151);const o={},s="gqlNonAuthMutation method",r={id:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthMutation",title:"gqlNonAuthMutation method",description:"Future gqlNonAuthMutation",source:"@site/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthMutation.md",sourceDirName:"talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions",slug:"/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthMutation",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthMutation",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthMutation.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"gqlAuthQuery method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlAuthQuery"},next:{title:"gqlNonAuthQuery method",permalink:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions/gqlNonAuthQuery"}},l={},u=[{value:"Implementation",id:"implementation",level:2}];function c(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"gqlnonauthmutation-method",children:"gqlNonAuthMutation method"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," gqlNonAuthMutation\n(",(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," mutation, {",(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic>? variables, ",(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," reCall = true})"]}),"\n",(0,a.jsx)("p",{children:"This function is used to run the graph-ql mutation to authenticate the non signed-in user."}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"params"}),":"]}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"mutation"}),": mutation is used to change/add/delete data in graphql, for more info read graphql docs"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"variables"}),": variables to be passed with mutation"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"reCall"}),": when not first fetch call"]})]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"Future<dynamic>"}),": it returns Future of dynamic"]})}),"\n",(0,a.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-dart",children:"Future<dynamic> gqlNonAuthMutation(\n  String mutation, {\n  Map<String, dynamic>? variables,\n  bool reCall = true,\n}) async {\n  final QueryResult result = await clientNonAuth.mutate(\n    MutationOptions(\n      document: gql(mutation),\n      variables: variables ?? <String, dynamic>{},\n    ),\n  );\n  // if there is an error or exception in [result]\n  if (result.hasException) {\n    final exception = encounteredExceptionOrError(result.exception!);\n    if (exception! && reCall) {\n      gqlNonAuthMutation(mutation, variables: variables);\n    }\n  } else if (result.data != null && result.isConcrete) {\n    return result;\n  }\n  return null;\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>s});var a=n(67294);const i={},o=a.createContext(i);function s(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);