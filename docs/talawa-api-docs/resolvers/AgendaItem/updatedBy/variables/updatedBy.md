[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaItem/updatedBy](../README.md) / updatedBy

# Variable: updatedBy

> `const` **updatedBy**: [`AgendaItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaItemResolvers.md)\[`"updatedBy"`\]

Resolver function for the `updatedBy` field of an `AgendaItem`.

This function retrieves the user who last updated a specific agenda item.

## Param

The parent object representing the agenda item. It contains information about the agenda item, including the ID of the user who last updated it.

## See

 - User - The User model used to interact with the users collection in the database.
 - AgendaItemResolvers - The type definition for the resolvers of the AgendaItem fields.

## Defined in

[src/resolvers/AgendaItem/updatedBy.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/AgendaItem/updatedBy.ts#L18)
