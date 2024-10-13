[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/transformToDefaultGraphQLConnection](../README.md) / TransformToDefaultGraphQLConnectionArguments

# Type Alias: TransformToDefaultGraphQLConnectionArguments\<T0, T1, T2\>

\> **TransformToDefaultGraphQLConnectionArguments**\<`T0`, `T1`, `T2`\>: `object`

## Type Parameters

• **T0**

• **T1**

• **T2**

## Type declaration

### createCursor?

\> `optional` **createCursor**: [`CreateCursor`](CreateCursor.md)\<`T1`\>

### createNode?

\> `optional` **createNode**: [`CreateNode`](CreateNode.md)\<`T1`, `T2`\>

### objectList

\> **objectList**: `T1`[]

### parsedArgs

\> **parsedArgs**: [`ParsedGraphQLConnectionArguments`](../../parseGraphQLConnectionArguments/type-aliases/ParsedGraphQLConnectionArguments.md)\<`T0`\>

### totalCount

\> **totalCount**: `number`

## Defined in

[src/utilities/graphQLConnection/transformToDefaultGraphQLConnection.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/utilities/graphQLConnection/transformToDefaultGraphQLConnection.ts#L18)
