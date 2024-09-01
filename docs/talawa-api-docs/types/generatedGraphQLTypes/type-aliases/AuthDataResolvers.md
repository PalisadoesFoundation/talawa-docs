[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / AuthDataResolvers

# Type Alias: AuthDataResolvers\<ContextType, ParentType\>

\> **AuthDataResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"AuthData"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"AuthData"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### accessToken?

\> `optional` **accessToken**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### appUserProfile?

\> `optional` **appUserProfile**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AppUserProfile"`\], `ParentType`, `ContextType`\>

### refreshToken?

\> `optional` **refreshToken**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### user?

\> `optional` **user**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3855](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/types/generatedGraphQLTypes.ts#L3855)
