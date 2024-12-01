[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createVolunteerMembership](../README.md) / createVolunteerMembership

# Variable: createVolunteerMembership

\> `const` **createVolunteerMembership**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createVolunteerMembership"`\]

Creates a new event volunteer membership entry.

This function performs the following actions:
1. Validates the existence of the current user.
2. Checks if the specified user and event exist.
3. Creates a new volunteer entry for the event.
4. Creates a volunteer membership record for the new volunteer.
5. Returns the created vvolunteer membership record.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
 - `data.userId`: The ID of the user to be assigned as a volunteer.
 - `data.event`: The ID of the event for which the volunteer is being created.
 - `data.group`: The ID of the volunteer group to which the user is being added.
 - `data.status`: The status of the volunteer membership.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user performing the operation.

## Returns

The created event volunteer record.

## Defined in

[src/resolvers/Mutation/createVolunteerMembership.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/createVolunteerMembership.ts#L31)
