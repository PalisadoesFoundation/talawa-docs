"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[81546],{79854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=r(85893),i=r(11151);const n={},a="getOrgMembersList method",o={id:"talawa-mobile-docs/services_org_service/OrganizationService/getOrgMembersList",title:"getOrgMembersList method",description:"Future&lt;List&lt;User>> getOrgMembersList",source:"@site/docs/talawa-mobile-docs/services_org_service/OrganizationService/getOrgMembersList.md",sourceDirName:"talawa-mobile-docs/services_org_service/OrganizationService",slug:"/talawa-mobile-docs/services_org_service/OrganizationService/getOrgMembersList",permalink:"/docs/talawa-mobile-docs/services_org_service/OrganizationService/getOrgMembersList",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_org_service/OrganizationService/getOrgMembersList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"OrganizationService constructor",permalink:"/docs/talawa-mobile-docs/services_org_service/OrganizationService/"},next:{title:"OrganizationService class",permalink:"/docs/talawa-mobile-docs/services_org_service/OrganizationService-class"}},c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getorgmemberslist-method",children:"getOrgMembersList method"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),">> getOrgMembersList\n(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId)"]}),"\n",(0,s.jsx)("p",{children:"This function fetch and returns the list of organization members."}),"\n",(0,s.jsx)("p",{children:"params:"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"orgId"})," : id of the organization for which members list need be fetched."]})}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<List<User>> getOrgMembersList(String orgId) async {\n  final String query = Queries().fetchOrgDetailsById(orgId);\n  // fetching from database using graphQL mutations.\n  final result = await _dbFunctions.gqlAuthMutation(query);\n  final List orgMembersResult =\n      result.data['organizations'][0]['members'] as List;\n  final List<User> orgMembersList = [];\n  orgMembersResult.forEach((jsonElement) {\n    final User member =\n        User.fromJson(jsonElement as Map<String, dynamic>, fromOrg: true);\n    orgMembersList.add(member);\n  });\n\n  // return list\n  return orgMembersList;\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var s=r(67294);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);