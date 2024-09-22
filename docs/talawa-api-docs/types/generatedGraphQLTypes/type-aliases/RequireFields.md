[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / RequireFields

# Type Alias: RequireFields\<T, K\>

\> **RequireFields**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [P in K]-?: NonNullable\<T[P]\> \}`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L48)
