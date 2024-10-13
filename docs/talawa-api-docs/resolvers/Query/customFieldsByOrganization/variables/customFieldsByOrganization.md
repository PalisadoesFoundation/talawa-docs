[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/customFieldsByOrganization](../README.md) / customFieldsByOrganization

# Variable: customFieldsByOrganization

\> `const` **customFieldsByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"customFieldsByOrganization"`\]

This query will fetch all the custom Fields for the organization in the database.

## Param

## Param

An object that contains `id` of the organization.

## Returns

An object `CustomFields` that contains all the custom fields of the specified organization.
The following checks are made:
 1. if the organization exists

## Defined in

[src/resolvers/Query/customFieldsByOrganization.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/customFieldsByOrganization.ts#L15)
