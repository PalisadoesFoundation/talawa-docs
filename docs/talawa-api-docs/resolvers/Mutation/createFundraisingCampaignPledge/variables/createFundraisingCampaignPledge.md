[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createFundraisingCampaignPledge](../README.md) / createFundraisingCampaignPledge

# Variable: createFundraisingCampaignPledge

\> `const` **createFundraisingCampaignPledge**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createFundraisingCampaignPledge"`\]

This function enables to create a fundraisingCampaiginPledge .

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
4. if the fund campaign exists

## Defined in

[src/resolvers/Mutation/createFundraisingCampaignPledge.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/createFundraisingCampaignPledge.ts#L28)
