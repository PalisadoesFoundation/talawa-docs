[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/GroupChat/users](../README.md) / users

# Variable: users

\> `const` **users**: [`GroupChatResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/GroupChatResolvers.md)\[`"users"`\]

Resolver function for the `users` field of a `GroupChat`.

This function retrieves the users who are members of a specific group chat.

## Param

The parent object representing the group chat. It contains information about the group chat, including the IDs of the users who are members of it.

## See

 - User - The User model used to interact with the users collection in the database.
 - GroupChatResolvers - The type definition for the resolvers of the GroupChat fields.

## Defined in

[src/resolvers/GroupChat/users.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/GroupChat/users.ts#L16)
