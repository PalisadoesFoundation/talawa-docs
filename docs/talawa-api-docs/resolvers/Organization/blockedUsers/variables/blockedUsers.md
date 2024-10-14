[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/blockedUsers](../README.md) / blockedUsers

# Variable: blockedUsers

\> `const` **blockedUsers**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"blockedUsers"`\]

Resolver function for the `blockedUsers` field of an `Organization`.

This function retrieves the users who are blocked by a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the IDs of the users who are blocked.

## Returns

A promise that resolves to an array of user documents found in the database. These documents represent the users who are blocked by the organization.

## See

 - User - The User model used to interact with the users collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/blockedUsers.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Organization/blockedUsers.ts#L16)
