[talawa-api](../README.md) / [Exports](../modules.md) / utilities/graphQLConnection

# Module: utilities/graphQLConnection

## Table of contents

### References

- [CreateCursor](utilities_graphQLConnection.md#createcursor)
- [CreateNode](utilities_graphQLConnection.md#createnode)
- [DefaultGraphQLConnection](utilities_graphQLConnection.md#defaultgraphqlconnection)
- [DefaultGraphQLConnectionEdge](utilities_graphQLConnection.md#defaultgraphqlconnectionedge)
- [ParseGraphQLConnectionArgumentsResult](utilities_graphQLConnection.md#parsegraphqlconnectionargumentsresult)
- [ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult](utilities_graphQLConnection.md#parsegraphqlconnectionargumentswithsortedbyandwhereresult)
- [ParseGraphQLConnectionArgumentsWithSortedByResult](utilities_graphQLConnection.md#parsegraphqlconnectionargumentswithsortedbyresult)
- [ParseGraphQLConnectionArgumentsWithWhereResult](utilities_graphQLConnection.md#parsegraphqlconnectionargumentswithwhereresult)
- [ParseGraphQLConnectionCursor](utilities_graphQLConnection.md#parsegraphqlconnectioncursor)
- [ParseGraphQLConnectionCursorArguments](utilities_graphQLConnection.md#parsegraphqlconnectioncursorarguments)
- [ParseGraphQLConnectionCursorResult](utilities_graphQLConnection.md#parsegraphqlconnectioncursorresult)
- [ParseGraphQLConnectionSortedByResult](utilities_graphQLConnection.md#parsegraphqlconnectionsortedbyresult)
- [ParseGraphQLConnectionWhereResult](utilities_graphQLConnection.md#parsegraphqlconnectionwhereresult)
- [ParsedGraphQLConnectionArguments](utilities_graphQLConnection.md#parsedgraphqlconnectionarguments)
- [ParsedGraphQLConnectionArgumentsWithSortedBy](utilities_graphQLConnection.md#parsedgraphqlconnectionargumentswithsortedby)
- [ParsedGraphQLConnectionArgumentsWithSortedByAndWhere](utilities_graphQLConnection.md#parsedgraphqlconnectionargumentswithsortedbyandwhere)
- [ParsedGraphQLConnectionArgumentsWithWhere](utilities_graphQLConnection.md#parsedgraphqlconnectionargumentswithwhere)
- [TransformToDefaultGraphQLConnectionArguments](utilities_graphQLConnection.md#transformtodefaultgraphqlconnectionarguments)
- [generateDefaultGraphQLConnection](utilities_graphQLConnection.md#generatedefaultgraphqlconnection)
- [getCommonGraphQLConnectionFilter](utilities_graphQLConnection.md#getcommongraphqlconnectionfilter)
- [getCommonGraphQLConnectionSort](utilities_graphQLConnection.md#getcommongraphqlconnectionsort)
- [parseGraphQLConnectionArguments](utilities_graphQLConnection.md#parsegraphqlconnectionarguments)
- [parseGraphQLConnectionArgumentsWithSortedBy](utilities_graphQLConnection.md#parsegraphqlconnectionargumentswithsortedby)
- [parseGraphQLConnectionArgumentsWithSortedByAndWhere](utilities_graphQLConnection.md#parsegraphqlconnectionargumentswithsortedbyandwhere)
- [parseGraphQLConnectionArgumentsWithWhere](utilities_graphQLConnection.md#parsegraphqlconnectionargumentswithwhere)
- [transformToDefaultGraphQLConnection](utilities_graphQLConnection.md#transformtodefaultgraphqlconnection)

### Type Aliases

- [DefaultGraphQLArgumentError](utilities_graphQLConnection.md#defaultgraphqlargumenterror)
- [DefaultGraphQLConnectionArguments](utilities_graphQLConnection.md#defaultgraphqlconnectionarguments)
- [GraphQLConnectionTraversalDirection](utilities_graphQLConnection.md#graphqlconnectiontraversaldirection)

### Functions

- [isNotNullish](utilities_graphQLConnection.md#isnotnullish)

## References

### CreateCursor

Re-exports [CreateCursor](utilities_graphQLConnection_transformToDefaultGraphQLConnection.md#createcursor)

___

### CreateNode

Re-exports [CreateNode](utilities_graphQLConnection_transformToDefaultGraphQLConnection.md#createnode)

___

### DefaultGraphQLConnection

Re-exports [DefaultGraphQLConnection](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#defaultgraphqlconnection)

___

### DefaultGraphQLConnectionEdge

Re-exports [DefaultGraphQLConnectionEdge](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#defaultgraphqlconnectionedge)

___

### ParseGraphQLConnectionArgumentsResult

Re-exports [ParseGraphQLConnectionArgumentsResult](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectionargumentsresult)

___

### ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult

Re-exports [ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsegraphqlconnectionargumentswithsortedbyandwhereresult)

___

### ParseGraphQLConnectionArgumentsWithSortedByResult

Re-exports [ParseGraphQLConnectionArgumentsWithSortedByResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionargumentswithsortedbyresult)

___

### ParseGraphQLConnectionArgumentsWithWhereResult

Re-exports [ParseGraphQLConnectionArgumentsWithWhereResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionargumentswithwhereresult)

___

### ParseGraphQLConnectionCursor

Re-exports [ParseGraphQLConnectionCursor](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursor)

___

### ParseGraphQLConnectionCursorArguments

Re-exports [ParseGraphQLConnectionCursorArguments](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments)

___

### ParseGraphQLConnectionCursorResult

Re-exports [ParseGraphQLConnectionCursorResult](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)

___

### ParseGraphQLConnectionSortedByResult

Re-exports [ParseGraphQLConnectionSortedByResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionsortedbyresult)

___

### ParseGraphQLConnectionWhereResult

Re-exports [ParseGraphQLConnectionWhereResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionwhereresult)

___

### ParsedGraphQLConnectionArguments

Re-exports [ParsedGraphQLConnectionArguments](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsedgraphqlconnectionarguments)

___

### ParsedGraphQLConnectionArgumentsWithSortedBy

Re-exports [ParsedGraphQLConnectionArgumentsWithSortedBy](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsedgraphqlconnectionargumentswithsortedby)

___

### ParsedGraphQLConnectionArgumentsWithSortedByAndWhere

Re-exports [ParsedGraphQLConnectionArgumentsWithSortedByAndWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsedgraphqlconnectionargumentswithsortedbyandwhere)

___

### ParsedGraphQLConnectionArgumentsWithWhere

Re-exports [ParsedGraphQLConnectionArgumentsWithWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsedgraphqlconnectionargumentswithwhere)

___

### TransformToDefaultGraphQLConnectionArguments

Re-exports [TransformToDefaultGraphQLConnectionArguments](utilities_graphQLConnection_transformToDefaultGraphQLConnection.md#transformtodefaultgraphqlconnectionarguments)

___

### generateDefaultGraphQLConnection

Re-exports [generateDefaultGraphQLConnection](utilities_graphQLConnection_generateDefaultGraphQLConnection.md#generatedefaultgraphqlconnection)

___

### getCommonGraphQLConnectionFilter

Re-exports [getCommonGraphQLConnectionFilter](utilities_graphQLConnection_getCommonGraphQLConnectionFilter.md#getcommongraphqlconnectionfilter)

___

### getCommonGraphQLConnectionSort

Re-exports [getCommonGraphQLConnectionSort](utilities_graphQLConnection_getCommonGraphQLConnectionSort.md#getcommongraphqlconnectionsort)

___

### parseGraphQLConnectionArguments

Re-exports [parseGraphQLConnectionArguments](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectionarguments)

___

### parseGraphQLConnectionArgumentsWithSortedBy

Re-exports [parseGraphQLConnectionArgumentsWithSortedBy](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionargumentswithsortedby)

___

### parseGraphQLConnectionArgumentsWithSortedByAndWhere

Re-exports [parseGraphQLConnectionArgumentsWithSortedByAndWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsegraphqlconnectionargumentswithsortedbyandwhere)

___

### parseGraphQLConnectionArgumentsWithWhere

Re-exports [parseGraphQLConnectionArgumentsWithWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionargumentswithwhere)

___

### transformToDefaultGraphQLConnection

Re-exports [transformToDefaultGraphQLConnection](utilities_graphQLConnection_transformToDefaultGraphQLConnection.md#transformtodefaultgraphqlconnection)

## Type Aliases

### DefaultGraphQLArgumentError

Ƭ **DefaultGraphQLArgumentError**: `Object`

This is typescript type of a base graphQL argument error. This argument error type can be
extended to create custom argument error types as long as they adhere to the default type of
this base graphQL argument error.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `path` | `string`[] |

#### Defined in

[src/utilities/graphQLConnection/index.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/utilities/graphQLConnection/index.ts#L24)

___

### DefaultGraphQLConnectionArguments

Ƭ **DefaultGraphQLConnectionArguments**: `Object`

This is typescript type of the standard arguments object received by a graphQL connection
following the relay cursor connection specification, more info here:- [https://relay.dev/graphql/connections.htm](https://relay.dev/graphql/connections.htm)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | `string` \| ``null`` |
| `before?` | `string` \| ``null`` |
| `first?` | `number` \| ``null`` |
| `last?` | `number` \| ``null`` |

#### Defined in

[src/utilities/graphQLConnection/index.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/utilities/graphQLConnection/index.ts#L33)

___

### GraphQLConnectionTraversalDirection

Ƭ **GraphQLConnectionTraversalDirection**: ``"FORWARD"`` \| ``"BACKWARD"``

This is typescript type of the direction the graphQL connection is to be traversed in.

#### Defined in

[src/utilities/graphQLConnection/index.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/utilities/graphQLConnection/index.ts#L43)

## Functions

### isNotNullish

▸ **isNotNullish**\<`T0`\>(`value`): value is T0

This function is used to check nullish state of a value passed to it. Nullish means the
value being either `null` or `undefined`. If the value is found to be nullish, the function
returns the boolean `false`, else it returns the boolean `true`.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `T0` |

#### Returns

value is T0

**`Example`**

```ts
Here's an example:-
function print(str: string | null) \{
  if(isNotNullish(str)) \{
    console.log(`the string is $\{str\}`)
  \} else \{
    console.log(`the string is null`)
  \}
\}
```

#### Defined in

[src/utilities/graphQLConnection/index.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/utilities/graphQLConnection/index.ts#L15)
