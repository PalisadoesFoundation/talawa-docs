[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removePost](../README.md) / removePost

# Variable: removePost

> `const` **removePost**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removePost"`\]

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

## Defined in

[src/resolvers/Mutation/removePost.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/Mutation/removePost.ts#L38)
