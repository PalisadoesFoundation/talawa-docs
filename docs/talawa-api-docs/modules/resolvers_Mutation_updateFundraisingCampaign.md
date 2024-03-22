[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateFundraisingCampaign

# Module: resolvers/Mutation/updateFundraisingCampaign

## Table of contents

### Variables

- [updateFundraisingCampaign](resolvers_Mutation_updateFundraisingCampaign.md#updatefundraisingcampaign)

## Variables

### updateFundraisingCampaign

• `Const` **updateFundraisingCampaign**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"updateFundraisingCampaign"``]

This function enables to update a fundraising campaign.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the FundraisingCampaign exists.
3. If the user is authorized to update the fundraising campaign.
4. If the fundraising campaign already exists with the same name.
5. If the start date is valid.
6. If the end date is valid.

#### Defined in

[src/resolvers/Mutation/updateFundraisingCampaign.ts:33](https://github.com/adi790uu/talawa-api/blob/5146430/src/resolvers/Mutation/updateFundraisingCampaign.ts#L33)
