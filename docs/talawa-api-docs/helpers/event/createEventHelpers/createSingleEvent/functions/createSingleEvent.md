[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/createEventHelpers/createSingleEvent](../README.md) / createSingleEvent

# Function: createSingleEvent()

> **createSingleEvent**(`args`, `creatorId`, `organizationId`, `session`): `Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

Creates a single non-recurring event.

## Parameters

• **args**: [`MutationCreateEventArgs`](../../../../../types/generatedGraphQLTypes/type-aliases/MutationCreateEventArgs.md)

Arguments provided for the createEvent mutation, including event data.

• **creatorId**: `string`

The ID of the current user creating the event.

• **organizationId**: `string`

The ID of the organization to which the event belongs.

• **session**: `ClientSession`

The MongoDB client session for transactional operations.

## Returns

`Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

The created event instance.

## See

Parent file:
- `resolvers/Mutation/createEvent.ts`,
- `resolvers/Query/eventsByOrganizationConnection.ts`

## Remarks

This function follows these steps:
1. Creates an event document in the database with provided data.
2. Associates the event with the current user as creator and admin.
3. Updates user's registered events list with the new event.
4. Updates user's AppUserProfile with event admin and created events references.
5. Caches the newly created event for faster access.

## Defined in

[src/helpers/event/createEventHelpers/createSingleEvent.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/helpers/event/createEventHelpers/createSingleEvent.ts#L29)
