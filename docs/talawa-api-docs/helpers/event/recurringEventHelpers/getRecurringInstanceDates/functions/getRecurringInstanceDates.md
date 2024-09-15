[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/recurringEventHelpers/getRecurringInstanceDates](../README.md) / getRecurringInstanceDates

# Function: getRecurringInstanceDates()

\> **getRecurringInstanceDates**(`recurrenceRuleString`, `recurrenceStartDate`, `recurrenceEndDate`, `queryUptoDate`): `Date`[]

Generates dates of recurrence for the recurring event based on provided recurrence rules.

## Parameters

• **recurrenceRuleString**: `string`

The rrule string defining the recurrence rules.

• **recurrenceStartDate**: `Date`

The starting date from which to generate instances.

• **recurrenceEndDate**: `null` \| `Date`

The end date of the event.

• **queryUptoDate**: `Date` = `recurrenceStartDate`

The limit date for querying recurrence rules (used for dynamic instance generation during queries).

## Returns

`Date`[]

Dates for recurring instances to be generated during this operation.

## Remarks

This function performs the following steps:
1. Determines the date limit for instance generation based on the recurrence frequency.
2. Retrieves dates for recurring event instances within the specified limits.

## Defined in

[src/helpers/event/recurringEventHelpers/getRecurringInstanceDates.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/helpers/event/recurringEventHelpers/getRecurringInstanceDates.ts#L23)
