[talawa-api](../README.md) / [Exports](../modules.md) / utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere

# Module: utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere

## Table of contents

### Type Aliases

- [ParseGraphQLConnectionArgumentsWithWhereResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionargumentswithwhereresult)
- [ParseGraphQLConnectionWhereResult](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionwhereresult)
- [ParsedGraphQLConnectionArgumentsWithWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsedgraphqlconnectionargumentswithwhere)

### Functions

- [parseGraphQLConnectionArgumentsWithWhere](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionargumentswithwhere)

## Type Aliases

### ParseGraphQLConnectionArgumentsWithWhereResult

Ƭ **ParseGraphQLConnectionArgumentsWithWhereResult**\<`T0`, `T1`\>: `Promise`\<\{ `errors`: [`DefaultGraphQLArgumentError`](utilities_graphQLConnection.md#defaultgraphqlargumenterror)[] ; `isSuccessful`: ``false``  \} \| \{ `isSuccessful`: ``true`` ; `parsedArgs`: [`ParsedGraphQLConnectionArgumentsWithWhere`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsedgraphqlconnectionargumentswithwhere)\<`T0`, `T1`\>  \}\>

This is typescript type of the object returned from `parseGraphQLConnectionArgumentsWithWhere` function.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts#L36)

___

### ParseGraphQLConnectionWhereResult

Ƭ **ParseGraphQLConnectionWhereResult**\<`T0`\>: \{ `errors`: [`DefaultGraphQLArgumentError`](utilities_graphQLConnection.md#defaultgraphqlargumenterror)[] ; `isSuccessful`: ``false``  \} \| \{ `isSuccessful`: ``true`` ; `parsedWhere`: `T0`  \}

This is typescript type of the object returned from callback function `parseWhere`.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts#L15)

___

### ParsedGraphQLConnectionArgumentsWithWhere

Ƭ **ParsedGraphQLConnectionArgumentsWithWhere**\<`T0`, `T1`\>: \{ `where`: `T1`  \} & [`ParsedGraphQLConnectionArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsedgraphqlconnectionarguments)\<`T0`\>

This is typescript type of the object containing the validated and transformed connection
arguments passed to `parseGraphQLConnectionArgumentsWithWhere` function.

#### Type parameters

| Name |
| :------ |
| `T0` |
| `T1` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts#L29)

## Functions

### parseGraphQLConnectionArgumentsWithWhere

▸ **parseGraphQLConnectionArgumentsWithWhere**\<`T0`, `T1`\>(`«destructured»`): [`ParseGraphQLConnectionArgumentsWithWhereResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionargumentswithwhereresult)\<`T0`, `T1`\>

This function handles validating and transforming arguments for a custom graphQL connection
that also provides filtering capabilities.

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
| › `parseWhereResult` | [`ParseGraphQLConnectionWhereResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionwhereresult)\<`T1`\> | `undefined` |

#### Returns

[`ParseGraphQLConnectionArgumentsWithWhereResult`](utilities_graphQLConnection_parseGraphQLConnectionArgumentsWithWhere.md#parsegraphqlconnectionargumentswithwhereresult)\<`T0`, `T1`\>

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
const \{ parsedArgs: \{ cursor, direction, filter, limit \} \} = result;
```

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts#L70)
