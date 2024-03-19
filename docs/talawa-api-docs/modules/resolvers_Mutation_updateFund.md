[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateFund

# Module: resolvers/Mutation/updateFund

## Table of contents

### Variables

- [updateFund](resolvers_Mutation_updateFund.md#updatefund)

## Variables

### updateFund

• `Const` **updateFund**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"updateFund"``]

This function enables to update an organization specific fund.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the Fund of the organization exists.
3. If the organization exists.
4.If the user is authorized to update the fund.
5. If the fund already exists with the same name.

#### Defined in

[src/resolvers/Mutation/updateFund.ts:27](https://github.com/adi790uu/talawa-api/blob/5146430/src/resolvers/Mutation/updateFund.ts#L27)
