---
id: recurring-events
title: Recurring Events
---

## Goals

We need to have:

1. the functionality to create recurring events, with custom recurrence patterns, like the top calendar apps out there.
2. the functionality to update and delete:
   - a single instance
   - this and following instances
   - all instances <br />
     of a recurring event
3. a way to track the historical records of a recurring event.

<!-- ## Solution -->

## Interfaces

```javascript
  interface InterfaceEvent {
    // ...existing event fields
    isRecurringEventException: boolean;
    isBaseRecurringEvent: boolean;
    recurrenceRuleId: ObjectId;
    baseRecurringEventId: ObjectId;
  }

  interface InterfaceRecurrenceRule {
    // ...recurrence specific properties (frequency, count, etc.)
    recurrenceRuleString: string;
    baseRecurringEventId: ObjectId;
    startDate: Date;
    endDate: Date;
    latestInstanceDate: Date;
  }
```

The purpose and need for each of the fields and Interfaces will be explained in the **Approach** as their necessity arises.

## Approach

1. We are using the `rrule` libary and following the dynamic generation approach.

### Creating recurring events

1. Create event input:

   - For recurring events, along with the general `EventInput`, there would also be a `RecurrenceRuleInput` (which, if not provided, would default to weekly recurrence), containing the recurrence pattern.

2. After getting the input, we'd follow these steps:
   - Create a `BaseRecurringEvent` that would just be like creating a normal event with `isBaseRecurringEvent: true`, let's name it's `_id` to be `baseRecurringEventId` (This is what we will use as the base event for generating instances.)
   - Create a `RecurrenceRule` document that would contain the `rrule` and the `rrule` fields for easy understanding and debugging, let's name this document's `_id` to be `recurranceRuleId`.
   - Both of these would contain the `startDate` and the `endDate` as provided in the input.
   - We would fix an endDate, say `X` years ahead from the current date (depending on the recurrence frequency), that would decide the number of instances we create in the `createEvent` mutation, or during the `query`.
   - Get the dates for the instances to be generated using the `rrule` library.
   - After getting the dates:
     - If the event has no `endDate`, we'd generate events upto `X` date.
     - If the `endDate` is very far into the future, we'd generate events upto `X` date, and leave the rest for dynamic generation during queries.
     - If there is an `endDate`, and the last date (among the generated dates) is less than `X`, then we just create all the instances.
   - Update the `latestInstanceDate` of the `RecurrenceRule` document created to be equal to the `startDate` of the last instance we generated here.
   - All the instances (Event documents) we created in the previous step will be based on the input data, and the remaining instances (if any) would be generated during queries, based on the `BaseRecurringEvent` document that we created above.
   - All of them would have their _recurrenceRuleId_ field set to `recurranceRuleId`, and the _BaseRecurringEventId_ set to `baseRecurringEventId` (from the first two steps).

### Updating recurring events

1. #### _Updating this instance only / updating an `exception` instance:_

   - This would be straightforward, just make a regular update.

2. #### _Updating all instances / this and future instances:_

   For single events made recurring:

   - Get the data used to generate the instances, i.e. the current data of the event, and the latest data from the update input.
   - Follow the steps for creating a recurring event.
   - Delete the current event and its associations, as new ones would be made while generating the instances.

   While updating a recurring event, we would base it on the `RecurrenceRule`:

   - If the `RecurrenceRule` has not changed:
     - then we can just make a regular update.
     - update the `BaseRecurringEvent` if required according the update inputs (which would then be used as the new base event).
   - If the `RecurrenceRule` has changed:
     - The `RecurrenceRule` would be changed for the current and future events only, not the past events which have already occurred (the first point would cover all the other event specific changes).
     - Here, we would follow these steps:
       - Generate new instances based on the new `RecurrenceRule`.
       - Delete every instance (current and the future) conforming to the old `RecurrenceRule`. We can do this because we are generating events dynamically, i.e. we are only creating instances upto a certain date, so not many documents have to be deleted.
       - Find the latest instance that was following the old `RecurrenceRule`, say `latestInstance`, and set the `latestInstanceDate` and the `endDate` of the old `RecurrenceRule` to be this `latestInstance`'s `startDate`.
       - Update the `BaseRecurringEvent` document if required to have values of the current update input (which would then be used as the new base event).
       - Now, all the previous instances would have a different `RecurrenceRule` than the current and future ones.

:::note
Here we're not creating a new `BaseRecurringEvent` document, just updating the existing one. i.e. For one recurring event, there would only be one `BaseRecurringEvent`, which would connect all the instances, even accross different recurrence rules.
:::

### Deleting recurring events

1. #### _Deleting this instance only / deleting an exception instance:_

   - Make a regular deletion.

2. #### _Deleting all instances / this and future instances:_

   - For deleting all instances:

     - Delete all the recurring instances with the current `recurrenceRuleId` (like google calendar).
     - Update the `endDate` of the `baseRecurringEvent` accordingly.

   - For this and future instances:
     - Find the document that was created previously to the current document with the current `RecurrenceRule`, set the `latestInstanceDate` and the `endDate` of the `RecurrenceRule` to that instance's `startDate`. Update the `BaseRecurringEvent` accordingly (modifying the `endDate`).
     - Delete all the recurring instances with the same `recurrenceRuleId` as the current document, starting from the current date (The way google calendar does it).

:::note
Updates would only be done on the `BaseRecurringEvent` if bulk operations being are done on the instances following the latest `RecurrenceRule`, because we want to generate new instances (during queries) based on the latest `RecurrenceRule` that the already generated instances were following.

How do we ensure that?

- By adding a check, of `endDate`s. i.e. we would only modify the `BaseRecurringEvent` if its `endDate` matches that of the current `RecurrenceRule`.
  :::

### Querying events

In the query, we would add a function for creating recurring event instances, and then query all the events and return them. Here's the two step process:

- Generate recurring event instances:
  - Fix a `queryUptoDate`.
  - Find all the `RecurrenceRule` documents with the `latestInstanceDate` less than `queryUptoDate`.
  - For every recurrenceRule document queried:
    - Find the `BaseRecurringEvent`.
    - Generate new recurring instance dates after `latestInstanceDate`.
    - Account for the number of existing instances following that recurrence pattern and how many more to generate based on the `RecurrenceRule`'s count (if specified).
    - Generate more instances based on the `BaseRecurringEvent`.
    - If more instances were created, update the `latestInstanceDate`.
- Query events according to the inputs (`where` and `sort`) and return them.

### Handling exception instances

- With this approach, we don't have to worry about the single instances that have been updated/deleted, because the new instances are to be generated with `BaseRecurringEvent`.
- However, if a bulk operation is made (changing the `RecurrenceRule`, or other event specific parameters), then every instance conforming to the current `RecurrenceRule` is affected, even the ones that were edited seperately in single instance updates (their dates might have been changed, attendees list might have been modified, etc.), because they still follow that `RecurrenceRule`. i.e. the `RecurrenceRule` wins in the end. Same with deletion, all the events conforming to a `RecurrenceRule` are deleted on a bulk delete operation.
- If we want to exclude a certain instance from such operations, we could add the `isRecurringEventException: true` for that instance. By doing that, we could make it completely independent (like a normal event), so that it won't be affected by the bulk operations. If we want it to conform to the rrule again, we could just set the `isRecurringEventException: false`.

### Historical Records

- `BaseRecurringEvent`, aside from being used as the base event to create new instances, also connects all the instances, even if their `RecurrenceRule` are different.
- Which means we could also use it to track the historical records for a recurring event, accross all the instances, no matter what recurrence pattern it followed at any point.

## References

### rrule

The library we're using that automatically generate the dates of recurrence given a `RecurrenceRule`. <br />
Official repo: [`rrule`](https://github.com/jkbrzt/rrule)

### RecurrenceRule

A document containing the properties that represents the recurrence rule followed by a recurring event.:

```javascript
  interface InterfaceRecurrenceRule {
    // ...other fields
    recurrenceRuleString: string
    frequency: ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"]
    weekdays: ["MONDAY", ... , "SUNDAY"]
    interval: number
    count: number
    weekDayOccurenceInMonth: number
    baseRecurringEventId: ObjectId
  }
```

- **recurrenceRuleString**: an `rrule` string that would be used to generate an `rrule` object, from which we would generate the recurrence dates.
- **frequency**: Frequency of recurrence.
- **weekDays**: The days of the week at which the instances would be scheduled.
- **interval**: Interval of recurrence, i.e every day, every other day, every 5th day, etc.
- **count**: The number of instances following that recurrence rule.
- **weekDayOccurenceInMonth**: The occurence of weekDay in month, i.e whether it's the first Monday, third Monday, or last Monday. It is to be used with Monthly frequency, and a weekDay, e.g.:
  - for `frequency: MONTHLY` and `weekDays: ["MONDAY"]`:
    - if `weekDayOccurenceInMonth:2`, it would mean that the recurring event occurs every **_Second Monday_** every month.
    - if `weekDayOccurenceInMonth:-1`, it would mean every **_Last Monday_** every month.
- **baseRecurringEventId**: The `BaseRecurringEvent` for that recurring event.

### BaseRecurringEvent

- A special type of event, that connects all the instances of a recurring event, even across different recurrence patterns, which is useful for tracking the historical records of a recurring event.
- It is also used as the base event to generate new recurring event instances during queries (As we can't just use the latest instance, which could be an `exception` instance). <br />
  There would be a flag in the event interface indicating whether it's a `BaseRecurringEvent`:

```javascript
  interface InterfaceEvent {
    //...existing event fields
    isBaseRecurringEvent: true
  }
```

### Recurring Event Instance

Every instance of a recurring event would have these fields:

```javascript
  interface InterfaceEvent {
    //...existing event fields
    isBaseRecurringEvent: false
    recurrenceRuleId: ObjectId
    baseRecurringEvent: ObjectId
  }
```

- **isBaseRecurringEvent**: The instance itself would not be the base recurring event.
- **recurrenceRuleId**: Representing the `RecurrenceRule` followed by the recurring event.
- **baseRecurringEventId**: Representing the `BaseRecurringEvent` for that recurring event.

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

This is the approach we're following for the _**creation and management of recurring events**_.

_**The functionalities are being implemented with these issues:**_
1) [Recurring Events Api](https://github.com/PalisadoesFoundation/talawa-api/issues/1583)
2) [Recurring Events Admin](https://github.com/PalisadoesFoundation/talawa-admin/issues/1643) <br />

_Go through the **issues** and the associated **PR**s for more details._

Last updated on _**March 29, 2024**_
