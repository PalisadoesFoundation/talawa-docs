[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createFund

# Module: resolvers/Mutation/createFund

## Table of contents

### Variables

- [createFund](resolvers_Mutation_createFund.md#createfund)

## Variables

### createFund

• `Const` **createFund**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createFund"``]

This function enables to create an organization specific fundraising funds.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists
2. If the organization exists
3. If the user is authorized.
4. If the fund already exists

#### Defined in

[src/resolvers/Mutation/createFund.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/resolvers/Mutation/createFund.ts#L30)
