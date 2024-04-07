[talawa-api](../README.md) / [Exports](../modules.md) / setup/getNodeEnvironment

# Module: setup/getNodeEnvironment

## Table of contents

### Functions

- [getNodeEnvironment](setup_getNodeEnvironment.md#getnodeenvironment)

## Functions

### getNodeEnvironment

▸ **getNodeEnvironment**(): `Promise`\<`string`\>

Get the node environment
The function `getNodeEnvironment` is an asynchronous function that prompts the user to select a Node
environment (either "development" or "production") and returns the selected environment as a string.

#### Returns

`Promise`\<`string`\>

a Promise that resolves to a string representing the selected Node environment.

#### Defined in

[src/setup/getNodeEnvironment.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/setup/getNodeEnvironment.ts#L9)
