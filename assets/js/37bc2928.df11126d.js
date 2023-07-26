"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[65655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=s,g=m["".concat(d,".").concat(p)]||m[p]||k[p]||o;return a?n.createElement(g,r(r({ref:t},i),{},{components:a})):n.createElement(g,r({ref:t},i))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:s,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93744:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=a(87462),s=a(67294),o=a(3905);const r={id:"user",title:"User",hide_table_of_contents:!1},l=void 0,d={unversionedId:"schema/objects/user",id:"schema/objects/user",title:"User",description:"No description",source:"@site/docs/schema/objects/user.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user",permalink:"/docs/schema/objects/user",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/user.mdx",tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserTagsConnection",permalink:"/docs/schema/objects/user-tags-connection"},next:{title:"UsersConnectionResult",permalink:"/docs/schema/objects/users-connection-result"}},c={},i=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>tokenVersion</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbtokenversionbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>_id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userb_idbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>firstName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbfirstnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>lastName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userblastnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>email</b></code><Bullet /><code>EmailAddress!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbemailbcodeemailaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>userType</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbusertypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>appLanguageCode</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbapplanguagecodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>createdOrganizations</b></code><Bullet /><code>[Organization]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbcreatedorganizationsbcodeorganization--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>joinedOrganizations</b></code><Bullet /><code>[Organization]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbjoinedorganizationsbcodeorganization--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>createdEvents</b></code><Bullet /><code>[Event]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbcreatedeventsbcodeevent--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>registeredEvents</b></code><Bullet /><code>[Event]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbregisteredeventsbcodeevent--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>eventAdmin</b></code><Bullet /><code>[Event]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbeventadminbcodeevent--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>adminFor</b></code><Bullet /><code>[Organization]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbadminforbcodeorganization--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>membershipRequests</b></code><Bullet /><code>[MembershipRequest]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbmembershiprequestsbcodemembershiprequest--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>organizationsBlockedBy</b></code><Bullet /><code>[Organization]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userborganizationsblockedbybcodeorganization--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>image</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbimagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>organizationUserBelongsTo</b></code><Bullet /><code>Organization</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userborganizationuserbelongstobcodeorganization-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>pluginCreationAllowed</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbplugincreationallowedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>adminApproved</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbadminapprovedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>assignedTasks</b></code><Bullet /><code>[Task]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbassignedtasksbcodetask--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>createdAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbcreatedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>tagsAssignedWith</b></code><Bullet /><code>UserTagsConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbtagsassignedwithbcodeusertagsconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.tagsAssignedWith.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertagsassignedwithbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>User.tagsAssignedWith.<b>first</b></code><Bullet /><code>PositiveInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertagsassignedwithbfirstbcodepositiveint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>User.tagsAssignedWith.<b>last</b></code><Bullet /><code>PositiveInt</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertagsassignedwithblastbcodepositiveint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>User.tagsAssignedWith.<b>organizationId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usertagsassignedwithborganizationidbcodeid-",level:5},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[d,c]=(0,s.useState)(l);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&r)},u={Bullet:i,SpecifiedBy:m,Badge:k,toc:p,Details:g},y="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  tokenVersion: Int!\n  _id: ID!\n  firstName: String!\n  lastName: String!\n  email: EmailAddress!\n  userType: String\n  appLanguageCode: String!\n  createdOrganizations: [Organization]\n  joinedOrganizations: [Organization]\n  createdEvents: [Event]\n  registeredEvents: [Event]\n  eventAdmin: [Event]\n  adminFor: [Organization]\n  membershipRequests: [MembershipRequest]\n  organizationsBlockedBy: [Organization]\n  image: String\n  organizationUserBelongsTo: Organization\n  pluginCreationAllowed: Boolean\n  adminApproved: Boolean\n  assignedTasks: [Task]\n  createdAt: DateTime\n  tagsAssignedWith(\n    after: String\n    before: String\n    first: PositiveInt\n    last: PositiveInt\n    organizationId: ID\n  ): UserTagsConnection\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbtokenversionbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"tokenVersion"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userb_idbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"_","id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbfirstnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"firstName"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userblastnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"lastName"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbemailbcodeemailaddress--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"email"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/email-address"},(0,o.kt)("inlineCode",{parentName:"a"},"EmailAddress!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbusertypebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"userType"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbapplanguagecodebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"appLanguageCode"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbcreatedorganizationsbcodeorganization--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"createdOrganizations"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,o.kt)("inlineCode",{parentName:"a"},"[Organization]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbjoinedorganizationsbcodeorganization--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"joinedOrganizations"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,o.kt)("inlineCode",{parentName:"a"},"[Organization]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbcreatedeventsbcodeevent--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"createdEvents"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"[Event]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbregisteredeventsbcodeevent--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"registeredEvents"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"[Event]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbeventadminbcodeevent--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"eventAdmin"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"[Event]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbadminforbcodeorganization--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"adminFor"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,o.kt)("inlineCode",{parentName:"a"},"[Organization]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbmembershiprequestsbcodemembershiprequest--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"membershipRequests"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/membership-request"},(0,o.kt)("inlineCode",{parentName:"a"},"[MembershipRequest]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userborganizationsblockedbybcodeorganization--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"organizationsBlockedBy"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,o.kt)("inlineCode",{parentName:"a"},"[Organization]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbimagebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"image"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userborganizationuserbelongstobcodeorganization-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"organizationUserBelongsTo"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/organization"},(0,o.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbplugincreationallowedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"pluginCreationAllowed"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbadminapprovedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"adminApproved"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbassignedtasksbcodetask--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"assignedTasks"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/task"},(0,o.kt)("inlineCode",{parentName:"a"},"[Task]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbcreatedatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbtagsassignedwithbcodeusertagsconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,o.kt)("b",null,"tagsAssignedWith"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"../../../docs/schema/objects/user-tags-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"UserTagsConnection"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-usertagsassignedwithbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.tagsAssignedWith.",(0,o.kt)("b",null,"after"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-usertagsassignedwithbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.tagsAssignedWith.",(0,o.kt)("b",null,"before"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"../../../docs/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-usertagsassignedwithbfirstbcodepositiveint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.tagsAssignedWith.",(0,o.kt)("b",null,"first"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"../../../docs/schema/scalars/positive-int"},(0,o.kt)("inlineCode",{parentName:"a"},"PositiveInt"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-usertagsassignedwithblastbcodepositiveint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.tagsAssignedWith.",(0,o.kt)("b",null,"last"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"../../../docs/schema/scalars/positive-int"},(0,o.kt)("inlineCode",{parentName:"a"},"PositiveInt"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-usertagsassignedwithborganizationidbcodeid-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"User.tagsAssignedWith.",(0,o.kt)("b",null,"organizationId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"../../../docs/schema/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/add-event-attendee"},(0,o.kt)("inlineCode",{parentName:"a"},"addEventAttendee"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/add-user-image"},(0,o.kt)("inlineCode",{parentName:"a"},"addUserImage"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/assign-user-tag"},(0,o.kt)("inlineCode",{parentName:"a"},"assignUserTag"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/block-plugin-creation-by-superadmin"},(0,o.kt)("inlineCode",{parentName:"a"},"blockPluginCreationBySuperadmin"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/block-user"},(0,o.kt)("inlineCode",{parentName:"a"},"blockUser"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/check-auth"},(0,o.kt)("inlineCode",{parentName:"a"},"checkAuth"))," ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/create-admin"},(0,o.kt)("inlineCode",{parentName:"a"},"createAdmin"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/join-public-organization"},(0,o.kt)("inlineCode",{parentName:"a"},"joinPublicOrganization"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/leave-organization"},(0,o.kt)("inlineCode",{parentName:"a"},"leaveOrganization"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/me"},(0,o.kt)("inlineCode",{parentName:"a"},"me"))," ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/registrants-by-event"},(0,o.kt)("inlineCode",{parentName:"a"},"registrantsByEvent"))," ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-admin"},(0,o.kt)("inlineCode",{parentName:"a"},"removeAdmin"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-event-attendee"},(0,o.kt)("inlineCode",{parentName:"a"},"removeEventAttendee"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-organization"},(0,o.kt)("inlineCode",{parentName:"a"},"removeOrganization"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/remove-user-image"},(0,o.kt)("inlineCode",{parentName:"a"},"removeUserImage"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unassign-user-tag"},(0,o.kt)("inlineCode",{parentName:"a"},"unassignUserTag"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/unblock-user"},(0,o.kt)("inlineCode",{parentName:"a"},"unblockUser"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-language"},(0,o.kt)("inlineCode",{parentName:"a"},"updateLanguage"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-user-password"},(0,o.kt)("inlineCode",{parentName:"a"},"updateUserPassword"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/update-user-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"updateUserProfile"))," ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/user"},(0,o.kt)("inlineCode",{parentName:"a"},"user"))," ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/users"},(0,o.kt)("inlineCode",{parentName:"a"},"users"))," ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/queries/users-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"usersConnection"))," ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/auth-data"},(0,o.kt)("inlineCode",{parentName:"a"},"AuthData"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/check-in"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckIn"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/check-in-status"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckInStatus"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/comment"},(0,o.kt)("inlineCode",{parentName:"a"},"Comment"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/direct-chat"},(0,o.kt)("inlineCode",{parentName:"a"},"DirectChat"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/direct-chat-message"},(0,o.kt)("inlineCode",{parentName:"a"},"DirectChatMessage"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group"},(0,o.kt)("inlineCode",{parentName:"a"},"Group"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group-chat"},(0,o.kt)("inlineCode",{parentName:"a"},"GroupChat"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/group-chat-message"},(0,o.kt)("inlineCode",{parentName:"a"},"GroupChatMessage"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/membership-request"},(0,o.kt)("inlineCode",{parentName:"a"},"MembershipRequest"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/message"},(0,o.kt)("inlineCode",{parentName:"a"},"Message"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/message-chat"},(0,o.kt)("inlineCode",{parentName:"a"},"MessageChat"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization"},(0,o.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/organization-info-node"},(0,o.kt)("inlineCode",{parentName:"a"},"OrganizationInfoNode"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"Post"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/task"},(0,o.kt)("inlineCode",{parentName:"a"},"Task"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConnection"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"../../../docs/schema/objects/user-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"UserEdge"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);