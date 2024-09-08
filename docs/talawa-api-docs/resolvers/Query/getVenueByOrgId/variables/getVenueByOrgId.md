[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getVenueByOrgId](../README.md) / getVenueByOrgId

# Variable: getVenueByOrgId

\> `const` **getVenueByOrgId**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getVenueByOrgId"`\]

Retrieves venues associated with a specific organization, with optional filtering and sorting.

This function performs the following steps:
1. Constructs the query filter using the `getWhere` helper function based on provided filter criteria.
2. Determines the sorting order using the `getSort` helper function based on provided sort criteria.
3. Queries the `Venue` collection in the database to find venues that match the specified organization ID and any additional filter criteria.
4. Limits the number of results based on the `first` argument and skips results based on the `skip` argument.
5. Sorts the results according to the specified sort criteria.

## Param

This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures.

## Param

The arguments provided by the GraphQL query, including:
  - `orgId`: The ID of the organization for which venues are being retrieved.
  - `where`: Optional filter criteria to apply to the venue query.
  - `orderBy`: Optional sorting criteria for the results.
  - `first`: Optional limit on the number of results to return.
  - `skip`: Optional number of results to skip for pagination.

## Defined in

[src/resolvers/Query/getVenueByOrgId.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Query/getVenueByOrgId.ts#L27)
