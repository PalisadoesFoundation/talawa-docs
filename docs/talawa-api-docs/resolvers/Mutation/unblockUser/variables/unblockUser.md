[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unblockUser](../README.md) / unblockUser

# Variable: unblockUser

\> `const` **unblockUser**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unblockUser"`\]

This function enables to unblock user.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists.
2. If the user exists
3. If the user is an admin of the organization

## Defined in

[src/resolvers/Mutation/unblockUser.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/Mutation/unblockUser.ts#L27)
