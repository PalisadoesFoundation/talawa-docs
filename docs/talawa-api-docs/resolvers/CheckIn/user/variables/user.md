[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/CheckIn/user](../README.md) / user

# Variable: user

\> `const` **user**: [`CheckInResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/CheckInResolvers.md)\[`"user"`\]

Resolver function for the `user` field of a `CheckIn`.

This function retrieves the user who checked in to an event.

## Param

The parent object representing the check-in. It contains information about the check-in, including the ID of the event attendee who checked in.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who checked in to the event.

## See

 - EventAttendee - The EventAttendee model used to interact with the event attendees collection in the database.
 - CheckInResolvers - The type definition for the resolvers of the CheckIn fields.

## Defined in

[src/resolvers/CheckIn/user.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/CheckIn/user.ts#L16)
