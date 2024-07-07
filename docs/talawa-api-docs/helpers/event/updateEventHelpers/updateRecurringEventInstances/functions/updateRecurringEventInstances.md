[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/updateEventHelpers/updateRecurringEventInstances](../README.md) / updateRecurringEventInstances

# Function: updateRecurringEventInstances()

\> **updateRecurringEventInstances**(`args`, `event`, `recurrenceRule`, `baseRecurringEvent`, `recurringEventUpdateType`, `session`): `Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

## Parameters

• **args**: [`MutationUpdateEventArgs`](../../../../../types/generatedGraphQLTypes/type-aliases/MutationUpdateEventArgs.md)

update event args.

• **event**: [`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

the event to be updated.

• **recurrenceRule**: [`InterfaceRecurrenceRule`](../../../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)

the recurrence rule followed by the instances.

• **baseRecurringEvent**: [`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

the base recurring event.

• **recurringEventUpdateType**: [`RecurringEventMutationType`](../../../../../types/generatedGraphQLTypes/type-aliases/RecurringEventMutationType.md)

• **session**: `ClientSession`

## Returns

`Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

The updated first instance following the recurrence rule.

## Defined in

[src/helpers/event/updateEventHelpers/updateRecurringEventInstances.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/helpers/event/updateEventHelpers/updateRecurringEventInstances.ts#L45)
