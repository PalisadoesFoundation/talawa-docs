[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/updateEventHelpers/updateRecurringEvent](../README.md) / updateRecurringEvent

# Function: updateRecurringEvent()

\> **updateRecurringEvent**(`args`, `event`, `session`): `Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

## Parameters

• **args**: [`MutationUpdateEventArgs`](../../../../../types/generatedGraphQLTypes/type-aliases/MutationUpdateEventArgs.md)

The arguments containing data for updating the event.

• **event**: [`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

The event to be updated.

• **session**: `ClientSession`

The Mongoose client session for database transactions.

## Returns

`Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

The updated event object.

## Defined in

[src/helpers/event/updateEventHelpers/updateRecurringEvent.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/helpers/event/updateEventHelpers/updateRecurringEvent.ts#L20)
