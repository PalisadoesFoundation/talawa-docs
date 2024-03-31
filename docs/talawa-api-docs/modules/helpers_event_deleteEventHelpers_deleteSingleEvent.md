[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/deleteEventHelpers/deleteSingleEvent

# Module: helpers/event/deleteEventHelpers/deleteSingleEvent

## Table of contents

### Functions

- [deleteSingleEvent](helpers_event_deleteEventHelpers_deleteSingleEvent.md#deletesingleevent)

## Functions

### deleteSingleEvent

▸ **deleteSingleEvent**(`eventId`, `session`): `Promise`\<`void`\>

This function deletes a single event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventId` | `string` |
| `session` | `ClientSession` |

#### Returns

`Promise`\<`void`\>

**`Remarks`**

The following steps are followed:
1. remove the associations of the event.
2. delete the event.

#### Defined in

[src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/e5f7a9d/src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts#L18)
