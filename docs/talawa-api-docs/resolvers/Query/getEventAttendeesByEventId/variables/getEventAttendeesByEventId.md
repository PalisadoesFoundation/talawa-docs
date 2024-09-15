[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getEventAttendeesByEventId](../README.md) / getEventAttendeesByEventId

# Variable: getEventAttendeesByEventId

\> `const` **getEventAttendeesByEventId**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getEventAttendeesByEventId"`\]

Retrieves all attendees for a specific event from the database.

This function performs the following steps:
1. Queries the database to find all `EventAttendee` records that match the provided event ID.
2. Returns an array of attendee records for the specified event.

## Param

This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures.

## Param

The arguments provided by the GraphQL query, including:
  - `eventId`: The ID of the event for which attendees are being retrieved.

## Defined in

[src/resolvers/Query/getEventAttendeesByEventId.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Query/getEventAttendeesByEventId.ts#L16)
