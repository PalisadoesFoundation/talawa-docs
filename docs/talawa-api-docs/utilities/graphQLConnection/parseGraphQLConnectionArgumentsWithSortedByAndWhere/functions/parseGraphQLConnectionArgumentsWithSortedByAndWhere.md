[**talawa-api**](../../../../README.md)

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

### \_\_namedParameters

#### __namedParameters.args

[`DefaultGraphQLConnectionArguments`](../../type-aliases/DefaultGraphQLConnectionArguments.md)

#### __namedParameters.maximumLimit

`number` = `MAXIMUM_FETCH_LIMIT`

#### __namedParameters.parseCursor

[`ParseGraphQLConnectionCursor`](../../parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursor.md)\<`T0`\>

#### __namedParameters.parseSortedByResult

[`ParseGraphQLConnectionSortedByResult`](../../parseGraphQLConnectionArgumentsWithSortedBy/type-aliases/ParseGraphQLConnectionSortedByResult.md)\<`T2`\>

#### __namedParameters.parseWhereResult

[`ParseGraphQLConnectionWhereResult`](../../parseGraphQLConnectionArgumentsWithWhere/type-aliases/ParseGraphQLConnectionWhereResult.md)\<`T1`\>

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

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedByAndWhere.ts#L68)
