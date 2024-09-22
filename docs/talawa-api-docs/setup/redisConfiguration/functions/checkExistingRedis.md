[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / checkExistingRedis

# Function: checkExistingRedis()

\> **checkExistingRedis**(): `Promise`\<`string` \| `null`\>

The function `checkExistingRedis` checks if there is an existing Redis connection by iterating
through a list of Redis URLs and testing the connection.

## Returns

`Promise`\<`string` \| `null`\>

The function `checkExistingRedis` returns a Promise that resolves to a string or null.

## Defined in

[src/setup/redisConfiguration.ts:71](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/setup/redisConfiguration.ts#L71)
