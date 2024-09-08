[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/auth](../README.md) / createRefreshToken

# Function: createRefreshToken()

\> **createRefreshToken**(`user`, `appUserProfile`): `string`

Creates a refresh token (JWT) for a user that expires in 30 days.
The token contains user data and is signed with the refresh token secret.

## Parameters

• **user**: [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)

User data

• **appUserProfile**: [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)

Application user profile data

## Returns

`string`

JSON Web Token string payload

## Defined in

[src/utilities/auth.ts:52](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/utilities/auth.ts#L52)
