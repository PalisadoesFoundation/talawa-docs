[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaItem/categories](../README.md) / categories

# Variable: categories

\> `const` **categories**: [`AgendaItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaItemResolvers.md)\[`"categories"`\]

Resolver function for the `categories` field of an `AgendaItem`.

This function retrieves the categories associated with a specific agenda item.

## Param

The parent object representing the agenda item. It contains a list of category IDs associated with it.

## Returns

A promise that resolves to an array of category documents found in the database. These documents represent the categories associated with the agenda item.

## See

 - AgendaCategoryModel - The model used to interact with the categories collection in the database.
 - AgendaItemResolvers - The type definition for the resolvers of the AgendaItem fields.

## Defined in

[src/resolvers/AgendaItem/categories.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/AgendaItem/categories.ts#L17)
