[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createOrganization](../README.md) / createOrganization

# Variable: createOrganization

\> `const` **createOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createOrganization"`\]

This function enables to create an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the user has appUserProfile

## Defined in

[src/resolvers/Mutation/createOrganization.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/createOrganization.ts#L37)
