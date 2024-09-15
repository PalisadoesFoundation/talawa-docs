[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/deleteEventHelpers/deleteRecurringEventInstances](../README.md) / deleteRecurringEventInstances

# Function: deleteRecurringEventInstances()

\> **deleteRecurringEventInstances**(`event`, `recurrenceRule`, `baseRecurringEvent`, `session`): `Promise`\<`void`\>

Deletes all instances or thisAndFollowingInstances of a recurring event.

## Parameters

• **event**: `null` \| [`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

The event instance to be deleted:
  - For thisAndFollowingInstances, represents the starting instance.
  - For allInstances, should be null.

• **recurrenceRule**: [`InterfaceRecurrenceRule`](../../../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)

The recurrence rule associated with the instances.

• **baseRecurringEvent**: [`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

The base recurring event from which instances are derived.

• **session**: `ClientSession`

## Returns

`Promise`\<`void`\>

## Remarks

This function performs the following steps:
1. Constructs a query object to fetch instances based on the delete type.
2. Retrieves and deletes all associated documents (attendees, users, profiles, action items).
3. Deletes the instances themselves.
4. Updates the recurrence rule and base recurring event as needed.
5. Removes any dangling documents related to the recurrence rule and base recurring event.

## Defined in

[src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts#L32)
