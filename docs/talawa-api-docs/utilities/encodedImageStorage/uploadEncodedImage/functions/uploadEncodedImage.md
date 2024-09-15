[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/encodedImageStorage/uploadEncodedImage](../README.md) / uploadEncodedImage

# Function: uploadEncodedImage()

\> **uploadEncodedImage**(`encodedImageURL`, `previousImagePath`?): `Promise`\<`string`\>

Uploads an encoded image to the server.

## Parameters

• **encodedImageURL**: `string`

The URL or content of the encoded image to upload.

• **previousImagePath?**: `null` \| `string`

Optional. The path of the previous image to delete before uploading the new one.

## Returns

`Promise`\<`string`\>

The file name of the uploaded image.

## Defined in

[src/utilities/encodedImageStorage/uploadEncodedImage.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/utilities/encodedImageStorage/uploadEncodedImage.ts#L45)
