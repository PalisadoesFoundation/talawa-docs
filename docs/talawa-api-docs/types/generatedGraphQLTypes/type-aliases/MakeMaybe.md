[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MakeMaybe

# Type Alias: MakeMaybe\<T, K\>

> **MakeMaybe**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `{ [SubKey in K]: Maybe<T[SubKey]> }`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/types/generatedGraphQLTypes.ts#L44)
