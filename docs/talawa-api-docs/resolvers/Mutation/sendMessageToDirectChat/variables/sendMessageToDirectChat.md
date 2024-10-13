[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/sendMessageToDirectChat](../README.md) / sendMessageToDirectChat

# Variable: sendMessageToDirectChat

\> `const` **sendMessageToDirectChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"sendMessageToDirectChat"`\]

This function enables to send message to direct chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the direct chat exists.
2. If the user exists

## Returns

Direct chat message.

## Defined in

[src/resolvers/Mutation/sendMessageToDirectChat.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/sendMessageToDirectChat.ts#L15)
