[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / RequireFields

# Type Alias: RequireFields\<T, K\>

\> **RequireFields**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [P in K]-?: NonNullable\<T[P]\> \}`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/types/generatedGraphQLTypes.ts#L48)
