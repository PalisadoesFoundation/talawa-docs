[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / RequireFields

# Type Alias: RequireFields\<T, K\>

\> **RequireFields**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [P in K]-?: NonNullable\<T[P]\> \}`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L48)
