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

[src/resolvers/Query/directChatsMessagesByChatID.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/directChatsMessagesByChatID.ts#L16)
