[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [setup/verifySmtpConnection](../README.md) / verifySmtpConnection

# Function: verifySmtpConnection()

> **verifySmtpConnection**(`config`): `Promise`\<`VerifySmtpConnectionReturnType`\>

The function `verifySmtpConnection` verifies the SMTP connection using the provided configuration
and returns a success status and error message if applicable.

## Parameters

• **config**: `Record`\<`string`, `string`\>

The `config` parameter is an object that contains the configuration settings for the
SMTP connection. It should have the following properties:

## Returns

`Promise`\<`VerifySmtpConnectionReturnType`\>

The function `verifySmtpConnection` returns a Promise that resolves to an object of type
`VerifySmtpConnectionReturnType`. The `VerifySmtpConnectionReturnType` object has two properties:
`success` and `error`. If the SMTP connection is verified successfully, the `success` property will
be `true` and the `error` property will be `null`. If the SMTP connection verification fails

## Defined in

[src/setup/verifySmtpConnection.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/setup/verifySmtpConnection.ts#L18)
