"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[36309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),g=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=g(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=g(n),p=i,m=l["".concat(d,".").concat(p)]||l[p]||u[p]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var g=2;g<r;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var a=n(87462),i=(n(67294),n(3905));const r={},o="Stage additions with git add",s={unversionedId:"git-guide/Git working/Stage changes/stage-additions",id:"git-guide/Git working/Stage changes/stage-additions",title:"Stage additions with git add",description:"To add changes to your staging area, use `git add `. Because `git add` is all about staging the changes you want to commit, you use it to add new files as well as files with changes to your staging area.",source:"@site/docs/git-guide/Git working/Stage changes/stage-additions.md",sourceDirName:"git-guide/Git working/Stage changes",slug:"/git-guide/Git working/Stage changes/stage-additions",permalink:"/docs/git-guide/Git working/Stage changes/stage-additions",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/git-guide/Git working/Stage changes/stage-additions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Get status of working directory",permalink:"/docs/git-guide/Git working/Stage changes/status"},next:{title:"Stage deletions with git rm",permalink:"/docs/git-guide/Git working/Stage changes/stage-deletions"}},d={},g=[],c={toc:g},l="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stage-additions-with-git-add"},"Stage additions with ",(0,i.kt)("inlineCode",{parentName:"h1"},"git add")),(0,i.kt)("p",null,"To add changes to your staging area, use ",(0,i.kt)("inlineCode",{parentName:"p"},"git add <filename>"),". Because ",(0,i.kt)("inlineCode",{parentName:"p"},"git add")," is all about staging the changes you want to commit, you use it to add new files as well as files with changes to your staging area."),(0,i.kt)("p",null,"Continuing our above example, after we run ",(0,i.kt)("inlineCode",{parentName:"p"},"git add docs/introduction.md"),", we'll see the following from ",(0,i.kt)("inlineCode",{parentName:"p"},"git status"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nOn branch issue-178-docsissue\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n  new file:  docs/introduction.md\n\n')),(0,i.kt)("p",null,"You can view the changes in files you have staged with ",(0,i.kt)("inlineCode",{parentName:"p"},"git diff --cached"),". To view changes to files you haven\u2019t yet staged, just ",(0,i.kt)("inlineCode",{parentName:"p"},"use git diff"),"."),(0,i.kt)("p",null,"If you want to add all changes in the working directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"use git add -A")," ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-add"},"(documentation)"),"."),(0,i.kt)("p",null,"If you stage a file, you can undo it with ",(0,i.kt)("inlineCode",{parentName:"p"},"git reset HEAD <filename>"),". Here\u2019s an example where we stage a file ",(0,i.kt)("inlineCode",{parentName:"p"},"test2.md")," and then unstage it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ git add test2.md\nOn branch issue-234\nChanges to be commited:\n   (use "git reset HEAD <file>..." to unstage)\n\n   new file: test2.md\n\n$ git reset HEAD test2.md\n$ git status\nOn branch issue-234\nUntracked files:\n   (use "git add <file>..." to include in what will be commited)\n\n   test2.md\n\nnothing added to commit but untracked files present (use "git add" to track)\n')))}u.isMDXComponent=!0}}]);