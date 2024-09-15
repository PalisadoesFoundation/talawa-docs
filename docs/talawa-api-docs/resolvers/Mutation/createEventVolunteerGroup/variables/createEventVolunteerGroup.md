[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createEventVolunteerGroup](../README.md) / createEventVolunteerGroup

# Variable: createEventVolunteerGroup

\> `const` **createEventVolunteerGroup**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createEventVolunteerGroup"`\]

Creates a new event volunteer group and associates it with an event.

This resolver performs the following actions:

1. Validates the existence of the current user.
2. Checks if the specified event exists.
3. Verifies that the current user is an admin of the event.
4. Creates a new volunteer group for the event.
5. Updates the event to include the newly created volunteer group.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `data`: An object containing:
    - `eventId`: The ID of the event to associate the volunteer group with.
    - `name`: The name of the volunteer group.
    - `volunteersRequired`: The number of volunteers required for the group.

## Param

The context object containing user information (context.userId).

## Remarks

This function first checks the cache for the current user and then queries the database if needed. It ensures that the user is authorized to create a volunteer group for the event before proceeding.

## Defined in

[src/resolvers/Mutation/createEventVolunteerGroup.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/createEventVolunteerGroup.ts#L36)
