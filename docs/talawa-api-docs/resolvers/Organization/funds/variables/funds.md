[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/funds](../README.md) / funds

# Variable: funds

\> `const` **funds**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"funds"`\]

Resolver function for the `funds` field of an `Organization`.

This function retrieves the funds related to a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the organization.

## Returns

A promise that resolves to the fund documents found in the database. These documents represent the funds related to the organization.

## See

 - Fund - The Fund model used to interact with the funds collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/funds.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Organization/funds.ts#L16)
