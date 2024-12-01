[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/chatById](../README.md) / chatById

# Variable: chatById

\> `const` **chatById**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"chatById"`\]

This query will fetch Chats by a specified id from the database.

## Param

## Param

An object that contains `id` of the user.

## Returns

An object `Chat`.
If the `Chat` object is null then it throws `NotFoundError` error.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).

## Defined in

[src/resolvers/Query/chatById.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Query/chatById.ts#L14)
