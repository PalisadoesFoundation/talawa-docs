[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/UserCache/cacheUser](../README.md) / cacheUsers

# Function: cacheUsers()

\> **cacheUsers**(`users`): `Promise`\<`void`\>

Caches the provided array of InterfaceUser objects in Redis.

## Parameters

• **users**: [`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md)[]

An array of InterfaceUser objects to be cached.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/UserCache/cacheUser.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/services/UserCache/cacheUser.ts#L11)
