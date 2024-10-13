[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChat/messages](../README.md) / messages

# Variable: messages

\> `const` **messages**: [`GroupChatResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatResolvers.md)\[`"messages"`\]

Resolver function for the `messages` field of a `GroupChat`.

This function retrieves the messages associated with a specific group chat.

## Param

The parent object representing the group chat. It contains information about the group chat, including the IDs of the messages associated with it.

## Returns

A promise that resolves to the message documents found in the database. These documents represent the messages associated with the group chat.

## See

 - GroupChatMessage - The GroupChatMessage model used to interact with the group chat messages collection in the database.
 - GroupChatResolvers - The type definition for the resolvers of the GroupChat fields.

## Defined in

[src/resolvers/GroupChat/messages.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/GroupChat/messages.ts#L16)
