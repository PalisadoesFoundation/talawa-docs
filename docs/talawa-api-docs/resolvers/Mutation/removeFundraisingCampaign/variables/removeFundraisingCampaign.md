[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeFundraisingCampaign](../README.md) / removeFundraisingCampaign

# Variable: removeFundraisingCampaign

\> `const` **removeFundraisingCampaign**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeFundraisingCampaign"`\]

This function enables to remove fundraising campaign .

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the fundraising campaign  exists.
3. If the user is authorized.
4. If the user is admin of the organization.

## Defined in

[src/resolvers/Mutation/removeFundraisingCampaign.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/removeFundraisingCampaign.ts#L38)
