[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Subscription/onPluginUpdate](../README.md) / onPluginUpdate

# Variable: onPluginUpdate

\> `const` **onPluginUpdate**: [`SubscriptionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/SubscriptionResolvers.md)\[`"onPluginUpdate"`\]

This property included a `subscribe` method, which is used to
subscribe the `current_user` to get updates for Group chats.

## Remarks

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

## Defined in

[src/resolvers/Subscription/onPluginUpdate.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Subscription/onPluginUpdate.ts#L47)
