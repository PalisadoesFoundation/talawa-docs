---
id: events
title: Events
---

:::caution

This section is a work in progress.

:::

## Overall Guidance

These are events created by a co-ordinator or an Administrator. They are time bound and can include tasks to be achieved before the scheduled date arrives. These tasks can be assigned by the co-ordinator or the administrator to other members of the organisation.

1. Group personal events vs organization wide events
2. Event signup and subscription
3. Assign Roles and responsibilities
4. View Attendee List/ Roster
5. Create paid/ donation based event
6. Comment on Events
   1. Thumbs up/down
7. Event Management
8. Event Scheduling
9. Event Reminder
10. Calendar Overview

#### Out of Scope

1. Project Management/ Goals Tracking
2.

---

## Create Events

:::caution

This section is a work in progress.

:::

### Code: EVT-006

_Authored by\*\* **Shannika Jackson** \*\*. Last updated on_ _**March 27,2021**_

This feature aims to _**enhance event creation process**_ by _**enabling additional options based on the type of role that creates the event**_.

### Overview

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

4. **Task calendar:** This may be useful for members involved in different events. Their tasks displayed on a calendar according to the due date for the task and its related events
   1. Display colours to indicate nearing due date for tasks
5. **Review and Delete members&#39; personal events:** the admin may have need to delete members&#39; personal events under the organization. This will remove the event and all its tasks and send a notification to the co-ordinator that the event was deleted

### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature

### Context

NA

### Use Cases

1. **Members want to:**
   1. **Create an event** When a member creates an event they are automatically made coordinator of that event.
1. **Coordinators want to:**
   1. **Create tasks for an event:** Each event will have a checklist of tasks/ activities to be done before the scheduled event.
   2. **Assign tasks to organisation members:** Some notification must be sent to the member once they are assigned any task.
   3. **Mark a task for events as complete** This could possibly update an overall progress bar for event tasks.
1. **Admins want to:**
   1. **Elevate members to coordinators** This will enable multiple coordinators for an event

### Proposal/Solution

### User Experience

1. From the Home screen in the mobile app or from the admin portal in the web client,
   a button is present to create an event.
2. Basic details such as whether it is a public or private event,
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
      2. Event progress bar is updated to reflect percentage completion

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

### Tasks and Timeline

TBD

---

## Signup and Subscription

:::caution

This section is a work in progress.

:::

### Code: EVT-001

_Authored by_ _**Shannika Jackson**_ _Last updated on_ _**March 13, 2021**_

This feature aims to _**streamline member event subscription**_ by _**simplifying how members elect to join/ subscribe to events**_.

### Overview

### Problem

1. **Currently the user cannot subscribe to or sign up as an attendee of an event :**
   1. All events in the organization are presented ungrouped to the user
   2. The user cannot subscribe/ sign up for an event

### Goals

1. **Provide streamlined display of events:** This should eventually facilitate the development of other event-type specific features

### Out of Scope

The following are aspects of this feature which have been considered but are outside of the scope for the current project:

1. **Invite non-app users to events :** Prompting them to install the app and join the organization and subscribe for the event.
2. **View assigned tasks from the event screen/page:** User is able to select an event and see all tasks assigned to them for that event
3. **Volunteer for tasks under an event :** From the events screen/page the user is able to volunteer for the listed tasks under the event

### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature .

### Context

### Use Cases

1. **Members want to:**
   1. **Subscribe to Events** : enabling them to receive notifications, view updates and be marked as an attendee to this event.
1. **Admins want to** :
   1. **View attendee list for events** : once a member subscribes for an event, they are listed as an attendee and can be viewed as an attendee from the admin portal.
   2. **View the number of subscribers/ attendees for events:**
1. **Coordinators want to** :
   1. **View attendee/ subscription lists for events:** allowing them to assign these members to tasks under the event.

### Proposal/Solution

### User Experience

1. From the events tab on the main menu a user should see all events for the organization
2. The user should select an event and be presented with the option to subscribe/ attend organization
3. The member is then listed as an attendee of the event

### Important Details To Capture

NA

### Future Work

1. Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

### Tasks and Timeline

TBD

---

## Event Grouping

:::caution

This section is a work in progress.

:::

### Code: EVT-002

_Authored by\*\* **Shannika Jackson** \*\*Last updated on_ _**March 13, 2021**_

This feature aims to* **improve the event viewing options** * by _**allowing users to group different types of events**_.

### Overview

### Problem

1. **All events in the organisation is currently displayed ungrouped :** Ideally, the user should be able to toggle between their subscribed events or all events in the organization

### Goals

1. **Provide a more streamlined event display :** This should allow modularity for feature development in event management

### Out of Scope

The following are aspects of this feature which have been considered but are outside of the scope for the current project:

1. **Tag events :** This will eventually allow a user to subscribe to, toggle display of and get notifications for specific types of events
2. **Toggle personal event view, co-ordinator, organization and all views on calendar :** This will allow the user to switch between the different views based on their roles.

### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature .

### Context

NA

### Use Cases

1. **Members want to:**
   1. **Toggle the view of their events** between their subscribed events and all events in the organisation for which they have permission to view (public events and private ones they have been accepted to).
1. **Admins want to:**
   1. **Toggle view of all events** between public or private
   1. **View all members&#39; personal events**
1. **Coordinators want to:**
   1. **Toggle view of their events:** between their coordinated events and all organization&#39;s events.

### Proposal/Solution

### User Experience

1. From the home screen users should be presented with a button to view events.
2. This view defaults to display all events for which the user is subscribed.
3. The user should be presented with the option to toggle between viewing all events, only their subscribed events and only their coordinated events.

### Important Details To Capture

NA

### Future Work

1. Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

### Tasks and Timeline

TBD

---

## Assign Event Roles

:::caution

This section is a work in progress.

:::

### Code: EVT-003

_Authored by_ _**Shannika Jackson**_ _Last updated on_ _**March 16, 2021**_

This feature aims to _**enhance event management options**_ by _**allowing coordinators to assign tasks to other members of the organization**_.

### Overview

### Problem

1. **There currently exists only one role:** there is a need for allowed activities to be governed by the users&#39; role in the organization
   1. Administrator
   2. Coordinator
   3. Member
2. **Tasks currently cannot be assigned based on role**

### Goals

1. **Implement framework to facilitate multiple roles in application:** This will facilitate the different allowed activities

### Out of Scope

The following are aspects of this feature which have been considered but are outside of the scope for the current project:

1. **Create groups:** members in future want to create groups to which they can send group messages, assign to tasks and target other communication

### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature.

### Context

### Use Cases

1. **Admins want to** :
   1. **Promote members to coordinators** : adding coordinators to an organization helps the admin to manage members and content. This should be done via a desktop/web client, and mobile.
2. **Coordinators want to** :
   1. **Remove inappropriate posts** : members may add posts that are inappropriate and the coordinator must have the ability to remove them at a moment&#39;s notice via mobile application.
   2. **Assign event tasks to other members and groups**

### Proposal/Solution

### User Experience

**Promote members to coordinators:**

1. From the admin portal on the web client or the mobile app, an administrator must be able to view a list of members in an organization
   1. A menu or option button must be presented to the administrator in order to perform additional actions to the member account/ profile.
   2. From this menu the administrator must be presented with the option to promote the member to a coordinator.
   3. Once this is selected and the changes committed, the newly created coordinator must be able to perform the tasks of a coordinator

**Removing inappropriate posts:**

1. From the mobile app or the web client a coordinator or an admin show see additional options for each post.
   1. They should be able to select remove post from these additional options
   2. The post must then be removed from the news feed of all members and a message sent to the author of the post that it was removed

**Assigning members to event tasks:**

1. From events detail view or the create event view a coordinator or an admin user must be presented with the option to create task list
2. Once the create task list option is selected, the user is prompted to enter basic details for the task eg. print flyers
   1. Additionally the user must be presented with the option to assign the task to a member
   2. Once this option is selected a list of the members in the organisation or the groups are presented with multi-select option
   3. After selecting the members or groups to assign to the tasks the user should be able to commit their changes and is redirected to the task detail where the users assigned to the task are displayed
   4. The option must also be available to remove an assigned member or group from the task and commit the changes

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

### Tasks and Timeline

TBD

---

## View Attendee List

:::caution

This section is a work in progress.

:::

### Code: EVT-004:

_Authored by\*\* **Shannika Jackson** \*\*Last updated on_ _**March 16, 2021**_

This feature aims to _**enhance event management options**_ by _**allowing coordinators and admins to view the number and list of members attending an event**_.
