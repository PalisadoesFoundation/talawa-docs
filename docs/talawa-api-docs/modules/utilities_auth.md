[talawa-api](../README.md) / [Exports](../modules.md) / utilities/auth

# Module: utilities/auth

## Table of contents

### Interfaces

- [InterfaceJwtTokenPayload](../interfaces/utilities_auth.InterfaceJwtTokenPayload.md)

### Functions

- [createAccessToken](utilities_auth.md#createaccesstoken)
- [createRefreshToken](utilities_auth.md#createrefreshtoken)
- [revokeRefreshToken](utilities_auth.md#revokerefreshtoken)

## Functions

### createAccessToken

▸ **createAccessToken**(`user`, `appUserProfile`): `string`

This function creates a json web token which expires in 15 minutes.
It signs the given payload(user data) into a JSON Web Token string payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md) | User data |
| `appUserProfile` | [`InterfaceAppUserProfile`](../interfaces/models_AppUserProfile.InterfaceAppUserProfile.md) | - |

#### Returns

`string`

JSON Web Token string payload

#### Defined in

[src/utilities/auth.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/utilities/auth.ts#L19)

___

### createRefreshToken

▸ **createRefreshToken**(`user`, `appUserProfile`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md) |
| `appUserProfile` | [`InterfaceAppUserProfile`](../interfaces/models_AppUserProfile.InterfaceAppUserProfile.md) |

#### Returns

`string`

#### Defined in

[src/utilities/auth.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/utilities/auth.ts#L38)

___

### revokeRefreshToken

▸ **revokeRefreshToken**(`userId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/utilities/auth.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/utilities/auth.ts#L57)
