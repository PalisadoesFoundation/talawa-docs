---
id: ideas-overview
title: Ideas Overview
---

:::caution

This section is a work in progress.

:::


## Improved API Installation and Setup
There needs to be a simple way to install the backend API server while prompting for the admin username and password. The installation process should install all prerequisite packages.

This a relatively simple idea and will need to be paired with others.

**GSoC Proposal Tags:** talawa-api, documentation

## Mulitsite
Talawa has two components. The mobile app and the backend API. After installing the mobile app, the end user needs to enter the API’s main URL to gain access to Talawa’s features. There are no meaningful limits to mobile app users as there is currently no backend management portal. This means that after installing the Talawa API server, anyone with the mobile app installed and the API server’s URL can create organizations. Similarly anyone with the API URL can create user accounts. There needs to be a way to create a management portal to limit the creation of new organizations, and only allow preapproved users to gain access to the apps.

This is going require work on the API. Work will also need to be done to modify existing mobile app behavior.

**GSoC Proposal Tags:** multisite, documentation

## Group Chats
We’ve been trying to find ways to do group chats. The first implementation was to make anyone participating in an event be automatically included in a chat for that event. We thought this would help foster community. We also see a need for people to create chat groups outside of events with anyone in the organization.

This will require work on both the mobile app and the API backend.

**GSoC Proposal Tags:** features, documentation

## Improved UI design
We need someone to go through and evaluate the UI workflow. In some cases, such as the creation of events, it isn’t easy to see what the next steps are such as assigning persons to roles, responsibilities and target deadlines. The bright yellow color scheme is not attractive, and a dark mode option would be useful. A thorough review needs to be done and the resulting improvements implemented in code.

**GSoC Proposal Tags:** talawa, documentation

## Testing
We only have automated testing implemented for 50% of the code base. This needs to be completed, and all new code needs to be 100% integrated into our Travis-CI system.

**GSoC Proposal Tags:** features