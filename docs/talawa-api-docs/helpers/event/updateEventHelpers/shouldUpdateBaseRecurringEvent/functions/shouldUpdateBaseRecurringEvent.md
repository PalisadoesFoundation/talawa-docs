[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent](../README.md) / shouldUpdateBaseRecurringEvent

# Function: shouldUpdateBaseRecurringEvent()

> **shouldUpdateBaseRecurringEvent**(`recurrenceRuleEndDate`, `baseRecurringEventEndDate`): `boolean`

This function checks whether the baseRecurringEvent should be updated.

## Parameters

• **recurrenceRuleEndDate**: `undefined` \| `null` \| `string`

the end date of the recurrence rule.

• **baseRecurringEventEndDate**: `undefined` \| `null` \| `string`

the end date of the base recurring event.

## Returns

`boolean`

true if the recurrence rule is the latest rule that the instances were following, false otherwise.

## Defined in

[src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts#L8)
