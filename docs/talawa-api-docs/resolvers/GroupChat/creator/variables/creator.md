[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChat/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`GroupChatResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `GroupChat`.

This function retrieves the user who created a specific group chat.

## Param

The parent object representing the group chat. It contains information about the group chat, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the group chat.

## See

 - User - The User model used to interact with the users collection in the database.
 - GroupChatResolvers - The type definition for the resolvers of the GroupChat fields.

## Defined in

[src/resolvers/GroupChat/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/GroupChat/creator.ts#L16)
