[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/updateSingleEvent

# Module: helpers/event/updateEventHelpers/updateSingleEvent

## Table of contents

### Functions

- [updateSingleEvent](helpers_event_updateEventHelpers_updateSingleEvent.md#updatesingleevent)

## Functions

### updateSingleEvent

▸ **updateSingleEvent**(`args`, `event`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function updates a single non-recurring event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationUpdateEventArgs`](types_generatedGraphQLTypes.md#mutationupdateeventargs) | the arguments provided for the updateEvent mutation. |
| `event` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the single event to be updated. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

The updated event.

**`Remarks`**

The following steps are followed:
1. If the single event is made recurring with this update:
  - get the appropriate data to create the baseRecurringEvent and recurring event instances.
  - generate the instances with createRecurringEvent function.
  - remove the current event and its associations as a new series has been created.
2. If it's still a non-recurring event:
  - just perform a regular update.

#### Defined in

[src/helpers/event/updateEventHelpers/updateSingleEvent.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/helpers/event/updateEventHelpers/updateSingleEvent.ts#L28)
