"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[20196],{97718:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=i(85893),n=i(11151);const s={},r=void 0,o={id:"talawa-api-docs/resolvers/Mutation/createPost/variables/createPost",title:"createPost",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createPost/variables/createPost.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createPost/variables",slug:"/talawa-api-docs/resolvers/Mutation/createPost/variables/createPost",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createPost/variables/createPost",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createPost/variables/createPost.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Returns",id:"returns",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,a.jsx)(t.strong,{children:"talawa-api"})})," \u2022 ",(0,a.jsx)(t.strong,{children:"Docs"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createPost/",children:"resolvers/Mutation/createPost"})," / createPost"]}),"\n",(0,a.jsx)(t.h1,{id:"variable-createpost",children:"Variable: createPost"}),"\n",(0,a.jsxs)(t.p,{children:["> ",(0,a.jsx)(t.code,{children:"const"})," ",(0,a.jsx)(t.strong,{children:"createPost"}),": ",(0,a.jsx)(t.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,a.jsx)(t.code,{children:"MutationResolvers"})}),"[",(0,a.jsx)(t.code,{children:'"createPost"'}),"]"]}),"\n",(0,a.jsx)(t.p,{children:"Creates a new post and associates it with an organization."}),"\n",(0,a.jsx)(t.p,{children:"This function performs the following actions:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Verifies the existence of the current user and retrieves their details and application profile."}),"\n",(0,a.jsx)(t.li,{children:"Checks if the specified organization exists and retrieves its details."}),"\n",(0,a.jsx)(t.li,{children:"Validates that the user is a member of the organization or is a super admin."}),"\n",(0,a.jsx)(t.li,{children:"Handles file uploads for images and videos, if provided."}),"\n",(0,a.jsx)(t.li,{children:"Validates the post title and ensures it meets the criteria for pinning."}),"\n",(0,a.jsx)(t.li,{children:"Checks user permissions to pin the post if required."}),"\n",(0,a.jsx)(t.li,{children:"Creates the post and updates the organization with the pinned post if applicable."}),"\n",(0,a.jsx)(t.li,{children:"Caches the newly created post and organization."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"param",children:"Param"}),"\n",(0,a.jsx)(t.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,a.jsx)(t.h2,{id:"param-1",children:"Param"}),"\n",(0,a.jsx)(t.p,{children:"The arguments for the mutation, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"data.organizationId"}),": The ID of the organization where the post will be created."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"data.title"}),": The title of the post (optional but required if the post is pinned)."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"data.text"}),": The text content of the post."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"data.pinned"}),": A boolean indicating whether the post should be pinned."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"file"}),": An optional base64-encoded image or video file."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"param-2",children:"Param"}),"\n",(0,a.jsx)(t.p,{children:"The context for the mutation, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"userId"}),": The ID of the current user creating the post."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"apiRootUrl"}),": The root URL of the API for constructing file URLs."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The created post object, including URLs for uploaded image and video files if provided."}),"\n",(0,a.jsx)(t.h2,{id:"see",children:"See"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"User - The User model used to interact with user data in the database."}),"\n",(0,a.jsx)(t.li,{children:"AppUserProfile - The AppUserProfile model used to interact with user profile data in the database."}),"\n",(0,a.jsx)(t.li,{children:"Organization - The Organization model used to interact with organization data in the database."}),"\n",(0,a.jsx)(t.li,{children:"Post - The Post model used to interact with post data in the database."}),"\n",(0,a.jsx)(t.li,{children:"uploadEncodedImage - A utility function for uploading encoded image files."}),"\n",(0,a.jsx)(t.li,{children:"uploadEncodedVideo - A utility function for uploading encoded video files."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/createPost.ts#L64",children:"src/resolvers/Mutation/createPost.ts:64"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var a=i(67294);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);