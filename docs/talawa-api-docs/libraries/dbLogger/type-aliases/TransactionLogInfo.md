[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / TransactionLogInfo

# Type Alias: TransactionLogInfo

\> **TransactionLogInfo**: `object`

The structure of a transaction log entry.

## Type declaration

### model

\> **model**: `string`

The name of the model associated with the log entry

### query?

\> `optional` **query**: `string`

The query executed (optional)

### timestamp

\> **timestamp**: `string`

The timestamp when the log entry was created

### type

\> **type**: `string`

The type of transaction (e.g., create, update, delete)

### update?

\> `optional` **update**: `string`

The update performed (optional)

## Defined in

[src/libraries/dbLogger.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/libraries/dbLogger.ts#L8)
