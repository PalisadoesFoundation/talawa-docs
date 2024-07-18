[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / FundraisingCampaignPledgeResolvers

# Type Alias: FundraisingCampaignPledgeResolvers\<ContextType, ParentType\>

\> **FundraisingCampaignPledgeResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"FundraisingCampaignPledge"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"FundraisingCampaignPledge"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### amount?

\> `optional` **amount**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Float"`\], `ParentType`, `ContextType`\>

### campaigns?

\> `optional` **campaigns**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"FundraisingCampaign"`\]\>[], `ParentType`, `ContextType`\>

### currency?

\> `optional` **currency**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Currency"`\], `ParentType`, `ContextType`\>

### endDate?

\> `optional` **endDate**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Date"`\]\>, `ParentType`, `ContextType`\>

### startDate?

\> `optional` **startDate**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Date"`\]\>, `ParentType`, `ContextType`\>

### users?

\> `optional` **users**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\]\>[], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4079](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/types/generatedGraphQLTypes.ts#L4079)
