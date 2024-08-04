[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/deleteImage](../README.md) / deleteImage

# Function: deleteImage()

> **deleteImage**(`imageToBeDeleted`, `imageBelongingToItem`?): `Promise`\<`void`\>

Deletes an image file if it meets deletion criteria based on usage and duplicate checks.

## Parameters

• **imageToBeDeleted**: `string`

The path of the image file to be deleted

• **imageBelongingToItem?**: `string`

Optional. Indicates if the image belongs to a specific item for duplicate check

## Returns

`Promise`\<`void`\>

A promise that resolves once the image is successfully deleted

## Defined in

[src/utilities/deleteImage.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/utilities/deleteImage.ts#L13)
