[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeActionItem](../README.md) / removeActionItem

# Variable: removeActionItem

\> `const` **removeActionItem**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeActionItem"`\]

This function enables to remove an action item.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the action item exists.
3. If the user is authorized.
4. If the user has appUserProfile.

## Defined in

[src/resolvers/Mutation/removeActionItem.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/removeActionItem.ts#L35)
