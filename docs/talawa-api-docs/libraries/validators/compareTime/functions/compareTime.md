[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [libraries/validators/compareTime](../README.md) / compareTime

# Function: compareTime()

> **compareTime**(`time1`, `time2`): `string`

Compares two times and returns a message if the first time is later than the second time.

## Parameters

• **time1**: `string`

The first time as a string.

• **time2**: `string`

The second time as a string.

## Returns

`string`

A message indicating that the start time must be earlier than the end time, or an empty string if the times are in the correct order.

## Defined in

[src/libraries/validators/compareTime.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/libraries/validators/compareTime.ts#L8)
