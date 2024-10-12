"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[73949],{66524:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(85893),r=i(11151);const s={title:"Why MDX Compatibility Script is Necessary",id:"why_mdx_compatibility_script"},o="Why MDX Compatibility Script is Necessary",a={id:"documentation_generation_guide/why_mdx_compatibility_script",title:"Why MDX Compatibility Script is Necessary",description:"mdmdxformat_adjuster.py",source:"@site/docs/documentation_generation_guide/why_mdx_required.md",sourceDirName:"documentation_generation_guide",slug:"/documentation_generation_guide/why_mdx_compatibility_script",permalink:"/docs/documentation_generation_guide/why_mdx_compatibility_script",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/documentation_generation_guide/why_mdx_required.md",tags:[],version:"current",frontMatter:{title:"Why MDX Compatibility Script is Necessary",id:"why_mdx_compatibility_script"},sidebar:"docs",previous:{title:"API Documentation Flow",permalink:"/docs/documentation_generation_guide/api_documentation_flow"},next:{title:"TSDoc comments in Talawa API & Admin",permalink:"/docs/documentation_generation_guide/tsdoc_guide"}},c={},d=[{value:"Purpose of the Script",id:"purpose-of-the-script",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"why-mdx-compatibility-script-is-necessary",children:"Why MDX Compatibility Script is Necessary"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"md_mdx_format_adjuster.py"})}),"\n",(0,n.jsxs)(t.p,{children:["When working with ",(0,n.jsx)(t.strong,{children:"Docusaurus v3"}),", it\u2019s essential to ensure that Markdown files are compatible with MDX (Markdown with JSX). MDX allows us to integrate React components directly within our markdown, providing greater flexibility and interactivity in our documentation. However, certain characters (",(0,n.jsx)(t.code,{children:"<"}),", ",(0,n.jsx)(t.code,{children:">"}),", ",(0,n.jsx)(t.code,{children:"{"}),", ",(0,n.jsx)(t.code,{children:"}"}),") in Markdown files can cause issues when interpreted as JSX syntax, leading to rendering errors."]}),"\n",(0,n.jsx)(t.h2,{id:"purpose-of-the-script",children:"Purpose of the Script"}),"\n",(0,n.jsx)(t.p,{children:"The provided Python script addresses this problem by:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Escaping Special Characters"}),": It scans Markdown files and automatically escapes the problematic characters ",(0,n.jsx)(t.code,{children:"<"}),", ",(0,n.jsx)(t.code,{children:">"}),", ",(0,n.jsx)(t.code,{children:"{"}),", and ",(0,n.jsx)(t.code,{children:"}"}),", ensuring that the files are MDX-compatible."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Maintaining Readability"}),": By avoiding double escaping, the script ensures that the Markdown remains clean and readable."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Automating the Process"}),": It can be run on an entire directory of Markdown files, streamlining the process of making large documentation projects MDX-ready."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(67294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);