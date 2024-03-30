[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/createEventHelpers/createSingleEvent

# Module: helpers/event/createEventHelpers/createSingleEvent

## Table of contents

### Functions

- [createSingleEvent](helpers_event_createEventHelpers_createSingleEvent.md#createsingleevent)

## Functions

### createSingleEvent

▸ **createSingleEvent**(`args`, `creatorId`, `organizationId`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function generates a single non-recurring event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationCreateEventArgs`](types_generatedGraphQLTypes.md#mutationcreateeventargs) | the arguments provided for the createEvent mutation. |
| `creatorId` | `string` | _id of the current user. |
| `organizationId` | `string` | _id of the current organization. |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

The created event.

**`Remarks`**

The following steps are followed:
1. Create an event document.
2. Associate the event with the user
3. Cache the event.

#### Defined in

[src/helpers/event/createEventHelpers/createSingleEvent.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/helpers/event/createEventHelpers/createSingleEvent.ts#L19)
