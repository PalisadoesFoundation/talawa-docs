[talawa-api](../README.md) / [Exports](../modules.md) / utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere

# Module: utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere

## Table of contents

### Type Aliases

- [ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsegraphqlconnectionargumentswithsortedbyandwhereresult)
- [ParsedGraphQLConnectionArgumentsWithSortedByAndWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsedgraphqlconnectionargumentswithsortedbyandwhere)

### Functions

- [parseGraphQLConnectionArgumentsWithSortedByAndWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsegraphqlconnectionargumentswithsortedbyandwhere)

## Type Aliases

### ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult

Ƭ **ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult**\<`T0`, `T1`, `T2`\>: `Promise`\<\{ `errors`: [`DefaultGraphQLArgumentError`](utilities_graphQLConnection.md#defaultgraphqlargumenterror)[] ; `isSuccessful`: ``false``  \} \| \{ `isSuccessful`: ``true`` ; `parsedArgs`: [`ParsedGraphQLConnectionArgumentsWithSortedByAndWhere`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsedgraphqlconnectionargumentswithsortedbyandwhere)\<`T0`, `T1`, `T2`\>  \}\>

This is typescript type of the object returned from `parseGraphQLConnectionArgumentsWithSortedByAndWhere` function.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |
| `T2` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts#L25)

___

### ParsedGraphQLConnectionArgumentsWithSortedByAndWhere

Ƭ **ParsedGraphQLConnectionArgumentsWithSortedByAndWhere**\<`T0`, `T1`, `T2`\>: \{ `filter`: `T1` ; `sort`: `T2`  \} & [`ParsedGraphQLConnectionArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsedgraphqlconnectionarguments)\<`T0`\>

This is typescript type of the object containing validated and transformed connection
arguments passed to `parseGraphQLConnectionArgumentsWithSortedByAndWhere` function.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |
| `T2` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts#L17)

## Functions

### parseGraphQLConnectionArgumentsWithSortedByAndWhere

▸ **parseGraphQLConnectionArgumentsWithSortedByAndWhere**\<`T0`, `T1`, `T2`\>(`«destructured»`): [`ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsegraphqlconnectionargumentswithsortedbyandwhereresult)\<`T0`, `T1`, `T2`\>

This function is used for validating and transforming arguments for a custom graphQL
connection that also provides filtering and sorting capabilities.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |
| `T2` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `args` | [`DefaultGraphQLConnectionArguments`](utilities_graphQLConnection.md#defaultgraphqlconnectionarguments) | `undefined` |
| › `maximumLimit?` | `number` | `MAXIMUM_FETCH_LIMIT` |
| › `parseCursor` | [`ParseGraphQLConnectionCursor`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursor)\<`T0`\> | `undefined` |
| › `parseSortedByResult` | [`ParseGraphQLConnectionSortedByResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionsortedbyresult)\<`T2`\> | `undefined` |
| › `parseWhereResult` | [`ParseGraphQLConnectionWhereResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionwhereresult)\<`T1`\> | `undefined` |

#### Returns

[`ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedByAndWhere.md#parsegraphqlconnectionargumentswithsortedbyandwhereresult)\<`T0`, `T1`, `T2`\>

**`Example`**

```ts
const result = await parseGraphQLConnectionArgumentsWithSortedBy(\{
  args: \{
    after,
    first,
  \},
  maximumLimit: 20,
  parseCursor,
  parseSortedBy,
  parseWhere,
\})
if (result.isSuccessful === false) \{
   throw new GraphQLError("Invalid arguments provided.", \{
     extensions: \{
       code: "INVALID_ARGUMENTS",
       errors: result.errors
     \}
  \})
\}
const \{ parsedArgs: \{ cursor, direction, filter, limit, sort \} \} = result;
```

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts#L68)
