[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/createEventHelpers/createRecurringEvent

# Module: helpers/event/createEventHelpers/createRecurringEvent

## Table of contents

### Functions

- [createRecurringEvent](helpers_event_createEventHelpers_createRecurringEvent.md#createrecurringevent)

## Functions

### createRecurringEvent

▸ **createRecurringEvent**(`args`, `creatorId`, `organizationId`, `session`): `Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

This function creates the instances of a recurring event upto a certain date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`MutationCreateEventArgs`](types_generatedGraphQLTypes.md#mutationcreateeventargs) | payload of the createEvent mutation |
| `creatorId` | `string` | _id of the creator |
| `organizationId` | `string` | _id of the organization the events belongs to |
| `session` | `ClientSession` | - |

#### Returns

`Promise`\<[`InterfaceEvent`](../interfaces/models_Event.InterfaceEvent.md)\>

Created recurring event instance

**`Remarks`**

The following steps are followed:
1. Create a default recurrenceRuleData.
2. Generate a recurrence rule string based on the recurrenceRuleData.
3. Create a baseRecurringEvent on which recurring instances would be based.
4. Get the dates for recurring instances.
5. Create a recurrenceRule document.
6. Generate recurring instances according to the recurrence rule.

#### Defined in

[src/helpers/event/createEventHelpers/createRecurringEvent.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/65069df/src/helpers/event/createEventHelpers/createRecurringEvent.ts#L27)
