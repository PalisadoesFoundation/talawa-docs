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

[src/resolvers/Mutation/removeUserFamily.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/Mutation/removeUserFamily.ts#L26)
