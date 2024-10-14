[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaItem/updatedBy](../README.md) / updatedBy

# Variable: updatedBy

\> `const` **updatedBy**: [`AgendaItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaItemResolvers.md)\[`"updatedBy"`\]

Resolver function for the `updatedBy` field of an `AgendaItem`.

This function retrieves the user who last updated a specific agenda item.

## Param

The parent object representing the agenda item. It contains information about the agenda item, including the ID of the user who last updated it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who last updated the agenda item.

## See

 - User - The User model used to interact with the users collection in the database.
 - AgendaItemResolvers - The type definition for the resolvers of the AgendaItem fields.

## Defined in

[src/resolvers/AgendaItem/updatedBy.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/AgendaItem/updatedBy.ts#L18)
