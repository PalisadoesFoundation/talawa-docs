[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserFamily/users](../README.md) / users

# Variable: users

\> `const` **users**: [`UserFamilyResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserFamilyResolvers.md)\[`"users"`\]

Resolver function for the `users` field of a `UserFamily`.

This function retrieves the users who are part of a specific user family.

## Param

The parent object representing the user family. It contains information about the user family, including the IDs of the users who are part of it.

## Returns

A promise that resolves to an array of user documents found in the database. These documents represent the users who are part of the user family.

## See

 - User - The User model used to interact with the users collection in the database.
 - UserFamilyResolvers - The type definition for the resolvers of the UserFamily fields.

## Defined in

[src/resolvers/UserFamily/users.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/UserFamily/users.ts#L16)
