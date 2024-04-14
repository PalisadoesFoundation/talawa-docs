[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/addPledgeToFundraisingCampaign

# Module: resolvers/Mutation/addPledgeToFundraisingCampaign

## Table of contents

### Variables

- [addPledgeToFundraisingCampaign](resolvers_Mutation_addPledgeToFundraisingCampaign.md#addpledgetofundraisingcampaign)

## Variables

### addPledgeToFundraisingCampaign

• `Const` **addPledgeToFundraisingCampaign**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"addPledgeToFundraisingCampaign"``]

This function adds  campaign pledge to campaign.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the current user exists
2. If the pledge exists
3. If the campaign exists

#### Defined in

[src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/resolvers/Mutation/addPledgeToFundraisingCampaign.ts#L28)
