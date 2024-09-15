[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/sendMembershipRequest](../README.md) / sendMembershipRequest

# Variable: sendMembershipRequest

\> `const` **sendMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"sendMembershipRequest"`\]

This function enables to send membership request.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists
2. If the user exists.
3. If the membership request already exists.

## Defined in

[src/resolvers/Mutation/sendMembershipRequest.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/sendMembershipRequest.ts#L25)
