[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/DirectChatMessage/sender](../README.md) / sender

# Variable: sender

\> `const` **sender**: [`DirectChatMessageResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/DirectChatMessageResolvers.md)\[`"sender"`\]

Resolver function for the `sender` field of a `DirectChatMessage`.

This function retrieves the user who sent a specific direct chat message.

## Param

The parent object representing the direct chat message. It contains information about the direct chat message, including the ID of the user who sent it.

## See

 - User - The User model used to interact with the users collection in the database.
 - DirectChatMessageResolvers - The type definition for the resolvers of the DirectChatMessage fields.

## Defined in

[src/resolvers/DirectChatMessage/sender.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/DirectChatMessage/sender.ts#L18)
