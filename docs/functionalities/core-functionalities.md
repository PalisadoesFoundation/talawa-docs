---
id: core-functionalities
title: Core Functionalities
---

> The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable.

> Before we can add any new functionality. The refactored app needs to meet these basic requirements on which the original application was based.

## User Registration

### Description

This is the ability to register in the app with an organization. Once the user is successfully registered as a member of an organization they are then able to interact with, app events and other content related to the organization.

### Front End

1. Login Screen
2. Registration screen: the user can specify an organization ID and/or servername
3. Display of existing organizations based on a registration URL
4. Currently organizations can be created in the app

### Back End

**The following endpoints presently exist:**

1. User signup and login (authentication)
2. User joining organizations
3. Create an organization
4. Add an admin to an organization

**The following functionalities presently exist:**

1. Users are able using their email and password.
2. After logging in for the first time the user can search for the organization he wishes to join
3. After membership to the organization is verified the user is able to join the organization
4. An administrator is able to create an organization when he logs in for the first time

## Events

### Description

These are scheduled events managed by coordinators and administrators of an organization. Information related to events in the organization are monitored via the organization's newsfeed by members of the organization.

### Front End

1. Organization list
2. Events list screen
3. User is able to create single and recurring events with primary contacts as well as users with other responsibilities assigned to them
4. User should be able to register for an event, if necessary
5. User is able to create projects related to any event
   1. Create tasks for any of the event roles
   2. Set deadlines for completing assigned tasks
6. User can view the event and project details
   1. Automatic group chat is created for persons within an event

## General News Feed

### Description

This is the ability to post and interact with content to a live newsfeed for an organization

### Front End

1. User is able to create and share posts including text, photos and videos to an event under the organization to which he is a member
2. User can view posts made by all other members of the organization
   1. All members can like and comment on these posts

## Group Chat

### Description

This is the ability to chat from within the Talawa app with multiple members of the same organization

### Front End

1. Any user can create a group chat.
2. Events automatically have a group chat
3. Members of an organization are able to send messages to each other in group chats

## Switch Between Organizations

### Description

Users can belong to multiple organizations; however, they cannot create their own. This is an admin feature. This is the ability for users to create their own organizations needs to be removed.

### Front End

1. Organization list screen
   1. User is able to switch between organizations
2. Create or join organization screen

### Back End

**The following functionalities are allowed via routes**

1. Change the current organization for the user
2. Get information regarding current organization
