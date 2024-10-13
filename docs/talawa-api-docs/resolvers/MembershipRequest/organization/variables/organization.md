[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/MembershipRequest/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`MembershipRequestResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MembershipRequestResolvers.md)\[`"organization"`\]

Resolver function for the `organization` field of a `MembershipRequest`.

This function retrieves the organization associated with a specific membership request.

## Param

The parent object representing the membership request. It contains information about the membership request, including the ID of the organization it is associated with.

## Returns

A promise that resolves to the organization document found in the database. This document represents the organization associated with the membership request.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - MembershipRequestResolvers - The type definition for the resolvers of the MembershipRequest fields.

## Defined in

[src/resolvers/MembershipRequest/organization.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/MembershipRequest/organization.ts#L18)
