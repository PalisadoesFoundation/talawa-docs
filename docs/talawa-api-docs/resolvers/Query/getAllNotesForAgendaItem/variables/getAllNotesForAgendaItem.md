[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getAllNotesForAgendaItem](../README.md) / getAllNotesForAgendaItem

# Variable: getAllNotesForAgendaItem

\> `const` **getAllNotesForAgendaItem**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getAllNotesForAgendaItem"`\]

Retrieves all notes associated with a specific agenda item from the database.

This function performs the following steps:
1. Queries the database for notes that are associated with the specified agenda item ID.
2. Returns the list of notes for the given agenda item.

## Param

This parameter is not used in this resolver function but is included for compatibility with GraphQL resolver signatures.

## Param

The arguments provided by the GraphQL query, including the agenda item ID (`agendaItemId`) for which notes are to be retrieved.

## Returns

A list of notes associated with the specified agenda item.

## Defined in

[src/resolvers/Query/getAllNotesForAgendaItem.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/getAllNotesForAgendaItem.ts#L17)
