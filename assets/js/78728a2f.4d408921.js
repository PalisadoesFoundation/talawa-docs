"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[22987],{83286:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(85893),r=o(11151);const a={},c="Collaborate",l={id:"git-guide/collaborate",title:"Collaborate",description:"Fetching work of other Contributors",source:"@site/docs/git-guide/collaborate.md",sourceDirName:"git-guide",slug:"/git-guide/collaborate",permalink:"/docs/git-guide/collaborate",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/git-guide/collaborate.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Create a pull request",permalink:"/docs/git-guide/pullrequest"},next:{title:"Working copies",permalink:"/docs/git-guide/Workingcopies/"}},i={},s=[{value:"Fetching work of other Contributors",id:"fetching-work-of-other-contributors",level:2},{value:"Check out a Pull request locally",id:"check-out-a-pull-request-locally",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"collaborate",children:"Collaborate"}),"\n",(0,n.jsx)(t.h2,{id:"fetching-work-of-other-contributors",children:"Fetching work of other Contributors"}),"\n",(0,n.jsx)(t.p,{children:"At Talawa, We love collaboration and coordination amongst contributors. What happens when you would like to collaborate with another contributor and they have some work done in their own fork of Talawa? No problem! Just add their fork as a remote and Pull their changes."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git remote add <username> https://github.com/<username>/talawa-docs.git\n$ git fetch <username>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now you can check out their branch just like you would any other. You can name the branch anything you want, but using both the username and branch name will help you keep things organized."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git checkout -b <username>/<branchname>\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can choose to rename the branch if you prefer:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git checkout -b <custombranchname> <username>/<branchname>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"check-out-a-pull-request-locally",children:"Check out a Pull request locally"}),"\n",(0,n.jsxs)(t.p,{children:["We saw above how to fetch a user's branch locally. you can also check out any pull request locally. Github provides a special method ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally",children:"details"})," for this since pull requests are specific to Github rather than Git."]}),"\n",(0,n.jsxs)(t.p,{children:["First, fetch and create a branch for the pull request, replacing ",(0,n.jsx)(t.strong,{children:"ID"})," and ",(0,n.jsx)(t.strong,{children:"BRANCHNAME"})," with the ID of the pull request and your desired branch name:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git fetch upstream pull/ID/head:BRANCHNAME\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now switch to the branch"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git checkout BRANCHNAME\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now you can work on this branch as you normally work in other branch."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>c});var n=o(67294);const r={},a=n.createContext(r);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);