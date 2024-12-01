[**talawa-api**](../../../../README.md)

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

### \_\_namedParameters

#### __namedParameters.args

[`DefaultGraphQLConnectionArguments`](../../type-aliases/DefaultGraphQLConnectionArguments.md)

#### __namedParameters.maximumLimit

`number` = `MAXIMUM_FETCH_LIMIT`

#### __namedParameters.parseCursor

[`ParseGraphQLConnectionCursor`](../../parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursor.md)\<`T0`\>

#### __namedParameters.parseSortedByResult

[`ParseGraphQLConnectionSortedByResult`](../type-aliases/ParseGraphQLConnectionSortedByResult.md)\<`T1`\>

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

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithSortedBy.ts#L70)
