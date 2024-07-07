[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / createLoggingMiddleware

# Function: createLoggingMiddleware()

\> **createLoggingMiddleware**\<`T`\>(`schema`, `modelName`): `void`

## Type Parameters

• **T** *extends* `Document`\<`any`, `any`, `any`\>

## Parameters

• **schema**: `Schema`\<`T`, `Model`\<`T`, `any`, `any`, `any`, `IfAny`\<`T`, `any`, `Document`\<`unknown`, `any`, `T`\> & `Require_id`\<`T`\>\>, `any`\>, `object`, `object`, `object`, `object`, `DefaultSchemaOptions`, `ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>, `IfAny`\<`FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>, `any`, `Document`\<`unknown`, `object`, `FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>\> & `Require_id`\<`FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>\>\>\>

• **modelName**: `string`

## Returns

`void`

## Defined in

[src/libraries/dbLogger.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/libraries/dbLogger.ts#L40)
