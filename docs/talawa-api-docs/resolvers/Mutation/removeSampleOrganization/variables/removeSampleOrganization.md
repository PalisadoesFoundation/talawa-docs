[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeSampleOrganization](../README.md) / removeSampleOrganization

# Variable: removeSampleOrganization

\> `const` **removeSampleOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeSampleOrganization"`\]

Removes a sample organization from the system.

This function allows the deletion of a sample organization by checking the current user's authorization and the existence of the organization.
The function first verifies whether the user making the request is authorized by checking if they are either a super admin or an admin of the organization.
If the user is authorized and the organization exists, the organization is removed from the system.

## Param

This is an unused parameter representing the parent resolver in the GraphQL schema. It can be ignored.

## Param

The arguments passed to the GraphQL mutation, which are not used in this function.

## Param

Provides contextual information, including the current user's ID. This is used to authenticate and authorize the request.

## Returns

A boolean value indicating whether the operation was successful.

## Defined in

[src/resolvers/Mutation/removeSampleOrganization.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/removeSampleOrganization.ts#L31)
