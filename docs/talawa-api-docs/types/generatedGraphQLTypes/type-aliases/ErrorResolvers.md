[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ErrorResolvers

# Type Alias: ErrorResolvers\<ContextType, ParentType\>

\> **ErrorResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Error"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Error"`\]

## Type declaration

### \_\_resolveType

\> **\_\_resolveType**: [`TypeResolveFn`](TypeResolveFn.md)\<`"MemberNotFoundError"` \| `"OrganizationMemberNotFoundError"` \| `"OrganizationNotFoundError"` \| `"PostNotFoundError"` \| `"UnauthenticatedError"` \| `"UnauthorizedError"` \| `"UserNotAuthorizedAdminError"` \| `"UserNotAuthorizedError"` \| `"UserNotFoundError"`, `ParentType`, `ContextType`\>

### message?

\> `optional` **message**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4031](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/types/generatedGraphQLTypes.ts#L4031)
