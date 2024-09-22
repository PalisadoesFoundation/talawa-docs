[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Incremental

# Type Alias: Incremental\<T\>

\> **Incremental**\<`T`\>: `T` \| \{ \[P in keyof T\]?: P extends " $fragmentName" \| "\_\_typename" ? T\[P\] : never \}

## Type Parameters

• **T**

## Defined in

[src/types/generatedGraphQLTypes.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L46)
