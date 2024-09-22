[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / SubscriptionResolvers

# Type Alias: SubscriptionResolvers\<ContextType, ParentType\>

\> **SubscriptionResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Subscription"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Subscription"`\]

## Type declaration

### directMessageChat?

\> `optional` **directMessageChat**: [`SubscriptionResolver`](SubscriptionResolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"MessageChat"`\]\>, `"directMessageChat"`, `ParentType`, `ContextType`\>

### messageSentToDirectChat?

\> `optional` **messageSentToDirectChat**: [`SubscriptionResolver`](SubscriptionResolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DirectChatMessage"`\]\>, `"messageSentToDirectChat"`, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`SubscriptionMessageSentToDirectChatArgs`](SubscriptionMessageSentToDirectChatArgs.md), `"userId"`\>\>

### messageSentToGroupChat?

\> `optional` **messageSentToGroupChat**: [`SubscriptionResolver`](SubscriptionResolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"GroupChatMessage"`\]\>, `"messageSentToGroupChat"`, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`SubscriptionMessageSentToGroupChatArgs`](SubscriptionMessageSentToGroupChatArgs.md), `"userId"`\>\>

### onPluginUpdate?

\> `optional` **onPluginUpdate**: [`SubscriptionResolver`](SubscriptionResolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Plugin"`\]\>, `"onPluginUpdate"`, `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4673](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/types/generatedGraphQLTypes.ts#L4673)
