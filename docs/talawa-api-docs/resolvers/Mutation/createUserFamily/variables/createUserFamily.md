[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createUserFamily](../README.md) / createUserFamily

# Variable: createUserFamily

\> `const` **createUserFamily**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createUserFamily"`\]

This Function enables to create a user Family

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

- The following checks are done:
1. If the user exists
2. If the user is super admin
3. If there are atleast two members in the family.

## Defined in

[src/resolvers/Mutation/createUserFamily.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/createUserFamily.ts#L31)
