"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[71168],{49320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(85893),o=r(11151);const i={},a="write method",d={id:"talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter/write",title:"write method",description:"- @override",source:"@site/docs/talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter/write.md",sourceDirName:"talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter",slug:"/talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter/write",permalink:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter/write",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter/write.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"typeId property",permalink:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter/typeId"},next:{title:"OrgInfoAdapter class",permalink:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfoAdapter-class"}},s={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"write-method",children:"write method"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["@",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["void write\n(",(0,n.jsx)(t.a,{href:"https://pub.dev/documentation/hive/2.2.3/hive/BinaryWriter-class.html",children:"BinaryWriter"})," writer, ",(0,n.jsx)(t.a,{href:"../../models_organization_org_info/OrgInfo-class.md",children:"OrgInfo"})," obj)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,n.jsx)("p",{children:"Is called when a value has to be encoded."}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"@override\nvoid write(BinaryWriter writer, OrgInfo obj) {\n  writer\n    ..writeByte(8)\n    ..writeByte(0)\n    ..write(obj.image)\n    ..writeByte(1)\n    ..write(obj.id)\n    ..writeByte(2)\n    ..write(obj.name)\n    ..writeByte(3)\n    ..write(obj.admins)\n    ..writeByte(4)\n    ..write(obj.members)\n    ..writeByte(5)\n    ..write(obj.description)\n    ..writeByte(6)\n    ..write(obj.isPublic)\n    ..writeByte(7)\n    ..write(obj.creatorInfo);\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>d,a:()=>a});var n=r(67294);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);