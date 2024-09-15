[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MakeOptional

# Type Alias: MakeOptional\<T, K\>

\> **MakeOptional**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [SubKey in K]?: Maybe\<T[SubKey]\> \}`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/types/generatedGraphQLTypes.ts#L43)
