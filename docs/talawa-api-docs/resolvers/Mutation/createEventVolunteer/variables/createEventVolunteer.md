[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createEventVolunteer](../README.md) / createEventVolunteer

# Variable: createEventVolunteer

\> `const` **createEventVolunteer**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createEventVolunteer"`\]

Creates a new event volunteer entry.

This function performs the following actions:
1. Verifies the existence of the current user.
2. Verifies the existence of the volunteer user.
3. Verifies the existence of the event.
4. Verifies the existence of the volunteer group.
5. Ensures that the current user is the leader of the volunteer group.
6. Creates a new event volunteer record.
7. Adds the newly created volunteer to the group's list of volunteers.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.userId`: The ID of the user to be assigned as a volunteer.
  - `data.eventId`: The ID of the event for which the volunteer is being created.
  - `data.groupId`: The ID of the volunteer group to which the user is being added.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user performing the operation.

## Returns

The created event volunteer record.

## Defined in

[src/resolvers/Mutation/createEventVolunteer.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Mutation/createEventVolunteer.ts#L39)
