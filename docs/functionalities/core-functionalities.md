---
id: core-functionalities
title: Core Functionalities
---


> ### The current Talawa app is functional but does not meet many best practices. We need to refactor the code to be internationally acceptable. 
> ### Before we can add any new functionality. The refactored app needs to meet these basic requirements on which the original application was based.

## User Registration
### Description
This is the ability to register in the app with an organisation. Once the user is successfully registered as a member of an organisation they are then able to interact with, via the app events and other content related to the organisation.

### Front End
1. Login Screen
2. Registration screen where the user specifies an organization ID and/or servername
3. Another option would be to display existing organizations based on a registration URL
4. **Note:** Currently organizations can be created in the app. This needs to be moved to a separate organization portal that interacts with the API.

### Back End
**NB:** endpoint does not necessarily mean endpoint
1. Create endpoints for user signup and login (authentication)
2. Create an endpoints for a user joining organizations
3. Create endpoint for creating an organization
4. Create endpoints for adding an admin to an organization
5. Users should be able to login using their email and password.
6. **Note:** In the current system users sign up using just their first and last names, email and password. We need to figure out a registration process so that only approved members can gain access. This will help with overall security.
    1. These features created in 2020 should be removed
       1. After logging in for the first time the user searches for the organization he wishes to join and depending on whether or not membership is restricted he’ll be able to join.
       2. Afterwards the user should be able to join other organizations
       3. The user should also be presented with the option of creating an organization when logging in for the first time. This would apply to persons who intend to use the app as an admin eg. a pastor

## Events
### Description
These are scheduled events managed by cooordinators and administrators of an organisation. Information related to events in the organisation are monitored via the organisation's newsfeed by members of the organisation. 
### Back End 
1. Create single and recurring events with primary contacts as well as users with other responsibilities assigned to them
2. Register for an event, if necessary
3. To create projects related to any event
    1. The ability to create tasks for any of the event roles.
    2. Deadlines for completing any assigned tasks.
       1. Deadlines cannot be beyond the project end date
4. To view the event and  project details
    1. Outsiders should be able to leave text messages for any person assigned a role.
    2. Automatic group chat for persons within a project or event
5. To add the event to the mobile phone’s own calendar system

## General News Feed
### Description
This is the ability to post and interact with content to a live newsfeed for an organisation
### Back End
1. Users should be able to make posts including text, photos and videos
2. Users will be able to view posts made by all other members of the organization. They should be able to like the post as well as make comments.

## Group Chat
### Description 
This is the ability to chat from within the Talawa app with multiple members of the same organisation
### Back End
1. Any user should be able to create a group chat.
2. Events should automatically have a group chat
3. Members of an organization should be able to send messages to each other in various group chats

## Switch Between Organizations
### Description
Users can belong to multiple organizations, however they cannot create their own. For example, a person may belong to multiple clubs using the Talawa app. This is the ability for users to create their own organizations needs to be removed.

### Front End
1. Screen to show organization(s) already apart of and allow switching
2. Screen to join new organization or create 

### Back End
1. Create routes for changing the current organization for the user
2. Create routes for getting information regarding current organization
3. Users should be able to switch between all the organizations they have joined
4. This will change the data in the app regarding the organization ie Main feed, events, groups etc.


