[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/deleteEventHelpers/deleteRecurringEvent

# Module: helpers/event/deleteEventHelpers/deleteRecurringEvent

## Table of contents

### Functions

- [deleteRecurringEvent](helpers_event_deleteEventHelpers_deleteRecurringEvent.md#deleterecurringevent)

## Functions

### deleteRecurringEvent

▸ **deleteRecurringEvent**(`args`, `event`, `session`): `Promise`\<`void`\>

This function deletes thisInstance / allInstances / thisAndFollowingInstances of a recurring event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationRemoveEventArgs`](types_generatedGraphQLTypes.md#mutationremoveeventargs) | removeEventArgs |
| `event` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | an instance of the recurring event to be deleted. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<`void`\>

**`Remarks`**

The following steps are followed:
1. get the recurrence rule and the base recurring event.
2. if the instance is an exception instance or if we're deleting thisInstance only, just delete that single instance.
3. if it's a bulk delete operation, handle it accordingly.

#### Defined in

[src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts#L18)
