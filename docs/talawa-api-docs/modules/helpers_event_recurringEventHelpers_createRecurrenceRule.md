[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/recurringEventHelpers/createRecurrenceRule

# Module: helpers/event/recurringEventHelpers/createRecurrenceRule

## Table of contents

### Functions

- [createRecurrenceRule](helpers_event_recurringEventHelpers_createRecurrenceRule.md#createrecurrencerule)

## Functions

### createRecurrenceRule

▸ **createRecurrenceRule**(`recurrenceRuleString`, `recurrenceStartDate`, `recurrenceEndDate`, `organizationId`, `baseRecurringEventId`, `latestInstanceDate`, `session`): `Promise`\<[`InterfaceRecurrenceRule`](../interfaces/models_RecurrenceRule.InterfaceRecurrenceRule.md)\>

This function generates the recurrenceRule document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recurrenceRuleString` | `string` | the rrule string containing the rules that the instances would follow. |
| `recurrenceStartDate` | `Date` | start date of recurrence. |
| `recurrenceEndDate` | ``null`` \| `Date` | end date of recurrence. |
| `organizationId` | `string` | _id of the current organization. |
| `baseRecurringEventId` | `string` | _id of the base recurring event. |
| `latestInstanceDate` | `Date` | start date of the last instance generated during this operation. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceRecurrenceRule`](../interfaces/models_RecurrenceRule.InterfaceRecurrenceRule.md)\>

The recurrence rule document.

**`Remarks`**

The following steps are followed:
1. Create an rrule object from the rrule string.
2. Get the fields for the RecurrenceRule document.
3. Create the RecurrenceRuleDocument.

#### Defined in

[src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts#L25)
