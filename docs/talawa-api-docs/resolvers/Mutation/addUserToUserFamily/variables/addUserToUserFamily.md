[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserToUserFamily](../README.md) / addUserToUserFamily

# Variable: addUserToUserFamily

\> `const` **addUserToUserFamily**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserToUserFamily"`\]

This function adds user to the family.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of the entire application

## Remarks

The following checks are done:
1. If the family exists
2. If the user exists
3. If the user is already member of the family
4. If the user is admin of the user Family

## Defined in

[src/resolvers/Mutation/addUserToUserFamily.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/addUserToUserFamily.ts#L28)
