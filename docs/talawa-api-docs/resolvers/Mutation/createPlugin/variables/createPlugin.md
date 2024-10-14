[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createPlugin](../README.md) / createPlugin

# Variable: createPlugin

\> `const` **createPlugin**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createPlugin"`\]

Creates a new plugin and triggers a subscription event.

This resolver performs the following steps:

1. Creates a new plugin using the provided arguments.
2. Publishes an update event to the `TALAWA_PLUGIN_UPDATED` subscription channel with the created plugin details.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, which include:
  - `data`: An object containing the plugin's details.

## Param

The context object, which includes the pubsub system for triggering subscriptions.

## Returns

The created plugin object.

## Remarks

This function creates a plugin record, updates the subscription channel with the new plugin details, and returns the created plugin.

## Defined in

[src/resolvers/Mutation/createPlugin.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/createPlugin.ts#L21)
