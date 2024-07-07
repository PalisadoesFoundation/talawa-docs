[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createVenue](../README.md) / createVenue

# Variable: createVenue

\> `const` **createVenue**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createVenue"`\]

This function enables to create a venue in an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the organization exists
3. Whether the user is admin or superadmin or not
4. If the venue name is missing
5. If the same venue already exists in an organization

## Defined in

[src/resolvers/Mutation/createVenue.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/createVenue.ts#L33)
