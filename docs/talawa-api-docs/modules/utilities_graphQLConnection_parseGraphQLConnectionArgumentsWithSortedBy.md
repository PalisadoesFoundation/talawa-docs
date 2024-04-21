[talawa-api](../README.md) / [Exports](../modules.md) / utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy

# Module: utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy

## Table of contents

### Type Aliases

- [ParseGraphQLConnectionArgumentsWithSortedByResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionargumentswithsortedbyresult)
- [ParseGraphQLConnectionSortedByResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionsortedbyresult)
- [ParsedGraphQLConnectionArgumentsWithSortedBy](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsedgraphqlconnectionargumentswithsortedby)

### Functions

- [parseGraphQLConnectionArgumentsWithSortedBy](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionargumentswithsortedby)

## Type Aliases

### ParseGraphQLConnectionArgumentsWithSortedByResult

Ƭ **ParseGraphQLConnectionArgumentsWithSortedByResult**\<`T0`, `T1`\>: `Promise`\<\{ `errors`: [`DefaultGraphQLArgumentError`](utilities_graphQLConnection.md#defaultgraphqlargumenterror)[] ; `isSuccessful`: ``false``  \} \| \{ `isSuccessful`: ``true`` ; `parsedArgs`: [`ParsedGraphQLConnectionArgumentsWithSortedBy`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsedgraphqlconnectionargumentswithsortedby)\<`T0`, `T1`\>  \}\>

This is typescript type of the object returned from `parseGraphQLConnectionArgumentsWithSortedBy` function.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts#L36)

___

### ParseGraphQLConnectionSortedByResult

Ƭ **ParseGraphQLConnectionSortedByResult**\<`T0`\>: \{ `errors`: [`DefaultGraphQLArgumentError`](utilities_graphQLConnection.md#defaultgraphqlargumenterror)[] ; `isSuccessful`: ``false``  \} \| \{ `isSuccessful`: ``true`` ; `parsedSortedBy`: `T0`  \}

This is typescript type of the object returned from callback function `parseSortedBy`.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts#L15)

___

### ParsedGraphQLConnectionArgumentsWithSortedBy

Ƭ **ParsedGraphQLConnectionArgumentsWithSortedBy**\<`T0`, `T1`\>: \{ `sort`: `T1`  \} & [`ParsedGraphQLConnectionArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsedgraphqlconnectionarguments)\<`T0`\>

This is typescript type of the object containing validated and transformed connection
arguments passed to `parseGraphQLConnectionArgumentsWithSortedBy` function.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts#L29)

## Functions

### parseGraphQLConnectionArgumentsWithSortedBy

▸ **parseGraphQLConnectionArgumentsWithSortedBy**\<`T0`, `T1`\>(`«destructured»`): [`ParseGraphQLConnectionArgumentsWithSortedByResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionargumentswithsortedbyresult)\<`T0`, `T1`\>

This function is used for validating and transforming arguments for a graphQL connection that
also provides sorting capabilities.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `args` | [`DefaultGraphQLConnectionArguments`](utilities_graphQLConnection.md#defaultgraphqlconnectionarguments) | `undefined` |
| › `maximumLimit?` | `number` | `MAXIMUM_FETCH_LIMIT` |
| › `parseCursor` | [`ParseGraphQLConnectionCursor`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursor)\<`T0`\> | `undefined` |
| › `parseSortedByResult` | [`ParseGraphQLConnectionSortedByResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionsortedbyresult)\<`T1`\> | `undefined` |

#### Returns

[`ParseGraphQLConnectionArgumentsWithSortedByResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithSortedBy.md#parsegraphqlconnectionargumentswithsortedbyresult)\<`T0`, `T1`\>

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
\})
if (result.isSuccessful === false) \{
   throw new GraphQLError("Invalid arguments provided.", \{
     extensions: \{
       code: "INVALID_ARGUMENTS",
       errors: result.errors
     \}
  \})
\}
const \{ parsedArgs: \{ cursor, direction, limit, sort \} \} = result;
```

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts#L70)
