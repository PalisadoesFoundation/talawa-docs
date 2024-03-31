[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/deleteEventHelpers/deleteRecurringEventInstances

# Module: helpers/event/deleteEventHelpers/deleteRecurringEventInstances

## Table of contents

### Functions

- [deleteRecurringEventInstances](helpers_event_deleteEventHelpers_deleteRecurringEventInstances.md#deleterecurringeventinstances)

## Functions

### deleteRecurringEventInstances

▸ **deleteRecurringEventInstances**(`event`, `recurrenceRule`, `baseRecurringEvent`, `session`): `Promise`\<`void`\>

This function deletes allInstances / thisAndFollowingInstances of a recurring event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``null`` \| [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the event to be deleted: - in case of deleting thisAndFollowingInstances, it would represent this instance. - in case of deleting allInstances, it would be null. |
| `recurrenceRule` | [`InterfaceRecurrenceRule`](../interfaces/models_RecurrenceRule.InterfaceRecurrenceRule.md) | the recurrence rule followed by the instances. |
| `baseRecurringEvent` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the base recurring event. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<`void`\>

**`Remarks`**

The following steps are followed:
1. get the instances to be deleted.
2. remove the associations of the instances.
3. delete the instances.
4. update the recurrenceRule and baseRecurringEvent accordingly.

#### Defined in

[src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts#L29)
