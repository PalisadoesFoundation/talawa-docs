[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createActionItemCategory](../README.md) / createActionItemCategory

# Variable: createActionItemCategory

\> `const` **createActionItemCategory**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createActionItemCategory"`\]

This function enables to create an ActionItemCategory.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the User exists
2. If the Organization exists
3. Is the User is Authorized
4. If the action item category already exists

## Defined in

[src/resolvers/Mutation/createActionItemCategory.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/createActionItemCategory.ts#L30)
