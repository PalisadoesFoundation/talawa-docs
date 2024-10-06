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

[src/resolvers/Mutation/sendMessageToDirectChat.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Mutation/sendMessageToDirectChat.ts#L15)
