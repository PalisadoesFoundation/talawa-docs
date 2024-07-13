[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addOrganizationImage](../README.md) / addOrganizationImage

# Variable: addOrganizationImage

\> `const` **addOrganizationImage**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addOrganizationImage"`\]

This function adds Organization Image.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists
2. If the organization exists
3. If the user trying to add the image is an admin of organization

## Defined in

[src/resolvers/Mutation/addOrganizationImage.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/addOrganizationImage.ts#L23)
