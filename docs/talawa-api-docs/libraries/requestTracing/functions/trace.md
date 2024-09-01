[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [libraries/requestTracing](../README.md) / trace

# Function: trace()

\> **trace**\<`T`\>(`tracingId`, `method`): `Promise`\<`void`\>

Runs a method within the context of a tracing ID. If a tracing ID is provided, it uses that ID;
otherwise, it generates a new one.

## Type Parameters

• **T**

## Parameters

• **tracingId**: `string`

The tracing ID to use.

• **method**

The method to run within the context of the tracing ID.

## Returns

`Promise`\<`void`\>

A promise that resolves when the method completes.

## Defined in

[src/libraries/requestTracing.ts:81](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/libraries/requestTracing.ts#L81)
