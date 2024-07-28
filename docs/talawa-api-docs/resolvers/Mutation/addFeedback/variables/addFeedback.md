[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addFeedback](../README.md) / addFeedback

# Variable: addFeedback

\> `const` **addFeedback**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addFeedback"`\]

Mutation resolver function to add feedback for an event.

This function pcerforms the following ations:
1. Checks if the specified event exists.
2. Retrieves the event attendee record for the current user and event.
3. Checks if the user is registered for the event and if they have checked in.
4. Ensures the user has not already submitted feedback for the event.
5. Updates the check-in record to mark feedback as submitted.
6. Creates and saves a new feedback entry.

## Param

The parent object for the mutation. Typically, this is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.eventId`: The ID of the event for which feedback is being submitted.
  - `data.feedback`: The feedback content to be submitted.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## See

 - Event - The Event model used to interact with the events collection in the database.
 - EventAttendee - The EventAttendee model used to manage event attendee records.
 - CheckIn - The CheckIn model used to manage check-in records.
 - Feedback - The Feedback model used to create and manage feedback entries.
 - MutationResolvers - The type definition for the mutation resolvers.

## Defined in

[src/resolvers/Mutation/addFeedback.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/Mutation/addFeedback.ts#L37)
