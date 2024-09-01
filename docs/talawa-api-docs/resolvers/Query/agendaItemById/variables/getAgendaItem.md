[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/agendaItemById](../README.md) / getAgendaItem

# Variable: getAgendaItem

\> `const` **getAgendaItem**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getAgendaItem"`\]

Retrieves an agenda item by its ID.

This function fetches a specific agenda item from the database using its ID. If the agenda item
is not found, it throws an error indicating that the item does not exist.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, including the ID of the agenda item to retrieve.

## Defined in

[src/resolvers/Query/agendaItemById.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/resolvers/Query/agendaItemById.ts#L17)
