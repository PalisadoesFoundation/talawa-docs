[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/sendMembershipRequest](../README.md) / sendMembershipRequest

# Variable: sendMembershipRequest

> `const` **sendMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"sendMembershipRequest"`\]

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

[src/resolvers/Mutation/sendMembershipRequest.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/Mutation/sendMembershipRequest.ts#L25)
