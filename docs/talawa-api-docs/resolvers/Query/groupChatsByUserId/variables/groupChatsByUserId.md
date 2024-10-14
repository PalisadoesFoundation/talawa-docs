[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/groupChatsByUserId](../README.md) / groupChatsByUserId

# Variable: groupChatsByUserId

\> `const` **groupChatsByUserId**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"groupChatsByUserId"`\]

This query will fetch all the Direct chats for the current user from the database.

## Param

## Param

An object that contains `id` of the user.

## Returns

An object `GroupChat` that contains all direct chats of the current user.
If the `directChats` object is null then it throws `NotFoundError` error.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).

## Defined in

[src/resolvers/Query/groupChatsByUserId.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Query/groupChatsByUserId.ts#L13)
