[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/advertisementsConnection](../README.md) / advertisementsConnection

# Variable: advertisementsConnection

\> `const` **advertisementsConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"advertisementsConnection"`\]

Retrieves a paginated list of advertisements based on the provided connection arguments.

This function handles querying and pagination of advertisements using connection arguments. It performs validation of the connection arguments, applies filters and sorting, and then returns a paginated result containing the advertisements. The media URLs for each advertisement are adjusted based on the API root URL provided in the context.

## Param

This parameter represents the parent resolver in the GraphQL schema and is not used in this function.

## Param

The arguments passed to the GraphQL query, including pagination and filter criteria.

## Param

Provides contextual information, including the API root URL. This is used to construct the media URLs for the advertisements.

## Returns

A paginated connection object containing the advertisements, their total count, and the pagination information.

## Defined in

[src/resolvers/Query/advertisementsConnection.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Query/advertisementsConnection.ts#L28)
