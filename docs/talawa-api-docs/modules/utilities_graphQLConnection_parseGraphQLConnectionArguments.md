[talawa-api](../README.md) / [Exports](../modules.md) / utilities/graphQLConnection/parseGraphQLConnectionArguments

# Module: utilities/graphQLConnection/parseGraphQLConnectionArguments

## Table of contents

### Type Aliases

- [ParseGraphQLConnectionArgumentsResult](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectionargumentsresult)
- [ParseGraphQLConnectionCursor](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursor)
- [ParseGraphQLConnectionCursorArguments](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments)
- [ParseGraphQLConnectionCursorResult](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)
- [ParsedGraphQLConnectionArguments](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsedgraphqlconnectionarguments)

### Functions

- [parseGraphQLConnectionArguments](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectionarguments)

## Type Aliases

### ParseGraphQLConnectionArgumentsResult

Ƭ **ParseGraphQLConnectionArgumentsResult**\<`T0`\>: \{ `errors`: [`DefaultGraphQLArgumentError`](utilities_graphQLConnection.md#defaultgraphqlargumenterror)[] ; `isSuccessful`: ``false``  \} \| \{ `isSuccessful`: ``true`` ; `parsedArgs`: [`ParsedGraphQLConnectionArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsedgraphqlconnectionarguments)\<`T0`\>  \}

This is typescript type of the object returned from `parseGraphQLConnectionArguments`
function.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:57](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L57)

___

### ParseGraphQLConnectionCursor

Ƭ **ParseGraphQLConnectionCursor**\<`T0`\>: (`args`: [`ParseGraphQLConnectionCursorArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments)) =\> [`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`T0`\>

This is typescript type of the callback function `parseCursor`.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Type declaration

▸ (`args`): [`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`T0`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ParseGraphQLConnectionCursorArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments) |

##### Returns

[`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`T0`\>

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:39](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L39)

___

### ParseGraphQLConnectionCursorArguments

Ƭ **ParseGraphQLConnectionCursorArguments**: `Object`

This is typescript type of the single object callback function `parseCursor` takes in as
an argument.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursorName` | ``"after"`` \| ``"before"`` |
| `cursorPath` | `string`[] |
| `cursorValue` | `string` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:13](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L13)

___

### ParseGraphQLConnectionCursorResult

Ƭ **ParseGraphQLConnectionCursorResult**\<`T0`\>: `Promise`\<\{ `errors`: [`DefaultGraphQLArgumentError`](utilities_graphQLConnection.md#defaultgraphqlargumenterror)[] ; `isSuccessful`: ``false``  \} \| \{ `isSuccessful`: ``true`` ; `parsedCursor`: `T0`  \}\>

This is typescript type of object returned from the callback function `parseCursor` passed
as an argument to `parseGraphQLConnectionArguments`, `parseGraphQLConnectionArgumentsWithSortedBy`,
`parseGraphQLConnectionArgumentsWithWhere` and `parseGraphQLConnectionArgumentsWithSortedByAndWhere`
functions.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:25](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L25)

___

### ParsedGraphQLConnectionArguments

Ƭ **ParsedGraphQLConnectionArguments**\<`T0`\>: `Object`

This is typescript type of the object containing the validated and transformed connection
arguments passed to `parseGraphQLConnectionArguments` function.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor` | `T0` \| ``null`` |
| `direction` | [`GraphQLConnectionTraversalDirection`](utilities_graphQLConnection.md#graphqlconnectiontraversaldirection) |
| `limit` | `number` |

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:47](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L47)

## Functions

### parseGraphQLConnectionArguments

▸ **parseGraphQLConnectionArguments**\<`T0`\>(`«destructured»`): `Promise`\<[`ParseGraphQLConnectionArgumentsResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectionargumentsresult)\<`T0`\>\>

This function handles validating and transforming arguments of a base graphQL connection.

#### Type parameters

| Name |
| :------ |
| `T0` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `args` | [`DefaultGraphQLConnectionArguments`](utilities_graphQLConnection.md#defaultgraphqlconnectionarguments) | `undefined` |
| › `maximumLimit?` | `number` | `MAXIMUM_FETCH_LIMIT` |
| › `parseCursor` | [`ParseGraphQLConnectionCursor`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursor)\<`T0`\> | `undefined` |

#### Returns

`Promise`\<[`ParseGraphQLConnectionArgumentsResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectionargumentsresult)\<`T0`\>\>

**`Example`**

```ts
const result = await parseGraphQLConnectionArguments(\{
  args: \{
    after,
    first,
  \},
  maximumLimit: 20,
  parseCursor
\})
if (result.isSuccessful === false) \{
   throw new GraphQLError("Invalid arguments provided.", \{
     extensions: \{
       code: "INVALID_ARGUMENTS",
       errors: result.errors
     \}
  \})
\}
const \{ parsedArgs: \{ cursor, direction, limit \} \} = result;
```

#### Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:88](https://github.com/adi790uu/talawa-api/blob/5146430/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L88)
