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

[src/utilities/deleteImage.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/utilities/deleteImage.ts#L12)
