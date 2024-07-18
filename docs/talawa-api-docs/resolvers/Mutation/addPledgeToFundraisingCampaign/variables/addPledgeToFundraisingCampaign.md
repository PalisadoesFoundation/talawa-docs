[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addPledgeToFundraisingCampaign](../README.md) / addPledgeToFundraisingCampaign

# Variable: addPledgeToFundraisingCampaign

\> `const` **addPledgeToFundraisingCampaign**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addPledgeToFundraisingCampaign"`\]

This function adds  campaign pledge to campaign.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists
2. If the pledge exists
3. If the campaign exists

## Defined in

[src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts#L31)
