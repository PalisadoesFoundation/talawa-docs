[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of an `Organization`.

This function retrieves the user who created a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the user who created it.

## See

 - User - The User model used to interact with the users collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/creator.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/Organization/creator.ts#L18)
