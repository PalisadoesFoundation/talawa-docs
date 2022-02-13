---
id: internship-ideas
title: Ideas List
---

## Introduction

Welcome to our ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards.

### General Considerations

This is not an exhaustive list of ideas, but they are the ones we feel need the most attention over the next 12 months.

We also welcome any other ideas that we could use. Please review the "Desired Features" section of this website for **even more ideas** and further necessary information.

### Internship Participants

Many of you reading this page are interested in participating in our various internship programs (eg. Google Summer of Code, GitHub Externship).

1. Make sure to read the relevant `Introduction` and `Applying` pages first.
1. Review the [Acceptance Criteria](https://palisadoesfoundation.github.io/talawa-docs/docs/internships/internship-selection-criteria) to ensure you meet all the requirements for a good proposal.
1. Use the [Application Template](https://palisadoesfoundation.github.io/talawa-docs/docs/internships/internship-application-template) as a guide to formatting your application. The tips on this page are very important.

Good luck!

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

### Impact Definition

We have categorized the various ideas according to the degree of impact they will have to the project. Use these definitions to understand how each idea will affect our overall project goals.

1. **Low-hanging fruit:** These projects require minimal familiarity with the codebase and basic technical knowledge. They are relatively short, with clear goals.
1. **Risky/Exploratory:** These projects push the scope boundaries of our development efforts. They might require expertise in an area not covered by our current development team. They might take advantage of a new technology. There is a reasonable chance that the project might be less successful, but the potential rewards make it worth the attempt.
1. **Fun/Peripheral:** These projects might not be related to the current core development focus, but create new innovations and new perspective for our project.
1. **Core development:** These projects derive from the ongoing work from the core of our development team. The list of features and bugs is never-ending, and help is always welcome.
1. **Infrastructure/Automation:** These projects are the code that our organization uses to get our development work done; for example, projects that improve the automation of releases, regression tests and automated builds. This is a category in which a contributor can be really helpful, doing work that the development team has been putting off while they focus on core development.

### Difficulty

Most of our project ideas require knowledge of two or more programming languages. Meaningful PRs that prove your understanding of the repos will always be beneficial. We have created testing issues specifically for this purpose.

1. **Hard:** Requires dominion of the language used by the repo most affected by the project. A good working knowledge of the languages used by other affected repositories will be needed.
1. **Medium:** A good working knowledge of the languages used by affected repositories will be needed.
1. **Easy:** A beginner's level knowledge of the languages is sufficient.

## Primary Idea Areas

Here are the features we'd like to implement in the coming months.

### Admin Web Portal: Plugin Architecture

1. **Description:** Latent features in the mobile app should be enabled by installing plugins via the Admin web portal. The API would need to detect the existence of a plugin, and automatically query the plugin for authorization to do some action. When authorized, the mobile app will display new capabilities. This project has two parts:
    1. The design and development of the plugin architecture
    1. The creation of a donations plugin to prove the concept
1. **Expected Outcomes:**
    1. _Architectural Design_
        1. Easy to install, enable and remove either online or by the uploading of code
        1. Able to be installed, activated and configured at the global and/or per-organization level served by the API.
        1. Easy to configure in the Talawa-Admin portal.
    1. _Plugin - Donations, Member Fees and Paid Events_
        1. Organization admins must be able to install and enable the plugin.
        1. Allow organizations to receive payments for different types of customizable services and activities, both one time or recurring.
        1. Consider ways to accept payments for organizations in any part of the world using multiple payment gateways.
        1. Mobile app users must be able to select their preferred payment method in an easy intuitive way.
        1. The mobile app must be plugin aware
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

### Admin Web Portal: Plugin - Newsfeed Advertising

1. **Description:** Community organizations often rely on the support of local businesses. This plugin would allow companies to advertise on the mobile app news feed. The plugin must consider both unsophisticated advertisers who will only provide an image or video, and those who are experienced users of online platforms.
1. **Expected Outcomes:**
    1. Organization admins must be able to install and enable the plugin.
    1. The best types of content and ways to upload and display it (placement) must be considered.
    1. The plugin must provide a comprehensive set of advertising campaign features.
    1. The mobile app must be plugin aware.
    1. Integration with well known mobile advertising platforms should be considered.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** Admin Portal Plugin Architecture
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Hard
1. **Impact Definition:** Core development

### Admin Web Portal: New Features Support

1. **Description:** The Admin portal needs to be redesigned to intuitively accommodate the many new features needed by the other projects. Work on this project will be continuous as new features are required from other project ideas.
    1. The Admin Portal only supports English. Other languages need to be included.
1. **Expected Outcomes:**
    1. _Redesign_
        1. Create a new modern, reactive, intuitive design following our "clean look" design standards that can be found on this site.
        1. New screens need to be created to support the new features of other projects
        1. As with our other repositories:
            1. Consolidate test, image and CSS files in separate dedicated directory trees outside of the code tree.
            1. Create a standardized file and directory naming convention in keeping with that of our other repositories.
    1. _Multilingual_
        1. Research and implement ways for users to select a preferred language.
        1. The languages supported must match those of the mobile app.
1. **Repos to update:** Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Medium
1. **Impact Definition:** Core development, Low-hanging fruit

### API: Content Uploads Support

1. **Description:** The API does not have any media management controls that would be useful for the mobile app or Talawa admin portal. This functionality is sorely needed.
1. **Expected Outcomes:**
    1. Must support events, posts, ads, and chats.
    1. Unnecessary duplication of objects must be avoided in all cases. Examples include:
        1. Uploads of identical filenames and / or files
        1. Message forwards or replies
    1. If necessary the solution must support multiple cloud providers.
        1. There must be an option for limited local storage for those who cannot use the cloud. (eg. some talawa developers and organizations who cannot use the cloud for various reasons)
        1. At this time support for only one methodology at a time is required.
    1. Content must only be deleted from storage when no one else needs it.
    1. Must have a unique identifier system independent of the backend storage methododology used.
        1. It must support a future where multiple backends could be used.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Medium
1. **Impact Definition:** Core development, Risky/Exploratory

### API: Improved Backend Performance and Security

1. **Description:** The backend has some known deficiencies that need to be addressed.
    1. The GraphQL interface used by the API and mobile app is prone to over-fetching data. This is also known as the `N+1 problem`. It also does not store data re-use in an optimal way.
    1. The API allows anyone to do updates. There is security by obfuscation where capabilities are not presented to the user, but are still available. This allows for malicious actors to adversely affect organizations.
    1. Data is insufficiently encrypted
    1. There needs to be a way for Talawa mobile apps to have interoperability with older versions of the API. It is very possible that users will download the latest version of Talawa to work with a much older version of the API. The opposite could also be true after an upgrade of the API, with older versions of the mobile apps needing to communicate with a newer version of the API.
1. **Expected Outcomes:**
    1. _GraphQL_
        1. Research and implement ways to batch queries for optimization.
        1. Evaluate and code ways to selectively cache data for reuse depending on the use case.
        1. Update the mobile app to take advantage of these new features.
    1. _Access Security_
        1. Implement roles tied to access and refresh token keys
    1. _Encryption_
        1. Implement ways to encrypt all information exchanged between the API, the mobile app and the Talawa Admin portal.
        1. Implement ways to encrypt PII data stored on disk.
    1. _Versioning_
        1. An API upgrade must not affect users of the Talawa mobile app which may be older.
        1. Differing ways of achieving this must be considered and evaluated for practicality.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Medium
1. **Impact Definition:** Core development, Risky/Exploratory

### API: Multi-Tennancy

1. **Description:** Create a way to separate different API instances using a data segregation strategy to best optimise resources. It is likely that we will want to host Talawa as a service. Designing a solution to this problem is therefore required.
1. **Expected Outcomes:**
    1. Research and suggest a preferred way of implementing this strategy.
    1. Implement the strategy so that it is transparent to the mobile app.
    1. Code ways to configure this solution simply via the Admin portal.
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

### Mobile App: Event and Venue Management

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
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:**
1. **Impact Definition:** Core development, Low-hanging fruit

### Mobile App: Enhanced Chat

1. **Description:** The encrypted chat feature being developed only allows persons to add their comments to the end of a thread. There are many ways in which this could be made more useful.
1. **Expected Outcomes:**
    1. Create ways for users to reply to any historical comment.
    1. Implement ways for users to manage content in chats.
    1. Allow administrators to respond in various ways to complaints about chats.
    1. Activate various combinations of ways to notify users of this feature.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:**
1. **Impact Definition:** Core development

### Mobile App: Improved Member Management

1. **Description:** We need to generally improve the way the apps interact with the general membership through the use of the Talawa-Admin portal. For example:
    1. Community organizations will not want to have open membership. At the moment anyone knowing the Talawa-API URL can join an organization. This could create opportunities for malicious actors.
    1. Community organizations need to be able to send notifications to all, or groups of members. This could be required for natural disasters, fundraisers, functions or other significant events.
1. **Expected Outcomes:**
    1. _New Members_
        1. There needs to be a way for pre-approved persons to join an organization with their mobile app.
        1. The solution should ideally not require the use of third party services that require payment.
        1. There must be a way to allow only certain organization members to approve new members.
        1. This feature needs to be managed via the Talawa-Admin portal
    1. _Notifications_
        1. Implement a notification scheme that is suitable for major forseeable use cases.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Automated Documentation (Google Season of Docs only)

1. **Description:** We need to find ways to automate the creation of our documentation using the content of our code repositories. This needs to be automatically included in our existing documentation website.
1. **Expected Outcomes:**
    1. Find and implement a way to automatically create API usage documentation from our GraphQL schema.
    1. Find and implement a way to automatically create user and engineer documentation from our code files in all repos.
    1. Document what developers must do to generate as much of our documentation directly from the code base as possible
    1. Complete in-code documentation for all Talawa repositories. This may require interaction with Google Summer of Code participants.
1. **Repos to update:** Talawa-API, Talawa, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 175 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Medium
1. **Impact Definition:** Infrastructure/Automation, Low-hanging fruit

## Secondary Idea Areas

We have other areas that need good ideas. This section highlights some primary areas of focus.

### Backend Improvements

Take a look at the [Desired Features](https://palisadoesfoundation.github.io/talawa-docs/docs/features/features-introduction) section for guidance on what we'd like to achieve. Use these to create a unique vision of what you think Talawa could become.

Don't be limited by our desired features. Think of new areas of functionality for the various repos. How could it be better for both the end user and administrators?

Remember, preparing the backend for future features and creating intuitive ways of user interaction with the backend will be important.

### Operational Considerations

Many community hosting their own solution won't have the funds to pay for additional services. They will be using slower, older equipment with limited storage. There will be low technical ability too. In many cases the users may not have completed schooling. Ideas on how to resolve these issues will be helpful.
