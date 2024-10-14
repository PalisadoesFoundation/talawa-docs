[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserImage](../README.md) / removeUserImage

# Variable: removeUserImage

\> `const` **removeUserImage**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserImage"`\]

This function enables to remove user image.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the image exists

## Returns

Updated user.

## Defined in

[src/resolvers/Mutation/removeUserImage.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/removeUserImage.ts#L22)
