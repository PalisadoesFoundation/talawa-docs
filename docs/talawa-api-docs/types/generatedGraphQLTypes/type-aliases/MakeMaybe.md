[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MakeMaybe

# Type Alias: MakeMaybe\<T, K\>

\> **MakeMaybe**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [SubKey in K]: Maybe\<T[SubKey]\> \}`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/types/generatedGraphQLTypes.ts#L44)
