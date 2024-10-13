[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getEventAttendee](../README.md) / getEventAttendee

# Variable: getEventAttendee

\> `const` **getEventAttendee**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getEventAttendee"`\]

Retrieves an attendee record for a specific event and user from the database.

This function performs the following steps:
1. Queries the database to find an `EventAttendee` record that matches the provided event ID and user ID.
2. Returns the found attendee record, or `null` if no matching record is found.

## Param

This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures.

## Param

The arguments provided by the GraphQL query, including:
  - `eventId`: The ID of the event for which the attendee is being retrieved.
  - `userId`: The ID of the user for whom the attendee record is being retrieved.

## Returns

The attendee record for the specified event and user, or `null` if no record is found.

## Defined in

[src/resolvers/Query/getEventAttendee.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/getEventAttendee.ts#L19)
