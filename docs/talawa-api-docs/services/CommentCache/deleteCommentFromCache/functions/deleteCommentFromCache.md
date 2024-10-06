[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/CommentCache/deleteCommentFromCache](../README.md) / deleteCommentFromCache

# Function: deleteCommentFromCache()

\> **deleteCommentFromCache**(`comment`): `Promise`\<`void`\>

Deletes the specified comment from Redis cache.

## Parameters

• **comment**: [`InterfaceComment`](../../../../models/Comment/interfaces/InterfaceComment.md)

The InterfaceComment object representing the comment to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/CommentCache/deleteCommentFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/services/CommentCache/deleteCommentFromCache.ts#L10)
