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

[src/resolvers/Query/groupChatsByUserId.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/groupChatsByUserId.ts#L13)
