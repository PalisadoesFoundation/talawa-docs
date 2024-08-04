[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/UserCache/cacheUser](../README.md) / cacheUsers

# Function: cacheUsers()

> **cacheUsers**(`users`): `Promise`\<`void`\>

Caches the provided array of InterfaceUser objects in Redis.

## Parameters

• **users**: [`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md)[]

An array of InterfaceUser objects to be cached.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/UserCache/cacheUser.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/services/UserCache/cacheUser.ts#L11)
