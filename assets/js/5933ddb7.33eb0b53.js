"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[37],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=i,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3805:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={id:"gsod-ideas",title:"GSoD Project Proposal and Ideas Page"},r=void 0,s={unversionedId:"internships/gsod/gsod-ideas",id:"internships/gsod/gsod-ideas",title:"GSoD Project Proposal and Ideas Page",description:"Revamping and restructuring the Talawa Docs",source:"@site/docs/internships/gsod/ideas.md",sourceDirName:"internships/gsod",slug:"/internships/gsod/gsod-ideas",permalink:"/docs/internships/gsod/gsod-ideas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/internships/gsod/ideas.md",tags:[],version:"current",frontMatter:{id:"gsod-ideas",title:"GSoD Project Proposal and Ideas Page"},sidebar:"someSidebar",previous:{title:"Applying",permalink:"/docs/internships/gsoc/gsoc-application-process"},next:{title:"Palisadoes Unpaid Internship",permalink:"/docs/internships/palisadoes/palisadoes-introduction"}},l={},d=[{value:"Revamping and restructuring the Talawa Docs",id:"revamping-and-restructuring-the-talawa-docs",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Our Project&#39;s Problem",id:"our-projects-problem",level:3},{value:"Project Scope",id:"project-scope",level:3},{value:"Measuring the project&#39;s success",id:"measuring-the-projects-success",level:3},{value:"Timeline",id:"timeline",level:3},{value:"Budget",id:"budget",level:3},{value:"General Considerations",id:"general-considerations",level:3},{value:"Repository Languages and Skills",id:"repository-languages-and-skills",level:3},{value:"Ideas List",id:"ideas-list",level:2},{value:"Add Base Documentation for each Repository (Talawa, Talawa-API and Talawa-Admin)",id:"add-base-documentation-for-each-repository-talawa-talawa-api-and-talawa-admin",level:3},{value:"Create How-To Guides and Tutorials for getting started with Talawa, Talawa API and Talawa-Admin",id:"create-how-to-guides-and-tutorials-for-getting-started-with-talawa-talawa-api-and-talawa-admin",level:3},{value:"Create visualisations for various GraphQL Schema and Queries",id:"create-visualisations-for-various-graphql-schema-and-queries",level:3},{value:"Revamp and Restructure the Current Documentation Page",id:"revamp-and-restructure-the-current-documentation-page",level:3}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"revamping-and-restructuring-the-talawa-docs"},"Revamping and restructuring the Talawa Docs"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Welcome to our project proposal and ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards."),(0,i.kt)("p",null,"We need to reduce the learning curve of contributors and sysadmins alike. Our documentation projects make our main repositories easier to use and therefore help us meet this goal."),(0,i.kt)("h3",{id:"our-projects-problem"},"Our Project's Problem"),(0,i.kt)("p",null,"Due to the influx of pull requests we receive on a weekly basis, we have created CI/CD pipelines to automate the documentation process. It works as follows, and is illustrated by the proceeding figure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Whenever a pull request is made, a GitHub Action checks whether Javascript/Dart files being pushed have comments of a specified form.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If a pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file that contains the documentation from the comments and then sent to the Talawa-Docs repo.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, a GitHub Action collates and organizes the HTML files within a prespecificed template containing the documentation that is then added to the site."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://wordpress.com/",title:"GSoD 2022 Workflow"},(0,i.kt)("img",{alt:"alt text",src:a(4690).Z,width:"3074",height:"2122"}))),(0,i.kt)("p",null,"However, since this pipeline has been put in place there has not been much activity on the bulk of the older files, leaving most of the documentation lacking in our three codebases. The majority of the code is undocumented or badly documented and is not growing in an organic manner with our ever increasing codebase. Our goal is to ameliorate this problem through the creation/refinement constructing documentation for our repositories which is extensive enough to account for the latest features and developments, such that we are in a good position for further development with the pipelines already in place. Furthermore, we need to make it straightforward for first time contributors to become productive with our repositories."),(0,i.kt)("h3",{id:"project-scope"},"Project Scope"),(0,i.kt)("p",null,"The Talawa project aims to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Audit the existing documentation and note the areas within the respective codebase(s) where the documentation specifically needs to be improved.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use a friction log to determine the pains within the existing documentation. This can be done from the viewpoints of multiple users as more experienced users may \u2018miss\u2019 aspects that can affect first time contributors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Assess where within the documentation would benefit from the addition of a diagram or illustration of complex relationships such as GraphQL schema and queries. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Maintaining a public log of all progress/hurdles made/encountered and write up a summary of any disparity between the expected and actual project outcomes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Coordinating with others on partially automated conversion from HTML to pdf and Markdown, and vice-versa, using pandoc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Coordinating with others on any feedback and issues identified."))),(0,i.kt)("p",null,"Outside of this project's scope is modifying the existing automation architecture and/or any form of testing and verification."),(0,i.kt)("h3",{id:"measuring-the-projects-success"},"Measuring the project's success"),(0,i.kt)("p",null,"Ideally, if the majority of our files containing code have adequate documentation in the form of comments which can be parsed by the documentation generating libraries we use (jsdoc, dartdoc, etc) then this would give us a rough estimate of the total coverage we have for documentation for a given repository. We have scripts in place to measure how much of the code is documented in the form that we desire.\nAfter the new documentation has been published we will consider the project a success if :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The number of pull requests on any and/or all of three repos increases by 30% more than it is currently from dedicated users.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We see a significant uptick on the number of new users contributing to the repositories, around 30-40%.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The number of documentation related pull requests increase by ~20%."))),(0,i.kt)("h3",{id:"timeline"},"Timeline"),(0,i.kt)("p",null,"The project itself will take around six months to complete. Once the tech writer(s) are hired, we'll spend a month getting them up to speed on the state of the documentation, the workflows we use for creating documentation and then move onto the audit and friction log with the possible mentors, and spend the remaining months focusing on creating the documentation."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Dates"),(0,i.kt)("th",{parentName:"tr",align:null},"Action items"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"May"),(0,i.kt)("td",{parentName:"tr",align:null},"Orientation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"June-July"),(0,i.kt)("td",{parentName:"tr",align:null},"Audit current documentation; note the pain points with mentor input; highlight where in the existing infrastructure would benefit from illustrations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"August - October"),(0,i.kt)("td",{parentName:"tr",align:null},"Begin working on documenting Talawa")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"November"),(0,i.kt)("td",{parentName:"tr",align:null},"Project completion and final report due")))),(0,i.kt)("p",null,"This timeline, especially within the May-July period, is not strict and has some room for unforeseen circumstances that may arise. However, it is expected that you'll complete all the requiste tasks within the intervals posted and have everything completed by the November deadline."),(0,i.kt)("h3",{id:"budget"},"Budget"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Amount"),(0,i.kt)("th",{parentName:"tr",align:null},"Running total"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Technical Writers (x2)"),(0,i.kt)("td",{parentName:"tr",align:null},"10000"),(0,i.kt)("td",{parentName:"tr",align:null},"10000"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Volunteer Stipends"),(0,i.kt)("td",{parentName:"tr",align:null},"2000"),(0,i.kt)("td",{parentName:"tr",align:null},"12000"),(0,i.kt)("td",{parentName:"tr",align:null},"4 volunteer stipends at $500 each")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Graphic design - architecture diagrams, and visuals to accompany documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"13000"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Printed Palisadoes Foundation T-shirts (10 T-shirts)"),(0,i.kt)("td",{parentName:"tr",align:null},"120"),(0,i.kt)("td",{parentName:"tr",align:null},"13120"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sundry expenses"),(0,i.kt)("td",{parentName:"tr",align:null},"394"),(0,i.kt)("td",{parentName:"tr",align:null},"13514"),(0,i.kt)("td",{parentName:"tr",align:null},"3% payment processing  fees")))),(0,i.kt)("p",null,"Additional information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Palisadoes Foundation was selected for Google Summer of Code (GSoC) 2022, and was previously selected for GSoC in 2021. We were able to make a number of leaps and bounds during the 2021 editions which resulted in a massive codebase that is severely undocumented. During this time, the Palisadoes Foundation was also selected for the ",(0,i.kt)("a",{parentName:"li",href:"https://externship.github.in/"},"Github externship")," on three separate occasions.")),(0,i.kt)("h3",{id:"general-considerations"},"General Considerations"),(0,i.kt)("p",null,"This is not an exhaustive list of ideas, but they are the ones we currently feel need the most attention."),(0,i.kt)("p",null,'We also welcome any other ideas that we could use. Please review the "Desired Features" section of this website for ',(0,i.kt)("strong",{parentName:"p"},"even more ideas")," and further necessary information."),(0,i.kt)("h3",{id:"repository-languages-and-skills"},"Repository Languages and Skills"),(0,i.kt)("p",null,"We are looking for motivated candidates with a history of strong, demonstratable technical writing skills that can provide structure and organization to our codebases. It is not necessary to be well-versed in the tech stack being used for a given repository though some familiarity would be seen as a positive. Our mentors will provide ample support in a 'learn as you go' fashion."),(0,i.kt)("p",null,"The following lists the primary tech stack being used for each respective repository which is helpful for the purpose of documenting each repository (but you are not required to know them):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Talawa:")," Flutter / Dart, GraphQL"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Talawa-API:")," Node.js, GraphQL, MongoDB"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Talawa-Admin Portal:")," TypeScript, Node.js")),(0,i.kt)("p",null,"There are others, but these are the main ones that will guide your contributions."),(0,i.kt)("h2",{id:"ideas-list"},"Ideas List"),(0,i.kt)("p",null,"Here are the features we'd like to implement in the coming months."),(0,i.kt)("h3",{id:"add-base-documentation-for-each-repository-talawa-talawa-api-and-talawa-admin"},"Add Base Documentation for each Repository (Talawa, Talawa-API and Talawa-Admin)"),(0,i.kt)("p",null,"Since the introduction of the CI/CD pipeline for automating documentation, there has not been much activity on the bulk of the older files, leaving most of the three codebases lacking in documentation. The goal of this task is to add comments on all of the existing methods, events and namespaces of all the classes within the Talawa, Talawa-Admin and Talawa API."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa-API, Talawa, Talawa-Admin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should be familiar with Javascript and in particular Node.js. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How we measure sucess:")," Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Possible Mentors:")," Shannika Jackson, Dominic Mills, Michael Lue, Tasneem Koushar  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,i.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))),(0,i.kt)("h3",{id:"create-how-to-guides-and-tutorials-for-getting-started-with-talawa-talawa-api-and-talawa-admin"},"Create How-To Guides and Tutorials for getting started with Talawa, Talawa API and Talawa-Admin"),(0,i.kt)("p",null,"Currently, there exists no truly detailed guide on how to get setup and become productive within the basic ecosystems of Talawa, Talawa-API and Talawa-Admin. There are a number of resources available, such as videos demonstrating features from merged pull requests in the respective repositories as well as notes that need to be structured and organised in a meaningful way for a prospective user to be productive with the codebase."),(0,i.kt)("p",null,"Ideally, we aim to have the following accomplished (though this list is not exhaustive):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Improve documentation readability by ensuring the language is accessible by individuals regardless of their language background. This can consist of separating it into two distinct levels, namely: beginners and advanced."),(0,i.kt)("li",{parentName:"ol"},"Construct a guide and style format for new technical writers/contributors, to keep the documentation organic with the codebase, up to date and adhering to our standards."),(0,i.kt)("li",{parentName:"ol"},"Teaching beginners how to document code optimally and effectively with best practices. In addition to this, include detailed videos and tutorials on using the application, connecting to the API, etc.")),(0,i.kt)("p",null,"Additional information follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa-API, Talawa, Talawa-Admin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should be familiar with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How we measure sucess:")," The creation of tutorials and hot-to guides in different forms (static HTML pages, pdfs, etc). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Possible Mentors:")," Shannika Jackson, Dominic Mills, Michael Lue, Tasneem Koushar "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,i.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))),(0,i.kt)("h3",{id:"create-visualisations-for-various-graphql-schema-and-queries"},"Create visualisations for various GraphQL Schema and Queries"),(0,i.kt)("p",null,"The Talawa API has a number of GraphQL queries which are undocumented and have become  increasingly complex and interlinked. We need a way to package these details in a more fitting manner for anyone interested in working on this. We require creating written documentation punctuated with code snippets to give a top level overview of the use and functionality of these schema and queries and then using graphical software such as ",(0,i.kt)("a",{parentName:"p",href:"https://graphviz.org/"},"GraphViz")," to highlight the relationships between these various queries and schema.   "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa-API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skills Required:")," The ideal candidate should be familiar with Node.js; GraphQL is not a strict requirement, but they must be willing to learn. Additionally, they need to be comfortable with using Git/Github. Experience in Illustration or graphic design is a plus."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How we measure sucess:")," Visualisations present through the base documentation and any new documentation generated from this program."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Possible Mentors:")," Shannika Jackson, Dominic Mills, Michael Lue, Tasneem Koushar "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,i.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))),(0,i.kt)("h3",{id:"revamp-and-restructure-the-current-documentation-page"},"Revamp and Restructure the Current Documentation Page"),(0,i.kt)("p",null,"The website that currently hosts the documentation is rather simplistic and has not evolved from when the Talawa application was more refined than it is now. It no longer takes into consideration the needs of contributing to a complex, multi-layered application, and as such it needs to be remodelled and redesigned to account for a number of changes that have and are currently taking place. Remodelling involves re-writing much of the documentation already in place on the site, as well as, working with a candidate that may be adding to the documentation and ensuring that templates are in place such that the look and feel of the site is cogent and consistent. Note: it is possible to work on this task in conjunction with another one of the aforementioned tasks here.."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repos to update:")," Talawa-API"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skills Required:")," HTML, Javascript, CSS. Any design skills would be a plus. Must also be comfortable using Github to submit changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"How we measure sucess:")," A website structured in a completely different manner, which is more efficient and effective in providing the information for a user wishing contribute to Talawa. This can be measured by the increase in new contributors via pull requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Possible Mentors:")," Shannika Jackson, Dominic Mills, Michael Lue, Tasneem Koushar "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact details:")," Send your CV along with at least two technical writing samples to ",(0,i.kt)("img",{alt:"img",src:a(171).Z,width:"225",height:"20"}))))}c.isMDXComponent=!0},171:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gsod-2022-975b604292776a6d1368c8374f3a2ea8.jpg"}}]);