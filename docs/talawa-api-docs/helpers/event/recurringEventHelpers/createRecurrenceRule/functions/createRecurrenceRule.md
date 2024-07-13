[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/recurringEventHelpers/createRecurrenceRule](../README.md) / createRecurrenceRule

# Function: createRecurrenceRule()

\> **createRecurrenceRule**(`recurrenceRuleString`, `recurrenceStartDate`, `recurrenceEndDate`, `organizationId`, `baseRecurringEventId`, `latestInstanceDate`, `session`): `Promise`\<[`InterfaceRecurrenceRule`](../../../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)\>

## Parameters

• **recurrenceRuleString**: `string`

The string representation of the recurrence rule (RRULE).

• **recurrenceStartDate**: `Date`

The start date of recurrence.

• **recurrenceEndDate**: `null` \| `Date`

The end date of recurrence, if specified.

• **organizationId**: `string`

The unique identifier of the organization to which the recurrence rule belongs.

• **baseRecurringEventId**: `string`

The ID of the base recurring event this rule is associated with.

• **latestInstanceDate**: `Date`

The start date of the last instance generated during this operation.

• **session**: `ClientSession`

The MongoDB client session for transactional operations.

## Returns

`Promise`\<[`InterfaceRecurrenceRule`](../../../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)\>

The created recurrence rule document.

## Defined in

[src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts#L26)
