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

[src/resolvers/Mutation/addUserCustomData.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/addUserCustomData.ts#L23)
