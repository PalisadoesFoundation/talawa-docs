"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={id:"core-functionalities",title:"Core Functionalities"},o=void 0,l={unversionedId:"functionalities/core-functionalities",id:"functionalities/core-functionalities",title:"Core Functionalities",description:"The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable.",source:"@site/docs/functionalities/core-functionalities.md",sourceDirName:"functionalities",slug:"/functionalities/core-functionalities",permalink:"/docs/functionalities/core-functionalities",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/functionalities/core-functionalities.md",tags:[],version:"current",frontMatter:{id:"core-functionalities",title:"Core Functionalities"},sidebar:"someSidebar",previous:{title:"Plugin Examples",permalink:"/docs/developers/talawa-admin/plugins/implementing-plugins-example"},next:{title:"Introduction",permalink:"/docs/features/features-introduction"}},s={},c=[{value:"User Registration",id:"user-registration",level:2},{value:"Description",id:"description",level:3},{value:"Front End",id:"front-end",level:3},{value:"Back End",id:"back-end",level:3},{value:"Events",id:"events",level:2},{value:"Description",id:"description-1",level:3},{value:"Front End",id:"front-end-1",level:3},{value:"General News Feed",id:"general-news-feed",level:2},{value:"Description",id:"description-2",level:3},{value:"Front End",id:"front-end-2",level:3},{value:"Group Chat",id:"group-chat",level:2},{value:"Description",id:"description-3",level:3},{value:"Front End",id:"front-end-3",level:3},{value:"Switch Between Organizations",id:"switch-between-organizations",level:2},{value:"Description",id:"description-4",level:3},{value:"Front End",id:"front-end-4",level:3},{value:"Back End",id:"back-end-1",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable. ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before we can add any new functionality. The refactored app needs to meet these basic requirements on which the original application was based.")),(0,a.kt)("h2",{id:"user-registration"},"User Registration"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This is the ability to register in the app with an organisation. Once the user is successfully registered as a member of an organisation they are then able to interact with, app events and other content related to the organisation."),(0,a.kt)("h3",{id:"front-end"},"Front End"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login Screen"),(0,a.kt)("li",{parentName:"ol"},"Registration screen: the user can specify an organization ID and/or servername"),(0,a.kt)("li",{parentName:"ol"},"Display of existing organizations based on a registration URL"),(0,a.kt)("li",{parentName:"ol"},"Currently organizations can be created in the app")),(0,a.kt)("h3",{id:"back-end"},"Back End"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The following endpoints presently exist:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User signup and login (authentication)"),(0,a.kt)("li",{parentName:"ol"},"User joining organizations"),(0,a.kt)("li",{parentName:"ol"},"Create an organization"),(0,a.kt)("li",{parentName:"ol"},"Add an admin to an organization")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The following functionalities presently exist:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Users are able using their email and password."),(0,a.kt)("li",{parentName:"ol"},"After logging in for the first time the user can search for the organization he wishes to join "),(0,a.kt)("li",{parentName:"ol"},"After membership to the organisation is verified the user is able to join the organization"),(0,a.kt)("li",{parentName:"ol"},"An administrator is able to create an organisation when he logs in for the first time")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"description-1"},"Description"),(0,a.kt)("p",null,"These are scheduled events managed by coordinators and administrators of an organisation. Information related to events in the organisation are monitored via the organisation's newsfeed by members of the organisation. "),(0,a.kt)("h3",{id:"front-end-1"},"Front End"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Organisation list"),(0,a.kt)("li",{parentName:"ol"},"Events list screen"),(0,a.kt)("li",{parentName:"ol"},"User is able to create single and recurring events with primary contacts as well as users with other responsibilities assigned to them"),(0,a.kt)("li",{parentName:"ol"},"User should be able to register for an event, if necessary"),(0,a.kt)("li",{parentName:"ol"},"User is able to create projects related to any event",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Create tasks for any of the event roles"),(0,a.kt)("li",{parentName:"ol"},"Set deadlines for completing assigned tasks"))),(0,a.kt)("li",{parentName:"ol"},"User can view the event and  project details",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Automatic group chat is created for persons within an event")))),(0,a.kt)("h2",{id:"general-news-feed"},"General News Feed"),(0,a.kt)("h3",{id:"description-2"},"Description"),(0,a.kt)("p",null,"This is the ability to post and interact with content to a live newsfeed for an organisation"),(0,a.kt)("h3",{id:"front-end-2"},"Front End"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"User is able to create and share posts including text, photos and videos to an event under the organisation to which he is a member"),(0,a.kt)("li",{parentName:"ol"},"User can view posts made by all other members of the organization ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"All members can like and comment on these posts ")))),(0,a.kt)("h2",{id:"group-chat"},"Group Chat"),(0,a.kt)("h3",{id:"description-3"},"Description"),(0,a.kt)("p",null,"This is the ability to chat from within the Talawa app with multiple members of the same organisation"),(0,a.kt)("h3",{id:"front-end-3"},"Front End"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Any user can create a group chat."),(0,a.kt)("li",{parentName:"ol"},"Events automatically have a group chat"),(0,a.kt)("li",{parentName:"ol"},"Members of an organization are able to send messages to each other in group chats")),(0,a.kt)("h2",{id:"switch-between-organizations"},"Switch Between Organizations"),(0,a.kt)("h3",{id:"description-4"},"Description"),(0,a.kt)("p",null,"Users can belong to multiple organizations, however they cannot create their own. This is an admin feature. This is the ability for users to create their own organizations needs to be removed."),(0,a.kt)("h3",{id:"front-end-4"},"Front End"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Organisation list screen ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"User is able to switch between organisations"))),(0,a.kt)("li",{parentName:"ol"},"Create or join organisation screen  ")),(0,a.kt)("h3",{id:"back-end-1"},"Back End"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The following functionalities are allowed via routes")," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change the current organization for the user"),(0,a.kt)("li",{parentName:"ol"},"Get information regarding current organization")))}u.isMDXComponent=!0}}]);