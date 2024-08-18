[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/CommentCache/deleteCommentFromCache](../README.md) / deleteCommentFromCache

# Function: deleteCommentFromCache()

> **deleteCommentFromCache**(`comment`): `Promise`\<`void`\>

Deletes the specified comment from Redis cache.

## Parameters

• **comment**: [`InterfaceComment`](../../../../models/Comment/interfaces/InterfaceComment.md)

The InterfaceComment object representing the comment to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/CommentCache/deleteCommentFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/services/CommentCache/deleteCommentFromCache.ts#L10)
