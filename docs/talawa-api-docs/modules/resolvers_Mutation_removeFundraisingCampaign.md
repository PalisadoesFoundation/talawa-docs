[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removeFundraisingCampaign

# Module: resolvers/Mutation/removeFundraisingCampaign

## Table of contents

### Variables

- [removeFundraisingCampaign](resolvers_Mutation_removeFundraisingCampaign.md#removefundraisingcampaign)

## Variables

### removeFundraisingCampaign

• `Const` **removeFundraisingCampaign**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"removeFundraisingCampaign"``]

This function enables to remove fundraising campaign .

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the fundraising campaign  exists.
3. If the user is authorized.
4. If the user is admin of the organization.

#### Defined in

[src/resolvers/Mutation/removeFundraisingCampaign.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/resolvers/Mutation/removeFundraisingCampaign.ts#L38)
