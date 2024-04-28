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

[src/setup/MongoDB.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/setup/MongoDB.ts#L68)

___

### checkConnection

▸ **checkConnection**(`url`): `Promise`\<`boolean`\>

The function `checkConnection` is an asynchronous function that checks the connection to a MongoDB
database using the provided URL and returns a boolean value indicating whether the connection was
successful or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The `url` parameter is a string that represents the connection URL for the MongoDB server. It typically includes the protocol (e.g., `mongodb://`), the host and port information, and any authentication credentials if required. |

#### Returns

`Promise`\<`boolean`\>

a Promise that resolves to a boolean value. The boolean value indicates whether the
connection to the MongoDB server was successful (true) or not (false).

#### Defined in

[src/setup/MongoDB.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/setup/MongoDB.ts#L41)

___

### checkExistingMongoDB

▸ **checkExistingMongoDB**(): `Promise`\<`string` \| ``null``\>

Function to check if Existing MongoDB instance is running
The function `checkExistingMongoDB` checks for an existing MongoDB connection by iterating through a
list of URLs and testing the connection using the `checkConnection` function.

#### Returns

`Promise`\<`string` \| ``null``\>

The function `checkExistingMongoDB` returns a promise that resolves to a string or null.

#### Defined in

[src/setup/MongoDB.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/setup/MongoDB.ts#L10)
