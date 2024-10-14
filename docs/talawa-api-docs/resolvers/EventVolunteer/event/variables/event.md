[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/EventVolunteer/event](../README.md) / event

# Variable: event

\> `const` **event**: [`EventVolunteerResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerResolvers.md)\[`"event"`\]

Resolver function for the `event` field of an `EventVolunteer`.

This function retrieves the event associated with a specific event volunteer.

## Param

The parent object representing the event volunteer. It contains information about the event volunteer, including the ID of the event associated with it.

## Returns

A promise that resolves to the event document found in the database. This document represents the event associated with the event volunteer.

## See

 - Event - The Event model used to interact with the events collection in the database.
 - EventVolunteerResolvers - The type definition for the resolvers of the EventVolunteer fields.

## Defined in

[src/resolvers/EventVolunteer/event.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/EventVolunteer/event.ts#L16)
