---
title: Admin Check
id: utilities_adminCheck
---
[talawa-api](../README.md) / [Exports](../modules.md) / utilities/adminCheck

# Module: utilities/adminCheck

## Table of contents

### Functions

- [adminCheck](utilities_adminCheck.md#admincheck)

## Functions

### adminCheck

▸ **adminCheck**(`userId`, `organization`): `Promise`<`void`\>

If the current user is an admin of the organisation, this function returns `true` otherwise it returns `false`.

**`Remarks`**

This is a utility method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` \| `ObjectId` | Current user id. |
| `organization` | [`Interface_Organization`](../interfaces/models_Organization.Interface_Organization.md) | Organization data of `Interface_Organization` type. |

#### Returns

`Promise`<`void`\>

`True` or `False`.

#### Defined in

src/utilities/adminCheck.ts:13
