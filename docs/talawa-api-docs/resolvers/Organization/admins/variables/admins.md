[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/admins](../README.md) / admins

# Variable: admins

\> `const` **admins**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"admins"`\]

Resolver function for the `admins` field of an `Organization`.

This function retrieves the users who are admins of a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the IDs of the users who are admins.

## Returns

A promise that resolves to an array of user documents found in the database. These documents represent the users who are admins of the organization.

## See

 - User - The User model used to interact with the users collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/admins.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Organization/admins.ts#L16)
