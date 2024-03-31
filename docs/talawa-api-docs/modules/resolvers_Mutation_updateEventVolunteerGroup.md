[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateEventVolunteerGroup

# Module: resolvers/Mutation/updateEventVolunteerGroup

## Table of contents

### Variables

- [updateEventVolunteerGroup](resolvers_Mutation_updateEventVolunteerGroup.md#updateeventvolunteergroup)

## Variables

### updateEventVolunteerGroup

• `Const` **updateEventVolunteerGroup**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"updateEventVolunteerGroup"``]

This function enables to update the Event Volunteer Group

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. Whether the user exists
2. Whether the EventVolunteerGroup exists
3. Whether the current user is the leader of EventVolunteerGroup

#### Defined in

[src/resolvers/Mutation/updateEventVolunteerGroup.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/resolvers/Mutation/updateEventVolunteerGroup.ts#L20)
