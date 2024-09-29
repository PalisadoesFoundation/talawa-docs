[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/auth](../README.md) / createAccessToken

# Function: createAccessToken()

\> **createAccessToken**(`user`, `appUserProfile`): `string`

Creates an access token (JWT) for a user that expires in 40 minutes.
The token contains user data and is signed with the access token secret.

## Parameters

• **user**: [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)

User data

• **appUserProfile**: [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)

Application user profile data

## Returns

`string`

JSON Web Token string payload

## Defined in

[src/utilities/auth.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/utilities/auth.ts#L25)
