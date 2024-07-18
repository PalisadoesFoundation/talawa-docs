[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent](../README.md) / shouldUpdateBaseRecurringEvent

# Function: shouldUpdateBaseRecurringEvent()

\> **shouldUpdateBaseRecurringEvent**(`recurrenceRuleEndDate`, `baseRecurringEventEndDate`): `boolean`

## Parameters

• **recurrenceRuleEndDate**: `undefined` \| `null` \| `string`

the end date of the recurrence rule.

• **baseRecurringEventEndDate**: `undefined` \| `null` \| `string`

the end date of the base recurring event.

## Returns

`boolean`

true if the recurrence rule is the latest rule that the instances were following, false otherwise.

## Defined in

[src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts#L8)
