[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateOrganization](../README.md) / updateOrganization

# Variable: updateOrganization

\> `const` **updateOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateOrganization"`\]

This function enables to update an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists.
2. The the user is an admin of the organization.

## Returns

Updated organization.

## Defined in

[src/resolvers/Mutation/updateOrganization.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Mutation/updateOrganization.ts#L22)
