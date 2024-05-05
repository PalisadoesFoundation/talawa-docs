[talawa-api](../README.md) / [Exports](../modules.md) / setup/MongoDB

# Module: setup/MongoDB

## Table of contents

### Functions

- [askForMongoDBUrl](setup_MongoDB.md#askformongodburl)
- [checkConnection](setup_MongoDB.md#checkconnection)
- [checkExistingMongoDB](setup_MongoDB.md#checkexistingmongodb)

## Functions

### askForMongoDBUrl

▸ **askForMongoDBUrl**(): `Promise`\<`string`\>

The function `askForMongoDBUrl` prompts the user to enter a MongoDB URL and returns the entered URL
as a string.

#### Returns

`Promise`\<`string`\>

a Promise that resolves to a string.

#### Defined in

[src/setup/MongoDB.ts:73](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/MongoDB.ts#L73)

___

### checkConnection

▸ **checkConnection**(`url`): `Promise`\<`boolean`\>

The `checkConnection` function attempts to establish a connection to a MongoDB instance using a provided URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The MongoDB connection URL. |

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating whether the connection was successful (true) or not (false).

It performs the following steps:
1. Tries to establish a connection to the MongoDB instance using the provided URL with a server selection timeout of 1000 milliseconds.
2. If the connection is successful, it closes the connection and returns true.
3. If the connection fails, it logs an error message and returns false.
   - If the error is an instance of the Error class, it logs the error message.
   - If the error is not an instance of the Error class, it logs a generic error message and the error itself.

This function is used during the initial setup process to test the MongoDB connection.

#### Defined in

[src/setup/MongoDB.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/MongoDB.ts#L45)

___

### checkExistingMongoDB

▸ **checkExistingMongoDB**(): `Promise`\<`string` \| ``null``\>

The `checkExistingMongoDB` function checks for an existing MongoDB URL in the environment variables and attempts to establish a connection.

It performs the following steps:
1. Retrieves the MongoDB URL from the environment variables.
2. If no URL is found, it immediately returns null.
3. If a URL is found, it attempts to establish a connection using the `checkConnection` function.
   - If the connection is successful (i.e., `checkConnection` returns true), it returns the URL.
   - If the connection fails (i.e., `checkConnection` returns false), it returns null.

This function is used during the initial setup process to check if a valid MongoDB connection can be made with the existing URL in the environment variables.

#### Returns

`Promise`\<`string` \| ``null``\>

A promise that resolves to a string (if a connection could be made to the existing URL) or null (if no existing URL or connection could not be made).

#### Defined in

[src/setup/MongoDB.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/MongoDB.ts#L17)
