[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DirectiveResolverFn

# Type Alias: DirectiveResolverFn()\<TResult, TParent, TContext, TArgs\>

\> **DirectiveResolverFn**\<`TResult`, `TParent`, `TContext`, `TArgs`\>: (`next`, `parent`, `args`, `context`, `info`?) =\> `TResult` \| `Promise`\<`TResult`\>

## Type Parameters

• **TResult** = `object`

• **TParent** = `object`

• **TContext** = `object`

• **TArgs** = `object`

## Parameters

• **next**: [`NextResolverFn`](NextResolverFn.md)\<`TResult`\>

• **parent**: `TParent`

• **args**: `TArgs`

• **context**: `TContext`

• **info?**: `GraphQLResolveInfo`

## Returns

`TResult` \| `Promise`\<`TResult`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3277](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/types/generatedGraphQLTypes.ts#L3277)
