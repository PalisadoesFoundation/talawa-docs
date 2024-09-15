[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy](../README.md) / parseGraphQLConnectionArgumentsWithSortedBy

# Function: parseGraphQLConnectionArgumentsWithSortedBy()

\> **parseGraphQLConnectionArgumentsWithSortedBy**\<`T0`, `T1`\>(`__namedParameters`): [`ParseGraphQLConnectionArgumentsWithSortedByResult`](../type-aliases/ParseGraphQLConnectionArgumentsWithSortedByResult.md)\<`T0`, `T1`\>

This function is used for validating and transforming arguments for a graphQL connection that
also provides sorting capabilities.

## Type Parameters

• **T0**

• **T1**

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.args**: [`DefaultGraphQLConnectionArguments`](../../type-aliases/DefaultGraphQLConnectionArguments.md)

• **\_\_namedParameters.maximumLimit?**: `number` = `MAXIMUM_FETCH_LIMIT`

• **\_\_namedParameters.parseCursor**: [`ParseGraphQLConnectionCursor`](../../parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursor.md)\<`T0`\>

• **\_\_namedParameters.parseSortedByResult**: [`ParseGraphQLConnectionSortedByResult`](../type-aliases/ParseGraphQLConnectionSortedByResult.md)\<`T1`\>

## Returns

[`ParseGraphQLConnectionArgumentsWithSortedByResult`](../type-aliases/ParseGraphQLConnectionArgumentsWithSortedByResult.md)\<`T0`, `T1`\>

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

## Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts#L70)
