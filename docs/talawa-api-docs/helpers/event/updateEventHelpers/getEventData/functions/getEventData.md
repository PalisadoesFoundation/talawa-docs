[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/updateEventHelpers/getEventData](../README.md) / getEventData

# Function: getEventData()

\> **getEventData**(`updateEventInputData`, `event`): [`InterfaceRecurringEvent`](../../../recurringEventHelpers/generateRecurringEventInstances/interfaces/InterfaceRecurringEvent.md)

This function retrieves the data to be used for updating an event,
combining existing event data with new input data.

## Parameters

• **updateEventInputData**: `undefined` \| `null` \| [`UpdateEventInput`](../../../../../types/generatedGraphQLTypes/type-aliases/UpdateEventInput.md)

The input data to update the event.

• **event**: [`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

The current event data to be updated.

## Returns

[`InterfaceRecurringEvent`](../../../recurringEventHelpers/generateRecurringEventInstances/interfaces/InterfaceRecurringEvent.md)

The updated event data.

## Defined in

[src/helpers/event/updateEventHelpers/getEventData.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/helpers/event/updateEventHelpers/getEventData.ts#L12)
