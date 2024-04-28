[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/updateRecurringEventInstances

# Module: helpers/event/updateEventHelpers/updateRecurringEventInstances

## Table of contents

### Functions

- [updateRecurringEventInstances](helpers_event_updateEventHelpers_updateRecurringEventInstances.md#updaterecurringeventinstances)

## Functions

### updateRecurringEventInstances

▸ **updateRecurringEventInstances**(`args`, `event`, `recurrenceRule`, `baseRecurringEvent`, `recurringEventUpdateType`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function updates this and the following instances of a recurring event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationUpdateEventArgs`](types_generatedGraphQLTypes.md#mutationupdateeventargs) | update event args. |
| `event` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the event to be updated. |
| `recurrenceRule` | [`InterfaceRecurrenceRule`](../interfaces/models_RecurrenceRule.InterfaceRecurrenceRule.md) | the recurrence rule followed by the instances. |
| `baseRecurringEvent` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the base recurring event. |
| `recurringEventUpdateType` | [`RecurringEventMutationType`](types_generatedGraphQLTypes.md#recurringeventmutationtype) | - |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

The updated first instance following the recurrence rule.

**`Remarks`**

The following steps are followed:
1. Check if the recurrence rule has changed.
2. If the recurrence rule has changed:
     - get the appropriate data to create new recurring event instances and update the baseRecurringEvent.
     - get the recurrence dates and generate new instances.
     - remove the current instances and their associations as a new series has been created.
   If the recurrence rule hasn't changed:
     - just perform a regular bulk update.
3. Update the base recurring event if required.
4. Removes any dangling recurrence rule and base recurrence rule documents.

#### Defined in

[src/helpers/event/updateEventHelpers/updateRecurringEventInstances.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/updateEventHelpers/updateRecurringEventInstances.ts#L45)
