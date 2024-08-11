[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Subscription/messageSentToGroupChat](../README.md) / messageSentToGroupChat

# Variable: messageSentToGroupChat

> `const` **messageSentToGroupChat**: [`SubscriptionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/SubscriptionResolvers.md)\[`"messageSentToGroupChat"`\]

This property included a `subscribe` method, which is used to
subscribe the `current_user` to get updates for Group chats.

## Remarks

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

## Defined in

[src/resolvers/Subscription/messageSentToGroupChat.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/resolvers/Subscription/messageSentToGroupChat.ts#L43)
