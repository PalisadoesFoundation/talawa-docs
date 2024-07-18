[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createMember](../README.md) / createMember

# Variable: createMember

\> `const` **createMember**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createMember"`\]

This function enables to add a member.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. Checks whether current user making the request is an superAdmin or an Admin.
2. If the organization exists
3. Checks whether curent user exists.
4. Checks whether current user has appProfile.
4. Checks whether user with _id === args.input.userId is already an member of organization..

## Defined in

[src/resolvers/Mutation/createMember.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/createMember.ts#L37)
