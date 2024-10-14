[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserTag/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`UserTagResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserTagResolvers.md)\[`"organization"`\]

Resolver function for the `organization` field of a `UserTag`.

This function retrieves the organization associated with a specific user tag.

## Param

The parent object representing the user tag. It contains information about the user tag, including the ID of the organization associated with it.

## Returns

A promise that resolves to the organization document found in the database. This document represents the organization associated with the user tag.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - UserTagResolvers - The type definition for the resolvers of the UserTag fields.

## Defined in

[src/resolvers/UserTag/organization.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/UserTag/organization.ts#L16)
