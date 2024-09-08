[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createComment](../README.md) / createComment

# Variable: createComment

\> `const` **createComment**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createComment"`\]

Creates a new comment and associates it with the specified post.

This function performs the following actions:
1. Verifies that the post specified by `postId` exists.
2. Creates a new comment associated with the post.
3. Increments the `commentCount` for the post by 1.
4. Caches the newly created comment and updated post data.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `postId`: The ID of the post to which the comment will be associated.
  - `data`: The comment data, including the content of the comment.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user creating the comment.

## Defined in

[src/resolvers/Mutation/createComment.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createComment.ts#L27)
