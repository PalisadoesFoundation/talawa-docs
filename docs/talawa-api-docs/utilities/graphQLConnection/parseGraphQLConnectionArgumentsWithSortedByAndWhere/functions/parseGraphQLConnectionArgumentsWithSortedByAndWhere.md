[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere](../README.md) / parseGraphQLConnectionArgumentsWithSortedByAndWhere

# Function: parseGraphQLConnectionArgumentsWithSortedByAndWhere()

\> **parseGraphQLConnectionArgumentsWithSortedByAndWhere**\<`T0`, `T1`, `T2`\>(`__namedParameters`): [`ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult`](../type-aliases/ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult.md)\<`T0`, `T1`, `T2`\>

This function is used for validating and transforming arguments for a custom graphQL
connection that also provides filtering and sorting capabilities.

## Type Parameters

• **T0**

• **T1**

• **T2**

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.args**: [`DefaultGraphQLConnectionArguments`](../../type-aliases/DefaultGraphQLConnectionArguments.md)

• **\_\_namedParameters.maximumLimit?**: `number` = `MAXIMUM_FETCH_LIMIT`

• **\_\_namedParameters.parseCursor**: [`ParseGraphQLConnectionCursor`](../../parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursor.md)\<`T0`\>

• **\_\_namedParameters.parseSortedByResult**: [`ParseGraphQLConnectionSortedByResult`](../../parseGraphQLConnectionArgumentsWithSortedBy/type-aliases/ParseGraphQLConnectionSortedByResult.md)\<`T2`\>

• **\_\_namedParameters.parseWhereResult**: [`ParseGraphQLConnectionWhereResult`](../../parseGraphQLConnectionArgumentsWithWhere/type-aliases/ParseGraphQLConnectionWhereResult.md)\<`T1`\>

## Returns

[`ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult`](../type-aliases/ParseGraphQLConnectionArgumentsWithSortedByAndWhereResult.md)\<`T0`, `T1`, `T2`\>

## Example

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

## Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts#L68)
