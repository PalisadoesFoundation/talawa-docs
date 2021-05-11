---
id: github-ideas
title: Ideas
---

## Interesting Ideas

There are some well known areas of improvement that we have listed below. It is really important that we complete these over the summer and we would also welcome any other ideas that could use these as a foundation.

In general we would like to reduce the learning curve for new sysadmins. Our API documentation needs to be clearer, especially as we hope to launch an alpha version of the software this year. It is important that our online documentation is updated as any part of the project.

## Primary Areas

We have many areas in which we need good ideas. This section highlights some primary areas of focus.

### Backend Improvements

You will notice from the ideas below that many top priority ideas for the Talawa mobile app are already being evaluated. We need ideas to help with improving the Talawa backend systems. Take a look at the [Desired Features](https://palisadoesfoundation.github.io/talawa-docs/docs/features/features-introduction) section for guidance on what we'd like to achieve. Use these to create a unique vision of what you think Talawa could become.

Preparing the backend for future features and creating intuitive ways of user interaction with the backend will be important.

### Improved Installation and Setup

These are smaller tasks, but are very important in ensuring acceptance of the product suite.

#### Talawa-API

There needs to be a simple way to install the backend API server while prompting for the admin username and password. The installation process should install all prerequisite packages.

This a relatively simple idea and will need to be paired with others.

#### Talawa-Admin

Similarly, the installation process for the admin portal needs to be effortless and secure.

### Automated Testing, Code Formatting and Linting

This area should be low effort, but of high impact to the projects. Think of ways to improve on these suggestions. We found a solution to code formatting for Talawa that helped us greatly. We need the same for the API and the Admin portal.

We need to ensure a stable product suite. Fixing this is important to us.

#### Code Formatting and Linting

This will greatly help the developer experience. Different people format their code in different ways which often causes merge conflicts in our pull requests. We need a way to automatically format submitted code to a known standard, and reject code that does not meet it. We have managed to find a solution for Talawa using GitHub actions. We need the same for the API and Admin portal.

#### Testing

We don't have a consistent integration into automated testing systems. We want all submitted code to have associated tests and for the pull request process to reject code that does not. Ways to verify the existence of test code and files will need to be found for all repos.

### Removing the Ability to Create Organizations in the Mobile App

Talawa originally allowed any mobile application user to create their own community organization, one or many times. They would automatically be the administrator. We thought this would be unmanageable, and decided to remove the feature. In our updated design, mobile users can log into the organization of their choice, one at a time, with administration being done through the web portal. Administrators may also have limited access to management features through the mobile application.​

This will have a variety of implications for the mobile app and API. It will also provide many new opportunities for features. Let us know your thoughts.

### Improved UI design

We are currently working on UI/UX proposals for a complete redesign of Talawa mobile app and admin portal. This is not in scope.

Adjustments to the UI/UX to accommodate new features are in scope.

### Improved Talawa Functionality

Think of new areas of functionality for the mobile app. How could it be better for both the end user and administrators?

### Multilingual Support

The admin portal only supports English at the moment. We will need ways for persons to easily switch between languages at installation, on login, on registration and at any time during the operation of the software. A thorough review of how this and more could be implemented will be required.

We are already evaluating a number of proposals for the mobile app. Please don't submit ideas for mobile.

### Membership Management

There needs to be a way to add members to a group in a trusted way. Many persons in developing regions don't have access to email services, and the organizations may not have the funds to invest in a text based authentication scheme. Also, person may not be literate enough to read detailed instructions. There needs to be a way, that is universally available on all modern feature and smart phones, to allow persons to authenticate themselves when joining an organization. Some mobile apps use a QR code system for example, there could be other methods too.

We'll also need ways to integrate this process with existing cloud messaging services, or Talawa server based services.

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

### Groups Management

Groups won't be just for chats and communication. They may also arrange activities and events together. There should be a way to help them do this. For example, automatically inviting all members of a group to a group event. There are many other areas for improvement

### Notifications and Reminders

It would be good to be able to send notifications and reminders to selected groups of persons such as:

1. All members of an organization
1. All persons registered for an event
1. All members of a group

These could be sent directly and/or part of their news feed.
