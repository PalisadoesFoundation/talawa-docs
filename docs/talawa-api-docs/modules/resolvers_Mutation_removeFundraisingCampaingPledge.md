[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removeFundraisingCampaingPledge

# Module: resolvers/Mutation/removeFundraisingCampaingPledge

## Table of contents

### Variables

- [removeFundraisingCampaingPledge](resolvers_Mutation_removeFundraisingCampaingPledge.md#removefundraisingcampaingpledge)

## Variables

### removeFundraisingCampaingPledge

• `Const` **removeFundraisingCampaingPledge**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"removeFundraisingCampaignPledge"``]

This function enables to remove fundraising campaign pledge .

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists
2. If the fundraising campaign pledge exists.
3. If the user has made the pledge.

#### Defined in

[src/resolvers/Mutation/removeFundraisingCampaingPledge.ts:26](https://github.com/adi790uu/talawa-api/blob/5146430/src/resolvers/Mutation/removeFundraisingCampaingPledge.ts#L26)
