[talawa-api](../README.md) / [Exports](../modules.md) / helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery

# Module: helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery

## Table of contents

### Functions

- [createRecurringEventInstancesDuringQuery](helpers_event_createEventHelpers_createRecurringEventInstancesDuringQuery.md#createrecurringeventinstancesduringquery)

## Functions

### createRecurringEventInstancesDuringQuery

▸ **createRecurringEventInstancesDuringQuery**(`organizationId`): `Promise`\<`void`\>

This function creates the instances of a recurring event upto a certain date during queries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `organizationId` | `undefined` \| ``null`` \| `string` | _id of the organization the events belong to |

#### Returns

`Promise`\<`void`\>

**`Remarks`**

The following steps are followed:
1. Get the limit date upto which we would want to query the recurrenceRules and generate new instances.
2. Get the recurrence rules to be used for instance generation during this query.
3. For every recurrence rule found:
  - find the base recurring event to get the data to be used for new instance generation.
  - get the number of existing instances and how many more to generate based on the recurrenceRule's count (if specified).
  - generate new instances after their latestInstanceDates.
  - update the latestInstanceDate.

#### Defined in

[src/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/636e51c/src/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery.ts#L25)
