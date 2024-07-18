[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/createEventHelpers/createRecurringEvent](../README.md) / createRecurringEvent

# Function: createRecurringEvent()

\> **createRecurringEvent**(`args`, `creatorId`, `organizationId`, `session`): `Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

## Parameters

• **args**: [`MutationCreateEventArgs`](../../../../../types/generatedGraphQLTypes/type-aliases/MutationCreateEventArgs.md)

The payload of the createEvent mutation, including event data and recurrence rule.

• **creatorId**: `string`

The ID of the event creator.

• **organizationId**: `string`

The ID of the organization to which the event belongs.

• **session**: `ClientSession`

The MongoDB client session for transactional operations.

## Returns

`Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

The created instance of the recurring event.

## Defined in

[src/helpers/event/createEventHelpers/createRecurringEvent.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/7fc9f13527dc6ead651f268e58527dcc279b95bc/src/helpers/event/createEventHelpers/createRecurringEvent.ts#L35)
