[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Subscription/messageSentToDirectChat

# Module: resolvers/Subscription/messageSentToDirectChat

## Table of contents

### Variables

- [messageSentToDirectChat](resolvers_Subscription_messageSentToDirectChat.md#messagesenttodirectchat)

### Functions

- [filterFunction](resolvers_Subscription_messageSentToDirectChat.md#filterfunction)

## Variables

### messageSentToDirectChat

• `Const` **messageSentToDirectChat**: [`SubscriptionResolvers`](types_generatedGraphQLTypes.md#subscriptionresolvers)[``"messageSentToDirectChat"``]

This property included a `subscribe` method, which is used to
subscribe the `receiver` and `sender` to receive Direct Chat updates.

**`Remarks`**

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

#### Defined in

src/resolvers/Subscription/messageSentToDirectChat.ts:24

## Functions

### filterFunction

▸ **filterFunction**(`payload`, `context`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |
| `context` | `any` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

src/resolvers/Subscription/messageSentToDirectChat.ts:6
