[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/removeEventVolunteer

# Module: resolvers/Mutation/removeEventVolunteer

## Table of contents

### Variables

- [removeEventVolunteer](resolvers_Mutation_removeEventVolunteer.md#removeeventvolunteer)

## Variables

### removeEventVolunteer

• `Const` **removeEventVolunteer**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"removeEventVolunteer"``]

This function enables to remove an Event Volunteer.

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. If the current user exists
2. If the Event volunteer to be removed exists.

#### Defined in

[src/resolvers/Mutation/removeEventVolunteer.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/resolvers/Mutation/removeEventVolunteer.ts#L20)
