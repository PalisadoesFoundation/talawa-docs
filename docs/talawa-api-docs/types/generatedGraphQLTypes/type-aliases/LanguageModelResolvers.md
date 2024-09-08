[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / LanguageModelResolvers

# Type Alias: LanguageModelResolvers\<ContextType, ParentType\>

\> **LanguageModelResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"LanguageModel"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"LanguageModel"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### createdAt?

\> `optional` **createdAt**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DateTime"`\], `ParentType`, `ContextType`\>

### lang\_code?

\> `optional` **lang\_code**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### value?

\> `optional` **value**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### verified?

\> `optional` **verified**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4243](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L4243)
