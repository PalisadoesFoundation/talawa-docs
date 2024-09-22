[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / CreateCommentPayloadResolvers

# Type Alias: CreateCommentPayloadResolvers\<ContextType, ParentType\>

\> **CreateCommentPayloadResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"CreateCommentPayload"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"CreateCommentPayload"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### comment?

\> `optional` **comment**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Comment"`\]\>, `ParentType`, `ContextType`\>

### userErrors?

\> `optional` **userErrors**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"CreateCommentError"`\][], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3953](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L3953)
