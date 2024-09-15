[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Incremental

# Type Alias: Incremental\<T\>

\> **Incremental**\<`T`\>: `T` \| \{ \[P in keyof T\]?: P extends " $fragmentName" \| "\_\_typename" ? T\[P\] : never \}

## Type Parameters

• **T**

## Defined in

[src/types/generatedGraphQLTypes.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/types/generatedGraphQLTypes.ts#L46)
