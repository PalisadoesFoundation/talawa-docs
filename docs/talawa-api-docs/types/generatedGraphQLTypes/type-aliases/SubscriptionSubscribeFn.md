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

[src/types/generatedGraphQLTypes.ts:3235](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L3235)
