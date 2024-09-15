[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / SubscriptionSubscribeFn

# Type Alias: SubscriptionSubscribeFn()\<TResult, TParent, TContext, TArgs\>

\> **SubscriptionSubscribeFn**\<`TResult`, `TParent`, `TContext`, `TArgs`\>: (`parent`, `args`, `context`, `info`?) =\> `AsyncIterable`\<`TResult`\> \| `Promise`\<`AsyncIterable`\<`TResult`\>\>

## Type Parameters

• **TResult**

• **TParent**

• **TContext**

• **TArgs**

## Parameters

• **parent**: `TParent`

• **args**: `TArgs`

• **context**: `TContext`

• **info?**: `GraphQLResolveInfo`

## Returns

`AsyncIterable`\<`TResult`\> \| `Promise`\<`AsyncIterable`\<`TResult`\>\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3235](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/types/generatedGraphQLTypes.ts#L3235)
