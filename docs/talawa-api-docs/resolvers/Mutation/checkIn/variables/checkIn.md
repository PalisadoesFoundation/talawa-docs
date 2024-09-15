[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/checkIn](../README.md) / checkIn

# Variable: checkIn

\> `const` **checkIn**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"checkIn"`\]

Handles the check-in process for event attendees.

This resolver function allows event admins or superadmins to check-in attendees for a specific event.
It verifies the existence of the current user, the event, and the attendee to be checked in,
and ensures proper authorization before performing the check-in operation.

## Param

The parent resolver.

## Param

Arguments containing data for the check-in, including the eventId, userId.

## Param

Context object containing user authentication and request information.

## Throws

NotFoundError if the current user, event, or attendee is not found.

## Throws

UnauthorizedError if the current user lacks authorization to perform the check-in operation.

## Throws

ConflictError if the attendee is already checked in for the event.

## Remarks

The function performs the following checks and operations:
1. Verifies the existence of the current user, event, and attendee.
2. Checks if the current user is authorized to perform the check-in operation.
3. Checks if the attendee is already registered for the event. If so, updates the check-in status and isCheckedIn.
4. Checks if the attendee is not already checked in for the event then creates a new check-in entry and create new eventAttendee with chechInId and isCheckedIn.

## Defined in

[src/resolvers/Mutation/checkIn.ts:50](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/checkIn.ts#L50)
