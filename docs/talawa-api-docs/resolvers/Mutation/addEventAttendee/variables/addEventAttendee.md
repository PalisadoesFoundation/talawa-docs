[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addEventAttendee](../README.md) / addEventAttendee

# Variable: addEventAttendee

\> `const` **addEventAttendee**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addEventAttendee"`\]

Mutation resolver function to add a user as an attendee to an event.

This function performs the following actions:
1. Retrieves the current user from the cache or database.
2. Retrieves the current user's app profile from the cache or database.
3. Retrieves the event from the cache or database.
4. Checks if the user making the request is an admin of the event or a super admin.
5. Validates that the user to be added as an attendee exists and is not already registered for the event.
6. Checks if the user to be added is a member of the organization hosting the event.
7. Adds the user as an attendee to the event if all checks pass.

## Param

The parent object for the mutation. Typically, this is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.eventId`: The ID of the event to which the user will be added as an attendee.
  - `data.userId`: The ID of the user to be added as an attendee.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## Returns

A promise that resolves to the user document representing the user added as an attendee.

## See

 - User - The User model used to interact with the users collection in the database.
 - AppUserProfile - The AppUserProfile model used to interact with the app user profiles collection in the database.
 - Event - The Event model used to interact with the events collection in the database.
 - EventAttendee - The EventAttendee model used to manage event attendee registrations.
 - MutationResolvers - The type definition for the mutation resolvers.

## Defined in

[src/resolvers/Mutation/addEventAttendee.ts:51](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/addEventAttendee.ts#L51)
