[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/reuploadDuplicateCheck](../README.md) / reuploadDuplicateCheck

# Function: reuploadDuplicateCheck()

\> **reuploadDuplicateCheck**(`oldImagePath`, `newImagePath`): `Promise`\<`boolean`\>

## Parameters

• **oldImagePath**: `null` \| [`TypeImagePath`](../type-aliases/TypeImagePath.md)

Path of a current Org/User image of `type: TypeImagePath`.

• **newImagePath**: [`TypeImagePath`](../type-aliases/TypeImagePath.md)

Path of a new image of `type: TypeImagePath`.

## Returns

`Promise`\<`boolean`\>

If the identical image is trying to reuploaded, `true`; otherwise, `false`.

## Defined in

[src/utilities/reuploadDuplicateCheck.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/utilities/reuploadDuplicateCheck.ts#L43)
