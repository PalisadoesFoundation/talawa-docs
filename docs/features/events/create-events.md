---
id: event-create-events
title: Create Events
---

:::caution

This section is a work in progress.

:::

## Code: EVT-006
_Authored by__ **Shannika Jackson** __. Last updated on_ _ **March 27,2021** _

This feature aims to _ **enhance event creation process** _ by _ ** enabling additional options based on the type of role that creates the event** _.

## Overview

### Problem

1. **No role dependent options are presented for members creating an event:**
   
    1. Additional options should be presented to the user depending on what type of member is creating an event.

### Goals

1. **Options should be presented based on the type of user creating the event:** This provides greater control to admins and coordinators

### Out of Scope

The following are aspects of this feature which have been considered but are outside of the scope for the current project:

1. **Show personal events and organization events separately :** this should offer some delineation that this event is being organized/ hosted by the organization
2. **Display all events in organisation on a calendar :** The admin would presumably be able to manage any event created under the organization - monitoring newsfeed, delete/ cancel view attendance/ statistics for that event
3. **Invite specific members to the event:** This may eventually include sending external invitations to download the app.

1. **Task calendar:** This may be useful for members involved in different events. Their tasks displayed on a calendar according to the due date for the task and its related events
    1. Display colours to indicate nearing due date for tasks
2. **Review and Delete members&#39; personal events:** the admin may have need to delete members&#39; personal events under the organization. This will remove the event and all its tasks and send a notification to the co-ordinator that the event was deleted

### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature

## Context

NA

### Use Cases

1. **Members want to:**
   1. **Create an event** When a member creates an event they are automatically made coordinator of that event.
1. **Coordinators want to:**
   1. **Create tasks for an event:** Each event will have a checlist of tasks/ activities to be done before teh scheduled event.
   2. **Assign tasks to organisation members:** Some notification must be sent to the member once they are assigned a task.
   3. ** Mark a task for events as complete **  This could possibly update an overall progress bar for event tasks.
1. **Admins want to:**
   1. **Elevate members to coordinators** This will enable multiple coordinators for an event


## Proposal/Solution

### User Experience

1. From the Home screen in the mobile app or from the admin portal in the web client,
   a button is presented to create an event.
2. Basic details such as whether is is a public or private event,
   the date, time and venue for the event are specified
3. If a member is creating the event, they are automatically made coordinator for the event.
    1. If an admin is creating the event they are asked to also select coordinator(s) for the event from a list of members of the organisation.
4. An option to create a task checklist is also presented.
   1. An option to provide a due date for each task should also be provided
   2. The event coordinator/ the admin is provided the option to assign member from the organisation to each task.
   3. Notification is sent to the member that a task is assigned to them 
   4. Tasks assigned to the member is updated in their personal task list 
   5. The member assigned to the task can check it as complete
      1. Notification is sent to co-ordinator of completed task
      2. Event progress bar is updated to refect percentage complete

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

## Tasks and Timeline

TBD