[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removeFund

# Module: resolvers/Mutation/removeFund

## Table of contents

### Variables

- [removeFund](resolvers_Mutation_removeFund.md#removefund)

## Variables

### removeFund

• `Const` **removeFund**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"removeFund"``]

This function enables to remove fund .

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists
2. If the fund  exists.
3. If the user is authorized.
4. If the user is admin of the organization.

#### Defined in

[src/resolvers/Mutation/removeFund.ts:24](https://github.com/adi790uu/talawa-api/blob/5146430/src/resolvers/Mutation/removeFund.ts#L24)
