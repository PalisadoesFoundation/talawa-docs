[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DirectChatMessage

# Type Alias: DirectChatMessage

\> **DirectChatMessage**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"DirectChatMessage"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### directChatMessageBelongsTo

\> **directChatMessageBelongsTo**: [`DirectChat`](DirectChat.md)

### messageContent

\> **messageContent**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### receiver

\> **receiver**: [`User`](User.md)

### sender

\> **sender**: [`User`](User.md)

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

## Defined in

[src/types/generatedGraphQLTypes.ts:639](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/types/generatedGraphQLTypes.ts#L639)
