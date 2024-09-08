[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createFundraisingCampaign](../README.md) / createFundraisingCampaign

# Variable: createFundraisingCampaign

\> `const` **createFundraisingCampaign**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createFundraisingCampaign"`\]

Creates a new fundraising campaign and associates it with a specified fund.

This resolver performs the following actions:

1. Validates the existence of the current user.
2. Checks if the user has an associated profile and if they are authorized.
3. Ensures that a fundraising campaign with the same name does not already exist.
4. Validates the provided start and end dates for the campaign.
5. Verifies the existence of the specified fund and checks if the user is authorized to create a campaign for the fund.
6. Creates a new fundraising campaign and associates it with the fund.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `data`: An object containing:
    - `name`: The name of the fundraising campaign.
    - `fundId`: The ID of the fund to associate the campaign with.
    - `startDate`: The start date of the campaign.
    - `endDate`: The end date of the campaign.
    - `fundingGoal`: The funding goal for the campaign.
    - `currency`: The currency for the funding goal.

## Param

The context object containing user information (context.userId).

## Remarks

This function checks the cache for user and profile data, validates inputs, and ensures the user has the necessary permissions before creating the campaign.

## Defined in

[src/resolvers/Mutation/createFundraisingCampaign.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createFundraisingCampaign.ts#L45)
