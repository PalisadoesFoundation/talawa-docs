[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/editVenue

# Module: resolvers/Mutation/editVenue

## Table of contents

### Variables

- [editVenue](resolvers_Mutation_editVenue.md#editvenue)

## Variables

### editVenue

• `Const` **editVenue**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"editVenue"``]

This function enables to edit a venue.

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
3. If the venue exists
4. If the user is authorized
5. If the venue details are valid
5. If the venue already exists

#### Defined in

[src/resolvers/Mutation/editVenue.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/resolvers/Mutation/editVenue.ts#L30)
