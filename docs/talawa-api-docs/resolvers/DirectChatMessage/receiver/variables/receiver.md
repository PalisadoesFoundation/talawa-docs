[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/DirectChatMessage/receiver](../README.md) / receiver

# Variable: receiver

\> `const` **receiver**: [`DirectChatMessageResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/DirectChatMessageResolvers.md)\[`"receiver"`\]

Resolver function for the `receiver` field of a `DirectChatMessage`.

This function retrieves the user who received a specific direct chat message.

## Param

The parent object representing the direct chat message. It contains information about the direct chat message, including the ID of the user who received it.

## See

 - User - The User model used to interact with the users collection in the database.
 - DirectChatMessageResolvers - The type definition for the resolvers of the DirectChatMessage fields.

## Defined in

[src/resolvers/DirectChatMessage/receiver.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/DirectChatMessage/receiver.ts#L18)
