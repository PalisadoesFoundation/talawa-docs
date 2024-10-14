[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/directChatsMessagesByChatID](../README.md) / directChatsMessagesByChatID

# Variable: directChatsMessagesByChatID

\> `const` **directChatsMessagesByChatID**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"directChatsMessagesByChatID"`\]

This query will fetch all messages for a certain direct chat for the user from database.

## Param

## Param

An object that contains `id` of the direct chat.

## Returns

A `directChatsMessages` object that holds all of the messages from the specified direct chat.
If the `directChatsMessages` object is null then it throws `NotFoundError` error.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).

## Defined in

[src/resolvers/Query/directChatsMessagesByChatID.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Query/directChatsMessagesByChatID.ts#L16)
