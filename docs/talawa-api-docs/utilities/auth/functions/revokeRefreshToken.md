[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/auth](../README.md) / revokeRefreshToken

# Function: revokeRefreshToken()

> **revokeRefreshToken**(`userId`): `Promise`\<`void`\>

Revokes the refresh token for a user by removing the token from the user's profile.
This function searches for the user by their ID and unsets the token field in the user's document.

## Parameters

• **userId**: `string`

The ID of the user whose refresh token is to be revoked

## Returns

`Promise`\<`void`\>

A promise that resolves when the token has been revoked

## Defined in

[src/utilities/auth.ts:78](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/utilities/auth.ts#L78)
