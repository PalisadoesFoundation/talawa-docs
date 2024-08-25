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

[src/types/generatedGraphQLTypes.ts:3231](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/types/generatedGraphQLTypes.ts#L3231)
