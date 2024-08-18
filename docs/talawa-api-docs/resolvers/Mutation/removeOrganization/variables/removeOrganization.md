[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeOrganization](../README.md) / removeOrganization

# Variable: removeOrganization

> `const` **removeOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeOrganization"`\]

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

[src/resolvers/Mutation/removeOrganization.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/Mutation/removeOrganization.ts#L45)
