---
title: Reupload Duplicate Check
id: utilities_reuploadDuplicateCheck
---
[talawa-api](../README.md) / [Exports](../modules.md) / utilities/reuploadDuplicateCheck

# Module: utilities/reuploadDuplicateCheck

## Table of contents

### Type Aliases

- [TypeImagePath](utilities_reuploadDuplicateCheck.md#typeimagepath)

### Functions

- [reuploadDuplicateCheck](utilities_reuploadDuplicateCheck.md#reuploadduplicatecheck)

## Type Aliases

### TypeImagePath

Ƭ **TypeImagePath**: `string` \| `Interface_UrlRequestObject` \| `Interface_BufferObject`

#### Defined in

src/utilities/reuploadDuplicateCheck.ts:15

## Functions

### reuploadDuplicateCheck

▸ **reuploadDuplicateCheck**(`oldImagePath`, `newImagePath`): `Promise`<`boolean`\>

This function determines whether a user or an organisation is
attempting to re-upload the same profile photo or organisation image.

**`Remarks`**

This is a utility method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldImagePath` | ``null`` \| [`TypeImagePath`](utilities_reuploadDuplicateCheck.md#typeimagepath) | Path of a current Org/User image of `type: TypeImagePath`. |
| `newImagePath` | [`TypeImagePath`](utilities_reuploadDuplicateCheck.md#typeimagepath) | Path of a new image of `type: TypeImagePath`. |

#### Returns

`Promise`<`boolean`\>

If the identical image is trying to reuploaded, `true`; otherwise, `false`.

#### Defined in

src/utilities/reuploadDuplicateCheck.ts:42
