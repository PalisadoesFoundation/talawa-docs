[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/recurringEventHelpers/getRecurringInstanceDates

# Module: helpers/event/recurringEventHelpers/getRecurringInstanceDates

## Table of contents

### Functions

- [getRecurringInstanceDates](helpers_event_recurringEventHelpers_getRecurringInstanceDates.md#getrecurringinstancedates)

## Functions

### getRecurringInstanceDates

▸ **getRecurringInstanceDates**(`recurrenceRuleString`, `recurrenceStartDate`, `recurrenceEndDate`, `queryUptoDate?`): `Date`[]

This function generates the dates of recurrence for the recurring event.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `recurrenceRuleString` | `string` | `undefined` | the rrule string for the recurrenceRule. |
| `recurrenceStartDate` | `Date` | `undefined` | the starting date from which we want to generate instances. |
| `recurrenceEndDate` | ``null`` \| `Date` | `undefined` | - |
| `queryUptoDate` | `Date` | `recurrenceStartDate` | the limit date to query recurrenceRules (To be used for dynamic instance generation during queries). |

#### Returns

`Date`[]

Dates for recurring instances to be generated during this operation.

**`Remarks`**

The following steps are followed:
1. Get the date limit for instance generation based on its recurrence frequency.
2. Get the dates for recurring event instances.

#### Defined in

[src/helpers/event/recurringEventHelpers/getRecurringInstanceDates.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/recurringEventHelpers/getRecurringInstanceDates.ts#L23)
