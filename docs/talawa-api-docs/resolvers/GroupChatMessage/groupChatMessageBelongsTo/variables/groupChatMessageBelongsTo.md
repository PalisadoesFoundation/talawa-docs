[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChatMessage/groupChatMessageBelongsTo](../README.md) / groupChatMessageBelongsTo

# Variable: groupChatMessageBelongsTo

\> `const` **groupChatMessageBelongsTo**: [`GroupChatMessageResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatMessageResolvers.md)\[`"groupChatMessageBelongsTo"`\]

Resolver function for the `groupChatMessageBelongsTo` field of a `GroupChatMessage`.

This function retrieves the group chat to which a specific group chat message belongs.

## Param

The parent object representing the group chat message. It contains information about the group chat message, including the ID of the group chat to which it belongs.

## See

 - GroupChat - The GroupChat model used to interact with the group chats collection in the database.
 - GroupChatMessageResolvers - The type definition for the resolvers of the GroupChatMessage fields.

## Defined in

[src/resolvers/GroupChatMessage/groupChatMessageBelongsTo.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/GroupChatMessage/groupChatMessageBelongsTo.ts#L18)
