---
id: event-roles
title: Assign Event Roles
---

:::caution

This section is a work in progress.

:::

## Code: EVT-003

_Authored by_ _ **Shannika Jackson** _ _Last updated on_ _ **March 16, 2021** _

This feature aims to _ **enhance event management options** _ by _ **allowing coordinators to assign tasks to other members of the organization** _.

## Overview

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

## Context

### Use Cases

1. **Admins want to** :
    1. **Promote members to coordinators** : adding coordinators to an organization helps the admin to manage members and content. This should be done via a desktop/web client, and mobile.
2. **Coordinators want to** :
    1. **Remove inappropriate posts** : members may add posts that are inappropriate and the coordinator must have the ability to remove them at a moment&#39;s notice via mobile application.
    2. **Assign event tasks to other members and groups**

## Proposal/Solution

### User Experience

**Promote members to coordinators:**

1. From the admin portal on the web client or the mobile app, an administrator must be able to view a list of members in an organization
    1. A menu or option button must be presented to the administrator in order to perform additional actions to the member account/ profile.
    2. From this menu the administrator must be presented with the option to promote the member to a coordinator.
    3. Once this is selected and the changes committed, the newly created coordinator must be able to perform the tasks of a coordinator

**Removing inappropriate posts:**

1. From the mobile app or the web client a coordinator or an admin show see additional options for each post.
    1. They should be able to select remove post from these additional options
    2. The post must then be removed from the news feed of all members and a message sent to the author of the post that is was removed

**Assigning members to event tasks:**

1. From events detail view or the create event view a coordinator or an admin user must be presented with the option to create task list
2. Once the create task list option is selected, the user is prompted to enter basic details for the task eg. print flyers
    1. Additionally the user must be presented with the option to assign the task to a member
    2. Once this option is selected a list of the members in the organisation or the groups are presented with muli-select option
    3. After selecting the members or groups to assign to the tasks the user should be able to commit their changes and is redirected to the task detail where the users assigned to the task are displayed
    4. The option must also be available to remove an assigned member or group from the task and commit the changes

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

## Tasks and Timeline

TBD