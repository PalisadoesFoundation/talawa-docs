[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createFundraisingCampaignPledge](../README.md) / createFundraisingCampaignPledge

# Variable: createFundraisingCampaignPledge

\> `const` **createFundraisingCampaignPledge**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createFundraisingCampaignPledge"`\]

Creates a new pledge for a fundraising campaign.

This function performs the following actions:
1. Verifies the existence of the current user.
2. Retrieves and caches the user's details if not already cached.
3. Checks the validity of the provided or default campaign start and end dates.
4. Verifies the existence of the specified fundraising campaign.
5. Creates a new pledge for the specified campaign with the given details.
6. Updates the campaign to include the newly created pledge.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.campaignId`: The ID of the fundraising campaign for which the pledge is being created.
  - `data.userIds`: An array of user IDs associated with the pledge.
  - `data.startDate`: The start date of the pledge (optional; defaults to the campaign's start date).
  - `data.endDate`: The end date of the pledge (optional; defaults to the campaign's end date).
  - `data.amount`: The amount pledged.
  - `data.currency`: The currency of the pledged amount.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user performing the operation.

## Defined in

[src/resolvers/Mutation/createFundraisingCampaignPledge.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Mutation/createFundraisingCampaignPledge.ts#L42)
