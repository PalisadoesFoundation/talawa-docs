[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/admins](../README.md) / admins

# Variable: admins

\> `const` **admins**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"admins"`\]

Resolver function for the `admins` field of an `Organization`.

This function retrieves the users who are admins of a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the IDs of the users who are admins.

## See

 - User - The User model used to interact with the users collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/admins.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Organization/admins.ts#L16)
