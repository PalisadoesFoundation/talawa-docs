[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getDonationByOrgIdConnection](../README.md) / getDonationByOrgIdConnection

# Variable: getDonationByOrgIdConnection

\> `const` **getDonationByOrgIdConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getDonationByOrgIdConnection"`\]

Retrieves a paginated list of donations associated with a specific organization from the database.

This function performs the following steps:
1. Constructs a query filter using the provided criteria and organization ID.
2. Queries the database for donations that match the criteria and belong to the specified organization.
3. Applies pagination by limiting and skipping the results based on the provided arguments.
4. Returns the list of donations that match the query.

## Param

This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures.

## Param

The arguments provided by the GraphQL query, including:
  - `orgId`: The ID of the organization for which donations are being retrieved.
  - `where`: Optional filter criteria to apply to the donations.
  - `first`: The maximum number of donation records to return (for pagination).
  - `skip`: The number of donation records to skip (for pagination).

## Defined in

[src/resolvers/Query/getDonationByOrgIdConnection.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Query/getDonationByOrgIdConnection.ts#L24)
