[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/resetCommunity](../README.md) / resetCommunity

# Variable: resetCommunity

\> `const` **resetCommunity**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"resetCommunity"`\]

This function enables to reset Pre login imagery.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the user is super admin.

## Returns

Boolean.

## Defined in

[src/resolvers/Mutation/resetCommunity.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/resetCommunity.ts#L25)
