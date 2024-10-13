[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removePost](../README.md) / removePost

# Variable: removePost

\> `const` **removePost**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removePost"`\]

This function enables to remove a post.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the post exists
3. If the user is the creator of the post.
4. If the user to be removed is a member of the organization.
5. If the user has appUserProfile.

## Returns

Deleted Post.

## Defined in

[src/resolvers/Mutation/removePost.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/removePost.ts#L38)
