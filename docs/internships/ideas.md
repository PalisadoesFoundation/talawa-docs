---
id: internship-ideas
title: Ideas List
---

## Introduction

Welcome to our ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards.

### General Considerations

This is not an exhaustive list of ideas, but they are the ones we feel need the most attention over the next 12 months.

We also welcome any other ideas that we could use. Please review the "Desired Features" section of this website for **even more ideas** and further necessary information.

### Documentation

We need to reduce the learning curve of contributors and sysadmins alike. Project work needs to be well documented in our code so that tools can eventually automatically add it to our documentation websites.

### Testing

All code submitted must be tested. We are working towards getting to 100% test code coverage on all Talawa repositories. This will mean that you will have to write tests for new code you write or modify.

The test percent code coverage requirement will incrementally rise with each pull request. In some cases you may have to write a few extra tests for code you may not have updated. We hope this will be rare.

### Repository Languages and Skills

Here is a list of basic skills that will be required for each repository.

1. **Talawa:** Flutter / Dart, GraphQL
1. **Talawa-API:** Node.js, GraphQL, MongoDB
1. **Talawa-Admin Portal:** TypeScript, Node.js

There are others, but these are the primary ones that will guide your contributions.

## Primary Idea Areas

Here are the features we'd like to implement in the coming months.

### Cloud Service Capability

Talawa needs to be cloud capable to be universally accepted. This means we'll need to add suitable features to meet this goal. This section outlines some important focus areas.

### Admin Portal Plugin Architecture

1. **Description:** Latent features in the mobile app should be enabled by installing plugins via the Admin web portal. The API would need to detect the existence of a plugin, and automatically query the plugin for authorization to do some action. When authorized, the mobile app will display new capabilities.
1. **Expected Outcomes:**
    1. Easy to install and remove either online or the uploading of code
    1. Able to be installed, activated and configured at the global and/or per-organization level served by the API.
    1. Easy to configure in the Talawa-Admin portal.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:** Hard
1. **Definition:**

### Plugin - Newsfeed Advertising

1. **Description:** Community organizations often rely on the support of local businesses. This plugin would allow companies to advertise on the mobile app news feed.
1. **Expected Outcomes:**
    1. Organization admins must be able to install and enable the plugin.
    1. The best types of content and ways to upload and display it must be considered.
    1. The plugin must track the most important advertising campaign metrics and have various means of ending campaigns.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** Admin Portal Plugin Architecture
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### Plugin - Donations, Member Fees and Paid Events

1. **Description:** Community organizations often rely on donations and member fees to support local businesses.
1. **Expected Outcomes:**
    1. Organization admins must be able to install and enable the plugin.
    1. Allow organizations to receive payments for different types of services and activities.
    1. Consider ways to accept payments for organizations in any part of the world.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** Admin Portal Plugin Architecture
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### API Multi-Tennancy

1. **Description:** Create a way to separate different API instances using a data segregation strategy to best optimise resources. It is likely that we will want to host Talawa as a service. Designing a solution to this problem is therefore required.
1. **Expected Outcomes:**
    1. Research and suggest a preferred way of implementing this strategy.
    1. Implement the strategy so that it is transparent to the mobile app.
    1. Code ways to configure this solution simply via the Admin portal.
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### Event and Venue Management

1. **Description:** Community organizations host events and venues that must be managed. Talawa offers a way to help coordinate these services better.
1. **Expected Outcomes:**
    1. Create ways for volunteers and/or attendees have checked-in for events for better coordination.
    1. Implement ways to limit the number of event attendees.
    1. Allow venues to be reserved from being used for other events.
    1. Create ways for attendees to register for events with or without an invitation.
    1. Activate various combinations of ways to notify users of this feature.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### Enhanced Chat

1. **Description:** The encrypted chat feature being developed only allows persons to add their comments to the end of a thread. There are many ways in which this could be made more useful.
1. **Expected Outcomes:**
    1. Create ways for users to reply to any historical comment.
    1. Implement ways for users to upload and share content in chats.
    1. Allow administrators to respond in various ways to complaints about chats.
    1. Activate various combinations of ways to notify users of this feature.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### New Member Management

1. **Description:** Community organizations will not want to have open membership. At the moment anyone knowing the Talawa-API URL can join an organization. This could create opportunities for malicious actors.
1. **Expected Outcomes:**
    1. There needs to be a way for pre-approved persons to join an organization with their mobile app.
    1. The solution should ideally not require the use of third party services that require payment.
    1. There must be a way to allow only certain organization members to approve new members.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### Improved API Backend Performance

1. **Description:** The GraphQL interface used by the API and mobile app is prone to over-fetching data. This is also known as the `N+1 problem`. It also does not store data re-use in an optimal way.
1. **Expected Outcomes:**
    1. Research and implement ways to batch queries for optimization.
    1. Evaluate and code ways to selectively cache data for reuse depending on the use case.
    1. Update the mobile app to take advantage of these new features.
1. **Repos to update:** Talawa, Talawa-API
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### Multilingual Support for the Admin Portal

1. **Description:** The Admin Portal only supports English. Other languages need to be included.
1. **Expected Outcomes:**
    1. Research and implement ways for users to select a preferred language.
    1. The languages supported must match those of the mobile app.
1. **Repos to update:** Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### Organization Wide Notifications

1. **Description:** Community organizations need to be able to send notifications to all, or groups of members. This could be required for natural disasters, fundraisers, functions or other significant events.
1. **Expected Outcomes:**
    1. Implement a notification scheme that is suitable for major forseeable use cases.
    1. Notifications for organization wide notifications should be done via the Admin portal
1. **Repos to update:** Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

### Enhanced API Security

1. **Description:** The API allows anyone to do updates, the only security present is capabilities are not presented to the user. This allows for malicious actors to adversely affect organizations.
1. **Expected Outcomes:**
    1. Implement ways to encrypt all PII information exchanged with the API and stored on disk.
    1. Ensure that Talawa-Admin functions in the API are only accessible and authorized by the Talawa-Admin web app, independent of the Talawa-Admin user who is logged in.
1. **Repos to update:** Talawa-API
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:**
1. **Rating:**
1. **Definition:**

## Secondary Idea Areas

We have other areas that need good ideas. This section highlights some primary areas of focus.

### Backend Improvements

Take a look at the [Desired Features](https://palisadoesfoundation.github.io/talawa-docs/docs/features/features-introduction) section for guidance on what we'd like to achieve. Use these to create a unique vision of what you think Talawa could become.

Don't be limited by our desired features. Think of new areas of functionality for the various repos. How could it be better for both the end user and administrators?

Remember, preparing the backend for future features and creating intuitive ways of user interaction with the backend will be important.

### Operational Considerations

Many community hosting their own solution won't have the funds to pay for additional services. They will be using slower, older equipment with limited storage. There will be low technical ability too. In many cases the users may not have completed schooling. Ideas on how to resolve these issues will be helpful.
