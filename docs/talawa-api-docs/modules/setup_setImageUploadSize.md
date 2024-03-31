[talawa-api](../README.md) / [Exports](../modules.md) / setup/setImageUploadSize

# Module: setup/setImageUploadSize

## Table of contents

### Functions

- [setImageUploadSize](setup_setImageUploadSize.md#setimageuploadsize)
- [validateImageFileSize](setup_setImageUploadSize.md#validateimagefilesize)

## Functions

### setImageUploadSize

▸ **setImageUploadSize**(`size`): `Promise`\<`void`\>

The function `setImageUploadSize` sets the image upload size environment variable and changes the .env file

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Promise`\<`void`\>

The function `checkExistingRedis` returns a void Promise.

#### Defined in

[src/setup/setImageUploadSize.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/setup/setImageUploadSize.ts#L9)

___

### validateImageFileSize

▸ **validateImageFileSize**(`size`): `boolean`

The function validates whether a given image size is less than 20 and greater than 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`boolean`

a boolean value.

#### Defined in

[src/setup/setImageUploadSize.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/setup/setImageUploadSize.ts#L37)
