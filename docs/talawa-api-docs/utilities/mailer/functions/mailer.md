[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [utilities/mailer](../README.md) / mailer

# Function: mailer()

\> **mailer**(`mailFields`): `Promise`\<`string` \| `SentMessageInfo`\>

Sends an email using Nodemailer.

## Parameters

• **mailFields**: [`InterfaceMailFields`](../interfaces/InterfaceMailFields.md)

An object containing emailTo, subject, and body fields.

## Returns

`Promise`\<`string` \| `SentMessageInfo`\>

A promise resolving to `SMTPTransport.SentMessageInfo` on success, or an error string on failure.

## Remarks

This is a utility method for sending emails.

## Defined in

[src/utilities/mailer.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/utilities/mailer.ts#L27)
