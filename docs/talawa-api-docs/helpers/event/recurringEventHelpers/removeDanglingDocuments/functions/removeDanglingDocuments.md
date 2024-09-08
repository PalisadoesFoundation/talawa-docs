[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/recurringEventHelpers/removeDanglingDocuments](../README.md) / removeDanglingDocuments

# Function: removeDanglingDocuments()

\> **removeDanglingDocuments**(`recurrenceRuleId`, `baseRecurringEventId`, `session`): `Promise`\<`void`\>

Removes dangling recurrence rule and base recurring event documents if they have no associated events.

## Parameters

• **recurrenceRuleId**: `string`

_id of the recurrence rule.

• **baseRecurringEventId**: `string`

_id of the base recurring event.

• **session**: `ClientSession`

Mongoose client session.

## Returns

`Promise`\<`void`\>

## Remarks

The function first checks if there are any associated events for each document.
If no associated events are found, it deletes the document from the database.

## Defined in

[src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts#L13)
