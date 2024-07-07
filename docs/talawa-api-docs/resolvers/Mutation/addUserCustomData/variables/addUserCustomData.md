[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserCustomData](../README.md) / addUserCustomData

# Variable: addUserCustomData

\> `const` **addUserCustomData**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserCustomData"`\]

This function enables a user to add data for a custom field for a joined organization.

## Param

parent of the current request

## Param

payload provided with the request

## Param

context of the entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the organization exists.

## Defined in

[src/resolvers/Mutation/addUserCustomData.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/addUserCustomData.ts#L23)
