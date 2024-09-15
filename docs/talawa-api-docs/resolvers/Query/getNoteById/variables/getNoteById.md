[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getNoteById](../README.md) / getNoteById

# Variable: getNoteById

\> `const` **getNoteById**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getNoteById"`\]

Retrieves a note by its ID from the database.

This function performs the following steps:
1. Queries the database to find a `Note` record by the provided ID.
2. If the note is not found, throws a `NotFoundError` with a predefined error message.
3. Returns the note record if found.

## Param

This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures.

## Param

The arguments provided by the GraphQL query, including:
  - `id`: The ID of the note to be retrieved.

## Defined in

[src/resolvers/Query/getNoteById.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Query/getNoteById.ts#L22)
