[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / InvalidCursorResolvers

# Type Alias: InvalidCursorResolvers\<ContextType, ParentType\>

\> **InvalidCursorResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"InvalidCursor"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"InvalidCursor"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### message?

\> `optional` **message**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### path?

\> `optional` **path**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\][], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4225](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L4225)
