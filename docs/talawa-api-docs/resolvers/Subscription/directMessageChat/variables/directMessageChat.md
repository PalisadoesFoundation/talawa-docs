[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Subscription/directMessageChat](../README.md) / directMessageChat

# Variable: directMessageChat

\> `const` **directMessageChat**: [`SubscriptionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/SubscriptionResolvers.md)\[`"directMessageChat"`\]

This property contained a `subscribe` field, which is used to subscribe
the user to get updates for the `CHAT_CHANNEL` event.

## Remarks

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

## Defined in

[src/resolvers/Subscription/directMessageChat.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Subscription/directMessageChat.ts#L12)
