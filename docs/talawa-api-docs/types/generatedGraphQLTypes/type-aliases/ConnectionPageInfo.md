[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ConnectionPageInfo

# Type Alias: ConnectionPageInfo

> **ConnectionPageInfo**: `object`

The standard graphQL connection page info that contains metadata about a
particular instance of a connection. ALl other custom connection page info
types must implement this interface.

## Type declaration

### endCursor?

> `optional` **endCursor**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

A field to tell the value of cursor for the last edge of a particular instance of a
connection.

### hasNextPage

> **hasNextPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

A field to tell whether the connection has additional edges after the
edge with endCursor as its cursor.

### hasPreviousPage

> **hasPreviousPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

A field to tell whether the connection has additional edges
before the edge with startCursor as its cursor.

### startCursor?

> `optional` **startCursor**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

A field to tell the value of cursor for the first edge of a particular instance of a
connection.

## Defined in

[src/types/generatedGraphQLTypes.ts:322](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/types/generatedGraphQLTypes.ts#L322)
