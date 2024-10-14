[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/organizationIsSample](../README.md) / isSampleOrganization

# Variable: isSampleOrganization

\> `const` **isSampleOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"isSampleOrganization"`\]

Checks whether the specified organization is a sample organization.

This function performs the following steps:
1. Retrieves the organization from the database using the provided organization ID.
2. If the organization is not found, throws an unauthorized error.
3. Searches for a sample document associated with the organization ID in the `SampleData` collection.
4. Returns `true` if the sample document is found, indicating the organization is a sample organization; otherwise, returns `false`.

## Param

This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures.

## Param

The arguments provided by the GraphQL query, including:
  - `id`: The ID of the organization to check.

## Returns

A promise that resolves to `true` if the organization is a sample organization, otherwise `false`.

## Defined in

[src/resolvers/Query/organizationIsSample.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Query/organizationIsSample.ts#L21)
