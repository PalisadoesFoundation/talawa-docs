[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere](../README.md) / parseGraphQLConnectionArgumentsWithWhere

# Function: parseGraphQLConnectionArgumentsWithWhere()

> **parseGraphQLConnectionArgumentsWithWhere**\<`T0`, `T1`\>(`__namedParameters`): [`ParseGraphQLConnectionArgumentsWithWhereResult`](../type-aliases/ParseGraphQLConnectionArgumentsWithWhereResult.md)\<`T0`, `T1`\>

This function handles validating and transforming arguments for a custom graphQL connection
that also provides filtering capabilities.

## Type Parameters

• **T0**

• **T1**

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.args**: [`DefaultGraphQLConnectionArguments`](../../type-aliases/DefaultGraphQLConnectionArguments.md)

• **\_\_namedParameters.maximumLimit?**: `number` = `MAXIMUM_FETCH_LIMIT`

• **\_\_namedParameters.parseCursor**: [`ParseGraphQLConnectionCursor`](../../parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursor.md)\<`T0`\>

• **\_\_namedParameters.parseWhereResult**: [`ParseGraphQLConnectionWhereResult`](../type-aliases/ParseGraphQLConnectionWhereResult.md)\<`T1`\>

## Returns

[`ParseGraphQLConnectionArgumentsWithWhereResult`](../type-aliases/ParseGraphQLConnectionArgumentsWithWhereResult.md)\<`T0`, `T1`\>

## Example

```ts
const result = await parseGraphQLConnectionArgumentsWithSortedBy({
  args: {
    after,
    first,
  },
  maximumLimit: 20,
  parseCursor,
  parseSortedBy,
})
if (result.isSuccessful === false) {
   throw new GraphQLError("Invalid arguments provided.", {
     extensions: {
       code: "INVALID_ARGUMENTS",
       errors: result.errors
     }
  })
}
const { parsedArgs: { cursor, direction, filter, limit } } = result;
```

## Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/utilities/graphQLConnection/parseGraphQLConnectionArgumentsWithWhere.ts#L70)
