[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / TypeResolveFn

# Type Alias: TypeResolveFn()\<TTypes, TParent, TContext\>

\> **TypeResolveFn**\<`TTypes`, `TParent`, `TContext`\>: (`parent`, `context`, `info`?) =\> [`Maybe`](Maybe.md)\<`TTypes`\> \| `Promise`\<[`Maybe`](Maybe.md)\<`TTypes`\>\>

## Type Parameters

• **TTypes**

• **TParent** = `object`

• **TContext** = `object`

## Parameters

• **parent**: `TParent`

• **context**: `TContext`

• **info?**: `GraphQLResolveInfo`

## Returns

[`Maybe`](Maybe.md)\<`TTypes`\> \| `Promise`\<[`Maybe`](Maybe.md)\<`TTypes`\>\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3278](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L3278)
