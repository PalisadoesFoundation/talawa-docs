[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / askForRedisUrl

# Function: askForRedisUrl()

\> **askForRedisUrl**(): `Promise`\<`object`\>

The function `askForRedisUrl` prompts the user to enter the Redis hostname, port, and password, and
returns an object with these values.

## Returns

`Promise`\<`object`\>

The function `askForRedisUrl` returns a promise that resolves to an object with the
properties `host`, `port`, and `password`.

### host

\> **host**: `string`

### password

\> **password**: `string`

### port

\> **port**: `number`

## Defined in

[src/setup/redisConfiguration.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/setup/redisConfiguration.ts#L36)
