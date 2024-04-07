[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/createVenue

# Module: resolvers/Mutation/createVenue

## Table of contents

### Variables

- [createVenue](resolvers_Mutation_createVenue.md#createvenue)

## Variables

### createVenue

• `Const` **createVenue**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"createVenue"``]

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
4. If the venue name is missing
5. If the same venue already exists in an organization

#### Defined in

[src/resolvers/Mutation/createVenue.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/resolvers/Mutation/createVenue.ts#L28)
