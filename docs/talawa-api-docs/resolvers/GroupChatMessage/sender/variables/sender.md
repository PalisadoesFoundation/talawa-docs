[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChatMessage/sender](../README.md) / sender

# Variable: sender

\> `const` **sender**: [`GroupChatMessageResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatMessageResolvers.md)\[`"sender"`\]

Resolver function for the `sender` field of a `GroupChatMessage`.

This function retrieves the user who sent a specific group chat message.

## Param

The parent object representing the group chat message. It contains information about the group chat message, including the ID of the user who sent it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who sent the group chat message.

## See

 - User - The User model used to interact with the users collection in the database.
 - GroupChatMessageResolvers - The type definition for the resolvers of the GroupChatMessage fields.

## Defined in

[src/resolvers/GroupChatMessage/sender.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/GroupChatMessage/sender.ts#L18)
