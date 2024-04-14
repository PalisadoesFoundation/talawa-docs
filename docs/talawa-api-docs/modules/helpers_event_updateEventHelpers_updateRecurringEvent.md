[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/updateRecurringEvent

# Module: helpers/event/updateEventHelpers/updateRecurringEvent

## Table of contents

### Functions

- [updateRecurringEvent](helpers_event_updateEventHelpers_updateRecurringEvent.md#updaterecurringevent)

## Functions

### updateRecurringEvent

▸ **updateRecurringEvent**(`args`, `event`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function updates the recurring event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationUpdateEventArgs`](types_generatedGraphQLTypes.md#mutationupdateeventargs) | update event args. |
| `event` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the event to be updated. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

The updated event.

**`Remarks`**

The following steps are followed:
1. get the recurrence rule.
2. get the base recurring event.
3. based on the type of update, call the function required.

#### Defined in

[src/helpers/event/updateEventHelpers/updateRecurringEvent.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/helpers/event/updateEventHelpers/updateRecurringEvent.ts#L21)
