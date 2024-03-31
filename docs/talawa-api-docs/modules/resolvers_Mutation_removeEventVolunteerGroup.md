[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removeEventVolunteerGroup

# Module: resolvers/Mutation/removeEventVolunteerGroup

## Table of contents

### Variables

- [removeEventVolunteerGroup](resolvers_Mutation_removeEventVolunteerGroup.md#removeeventvolunteergroup)

## Variables

### removeEventVolunteerGroup

• `Const` **removeEventVolunteerGroup**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"removeEventVolunteerGroup"``]

This function enables to remove an Event Volunteer Group.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the current user exists
2. If the Event volunteer group to be removed exists.
3. If the current user is the admin of the corresponding event

#### Defined in

[src/resolvers/Mutation/removeEventVolunteerGroup.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/resolvers/Mutation/removeEventVolunteerGroup.ts#L22)
