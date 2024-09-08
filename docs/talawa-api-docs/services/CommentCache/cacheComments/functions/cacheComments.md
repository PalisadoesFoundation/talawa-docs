[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/CommentCache/cacheComments](../README.md) / cacheComments

# Function: cacheComments()

\> **cacheComments**(`comments`): `Promise`\<`void`\>

Stores comments in Redis cache with a specified time-to-live (TTL).

## Parameters

• **comments**: [`InterfaceComment`](../../../../models/Comment/interfaces/InterfaceComment.md)[]

Array of comments to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/CommentCache/cacheComments.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/services/CommentCache/cacheComments.ts#L10)
