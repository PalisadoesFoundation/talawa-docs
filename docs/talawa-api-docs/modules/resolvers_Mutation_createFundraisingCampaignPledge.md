[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createFundraisingCampaignPledge

# Module: resolvers/Mutation/createFundraisingCampaignPledge

## Table of contents

### Variables

- [createFundraisingCampaignPledge](resolvers_Mutation_createFundraisingCampaignPledge.md#createfundraisingcampaignpledge)

## Variables

### createFundraisingCampaignPledge

• `Const` **createFundraisingCampaignPledge**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createFundraisingCampaignPledge"``]

This function enables to create a fundraisingCampaiginPledge .

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the current user exists
2 .If the startDate is valid
3. If the endDate is valid
4. if the fund campaign exists

#### Defined in

[src/resolvers/Mutation/createFundraisingCampaignPledge.ts:25](https://github.com/adi790uu/talawa-api/blob/5146430/src/resolvers/Mutation/createFundraisingCampaignPledge.ts#L25)
