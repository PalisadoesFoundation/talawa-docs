[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unblockUser](../README.md) / unblockUser

# Variable: unblockUser

> `const` **unblockUser**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unblockUser"`\]

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

[src/resolvers/Mutation/unblockUser.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/Mutation/unblockUser.ts#L27)
