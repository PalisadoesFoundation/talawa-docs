[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserFamily](../README.md) / removeUserFamily

# Variable: removeUserFamily

\> `const` **removeUserFamily**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserFamily"`\]

This function enables to remove a user family.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application.

## Remarks

- The following checks are done:
1. If the user family exists.
2. If the user is super admin.

## Defined in

[src/resolvers/Mutation/removeUserFamily.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/removeUserFamily.ts#L26)
