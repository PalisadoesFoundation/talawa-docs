[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateFundCampaignPledge

# Module: resolvers/Mutation/updateFundCampaignPledge

## Table of contents

### Variables

- [updateFundraisingCampaignPledge](resolvers_Mutation_updateFundCampaignPledge.md#updatefundraisingcampaignpledge)

## Variables

### updateFundraisingCampaignPledge

• `Const` **updateFundraisingCampaignPledge**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"updateFundraisingCampaignPledge"``]

This function enables to update a fundraising campaign pledge.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the FundraisingCampaignPledge exists.
3. If the user has made the pledge.
4. If the start date is valid.
5. If the end date is valid.

#### Defined in

[src/resolvers/Mutation/updateFundCampaignPledge.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/resolvers/Mutation/updateFundCampaignPledge.ts#L29)
