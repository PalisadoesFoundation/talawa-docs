[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / CommunityResolvers

# Type Alias: CommunityResolvers\<ContextType, ParentType\>

\> **CommunityResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Community"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Community"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### logoUrl?

\> `optional` **logoUrl**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\]\>, `ParentType`, `ContextType`\>

### name?

\> `optional` **name**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### socialMediaUrls?

\> `optional` **socialMediaUrls**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"SocialMediaUrls"`\]\>, `ParentType`, `ContextType`\>

### websiteLink?

\> `optional` **websiteLink**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\]\>, `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3920](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L3920)
