"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[53197],{55302:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(85893),r=i(11151);const s={id:"core-functionalities",title:"Core Functionalities"},o=void 0,a={id:"functionalities/core-functionalities",title:"Core Functionalities",description:"The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable.",source:"@site/docs/functionalities/core-functionalities.md",sourceDirName:"functionalities",slug:"/functionalities/core-functionalities",permalink:"/docs/functionalities/core-functionalities",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/functionalities/core-functionalities.md",tags:[],version:"current",frontMatter:{id:"core-functionalities",title:"Core Functionalities"},sidebar:"docs",previous:{title:"Existing Features",permalink:"/docs/category/existing-features"},next:{title:"Recurring Events",permalink:"/docs/functionalities/recurring-events"}},l={},c=[{value:"User Registration",id:"user-registration",level:2},{value:"Description",id:"description",level:3},{value:"Front End",id:"front-end",level:3},{value:"Back End",id:"back-end",level:3},{value:"Events",id:"events",level:2},{value:"Description",id:"description-1",level:3},{value:"Front End",id:"front-end-1",level:3},{value:"General News Feed",id:"general-news-feed",level:2},{value:"Description",id:"description-2",level:3},{value:"Front End",id:"front-end-2",level:3},{value:"Group Chat",id:"group-chat",level:2},{value:"Description",id:"description-3",level:3},{value:"Front End",id:"front-end-3",level:3},{value:"Switch Between Organizations",id:"switch-between-organizations",level:2},{value:"Description",id:"description-4",level:3},{value:"Front End",id:"front-end-4",level:3},{value:"Back End",id:"back-end-1",level:3}];function d(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Before we can add any new functionality. The refactored app needs to meet these basic requirements on which the original application was based."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"user-registration",children:"User Registration"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This is the ability to register in the app with an organization. Once the user is successfully registered as a member of an organization, they are then able to interact with app events and other content related to the organization."}),"\n",(0,t.jsx)(n.h3,{id:"front-end",children:"Front End"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login Screen"}),"\n",(0,t.jsx)(n.li,{children:"Registration screen: the user can specify an organization ID and/or servername"}),"\n",(0,t.jsx)(n.li,{children:"Display of existing organizations based on a registration URL"}),"\n",(0,t.jsx)(n.li,{children:"Currently organizations can be created in the app"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"back-end",children:"Back End"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The following endpoints presently exist:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"User signup and login (authentication)"}),"\n",(0,t.jsx)(n.li,{children:"User joining organizations"}),"\n",(0,t.jsx)(n.li,{children:"Create an organization"}),"\n",(0,t.jsx)(n.li,{children:"Add an admin to an organization"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The following functionalities presently exist:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Users are able using their email and password."}),"\n",(0,t.jsx)(n.li,{children:"After logging in for the first time the user can search for the organization he wishes to join"}),"\n",(0,t.jsx)(n.li,{children:"After membership to the organization is verified the user is able to join the organization"}),"\n",(0,t.jsx)(n.li,{children:"An administrator is able to create an organization when he logs in for the first time"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"These are scheduled events managed by coordinators and administrators of an organization. Information related to events in the organization are monitored via the organization's newsfeed by members of the organization."}),"\n",(0,t.jsx)(n.h3,{id:"front-end-1",children:"Front End"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Organization list"}),"\n",(0,t.jsx)(n.li,{children:"Events list screen"}),"\n",(0,t.jsx)(n.li,{children:"User is able to create single and recurring events with primary contacts as well as users with other responsibilities assigned to them"}),"\n",(0,t.jsx)(n.li,{children:"User should be able to register for an event, if necessary"}),"\n",(0,t.jsxs)(n.li,{children:["User is able to create projects related to any event","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create tasks for any of the event roles"}),"\n",(0,t.jsx)(n.li,{children:"Set deadlines for completing assigned tasks"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["User can view the event and project details","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Automatic group chat is created for persons within an event"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"general-news-feed",children:"General News Feed"}),"\n",(0,t.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This is the ability to post and interact with content to a live newsfeed for an organization"}),"\n",(0,t.jsx)(n.h3,{id:"front-end-2",children:"Front End"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"User is able to create and share posts including text, photos and videos to an event under the organization to which he is a member"}),"\n",(0,t.jsxs)(n.li,{children:["User can view posts made by all other members of the organization","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"All members can like and comment on these posts"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"group-chat",children:"Group Chat"}),"\n",(0,t.jsx)(n.h3,{id:"description-3",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This is the ability to chat from within the Talawa app with multiple members of the same organization"}),"\n",(0,t.jsx)(n.h3,{id:"front-end-3",children:"Front End"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Any user can create a group chat."}),"\n",(0,t.jsx)(n.li,{children:"Events automatically have a group chat"}),"\n",(0,t.jsx)(n.li,{children:"Members of an organization are able to send messages to each other in group chats"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"switch-between-organizations",children:"Switch Between Organizations"}),"\n",(0,t.jsx)(n.h3,{id:"description-4",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Users can belong to multiple organizations; however, they cannot create their own. This is an admin feature. This is the ability for users to create their own organizations needs to be removed."}),"\n",(0,t.jsx)(n.h3,{id:"front-end-4",children:"Front End"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Organization list screen","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"User is able to switch between organizations"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Create or join organization screen"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"back-end-1",children:"Back End"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The following functionalities are allowed via routes"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Change the current organization for the user"}),"\n",(0,t.jsx)(n.li,{children:"Get information regarding current organization"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);