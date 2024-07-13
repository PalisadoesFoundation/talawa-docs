[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createFundraisingCampaign](../README.md) / createFundraisingCampaign

# Variable: createFundraisingCampaign

\> `const` **createFundraisingCampaign**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createFundraisingCampaign"`\]

This function enables to create a fundraisingCampaigin .

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists
2 .If the startDate is valid
3. If the endDate is valid
4. if the parent fund  exists
5. If the user is authorized.

## Defined in

[src/resolvers/Mutation/createFundraisingCampaign.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/createFundraisingCampaign.ts#L31)
