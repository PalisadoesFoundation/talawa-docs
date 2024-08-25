[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/eventsByOrganizationConnection](../README.md) / eventsByOrganizationConnection

# Variable: eventsByOrganizationConnection

\> `const` **eventsByOrganizationConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"eventsByOrganizationConnection"`\]

Retrieves events for a specific organization based on the provided query parameters.

This function performs the following steps:
1. Generates recurring event instances up to a certain date if the organization has any.
2. Builds a query filter (`where`) and sorting parameters based on the provided arguments.
3. Queries the database for events matching the filter, with sorting, pagination, and related data fetching.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, including filters (`where`), sorting order (`orderBy`), pagination options (`first` and `skip`), and any other query parameters.

## Defined in

[src/resolvers/Query/eventsByOrganizationConnection.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Query/eventsByOrganizationConnection.ts#L21)
