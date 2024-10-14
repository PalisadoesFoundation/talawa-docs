[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ConnectionPageInfo

# Type Alias: ConnectionPageInfo

\> **ConnectionPageInfo**: `object`

The standard graphQL connection page info that contains metadata about a
particular instance of a connection. ALl other custom connection page info
types must implement this interface.

## Type declaration

### endCursor?

\> `optional` **endCursor**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

A field to tell the value of cursor for the last edge of a particular instance of a
connection.

### hasNextPage

\> **hasNextPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

A field to tell whether the connection has additional edges after the
edge with endCursor as its cursor.

### hasPreviousPage

\> **hasPreviousPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

A field to tell whether the connection has additional edges
before the edge with startCursor as its cursor.

### startCursor?

\> `optional` **startCursor**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

A field to tell the value of cursor for the first edge of a particular instance of a
connection.

## Defined in

[src/types/generatedGraphQLTypes.ts:332](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/types/generatedGraphQLTypes.ts#L332)
