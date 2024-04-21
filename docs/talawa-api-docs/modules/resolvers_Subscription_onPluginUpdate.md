[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Subscription/onPluginUpdate

# Module: resolvers/Subscription/onPluginUpdate

## Table of contents

### Variables

- [onPluginUpdate](resolvers_Subscription_onPluginUpdate.md#onpluginupdate)

### Functions

- [createPluginUpdateResponse](resolvers_Subscription_onPluginUpdate.md#createpluginupdateresponse)
- [filterFunction](resolvers_Subscription_onPluginUpdate.md#filterfunction)

## Variables

### onPluginUpdate

• `Const` **onPluginUpdate**: [`SubscriptionResolvers`](types_generatedGraphQLTypes.md#subscriptionresolvers)[``"onPluginUpdate"``]

#### Defined in

[src/resolvers/Subscription/onPluginUpdate.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/resolvers/Subscription/onPluginUpdate.ts#L31)

## Functions

### createPluginUpdateResponse

▸ **createPluginUpdateResponse**(`payload`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`any`

#### Defined in

[src/resolvers/Subscription/onPluginUpdate.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/resolvers/Subscription/onPluginUpdate.ts#L28)

___

### filterFunction

▸ **filterFunction**(`payload`, `context`): `Promise`\<`boolean`\>

This property included a `subscribe` method, which is used to
subscribe the `current_user` to get updates for Group chats.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |
| `context` | `any` |

#### Returns

`Promise`\<`boolean`\>

**`Remarks`**

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

#### Defined in

[src/resolvers/Subscription/onPluginUpdate.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/resolvers/Subscription/onPluginUpdate.ts#L20)
