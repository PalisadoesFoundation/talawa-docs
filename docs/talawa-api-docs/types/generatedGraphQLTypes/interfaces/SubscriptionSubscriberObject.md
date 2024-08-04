[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / SubscriptionSubscriberObject

# Interface: SubscriptionSubscriberObject\<TResult, TKey, TParent, TContext, TArgs\>

## Type Parameters

• **TResult**

• **TKey** *extends* `string`

• **TParent**

• **TContext**

• **TArgs**

## Properties

### resolve?

> `optional` **resolve**: [`SubscriptionResolveFn`](../type-aliases/SubscriptionResolveFn.md)\<`TResult`, `{ [key in string]: TResult }`, `TContext`, `TArgs`\>

#### Defined in

[src/types/generatedGraphQLTypes.ts:3199](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/types/generatedGraphQLTypes.ts#L3199)

***

### subscribe

> **subscribe**: [`SubscriptionSubscribeFn`](../type-aliases/SubscriptionSubscribeFn.md)\<`{ [key in string]: TResult }`, `TParent`, `TContext`, `TArgs`\>

#### Defined in

[src/types/generatedGraphQLTypes.ts:3198](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/types/generatedGraphQLTypes.ts#L3198)
