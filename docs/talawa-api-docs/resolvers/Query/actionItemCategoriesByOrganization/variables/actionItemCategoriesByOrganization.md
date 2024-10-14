[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/actionItemCategoriesByOrganization](../README.md) / actionItemCategoriesByOrganization

# Variable: actionItemCategoriesByOrganization

\> `const` **actionItemCategoriesByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"actionItemCategoriesByOrganization"`\]

This query will fetch all categories for the organization from database.

## Param

## Param

An object that contains `organizationId` which is the _id of the Organization and `orderBy` which is the sorting order & where which is the filter.

## Returns

A `categories` object that holds all categories for the Organization.

## Defined in

[src/resolvers/Query/actionItemCategoriesByOrganization.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Query/actionItemCategoriesByOrganization.ts#L11)
