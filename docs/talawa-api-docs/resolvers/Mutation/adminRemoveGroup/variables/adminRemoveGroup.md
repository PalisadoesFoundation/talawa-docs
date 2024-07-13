[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/adminRemoveGroup](../README.md) / adminRemoveGroup

# Variable: adminRemoveGroup

\> `const` **adminRemoveGroup**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"adminRemoveGroup"`\]

This function enables an admin to remove a group.

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
3. If the user exists
4. If the user is an admin of organization

## Defined in

[src/resolvers/Mutation/adminRemoveGroup.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/adminRemoveGroup.ts#L26)
