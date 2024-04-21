[talawa-api](../README.md) / [Exports](../modules.md) / setup/redisConfiguration

# Module: setup/redisConfiguration

## Table of contents

### Functions

- [askForRedisUrl](setup_redisConfiguration.md#askforredisurl)
- [checkExistingRedis](setup_redisConfiguration.md#checkexistingredis)
- [checkRedisConnection](setup_redisConfiguration.md#checkredisconnection)

## Functions

### askForRedisUrl

▸ **askForRedisUrl**(): `Promise`\<\{ `host`: `string` ; `password`: `string` ; `port`: `number`  \}\>

The function `askForRedisUrl` prompts the user to enter the Redis hostname, port, and password, and
returns an object with these values.

#### Returns

`Promise`\<\{ `host`: `string` ; `password`: `string` ; `port`: `number`  \}\>

The function `askForRedisUrl` returns a promise that resolves to an object with the
properties `host`, `port`, and `password`.

#### Defined in

[src/setup/redisConfiguration.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/setup/redisConfiguration.ts#L36)

___

### checkExistingRedis

▸ **checkExistingRedis**(): `Promise`\<`string` \| ``null``\>

The function `checkExistingRedis` checks if there is an existing Redis connection by iterating
through a list of Redis URLs and testing the connection.

#### Returns

`Promise`\<`string` \| ``null``\>

The function `checkExistingRedis` returns a Promise that resolves to a string or null.

#### Defined in

[src/setup/redisConfiguration.ts:71](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/setup/redisConfiguration.ts#L71)

___

### checkRedisConnection

▸ **checkRedisConnection**(`url`): `Promise`\<`boolean`\>

The function `checkRedisConnection` checks if a connection to Redis can be established using the
provided URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The `url` parameter is a string that represents the URL of the Redis server. It is used to establish a connection to the Redis server. |

#### Returns

`Promise`\<`boolean`\>

a Promise that resolves to a boolean value.

#### Defined in

[src/setup/redisConfiguration.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/e919df4/src/setup/redisConfiguration.ts#L12)
