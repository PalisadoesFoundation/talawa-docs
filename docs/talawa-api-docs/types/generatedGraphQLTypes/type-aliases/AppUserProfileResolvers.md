[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / AppUserProfileResolvers

# Type Alias: AppUserProfileResolvers\<ContextType, ParentType\>

\> **AppUserProfileResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"AppUserProfile"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"AppUserProfile"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### adminFor?

\> `optional` **adminFor**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Organization"`\]\>[]\>, `ParentType`, `ContextType`\>

### appLanguageCode?

\> `optional` **appLanguageCode**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### campaigns?

\> `optional` **campaigns**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"FundraisingCampaign"`\]\>[]\>, `ParentType`, `ContextType`\>

### createdEvents?

\> `optional` **createdEvents**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\]\>[]\>, `ParentType`, `ContextType`\>

### createdOrganizations?

\> `optional` **createdOrganizations**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Organization"`\]\>[]\>, `ParentType`, `ContextType`\>

### eventAdmin?

\> `optional` **eventAdmin**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\]\>[]\>, `ParentType`, `ContextType`\>

### isSuperAdmin?

\> `optional` **isSuperAdmin**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`\>

### pledges?

\> `optional` **pledges**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"FundraisingCampaignPledge"`\]\>[]\>, `ParentType`, `ContextType`\>

### pluginCreationAllowed?

\> `optional` **pluginCreationAllowed**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\], `ParentType`, `ContextType`\>

### userId?

\> `optional` **userId**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3847](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/types/generatedGraphQLTypes.ts#L3847)
