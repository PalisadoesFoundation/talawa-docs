[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/deleteVenue

# Module: resolvers/Mutation/deleteVenue

## Table of contents

### Variables

- [deleteVenue](resolvers_Mutation_deleteVenue.md#deletevenue)

## Variables

### deleteVenue

• `Const` **deleteVenue**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"deleteVenue"``]

This function enables to create a venue in an organization.

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
3. Whether the user is admin or superadmin or not
4. If the venue exists

#### Defined in

[src/resolvers/Mutation/deleteVenue.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/resolvers/Mutation/deleteVenue.ts#L30)
