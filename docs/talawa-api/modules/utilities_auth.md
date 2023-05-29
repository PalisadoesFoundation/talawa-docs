---
title: Auth
id: utilities_auth
---
[talawa-api](../README.md) / [Exports](../modules.md) / utilities/auth

# Module: utilities/auth

## Table of contents

### Interfaces

- [Interface\_JwtTokenPayload](../interfaces/utilities_auth.Interface_JwtTokenPayload.md)

### Functions

- [createAccessToken](utilities_auth.md#createaccesstoken)
- [createRefreshToken](utilities_auth.md#createrefreshtoken)

## Functions

### createAccessToken

▸ **createAccessToken**(`user`): `Promise`<`string`\>

This function creates a json web token which expires in 15 minutes.
It signs the given payload(user data) into a JSON Web Token string payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`Interface_User`](../interfaces/models_User.Interface_User.md) | User data |

#### Returns

`Promise`<`string`\>

JSON Web Token string payload

#### Defined in

src/utilities/auth.ts:18

___

### createRefreshToken

▸ **createRefreshToken**(`user`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`Interface_User`](../interfaces/models_User.Interface_User.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/utilities/auth.ts:34
