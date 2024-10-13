[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getUserTag](../README.md) / getUserTag

# Variable: getUserTag

\> `const` **getUserTag**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getUserTag"`\]

Retrieves a user tag by its ID.

This function fetches a specific user tag from the database using its ID. If the user tag
is not found, it throws an error indicating that the item does not exist.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, including the ID of the user tag to retrieve.

## Returns

The user tag with the specified ID.

## Defined in

[src/resolvers/Query/getUserTag.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/getUserTag.ts#L18)
