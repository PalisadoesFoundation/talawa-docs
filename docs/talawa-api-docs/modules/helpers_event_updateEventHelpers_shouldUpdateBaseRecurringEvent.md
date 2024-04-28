[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent

# Module: helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent

## Table of contents

### Functions

- [shouldUpdateBaseRecurringEvent](helpers_event_updateEventHelpers_shouldUpdateBaseRecurringEvent.md#shouldupdatebaserecurringevent)

## Functions

### shouldUpdateBaseRecurringEvent

▸ **shouldUpdateBaseRecurringEvent**(`recurrenceRuleEndDate`, `baseRecurringEventEndDate`): `boolean`

This function checks whether the baseRecurringEvent should be updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recurrenceRuleEndDate` | `undefined` \| ``null`` \| `string` | the end date of the recurrence rule. |
| `baseRecurringEventEndDate` | `undefined` \| ``null`` \| `string` | the end date of the base recurring event. |

#### Returns

`boolean`

true if the recurrence rule is the latest rule that the instances were following, false otherwise.

#### Defined in

[src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts#L8)
