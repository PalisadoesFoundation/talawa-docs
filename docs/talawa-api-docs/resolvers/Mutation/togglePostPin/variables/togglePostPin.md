[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/togglePostPin](../README.md) / togglePostPin

# Variable: togglePostPin

\> `const` **togglePostPin**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"togglePostPin"`\]

Toggles the pinning status of a post within an organization.

This function allows an authorized user, such as an organization admin or super admin, to pin or unpin a post within an organization. If the post is already pinned, it will be unpinned, and if it is not pinned, it will be pinned. The function ensures that only authorized users can perform this action and that the title provided for pinning meets validation requirements.

## Param

This parameter represents the parent resolver in the GraphQL schema and is not used in this function.

## Param

The arguments passed to the GraphQL mutation, including the post's `id` and optionally the `title` to be used if pinning the post.

## Param

Provides contextual information, including the current user's ID. This is used to authenticate and authorize the request.

## Returns

The updated post object after the pinning status has been toggled.

## Defined in

[src/resolvers/Mutation/togglePostPin.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/togglePostPin.ts#L40)
