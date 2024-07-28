[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChatMessage/sender](../README.md) / sender

# Variable: sender

\> `const` **sender**: [`GroupChatMessageResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatMessageResolvers.md)\[`"sender"`\]

Resolver function for the `sender` field of a `GroupChatMessage`.

This function retrieves the user who sent a specific group chat message.

## Param

The parent object representing the group chat message. It contains information about the group chat message, including the ID of the user who sent it.

## See

 - User - The User model used to interact with the users collection in the database.
 - GroupChatMessageResolvers - The type definition for the resolvers of the GroupChatMessage fields.

## Defined in

[src/resolvers/GroupChatMessage/sender.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/GroupChatMessage/sender.ts#L18)
