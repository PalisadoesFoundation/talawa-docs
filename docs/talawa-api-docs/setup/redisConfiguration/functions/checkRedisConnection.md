[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / checkRedisConnection

# Function: checkRedisConnection()

\> **checkRedisConnection**(`url`): `Promise`\<`boolean`\>

The function `checkRedisConnection` checks if a connection to Redis can be established using the
provided URL.

## Parameters

• **url**: `string`

The `url` parameter is a string that represents the URL of the Redis server.
It is used to establish a connection to the Redis server.

## Returns

`Promise`\<`boolean`\>

a Promise that resolves to a boolean value.

## Defined in

[src/setup/redisConfiguration.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/setup/redisConfiguration.ts#L12)
