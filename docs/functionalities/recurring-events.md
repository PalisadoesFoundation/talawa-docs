---
id: recurring-events
title: Recurring Events
---

## Goals

_**What do we need?**_

1. The functionalities for creating recurring events, with custom recurrence patterns, like the top calendar apps out there.
2. The functionalities for updating / deleting:
   - a single instance
   - this and following instances
   - all instances <br />
     of a recurring event
3. A way to track the historical records of a recurring event.

<!-- ## Solution -->

## Interfaces

```javascript
  interface InterfaceEvent {
    // ...existing event fields
    isBaseRecurringEvent: boolean;
    recurrenceRuleId: ObjectId;
    baseRecurringEventId: ObjectId;
    isRecurringEventException: boolean;
  }

  interface InterfaceRecurrenceRule {
    recurrenceStartDate: Date;
    recurrenceEndDate: Date;
    recurrenceRuleString: string;
    // ...recurrence specific properties (frequency, count, interval, etc.)
    latestInstanceDate: Date;
    baseRecurringEventId: ObjectId;
  }
```

The purpose and need for each of the fields and Interfaces will be explained in the **Approach** as their necessity arises.

## Approach

1. We are using the `rrule` libary and following the dynamic generation approach.

<br />

### Creating recurring events

1. Create event input:

   - For recurring events, along with the general `EventInput`, there would also be a `RecurrenceRuleInput` (which, if not provided, would default to infinite weekly recurrence), containing the recurrence pattern.

2. After getting the input, we'd follow these steps ([createRecurringEvent.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/createEventHelpers/createRecurringEvent.ts)):

   - Generate a `recurrenceRuleString` from our `RecurrenceRuleInput` that would specify our recurrence rule in `rrule` string format ([generateRecurrenceRuleString.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/recurringEventHelpers/generateRecurrenceRuleString.ts)).

   - Create a `BaseRecurringEvent` that would just be like creating a normal event with `isBaseRecurringEvent: true`, let's name it's `_id` to be `baseRecurringEventId` (This is what we will use as the base event for generating instances.)

   - Get the dates of recurrence using the `rrule` library ([getRecurringInstanceDates.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/recurringEventHelpers/getRecurringInstanceDates.ts)):

     - Fix a `limitEndDate`, say `X` years ahead from the recurrence start date (depending on the recurrence frequency), that would help determine the date upto which we will generate instances in the `createEvent` mutation. We'll leave the rest for dynamic generation during the events `query`.
     - If `recurrenceEndDate: null` or `recurrenceEndDate > limitEndDate`, we'd generate dates upto `limitEndDate`, and leave the rest for dynamic generation during queries.
     - If `recurrenceEndDate < limitEndDate`, then we just generate all the dates of recurrence.

   - Both `RecurrenceRule` & `BaseRecurringEvent` will contain these `recurrenceStartDate` and the `recurrenceEndDate` values as provided in the `RecurrenceRuleInput`.

     - `EventInput`:

       - `startDate`: Start Date of that event instance.
       - `endDate`: End Date of that event instance.

         :::note
         These dates will be selected from the create event modal, and would specify the event duration in days.
         i.e. If for an event, we select `startDate: "2024-18-04"` & `endDate: "2024-20-04"`, then all of the generated instances of that recurring event will
         have that two day gap between their start and end dates.
         :::

     - `RecurrenceRuleInput`:

       - `recurrenceStartDate`: Start Date of recurrence. It will be the same as the `startDate` we select for the first instance.
       - `recurrenceEndDate`: End Date of recurrence. By default, it will be null, i.e.
         default infinite recurrence. It can be changed through the custom recurrence modal.

         :::note
         Only one of `recurrenceEndDate` or `count` will exist. i.e. if we select a specific end date of recurrence, `count` will be null, if we chose a specific count istead, then `recurrenceEndDate` will be null.
         :::

   - Create a `RecurrenceRule` document that would contain the `recurrenceRuleString` and the recurrence fields for easy understanding and debugging, let's name this document's `_id` to be `recurranceRuleId`. Set it's `latestInstanceDate` to be the last date generated during this mutation.

   - Generate the recurring event instances, make associations (attendees, user), and cache them ([generateRecurringEventInstances.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts)).

   - All of the instances (Event documents) we created in the previous step will be based on the `EventInput` data, and the remaining instances (if any) will be generated during queries, based on the `BaseRecurringEvent` document that we created above.

   - All of the instances would have their _recurrenceRuleId_ field set to `recurranceRuleId`, and the _BaseRecurringEventId_ set to `baseRecurringEventId`.

<br />

### Updating recurring events

1. For single events made recurring ([updateSingleEvent.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/updateEventHelpers/updateSingleEvent.ts)):

   - Get the data used to generate the instances (i.e. the current data of the event, and the latest data from the update input).
   - Follow the steps for creating a recurring event.
   - Delete the current event and its associations, as new ones would be made while generating new instances.

2. While updating a recurring event, we will provide options to update `thisInstance`, `thisAndFollowingInstances`, & `allInstances` of the recurring event ([updateRecurringEvent.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/updateEventHelpers/updateRecurringEvent.ts)).

   - Appropriate update options will be provided based on whether the `recurrenceRule`, or the `instanceDuration` (difference between event's start and end dates), or both have changed.

     - If neither the `recurrenceRule` nor the `instanceDuration` have changed, then we will provide all three update options.
     - If the `RecurrenceRule` has changed, then we will not provide the option to update `thisInstance`, i.e. only `thisAndFollowingInstances` & `allInstances`.
     - If the `instanceDuration` has changed, then we will not provide the option to update `allInstances`, i.e. only `thisInstance` & `thisAndFollowingInstances`.

   - Update Options:

     - `thisInstance`: Just make a regular update on this event instance ([updateThisInstance.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/updateEventHelpers/updateThisInstance.ts))

       :::note
       Updating a single recurring event instance will make it an exception instance.
       :::

     - `thisAndFollowingInstances` or `allInstances` ([updateRecurringEventInstances.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/updateEventHelpers/updateRecurringEventInstances.ts)):

       - If neither of the `recurrenceRule` or the `instanceDuration` has changed, we will just perform a bulk update on the instances.

       - If either one of the `recurrenceRule` or the `instanceDuration` has changed, we will delete the current series, remove their associations and generate a new one:

         - Delete instances conforming to the old `RecurrenceRule` (We can do this because we are generating events dynamically, i.e. we are only creating instances upto a certain date, so not many documents have to be deleted).
         - Find the latest instance that was following the old `RecurrenceRule`, say `latestInstance`, and set the `latestInstanceDate` and the `recurrenceEndDate` of the old `RecurrenceRule` to be this `latestInstance`'s `startDate`.
         - Generate new instances based on the new `RecurrenceRule` and the updated event data.
         - Now, all the previous instances would have a different `RecurrenceRule` than the current and future ones.

       - Update the `BaseRecurringEvent` document if required to have values of the current update input (which would then be used as the new base event).

       :::note
       Here we're not creating a new `BaseRecurringEvent` document, just updating the existing one. i.e. For one recurring event, there would only be one `BaseRecurringEvent`, which would connect all the instances, even accross different recurrence rules.
       :::

<br />

### Deleting recurring events

1. Deleting this instance only / deleting an exception instance ([deleteSingleEvent.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts)):

   - Make a regular deletion.

2. Deleting all instances / this and future instances ([deleteRecurringEventInstances.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts)):

   - For deleting all instances:

     - Delete all the recurring instances with the current `recurrenceRuleId`.
     - If this was the latest `RecurrenceRule`, and there exist one or more `RecurrenceRule`s with the same `baseRecurringEventId`, find the last one of them (i.e. one before the current `RecurrenceRule`) and update the `endDate` of the `baseRecurringEvent` to be that recurrence rule's `recurrenceEndDate`.

   - For this and future instances:

     - Find the event instance that was created previously to the current instance with the current `recurrenceRuleId`, set the `latestInstanceDate` and the `recurrenceEndDate` of the `RecurrenceRule` to this instance's `startDate`. Update the `BaseRecurringEvent` accordingly if the current `RecurrenceRule` is the latest (i.e. modifying the `endDate` of `BaseRecurringEvent` to this latestInstance's `startDate`).
     - Delete all the recurring instances with the same `recurrenceRuleId` as the current instance, starting from the current date.

<br />

:::note
Updates would only be done on the `BaseRecurringEvent` if bulk operations being are done on the instances following the latest `RecurrenceRule`, because we want to generate new instances (during queries) based on the `BaseRecurringEvent`.

How do we ensure that?

- By adding a check, of end dates. i.e. we would only modify the `BaseRecurringEvent` if its `endDate` matches the `recurrenceEndDate` of the current `RecurrenceRule` (_[shouldUpdateBaseRecurringEvent.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts)_).
  :::

<br />

### Querying events

In the query, we would add a function for generating recurring event instances, and then query all the events and return them. Here's the two step process:

- Generate recurring event instances ([createRecurringEventInstancesDuringQuery.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/helpers/event/createEventHelpers/createRecurringEventInstancesDuringQuery.ts)):

  - Fix a `queryUptoDate`.
  - Find all the `RecurrenceRule` documents with the `latestInstanceDate` less than `queryUptoDate`.
  - For every recurrenceRule document queried:
    - Find the `BaseRecurringEvent`.
    - Generate new recurring instance dates after the `latestInstanceDate`.
    - Account for the number of existing instances following that recurrence pattern and how many more to generate based on the `RecurrenceRule`'s `count` (if specified).
    - Update the `latestInstanceDate` of the `RecurrenceRule`.
    - Generate more instances based on the `BaseRecurringEvent`.

- Query events according to the inputs (`where` and `sort`) and return them ([eventsByOrganizationConnection.ts](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/src/resolvers/Query/eventsByOrganizationConnection.ts)).

<br />

### Handling exception instances

- With this approach, we don't have to worry about the single instances that have been updated/deleted, because the new instances are to be generated with `BaseRecurringEvent`.
- However, if a bulk operation is made (changing the `RecurrenceRule`, or other event specific parameters), then every instance conforming to the current `RecurrenceRule` is affected, even the ones that were edited seperately in single instance updates (their dates might have been changed, attendees list might have been modified, etc.), because they still follow that `RecurrenceRule`. i.e. the `RecurrenceRule` wins in the end. Same with deletion, all the events conforming to a `RecurrenceRule` are deleted on a bulk delete operation.
- If we want to exclude a certain instance from such operations, we could add the `isRecurringEventException: true` for that instance. By doing that, we could make it completely independent (like a normal event), so that it won't be affected by the bulk operations. If we want it to conform to the rrule again, we could just set the `isRecurringEventException: false`.

<br />

### Historical Records

- `BaseRecurringEvent`, aside from being used as the base event to create new instances, also connects all the instances, even if their `RecurrenceRule` are different.
- Which means we could also use it to track the historical records for a recurring event, accross all the instances, no matter what recurrence pattern it followed at any point.

<br />

## References

### rrule

The library we're using that automatically generate the dates of recurrence given a `RecurrenceRule`. <br />
Official repo: [`rrule`](https://github.com/jkbrzt/rrule)

<br />

### RecurrenceRule

A document containing the properties that represents the recurrence rule followed by a recurring event.:

```javascript
  interface InterfaceRecurrenceRule {
    recurrenceStartDate: Date
    recurrenceEndDate: Date
    recurrenceRuleString: string
    frequency: ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"]
    weekdays: ["MONDAY", ... , "SUNDAY"]
    interval: number
    count: number
    weekDayOccurenceInMonth: number
    latestInstanceDate: Date
    baseRecurringEventId: ObjectId
    //...other fields
  }
```

- **recurrenceStartDate**: the start of recurrence.
- **recurrenceEndDate**: the end of recurrence.
- **recurrenceRuleString**: an `rrule` string that would be used to generate an `rrule` object, from which we would generate the recurrence dates.
- **frequency**: Frequency of recurrence.
- **weekDays**: The days of the week at which the instances would be scheduled.
- **interval**: Interval of recurrence, i.e every day, every other day, every 5th day, etc.
- **count**: The number of instances following that recurrence rule.
- **weekDayOccurenceInMonth**: The occurence of weekDay in month, i.e whether it's the first Monday, third Monday, or last Monday. It is to be used with Monthly frequency, and a weekDay, e.g.:
  - for `frequency: MONTHLY` and `weekDays: ["MONDAY"]`:
    - if `weekDayOccurenceInMonth:2`, it would mean that the recurring event occurs every **_Second Monday_** every month.
    - if `weekDayOccurenceInMonth:-1`, it would mean every **_Last Monday_** every month.
- **latestInstanceDate**: the `startDate` of the latest instances generated.
- **baseRecurringEventId**: The `BaseRecurringEvent` for that recurring event.

<br />
    
### BaseRecurringEvent

- A special type of event, that connects all the instances of a recurring event, even across different recurrence patterns, which is useful for tracking the historical records of a recurring event.
- It is also used as the base event to generate new recurring event instances during queries (As we can't just use the latest instance, which could be an `exception` instance). <br />
  There would be a flag in the event interface indicating whether it's a `BaseRecurringEvent`:

```javascript
  interface InterfaceEvent {
    //...existing event fields
    isBaseRecurringEvent: true
    startDate: Date // the start of recurrence
    endDate: Date // the `recurrenceEndDate` of the latest recurrence rule
  }
```

<br />

### Recurring Event Instance

Every instance of a recurring event would have these fields:

```javascript
  interface InterfaceEvent {
    //...existing event fields
    startDate: Date
    endDate: Date
    isBaseRecurringEvent: false
    recurrenceRuleId: ObjectId
    baseRecurringEvent: ObjectId
  }
```

- **startDate**: The start date of the event instance.
- **endDate**: The end date of the event instance.
- **isBaseRecurringEvent**: The instance itself would not be the base recurring event.
- **recurrenceRuleId**: Representing the `RecurrenceRule` followed by the recurring event.
- **baseRecurringEventId**: Representing the `BaseRecurringEvent` for that recurring event.

<br />

### Recurring Event Exception Instance

- The bulk operations on a recurring event (`update`/`delete` multiple instances) would not affect an `exception` instance.
- There would be a flag to mark an exception instance:

```javascript
  interface InterfaceEvent {
    //...existing event fields
    isRecurringEventException: true
  }
```

- With this flag, a recurring event instance could be turned into an independent non-recurring event.
- Changing this field to `false` would again make the instance conform to the `RecurrenceRule` (i.e. it would not be an exception anymore).

<br />

<hr />

<br />

That explains the approach we're following for _**creation and management of recurring events**_.

_**The functionalities have been implemented. Check out these parent issues:**_

1. [Recurring Events Api](https://github.com/PalisadoesFoundation/talawa-api/issues/1583)
2. [Recurring Events Admin](https://github.com/PalisadoesFoundation/talawa-admin/issues/1643) <br />

_**Go through these and their associated issues and PRs for more details.**_

Last updated on _**April 20, 2024**_
