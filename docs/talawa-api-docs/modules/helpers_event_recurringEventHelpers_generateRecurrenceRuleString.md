[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/recurringEventHelpers/generateRecurrenceRuleString

# Module: helpers/event/recurringEventHelpers/generateRecurrenceRuleString

## Table of contents

### Functions

- [generateRecurrenceRuleString](helpers_event_recurringEventHelpers_generateRecurrenceRuleString.md#generaterecurrencerulestring)

## Functions

### generateRecurrenceRuleString

▸ **generateRecurrenceRuleString**(`recurrenceRuleData`, `recurrenceStartDate`, `recurrenceEndDate?`): `string`

This function generates the recurrence rule (rrule) string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recurrenceRuleData` | [`RecurrenceRuleInput`](types_generatedGraphQLTypes.md#recurrenceruleinput) | the recurrenceRuleInput provided in the args. |
| `recurrenceStartDate` | `Date` | start date of recurrence. |
| `recurrenceEndDate?` | `Date` | end date of recurrence. |

#### Returns

`string`

The recurrence rule string that would be used to create a valid rrule object.

**`Remarks`**

The following steps are followed:
1. Get the date strings for start and end of recurrence.
2. Get the recurrence rules and make a recurrenceRuleString.

#### Defined in

[src/helpers/event/recurringEventHelpers/generateRecurrenceRuleString.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/53234da/src/helpers/event/recurringEventHelpers/generateRecurrenceRuleString.ts#L16)
