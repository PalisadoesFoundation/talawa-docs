[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DirectChatMessageResolvers

# Type Alias: DirectChatMessageResolvers\<ContextType, ParentType\>

\> **DirectChatMessageResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"DirectChatMessage"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"DirectChatMessage"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### createdAt?

\> `optional` **createdAt**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DateTime"`\], `ParentType`, `ContextType`\>

### directChatMessageBelongsTo?

\> `optional` **directChatMessageBelongsTo**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DirectChat"`\], `ParentType`, `ContextType`\>

### messageContent?

\> `optional` **messageContent**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### receiver?

\> `optional` **receiver**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\], `ParentType`, `ContextType`\>

### sender?

\> `optional` **sender**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\], `ParentType`, `ContextType`\>

### updatedAt?

\> `optional` **updatedAt**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DateTime"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4021](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L4021)
