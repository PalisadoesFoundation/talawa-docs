[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateEventVolunteer

# Module: resolvers/Mutation/updateEventVolunteer

## Table of contents

### Variables

- [updateEventVolunteer](resolvers_Mutation_updateEventVolunteer.md#updateeventvolunteer)

## Variables

### updateEventVolunteer

• `Const` **updateEventVolunteer**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"updateEventVolunteer"``]

This function accepts the Event Volunteer Invite sent to a user

**`Param`**

parent of current request

**`Param`**

payload provided with the request

**`Param`**

context of entire application

**`Remarks`**

The following checks are done:
1. Whether the user exists
2. Whether the EventVolunteer exists
3. Whether the current user is the user of EventVolunteer
4. Whether the EventVolunteer is invited

#### Defined in

[src/resolvers/Mutation/updateEventVolunteer.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/9cb91bb/src/resolvers/Mutation/updateEventVolunteer.ts#L22)
