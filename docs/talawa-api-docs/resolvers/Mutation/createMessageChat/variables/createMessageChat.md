[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createMessageChat](../README.md) / createMessageChat

# Variable: createMessageChat

\> `const` **createMessageChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createMessageChat"`\]

This function enables to create a chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the receiver user exists
2. If the sender and receiver users have same language code.
3. If the sender and receiver users have appProfile.

## Defined in

[src/resolvers/Mutation/createMessageChat.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/resolvers/Mutation/createMessageChat.ts#L24)
