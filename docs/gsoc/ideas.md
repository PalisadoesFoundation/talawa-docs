---
id: gsoc-ideas
title: GSoC Ideas
---

## Interesting Ideas

There are some well known areas of improvement that we have listed below. It is really important that we complete these over the summer and we would also welcome any other ideas that could use these as a foundation.

In general we would like to reduce the learning curve for new sysadmins. Our API documentation needs to be clearer, especially as we hope to launch an alpha version of the software this year. It is important that our online documentation is updated as any part of the project.

## Primary Areas

We have many areas in which we need good ideas. This section highlights some primary areas of focus.

### Improved API Installation and Setup

There needs to be a simple way to install the backend API server while prompting for the admin username and password. The installation process should install all prerequisite packages.

This a relatively simple idea and will need to be paired with others.

GSoC Proposal Tags: talawa-api, documentation

### Mulitsite

Talawa has two components. The mobile app and the backend API. After installing the mobile app, the end user needs to enter the API’s main URL to gain access to Talawa’s features. There are no meaningful limits to mobile app users as there is currently no backend management portal. This means that after installing the Talawa API server, anyone with the mobile app installed and the API server’s URL can create organizations. Similarly anyone with the API URL can create user accounts. There needs to be a way to create a management portal to limit the creation of new organizations, and only allow preapproved users to gain access to the apps.

This is going require work on the API. Work will also need to be done to modify existing mobile app behavior.

GSoC Proposal Tags: multisite, documentation

### Admin Portal Plugins

We need the ability to control the functionality of the API via plugins. For example:

1. If Talawa were to be launched as a cloud service, then the ability to create a plugin to define and enforce tiers of service with associated billing would be needed.
1. A plugin to accept donations or membership fees via the mobile app.
1. A plugin to allow organization administrators to create ads from local companies and add it to the news feed

The API would need to detect the existence of a plugin, and automatically query the plugin for authorization to do something, like add a new user, before doing so.

GSoC Proposal Tags: talawa-api, plugins

### Improved UI design

We need someone to go through and evaluate the UI workflow. In some cases, such as the creation of events, it isn’t easy to see what the next steps are such as assigning persons to roles, responsibilities and target deadlines. The bright yellow color scheme is not attractive, and a dark mode option would be useful. A thorough review needs to be done and the resulting improvements implemented in code.

GSoC Proposal Tags: talawa, documentation

### Membership Management

There needs to be a way to add members to a group in a trusted way. Many persons in developing regions don't have access to email services, and the organizations may not have the funds to invest in a text based authentication scheme. Also, person may not be literate enough to read detailed instructions. There needs to be a way, that is universally available on all modern feature and smart phones, to allow persons to authenticate themselves when joining an organization. Some mobile apps use a QR code system for example, there could be other methods too.

### Testing
We only have automated testing implemented for 50% of the code base. This needs to be completed, and all new code needs to be 100% integrated into our Travis-CI system.

GSoC Proposal Tags: features

## Secondary Areas

We have other areas that need good ideas. This section highlights some primary areas of focus.

### Group Chats

We’ve been trying to find ways to do group chats. The first implementation was to make anyone participating in an event be automatically included in a chat for that event. We thought this would help foster community. We also see a need for people to create chat groups outside of events with anyone in the organization.

This will require work on both the mobile app and the API backend.

GSoC proposal tag: features, documentation

### Volunteer and Attendee Checkins for Events

An organization may rely on volunteers for manage events. It would be good to have a simple system for users to be able to let the event coordinators know that they are on site and available.

The system could also be used to have attendees confirm that they are actually at the event. This would help with capacity planning.

### Event Registrations

There could be a need to limit the number of persons attending an event by setting a maximum number for registrations when they are created. Event organizers would then know who to admit to the event if space were limited.

### Facilities Registrations

Just like with event registrations, there may be a need to reserve a room, building, hall or field for an event. Reserving these areas would be an interesting feature to consider.

### Donation and Membership Fee Management

Organizations may need simple ways to track donations and membership fees

### Groups Management

Groups won't be just for chats and communication. They may also arrange activities and events together. There should be a way to help them do this. For example, automatically inviting all members of a group to a group event. There are many other areas for improvement

### Event Planning and Scheduling

Many organizations may have regular events

### Notifications and Reminders

It would be good to be able to send notifications and reminders to selected groups of persons such as:

1. All members of an organization
1. All persons registered for an event
1. All members of a group

These could be sent directly and/or part of their news feed.
