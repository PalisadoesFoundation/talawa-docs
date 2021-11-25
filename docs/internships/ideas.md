---
id: ideas
title: Ideas
---

There are some well known areas of improvement that we have listed below. It is really important that we complete these over the summer and we would also welcome any other ideas that could use these as a foundation.

In general we would like to reduce the learning curve for new sysadmins. Our API documentation needs to be clearer, especially as we hope to launch an alpha version of the software this year. It is important that our online documentation is updated as any part of the project.

Please review the "Desired Features" section of this website for **even more ideas** and further necessary information.

## Primary Areas

We have many areas in which we need good ideas. This section highlights some primary areas of focus.

### Backend Improvements

Take a look at the [Desired Features](https://palisadoesfoundation.github.io/talawa-docs/docs/features/features-introduction) section for guidance on what we'd like to achieve. Use these to create a unique vision of what you think Talawa could become.

Don't be limited by our desired features. Think of new areas of functionality for the various repos. How could it be better for both the end user and administrators?

Remember, preparing the backend for future features and creating intuitive ways of user interaction with the backend will be important.

### Improved Talawa-API Installation and Setup

We need a simple one click installation process that:
1. Automatically installs and configures all pre-requisite packages.
1. Prompts the user for basic configuration information such as an admin username and password.
1. Runs as a standalone executable that doesn't require pre-requisite packages to operate.
1. Has multilingual support

GSoC Proposal Tags: talawa-api

### Improved Talawa-Admin Installation and Setup

We need a simple one click installation process that:
1. Automatically installs and configures all pre-requisite packages.
1. Prompts the user for basic configuration information such as an admin username and password.
1. Runs as a standalone executable that doesn't require pre-requisite packages to operate.
1. Has multilingual support

GSoC Proposal Tags: talawa-admin

### Chat Functionality

We need to add chat functionality to the mobile app with backend support. Chat must:
1. Be encrypted across the network, in permanent storage, in cached storage and history
1. Have the ability for older chats to be purged from the system
1. Support group chats:
    1. Anyone participating in an event be automatically included in a chat for that event. We thought this would help foster community.
    1. We also see a need for people to create chat groups outside of events with anyone in the organization.

This will require work on both the mobile app and the API backend.

### Code Testing Coverage

This area should be low effort, but of high impact to the projects. Any prior PRs done to improve our testing coverage will be taken into account for our evaluations. Please do not create issues for these activities, there are many existing issues that define what we need done.

### Multisite Security

New organizations can only be created using the Talawa-Admin portal. We need to think of ways that this:
1. Can only be done by super-administrator users
1. Can only be done using the Talawa-Admin portal

GSoC Proposal Tags: multisite

### Admin Portal Plugins

We need the ability to control the functionality of the API via plugins. For example:

1. If Talawa were to be launched as a cloud service, then the ability to create a plugin to define and enforce tiers of service with associated billing would be needed.
1. A plugin to accept donations or membership fees via the mobile app.
1. A plugin to allow organization administrators to create ads from local companies and add it to the news feed

The API would need to detect the existence of a plugin, and automatically query the plugin for authorization to do something, like add a new user, before doing so.

GSoC Proposal Tags: talawa-api, plugins

### Multilingual Support

We need to ensure that all the functionality in the admin portal have multilingual support. We will need ways for persons to easily switch between languages at installation, on login, on registration and at any time during the operation of the software. A thorough review of how this and more could be implemented will be required.

A thorough review of the mobile app is needed to make sure that all screens have multilingual support.

### Operational Considerations

Many community hosting their own solution won't have the funds to pay for additional services. They will be using slower, older equipment with limited storage. There will be low technical ability too. In many cases the users may not have completed schooling. Ideas on how to resolve these issues will be helpful.

### Membership Management

There needs to be a way to add members to a group in a trusted way. Many persons in developing regions don't have access to email services, and the organizations may not have the funds to invest in a text based authentication scheme. Also, person may not be literate enough to read detailed instructions. There needs to be a way, that is universally available on all modern feature and smart phones, to allow persons to authenticate themselves when joining an organization. Some mobile apps use a QR code system for example, there could be other methods too.

## Secondary Areas

We have other areas that need good ideas. This section highlights some primary areas of focus.

### Event Management

Community organizations often have many events that need to be managed. Here are some small ideas of what could be done. Expand on these if you can.

#### Volunteer and Attendee Checkins for Events

An organization may rely on volunteers for manage events. It would be good to have a simple system for users to be able to let the event coordinators know that they are on site and available.

The system could also be used to have attendees confirm that they are actually at the event. This would help with capacity planning.

#### Event Registrations

There could be a need to limit the number of persons attending an event by setting a maximum number for registrations when they are created. Event organizers would then know who to admit to the event if space were limited.

#### Facilities Registrations

Just like with event registrations, there may be a need to reserve a room, building, hall or field for an event. Reserving these areas would be an interesting feature to consider.

### Donation and Membership Fee Management

Organizations may need simple ways to track donations and membership fees

### Groups Management

Groups won't be just for chats and communication. They may also arrange activities and events together. There should be a way to help them do this. For example, automatically inviting all members of a group to a group event. There are many other areas for improvement

### Notifications and Reminders

It would be good to be able to send notifications and reminders to selected groups of persons such as:

1. All members of an organization
1. All persons registered for an event
1. All members of a group

These could be sent directly and/or part of their news feed.
