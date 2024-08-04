[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/UserCache/findUserInCache](../README.md) / findUserInCache

# Function: findUserInCache()

> **findUserInCache**(`ids`): `Promise`\<([`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md) \| `null`)[]\>

Retrieves user data from cache based on provided IDs.

## Parameters

• **ids**: `string`[]

An array of user IDs to retrieve from cache.

## Returns

`Promise`\<([`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md) \| `null`)[]\>

A promise resolving to an array of InterfaceUser objects or null if not found in cache.

## Defined in

[src/services/UserCache/findUserInCache.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/services/UserCache/findUserInCache.ts#L12)
