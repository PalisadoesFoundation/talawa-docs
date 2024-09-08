[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/PII/decryption](../README.md) / decrypt

# Function: decrypt()

\> **decrypt**(`encryptedText`, `key`, `iv`): `string`

Decrypts the given encrypted text using AES-256-CBC decryption.

## Parameters

• **encryptedText**: `string`

The encrypted text to decrypt, encoded as a hexadecimal string.

• **key**: `string`

The encryption key used for decryption.

• **iv**: `string`

The initialization vector (IV), used to ensure different ciphertexts encrypt to different ciphertexts even if the plaintexts are identical.

## Returns

`string`

The decrypted plaintext string.

## Defined in

[src/utilities/PII/decryption.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/utilities/PII/decryption.ts#L11)
