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

\> `optional` **resolve**: [`SubscriptionResolveFn`](../type-aliases/SubscriptionResolveFn.md)\<`TResult`, `\{ [key in string]: TResult \}`, `TContext`, `TArgs`\>

#### Defined in

[src/types/generatedGraphQLTypes.ts:3251](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/types/generatedGraphQLTypes.ts#L3251)

***

### subscribe

\> **subscribe**: [`SubscriptionSubscribeFn`](../type-aliases/SubscriptionSubscribeFn.md)\<`\{ [key in string]: TResult \}`, `TParent`, `TContext`, `TArgs`\>

#### Defined in

[src/types/generatedGraphQLTypes.ts:3250](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/types/generatedGraphQLTypes.ts#L3250)
