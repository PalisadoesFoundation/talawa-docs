"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[42488],{55899:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(85893),i=s(11151);const a={id:"functionality",title:"Functionality"},r=void 0,l={id:"developers/talawa-api/functionality",title:"Functionality",description:"Talawa Api offers various functionalities which will ultimately help in endorsing the relationship between the members of an organization. The list of functionalities offered by Talawa Api are as follows:",source:"@site/docs/developers/talawa-api/functionality.md",sourceDirName:"developers/talawa-api",slug:"/developers/talawa-api/functionality",permalink:"/docs/developers/talawa-api/functionality",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa-api/functionality.md",tags:[],version:"current",frontMatter:{id:"functionality",title:"Functionality"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/developers/talawa-api/authentication"},next:{title:"Pagination",permalink:"/docs/developers/talawa-api/pagination"}},o={},c=[{value:"Post",id:"post",level:3},{value:"Comment",id:"comment",level:3},{value:"Task",id:"task",level:3},{value:"Message",id:"message",level:3},{value:"DirectChat",id:"directchat",level:3},{value:"DirectChatMessage",id:"directchatmessage",level:3},{value:"Event",id:"event",level:3},{value:"EventProject",id:"eventproject",level:3},{value:"Group",id:"group",level:3},{value:"GroupChat",id:"groupchat",level:3},{value:"GroupChatMessage",id:"groupchatmessage",level:3},{value:"ImageHash",id:"imagehash",level:3}];function d(e){const n={code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Talawa Api offers various functionalities which will ultimately help in endorsing the relationship between the members of an organization. The list of functionalities offered by Talawa Api are as follows:"}),"\n",(0,t.jsx)(n.h3,{id:"post",children:"Post"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Post Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"text: string\ntitle: string\ncreatedAt: string\nimageUrl: string\nvideoUrl: string\ncreator: User\norganization: Organization\nlikedBy: [User]\ncomments: [Comment]\npinned: Boolean\n"})}),"\n",(0,t.jsx)(n.h3,{id:"comment",children:"Comment"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Comment Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"text : string\ncreatedAt: string\ncreator: User\npost: string\nlikedBy: User\nlikeCount: string\n"})}),"\n",(0,t.jsx)(n.h3,{id:"task",children:"Task"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Task Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"title: string\ndescription: string\ncreatedAt: string\ndeadline: string\nevent: Event\ncreator: User\n"})}),"\n",(0,t.jsx)(n.h3,{id:"message",children:"Message"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Message Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"text: string\nimageUrl: string\nvideoUrl: string\ncreatedAt: string\ncreator: User\ngroup: Group\n"})}),"\n",(0,t.jsx)(n.h3,{id:"directchat",children:"DirectChat"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DirectChat Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"users: [User]\nmessages: [DirectChatMessage]\ncreator: User\norganization: Organization\n"})}),"\n",(0,t.jsx)(n.h3,{id:"directchatmessage",children:"DirectChatMessage"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"DirectChatMessage Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"directChatMessageBelongsTo: DirectChat\nsender: User\nreceiver: User\ncreatedAt: string\nmessageContent: string\n"})}),"\n",(0,t.jsx)(n.h3,{id:"event",children:"Event"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Event Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"title: string\ndescription: string\nattendees: string\nlocation: string\nrecurring: string\nallDay: string\nstartDate: string\nendDate: string\nstartTime: string\nendTime: string\nrecurrence: string\nisPublic: boolean\nisRegisterable: boolean\ncreator: User\nregistrants: [User]\nadmins: [User]\norganization: Organization\ntasks: [Task]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"eventproject",children:"EventProject"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Event Project Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"title: string\ndescription: string\ncreatedAt: string\nevent: Event\ncreator: User\ntasks: [Task]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"group",children:"Group"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Group Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"title: string\ndescription: string\ncreatedAt: string\norganization: Organization\nadmins: [User]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"groupchat",children:"GroupChat"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"GroupChat Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"title: string\nusers: [User]\nmessages: [GroupChatMessage]\ncreator: User\norganization: Organization\n"})}),"\n",(0,t.jsx)(n.h3,{id:"groupchatmessage",children:"GroupChatMessage"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"GroupChatMessage Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"groupChatMessageBelongsTo: GroupChat\nsender: User\ncreatedAt: string\nmessageContent: string\n"})}),"\n",(0,t.jsx)(n.h3,{id:"imagehash",children:"ImageHash"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"ImageHash Model"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"hashValue: string\nfileName: string\nnumberOfUses: string\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);