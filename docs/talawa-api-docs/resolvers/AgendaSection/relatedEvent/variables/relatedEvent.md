[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaSection/relatedEvent](../README.md) / relatedEvent

# Variable: relatedEvent

\> `const` **relatedEvent**: [`AgendaSectionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaSectionResolvers.md)\[`"relatedEvent"`\]

Resolver function for the `relatedEvent` field of an `AgendaSection`.

This function retrieves the event related to a specific agenda section.

## Param

The parent object representing the agenda section. It contains information about the agenda section, including the ID of the related event.

## Returns

A promise that resolves to the event document found in the database. This document represents the event related to the agenda section.

## See

 - Event - The Event model used to interact with the events collection in the database.
 - AgendaSectionResolvers - The type definition for the resolvers of the AgendaSection fields.

## Defined in

[src/resolvers/AgendaSection/relatedEvent.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/AgendaSection/relatedEvent.ts#L17)
