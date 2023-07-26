"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3982],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,u=m["".concat(c,".").concat(k)]||m[k]||p[k]||l;return a?o.createElement(u,s(s({ref:t},i),{},{components:a})):o.createElement(u,s({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=k;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[m]="string"==typeof e?e:n,s[1]=r;for(var d=2;d<l;d++)s[d]=a[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},75764:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>k});var o=a(87462),n=a(67294),l=a(3905);const s={id:"post",title:"Post",hide_table_of_contents:!1},r=void 0,c={unversionedId:"schema/objects/post",id:"schema/objects/post",title:"Post",description:"No description",source:"@site/docs/schema/objects/post.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/post",permalink:"/docs/schema/objects/post",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/post.mdx",tags:[],version:"current",frontMatter:{id:"post",title:"Post",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PostConnection",permalink:"/docs/schema/objects/post-connection"},next:{title:"Task",permalink:"/docs/schema/objects/task"}},d={},i=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>_id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postb_idbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>text</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postbtextbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>title</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postbtitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>createdAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postbcreatedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>imageUrl</b></code><Bullet /><code>URL</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postbimageurlbcodeurl-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>videoUrl</b></code><Bullet /><code>URL</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postbvideourlbcodeurl-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>creator</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-postbcreatorbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>organization</b></code><Bullet /><code>Organization!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-postborganizationbcodeorganization--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>likedBy</b></code><Bullet /><code>[User]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-postblikedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>comments</b></code><Bullet /><code>[Comment]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-postbcommentsbcodecomment--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>likeCount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postblikecountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Post.<b>commentCount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-postbcommentcountbcodeint-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:r=!1}=e;const[c,d]=(0,n.useState)(r);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&s)},y={Bullet:i,SpecifiedBy:m,Badge:p,toc:k,Details:u},h="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,o.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Post {\n  _id: ID\n  text: String!\n  title: String\n  createdAt: DateTime\n  imageUrl: URL\n  videoUrl: URL\n  creator: User!\n  organization: Organization!\n  likedBy: [User]\n  comments: [Comment]\n  likeCount: Int\n  commentCount: Int\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postb_idbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"_","id"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbtextbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"text"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbtitlebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"title"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbcreatedatbcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbimageurlbcodeurl-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"imageUrl"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/url"},(0,l.kt)("inlineCode",{parentName:"a"},"URL"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbvideourlbcodeurl-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"videoUrl"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/url"},(0,l.kt)("inlineCode",{parentName:"a"},"URL"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbcreatorbcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"creator"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postborganizationbcodeorganization--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"organization"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,l.kt)("inlineCode",{parentName:"a"},"Organization!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postblikedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"likedBy"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"[User]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbcommentsbcodecomment--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"comments"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/comment"},(0,l.kt)("inlineCode",{parentName:"a"},"[Comment]"))," ",(0,l.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postblikecountbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"likeCount"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-postbcommentcountbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Post.",(0,l.kt)("b",null,"commentCount"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-post"},(0,l.kt)("inlineCode",{parentName:"a"},"createPost"))," ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/like-post"},(0,l.kt)("inlineCode",{parentName:"a"},"likePost"))," ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/post"},(0,l.kt)("inlineCode",{parentName:"a"},"post"))," ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/posts-by-organization"},(0,l.kt)("inlineCode",{parentName:"a"},"postsByOrganization"))," ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-post"},(0,l.kt)("inlineCode",{parentName:"a"},"removePost"))," ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/toggle-post-pin"},(0,l.kt)("inlineCode",{parentName:"a"},"togglePostPin"))," ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unlike-post"},(0,l.kt)("inlineCode",{parentName:"a"},"unlikePost"))," ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-post"},(0,l.kt)("inlineCode",{parentName:"a"},"updatePost"))," ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/comment"},(0,l.kt)("inlineCode",{parentName:"a"},"Comment"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization"},(0,l.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/post-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"PostConnection"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);