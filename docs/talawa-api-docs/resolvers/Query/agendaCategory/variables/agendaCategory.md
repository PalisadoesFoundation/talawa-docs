[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/agendaCategory](../README.md) / agendaCategory

# Variable: agendaCategory

\> `const` **agendaCategory**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"agendaCategory"`\]

This is a resolver function for the GraphQL query 'agendaCategory'.

This resolver fetches an agenda category by its ID.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the query.

## Throws

`NotFoundError` If the agenda category is not found.

## Throws

`InternalServerError` For other potential issues during agenda category fetching.

## Defined in

[src/resolvers/Query/agendaCategory.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Query/agendaCategory.ts#L19)
