---
id: admin-events
title: Admin Created Events
---

:::caution

This section is a work in progress.

:::

## Code: ADM-002
_Authored by_ _ **Shannika Jackson** __. Last updated on_ _ **March 14,2021** _

This feature aims to _ **enhance the admin portal** _ by _ **allowing admin users to create events under an organization** _.

## Overview

### Problem

1. **All persons can create an event:**
  1. proposed Only administrators should be able to create events under the organization.

### Goals

1. **An organization&#39;s administrator must be able to create an event:** This will form the basis of interactions between users.

### Out of Scope

The following are aspects of this feature which have been considered but are outside of the scope for the current project:

1. **Show personal events different than organization events :** this should offer some delineation that this event is being organized/ hosted by the organization
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

NA

## Proposal/Solution

### User Experience

1. From the admin portal in the web client and the mobile app, a button is presented to create an event.
2. The admin specifies if it is a private or public event
3. Basic details such as the date, time and venue for the event is specified
4. An event co-ordinator is selected and assigned from the member list for the organization
  1. A task list can be specified by the admin or the event co-ordinator.
5. A checklist of required tasks for the event is optional with due date relative to the event
  1. Assignment of these tasks to members of the organization
  2. Notification is sent to the member that a task is assigned to them
  3. Tasks assigned to the member is updated in their personal task list
  4. As the member completes the task and checks it as complete
    1. Notification is sent to co-ordinator of completed task
6. Push notification sent to all members on attendee list once event date and time arrives

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

## Tasks and Timeline

TBD