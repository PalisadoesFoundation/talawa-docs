[**talawa-api**](../../../README.md)

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

[src/libraries/dbLogger.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/libraries/dbLogger.ts#L8)
