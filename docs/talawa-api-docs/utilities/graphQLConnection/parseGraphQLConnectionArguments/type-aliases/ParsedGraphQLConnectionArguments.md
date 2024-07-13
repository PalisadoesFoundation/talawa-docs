[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArguments](../README.md) / ParsedGraphQLConnectionArguments

# Type Alias: ParsedGraphQLConnectionArguments\<T0\>

\> **ParsedGraphQLConnectionArguments**\<`T0`\>: `object`

This is typescript type of the object containing the validated and transformed connection
arguments passed to `parseGraphQLConnectionArguments` function.

## Type Parameters

• **T0**

## Type declaration

### cursor

\> **cursor**: `T0` \| `null`

### direction

\> **direction**: [`GraphQLConnectionTraversalDirection`](../../type-aliases/GraphQLConnectionTraversalDirection.md)

### limit

\> **limit**: `number`

## Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L47)
