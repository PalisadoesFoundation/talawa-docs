[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getUserTagAncestors](../README.md) / getUserTagAncestors

# Variable: getUserTagAncestors

\> `const` **getUserTagAncestors**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getUserTagAncestors"`\]

Retrieves the ancestor tags of a given user tag.

This function fetches the ancestor tags of a specific user tag from the database. If the user tag
is not found, it throws an error indicating that the item does not exist.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, including the ID of the given user tag.

## Defined in

[src/resolvers/Query/getUserTagAncestors.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Query/getUserTagAncestors.ts#L19)
