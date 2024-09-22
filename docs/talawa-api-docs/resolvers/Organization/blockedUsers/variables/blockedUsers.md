[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/blockedUsers](../README.md) / blockedUsers

# Variable: blockedUsers

\> `const` **blockedUsers**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"blockedUsers"`\]

Resolver function for the `blockedUsers` field of an `Organization`.

This function retrieves the users who are blocked by a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the IDs of the users who are blocked.

## See

 - User - The User model used to interact with the users collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/blockedUsers.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Organization/blockedUsers.ts#L16)
