[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/recurringEventHelpers/removeDanglingDocuments

# Module: helpers/event/recurringEventHelpers/removeDanglingDocuments

## Table of contents

### Functions

- [removeDanglingDocuments](helpers_event_recurringEventHelpers_removeDanglingDocuments.md#removedanglingdocuments)

## Functions

### removeDanglingDocuments

▸ **removeDanglingDocuments**(`recurrenceRuleId`, `baseRecurringEventId`, `session`): `Promise`\<`void`\>

This function removes dangling recurrence rule and base recurring event documents.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recurrenceRuleId` | `string` | _id of the recurrence rule. |
| `baseRecurringEventId` | `string` | _id of the base recurring event. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<`void`\>

**`Remarks`**

The following steps are followed:
1. Call the function associated with the document to be removed, i.e. removeRecurrenceRule or removeBaseRecurringEvent.
2. Check if the document has any associations, i.e.:
  - for recurrence rule, check if there exist any event that follow this given recurrence rule
  - for base recurring event, check if there exist any event that has this event as its base recurring event
3. Remove the documents if no associations are found.

#### Defined in

[src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/recurringEventHelpers/removeDanglingDocuments.ts#L16)
