[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/rejectMembershipRequest](../README.md) / rejectMembershipRequest

# Variable: rejectMembershipRequest

\> `const` **rejectMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"rejectMembershipRequest"`\]

This function enables to reject membership request.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the membership request exists.
2. If the organization exists.
3. If the user to be rejected exists.
4. If the user is the admin of the organization.

## Returns

Deleted membership request.

## Defined in

[src/resolvers/Mutation/rejectMembershipRequest.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/rejectMembershipRequest.ts#L23)
