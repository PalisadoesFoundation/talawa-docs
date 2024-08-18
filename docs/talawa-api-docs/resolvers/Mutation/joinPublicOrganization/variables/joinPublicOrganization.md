[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/joinPublicOrganization](../README.md) / joinPublicOrganization

# Variable: joinPublicOrganization

> `const` **joinPublicOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"joinPublicOrganization"`\]

This function enables to join a public organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists
2. If the organization required user registration
3. If the user exists
4. If the user is already a member of the organization.

## Defined in

[src/resolvers/Mutation/joinPublicOrganization.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/Mutation/joinPublicOrganization.ts#L28)
