[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/venues](../README.md) / venues

# Variable: venues

\> `const` **venues**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"venues"`\]

Resolver function for the `venues` field of an `Organization`.

This function retrieves the venues related to a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the organization.

## Returns

A promise that resolves to the venue documents found in the database. These documents represent the venues related to the organization.

## See

 - Venue - The Venue model used to interact with the venues collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/venues.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Organization/venues.ts#L16)
