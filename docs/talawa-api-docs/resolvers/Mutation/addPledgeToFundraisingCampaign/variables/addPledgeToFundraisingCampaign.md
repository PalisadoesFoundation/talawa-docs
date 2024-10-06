[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addPledgeToFundraisingCampaign](../README.md) / addPledgeToFundraisingCampaign

# Variable: addPledgeToFundraisingCampaign

\> `const` **addPledgeToFundraisingCampaign**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addPledgeToFundraisingCampaign"`\]

Mutation resolver to add a pledge to a fundraising campaign.

This function adds a specified pledge to a fundraising campaign. It performs several checks:

1. Verifies that the current user exists.
2. Confirms that the pledge exists.
3. Checks that the campaign exists.
4. Ensures the user has made the pledge.
5. Verifies that the campaign is not already associated with the pledge.

If any of these conditions are not met, appropriate errors are thrown.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `pledgeId`: The ID of the pledge to be added.
  - `campaignId`: The ID of the campaign to which the pledge will be added.

## Param

The context of the entire application, containing user information and other context-specific data.

## Returns

A promise that resolves to the updated pledge object.

## Defined in

[src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts#L41)
