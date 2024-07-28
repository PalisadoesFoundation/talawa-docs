[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/userFamilyAdminCheck](../README.md) / adminCheck

# Function: adminCheck()

\> **adminCheck**(`userId`, `userFamily`): `Promise`\<`void`\>

Checks if the current user is an admin of the organization or a super admin.
Throws an UnauthorizedError if the user is neither an admin nor a super admin.

## Parameters

• **userId**: `string` \| `ObjectId`

The ID of the current user.

• **userFamily**: [`InterfaceUserFamily`](../../../models/userFamily/interfaces/InterfaceUserFamily.md)

The user family data of type `InterfaceUserFamily`.

## Returns

`Promise`\<`void`\>

## Remarks

This function queries the `userFamily` to check if the `userId` is listed as an admin.
Additionally, it queries the `AppUserProfile` to check if the `userId` is a super admin.

## Defined in

[src/utilities/userFamilyAdminCheck.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/utilities/userFamilyAdminCheck.ts#L19)
