[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChatMessage/groupChatMessageBelongsTo](../README.md) / groupChatMessageBelongsTo

# Variable: groupChatMessageBelongsTo

\> `const` **groupChatMessageBelongsTo**: [`GroupChatMessageResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatMessageResolvers.md)\[`"groupChatMessageBelongsTo"`\]

Resolver function for the `groupChatMessageBelongsTo` field of a `GroupChatMessage`.

This function retrieves the group chat to which a specific group chat message belongs.

## Param

The parent object representing the group chat message. It contains information about the group chat message, including the ID of the group chat to which it belongs.

## Returns

A promise that resolves to the group chat document found in the database. This document represents the group chat to which the group chat message belongs.

## See

 - GroupChat - The GroupChat model used to interact with the group chats collection in the database.
 - GroupChatMessageResolvers - The type definition for the resolvers of the GroupChatMessage fields.

## Defined in

[src/resolvers/GroupChatMessage/groupChatMessageBelongsTo.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/GroupChatMessage/groupChatMessageBelongsTo.ts#L18)
