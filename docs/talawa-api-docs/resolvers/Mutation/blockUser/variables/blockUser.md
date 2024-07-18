[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/blockUser](../README.md) / blockUser

# Variable: blockUser

\> `const` **blockUser**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"blockUser"`\]

This function enables blocking a user.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists
2. If the user exists
3. If the user is an admin of organization
4. If the user to be blocked is already blocked by the organization

## Defined in

[src/resolvers/Mutation/blockUser.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/blockUser.ts#L28)
