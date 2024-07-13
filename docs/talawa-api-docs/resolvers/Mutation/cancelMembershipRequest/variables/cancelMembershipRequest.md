[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/cancelMembershipRequest](../README.md) / cancelMembershipRequest

# Variable: cancelMembershipRequest

\> `const` **cancelMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"cancelMembershipRequest"`\]

This function enables to cancel membership request.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the membership request exists
2. If the organization exists
3. If the user exists
4. If the user is the creator of the request

## Defined in

[src/resolvers/Mutation/cancelMembershipRequest.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/cancelMembershipRequest.ts#L27)
