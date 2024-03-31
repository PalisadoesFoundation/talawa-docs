[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/updateThisInstance

# Module: helpers/event/updateEventHelpers/updateThisInstance

## Table of contents

### Functions

- [updateThisInstance](helpers_event_updateEventHelpers_updateThisInstance.md#updatethisinstance)

## Functions

### updateThisInstance

▸ **updateThisInstance**(`args`, `event`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function updates only this instance of a recurrence pattern.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationUpdateEventArgs`](types_generatedGraphQLTypes.md#mutationupdateeventargs) | update event args. |
| `event` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the event to be updated. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

The updated recurring event instance.

**`Remarks`**

The following steps are followed:
1. Update this instance.

#### Defined in

[src/helpers/event/updateEventHelpers/updateThisInstance.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/helpers/event/updateEventHelpers/updateThisInstance.ts#L16)
