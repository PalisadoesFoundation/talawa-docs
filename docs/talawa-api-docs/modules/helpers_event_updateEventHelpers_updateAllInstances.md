[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/updateAllInstances

# Module: helpers/event/updateEventHelpers/updateAllInstances

## Table of contents

### Functions

- [updateAllInstances](helpers_event_updateEventHelpers_updateAllInstances.md#updateallinstances)

## Functions

### updateAllInstances

▸ **updateAllInstances**(`args`, `event`, `recurrenceRule`, `baseRecurringEvent`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function updates all instances of the recurring event following the given recurrenceRule.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationUpdateEventArgs`](types_generatedGraphQLTypes.md#mutationupdateeventargs) | update event args. |
| `event` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the event to be updated. |
| `recurrenceRule` | [`InterfaceRecurrenceRule`](../interfaces/models_RecurrenceRule.InterfaceRecurrenceRule.md) | the recurrence rule followed by the instances. |
| `baseRecurringEvent` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the base recurring event. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

The updated event.

**`Remarks`**

The following steps are followed:
1. get the current event data.
2. update the data provided in the input.

#### Defined in

[src/helpers/event/updateEventHelpers/updateAllInstances.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/helpers/event/updateEventHelpers/updateAllInstances.ts#L20)
