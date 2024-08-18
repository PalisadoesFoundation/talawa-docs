[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserFamily/admins](../README.md) / admins

# Variable: admins

> `const` **admins**: [`UserFamilyResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserFamilyResolvers.md)\[`"admins"`\]

Resolver function for the `admins` field of a `UserFamily`.

This function retrieves the users who are admins of a specific user family.

## Param

The parent object representing the user family. It contains information about the user family, including the IDs of the users who are admins.

## See

 - User - The User model used to interact with the users collection in the database.
 - UserFamilyResolvers - The type definition for the resolvers of the UserFamily fields.

## Defined in

[src/resolvers/UserFamily/admins.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/UserFamily/admins.ts#L16)
