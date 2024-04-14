[talawa-api](../README.md) / [Exports](../modules.md) / db

# Module: db

## Table of contents

### Variables

- [session](db.md#session)

### Functions

- [connect](db.md#connect)
- [disconnect](db.md#disconnect)

## Variables

### session

• **session**: `mongoose.ClientSession`

#### Defined in

[src/db.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/db.ts#L6)

## Functions

### connect

▸ **connect**(`dbName?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbName?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/db.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/db.ts#L8)

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/db.ts:54](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/db.ts#L54)
