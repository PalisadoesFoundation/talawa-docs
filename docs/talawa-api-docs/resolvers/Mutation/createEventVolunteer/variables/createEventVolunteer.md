[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createEventVolunteer](../README.md) / createEventVolunteer

# Variable: createEventVolunteer

\> `const` **createEventVolunteer**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createEventVolunteer"`\]

Creates a new event volunteer entry.

This function performs the following actions:
1. Validates the existence of the current user.
2. Checks if the specified user and event exist.
3. Verifies that the current user is an admin of the event.
4. Creates a new volunteer entry for the event.
5. Creates a volunteer membership record for the new volunteer.
6. Returns the created event volunteer record.

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

[src/resolvers/Mutation/createEventVolunteer.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/createEventVolunteer.ts#L35)
