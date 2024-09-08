[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / CreateDirectChatPayloadResolvers

# Type Alias: CreateDirectChatPayloadResolvers\<ContextType, ParentType\>

\> **CreateDirectChatPayloadResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"createDirectChatPayload"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"createDirectChatPayload"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### directChat?

\> `optional` **directChat**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DirectChat"`\]\>, `ParentType`, `ContextType`\>

### userErrors?

\> `optional` **userErrors**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"CreateDirectChatError"`\][], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4853](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/types/generatedGraphQLTypes.ts#L4853)
