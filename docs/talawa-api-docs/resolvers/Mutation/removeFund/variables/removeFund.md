[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeFund](../README.md) / removeFund

# Variable: removeFund

> `const` **removeFund**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeFund"`\]

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

[src/resolvers/Mutation/removeFund.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/Mutation/removeFund.ts#L40)
