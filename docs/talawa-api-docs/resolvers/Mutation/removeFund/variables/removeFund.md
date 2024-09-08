[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeFund](../README.md) / removeFund

# Variable: removeFund

\> `const` **removeFund**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeFund"`\]

This function enables to remove fund .

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the fund  exists.
3. If the user is authorized.
4. If the user is admin of the organization.

## Defined in

[src/resolvers/Mutation/removeFund.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/removeFund.ts#L40)
