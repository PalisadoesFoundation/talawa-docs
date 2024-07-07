[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createPost](../README.md) / createPost

# Variable: createPost

\> `const` **createPost**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createPost"`\]

This function enables to create a post.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the organization exists
3. If the user has appUserProfile

## Defined in

[src/resolvers/Mutation/createPost.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/createPost.ts#L41)
