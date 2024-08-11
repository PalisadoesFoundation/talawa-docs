[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/checkReplicaSet](../README.md) / checkReplicaSet

# Function: checkReplicaSet()

> **checkReplicaSet**(): `Promise`\<`boolean`\>

Checks if the MongoDB connection is part of a replica set.
This function sends a 'hello' command to the MongoDB admin database to retrieve server information,
and determines if the connection is part of a replica set by checking for the presence of 'hosts' and 'setName' in the result.

## Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating whether the connection is part of a replica set (true) or not (false).

## Defined in

[src/utilities/checkReplicaSet.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/utilities/checkReplicaSet.ts#L11)
