[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeGroupChat](../README.md) / removeGroupChat

# Variable: removeGroupChat

\> `const` **removeGroupChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeGroupChat"`\]

This function enables to remove an graoup chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the group chat exists
2. If the organization exists
3. If the user is an admin of the organization.

## Defined in

[src/resolvers/Mutation/removeGroupChat.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/removeGroupChat.ts#L22)
