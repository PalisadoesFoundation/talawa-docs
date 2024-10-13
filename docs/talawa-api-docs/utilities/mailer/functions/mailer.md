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

[src/utilities/mailer.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/utilities/mailer.ts#L27)
