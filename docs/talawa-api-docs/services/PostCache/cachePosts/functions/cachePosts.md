[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/PostCache/cachePosts](../README.md) / cachePosts

# Function: cachePosts()

> **cachePosts**(`posts`): `Promise`\<`void`\>

Caches the provided array of InterfacePost objects in Redis.

## Parameters

• **posts**: [`InterfacePost`](../../../../models/Post/interfaces/InterfacePost.md)[]

An array of InterfacePost objects to be cached.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/PostCache/cachePosts.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/services/PostCache/cachePosts.ts#L11)
