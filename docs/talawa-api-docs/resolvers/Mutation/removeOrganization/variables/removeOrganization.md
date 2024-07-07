[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeOrganization](../README.md) / removeOrganization

# Variable: removeOrganization

\> `const` **removeOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeOrganization"`\]

This function enables to remove an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the organization exists
3. If the user is the creator of the organization.
4. If the user has appUserProfile.

## Defined in

[src/resolvers/Mutation/removeOrganization.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/removeOrganization.ts#L45)
