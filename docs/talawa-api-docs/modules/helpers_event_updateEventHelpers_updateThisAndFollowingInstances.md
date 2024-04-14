[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/updateThisAndFollowingInstances

# Module: helpers/event/updateEventHelpers/updateThisAndFollowingInstances

## Table of contents

### Functions

- [updateThisAndFollowingInstances](helpers_event_updateEventHelpers_updateThisAndFollowingInstances.md#updatethisandfollowinginstances)

## Functions

### updateThisAndFollowingInstances

▸ **updateThisAndFollowingInstances**(`args`, `event`, `recurrenceRule`, `baseRecurringEvent`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function updates this and the following instances of a recurring event.

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

The updated first instance of the recurrence rule.

**`Remarks`**

The following steps are followed:
1. Check if the recurrence rule has been changed.
2. If the recurrence rule has been changed.
  - get the appropriate data to create the baseRecurringEvent and recurring event instances.
  - generate the instances with createRecurringEvent function.
  - remove the current event and its associations as a new series has been created.
3. If the recurrence rule hasn't changed:
  - just perform a bulk regular update.
4. Update the base recurring event if required.

#### Defined in

[src/helpers/event/updateEventHelpers/updateThisAndFollowingInstances.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/helpers/event/updateEventHelpers/updateThisAndFollowingInstances.ts#L33)
