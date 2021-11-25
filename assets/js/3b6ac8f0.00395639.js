"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[9706],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9537:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],s={id:"organization",title:"Organization"},l={unversionedId:"talawa-api/constraints/organization",id:"talawa-api/constraints/organization",isDocsHomePage:!1,title:"Organization",description:"What Is An Organization?",source:"@site/docs/talawa-api/constraints/organization.md",sourceDirName:"talawa-api/constraints",slug:"/talawa-api/constraints/organization",permalink:"/talawa-docs/docs/talawa-api/constraints/organization",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/talawa-api/constraints/organization.md",version:"current",frontMatter:{id:"organization",title:"Organization"},sidebar:"someSidebar",previous:{title:"User",permalink:"/talawa-docs/docs/talawa-api/constraints/user"},next:{title:"Admin",permalink:"/talawa-docs/docs/talawa-api/constraints/admin"}},c=[{value:"What Is An <code>Organization</code>?",id:"what-is-an-organization",children:[]},{value:"How to create <code>Organization</code> ?",id:"how-to-create-organization-",children:[]},{value:"<code>Organization</code> Model",id:"organization-model",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-an-organization"},"What Is An ",(0,i.kt)("inlineCode",{parentName:"h2"},"Organization"),"?"),(0,i.kt)("p",null,"An organization is simply a body of one or more people. This includes but isn't limited to businesses, schools and religious institutions. An Organization comprises of ",(0,i.kt)("inlineCode",{parentName:"p"},"Users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrators"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Group chats"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Events")," and a general news feed."),(0,i.kt)("h2",{id:"how-to-create-organization-"},"How to create ",(0,i.kt)("inlineCode",{parentName:"h2"},"Organization")," ?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A user should create an account by signing up with their credentials. Steps for signing up are given ",(0,i.kt)("a",{parentName:"p",href:"../authentication#sign-up"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upon creating an account the necessary information would get stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Database"),". Now to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Organization")," a request should be send to api having given fields."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Organisation Name,"),(0,i.kt)("li",{parentName:"ol"},"Privacy Settings (Public Or Private)"),(0,i.kt)("li",{parentName:"ol"},"Primary Contact Information"),(0,i.kt)("li",{parentName:"ol"},"Organisation Address (If applicable)")))),(0,i.kt)("h2",{id:"organization-model"},(0,i.kt)("inlineCode",{parentName:"h2"},"Organization")," Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiUrl: string\nimage: string\nname: string\ndescription: string\nisPublic: string\ncreator: string\nmembers: [User]\nadmins: [User]\ngroupChats: [Message]\nposts: [Post]\nmembershipRequest: [MembershipRequest]\nblockedUser: [User]\nvisibleInSearch: boolean\n")))}u.isMDXComponent=!0}}]);