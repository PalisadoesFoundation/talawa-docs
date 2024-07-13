[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/deleteImage](../README.md) / deleteImage

# Function: deleteImage()

\> **deleteImage**(`imageToBeDeleted`, `imageBelongingToItem`?): `Promise`\<`void`\>

This function deletes an image if it is only used once.
It is also ensured that the image hash isn't used by multiple users/organization before deleting it
After deleting the image, the number of uses of the hashed image are decremented by one.

## Parameters

• **imageToBeDeleted**: `string`

Path of image

• **imageBelongingToItem?**: `string`

Does image belong to an item

## Returns

`Promise`\<`void`\>

## Defined in

[src/utilities/deleteImage.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/utilities/deleteImage.ts#L12)
