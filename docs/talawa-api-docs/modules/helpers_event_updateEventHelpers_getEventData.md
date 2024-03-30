[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/updateEventHelpers/getEventData

# Module: helpers/event/updateEventHelpers/getEventData

## Table of contents

### Functions

- [getEventData](helpers_event_updateEventHelpers_getEventData.md#geteventdata)

## Functions

### getEventData

▸ **getEventData**(`updateEventInputData`, `event`): [`InterfaceRecurringEvent`](../interfaces/helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md)

This function get the data to be used for generating the recurring event instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateEventInputData` | `undefined` \| ``null`` \| [`UpdateEventInput`](types_generatedGraphQLTypes.md#updateeventinput) | the update event input data. |
| `event` | [`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md) | the event to be updated. |

#### Returns

[`InterfaceRecurringEvent`](../interfaces/helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md)

The updated event data.

**`Remarks`**

The following steps are followed:
1. get the current event data.
2. update the data provided in the input.

#### Defined in

[src/helpers/event/updateEventHelpers/getEventData.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/helpers/event/updateEventHelpers/getEventData.ts#L15)
