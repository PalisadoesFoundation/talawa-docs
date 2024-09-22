[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/adminCheck](../README.md) / adminCheck

# Function: adminCheck()

\> **adminCheck**(`userId`, `organization`): `Promise`\<`void`\>

Checks if the current user is an admin of the organization.
If the user is an admin, the function completes successfully. Otherwise, it throws an UnauthorizedError.

## Parameters

• **userId**: `string` \| `ObjectId`

The ID of the current user. It can be a string or a Types.ObjectId.

• **organization**: [`InterfaceOrganization`](../../../models/Organization/interfaces/InterfaceOrganization.md)

The organization data of `InterfaceOrganization` type.

## Returns

`Promise`\<`void`\>

`True` or `False`.

## Remarks

This is a utility method.

## Defined in

[src/utilities/adminCheck.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/utilities/adminCheck.ts#L17)
