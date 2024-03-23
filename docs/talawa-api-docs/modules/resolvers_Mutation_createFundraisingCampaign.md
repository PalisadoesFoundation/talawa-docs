[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createFundraisingCampaign

# Module: resolvers/Mutation/createFundraisingCampaign

## Table of contents

### Variables

- [createFundraisingCampaign](resolvers_Mutation_createFundraisingCampaign.md#createfundraisingcampaign)

## Variables

### createFundraisingCampaign

• `Const` **createFundraisingCampaign**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createFundraisingCampaign"``]

This function enables to create a fundraisingCampaigin .

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
4. if the parent fund  exists
5. If the user is authorized.

#### Defined in

[src/resolvers/Mutation/createFundraisingCampaign.ts:26](https://github.com/adi790uu/talawa-api/blob/5146430/src/resolvers/Mutation/createFundraisingCampaign.ts#L26)
