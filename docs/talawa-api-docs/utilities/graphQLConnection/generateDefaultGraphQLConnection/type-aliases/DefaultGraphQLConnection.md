[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/generateDefaultGraphQLConnection](../README.md) / DefaultGraphQLConnection

# Type Alias: DefaultGraphQLConnection\<T0\>

> **DefaultGraphQLConnection**\<`T0`\>: `object`

This is typescript type of a base graphQL connection object. This connection object can be
extended to create a custom connnection object as long as the new connection object adheres
to the default type of this base connection object.

## Type Parameters

• **T0**

## Type declaration

### edges

> **edges**: [`DefaultGraphQLConnectionEdge`](DefaultGraphQLConnectionEdge.md)\<`T0`\>[]

### pageInfo

> **pageInfo**: [`ConnectionPageInfo`](../../../../types/generatedGraphQLTypes/type-aliases/ConnectionPageInfo.md)

### totalCount

> **totalCount**: `number`

## Defined in

[src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts#L18)
