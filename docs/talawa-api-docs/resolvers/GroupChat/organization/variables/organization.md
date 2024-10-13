[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChat/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`GroupChatResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatResolvers.md)\[`"organization"`\]

Resolver function for the `organization` field of a `GroupChat`.

This function retrieves the organization associated with a specific group chat.

## Param

The parent object representing the group chat. It contains information about the group chat, including the ID of the organization it is associated with.

## Returns

A promise that resolves to the organization document found in the database. This document represents the organization associated with the group chat.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - GroupChatResolvers - The type definition for the resolvers of the GroupChat fields.

## Defined in

[src/resolvers/GroupChat/organization.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/GroupChat/organization.ts#L19)
