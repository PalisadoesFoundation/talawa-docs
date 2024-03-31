[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/resetCommunity

# Module: resolvers/Mutation/resetCommunity

## Table of contents

### Variables

- [resetCommunity](resolvers_Mutation_resetCommunity.md#resetcommunity)

## Variables

### resetCommunity

• `Const` **resetCommunity**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"resetCommunity"``]

This function enables to reset Pre login imagery.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the user is super admin.

#### Defined in

[src/resolvers/Mutation/resetCommunity.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/resolvers/Mutation/resetCommunity.ts#L21)
