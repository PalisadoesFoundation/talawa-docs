[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserFamily/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`UserFamilyResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserFamilyResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `UserFamily`.

This function retrieves the user who created a specific user family.

## Param

The parent object representing the user family. It contains information about the user family, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the user family.

## See

 - User - The User model used to interact with the users collection in the database.
 - UserFamilyResolvers - The type definition for the resolvers of the UserFamily fields.

## Defined in

[src/resolvers/UserFamily/creator.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/UserFamily/creator.ts#L18)
