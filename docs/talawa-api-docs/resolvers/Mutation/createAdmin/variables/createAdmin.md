[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createAdmin](../README.md) / createAdmin

# Variable: createAdmin

\> `const` **createAdmin**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createAdmin"`\]

This function enables to create an admin for an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists
2. If the user has appUserProfile
3. If the current user is the creator of the organization
4. If the user exists
5. If the user is a member of the organization
6. If the user is already an admin of the organization

## Defined in

[src/resolvers/Mutation/createAdmin.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/createAdmin.ts#L32)
