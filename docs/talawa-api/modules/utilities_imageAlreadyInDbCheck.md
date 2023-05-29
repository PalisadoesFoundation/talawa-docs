---
title: Image Already in Db Check
id: utilities_imageAlreadyInDbCheck
---
[talawa-api](../README.md) / [Exports](../modules.md) / utilities/imageAlreadyInDbCheck

# Module: utilities/imageAlreadyInDbCheck

## Table of contents

### Functions

- [imageAlreadyInDbCheck](utilities_imageAlreadyInDbCheck.md#imagealreadyindbcheck)

## Functions

### imageAlreadyInDbCheck

▸ **imageAlreadyInDbCheck**(`oldImagePath`, `newImagePath`): `Promise`<`undefined` \| `string`\>

This function checks if an image already exists in the database using hash.
If it does, then point to that image and remove the image just uploaded.
Else, allow the file to get uploaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldImagePath` | ``null`` \| `string` | Path of image |
| `newImagePath` | `string` | Does image belong to an item |

#### Returns

`Promise`<`undefined` \| `string`\>

file name.

#### Defined in

src/utilities/imageAlreadyInDbCheck.ts:16
