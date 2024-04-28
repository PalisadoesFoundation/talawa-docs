[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/deleteEventHelpers/deleteSingleEvent

# Module: helpers/event/deleteEventHelpers/deleteSingleEvent

## Table of contents

### Functions

- [deleteSingleEvent](helpers_event_deleteEventHelpers_deleteSingleEvent.md#deletesingleevent)

## Functions

### deleteSingleEvent

▸ **deleteSingleEvent**(`eventId`, `session`, `recurrenceRule?`, `baseRecurringEvent?`): `Promise`\<`void`\>

This function deletes a single event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventId` | `string` |
| `session` | `ClientSession` |
| `recurrenceRule?` | `string` |
| `baseRecurringEvent?` | `string` |

#### Returns

`Promise`\<`void`\>

**`Remarks`**

The following steps are followed:
1. remove the associations of the event.
2. delete the event.

#### Defined in

[src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts#L19)
