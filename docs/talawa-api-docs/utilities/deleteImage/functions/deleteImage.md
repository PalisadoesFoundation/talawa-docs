[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/deleteImage](../README.md) / deleteImage

# Function: deleteImage()

\> **deleteImage**(`imageToBeDeleted`, `imageBelongingToItem`?): `Promise`\<`void`\>

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

[src/utilities/deleteImage.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/utilities/deleteImage.ts#L13)
