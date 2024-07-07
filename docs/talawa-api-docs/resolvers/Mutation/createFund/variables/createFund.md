[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createFund](../README.md) / createFund

# Variable: createFund

\> `const` **createFund**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createFund"`\]

This function enables to create an organization specific fundraising funds.

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
3. If the user is authorized.
4. If the fund already exists

## Defined in

[src/resolvers/Mutation/createFund.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/createFund.ts#L30)
