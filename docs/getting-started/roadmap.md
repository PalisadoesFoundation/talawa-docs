---
id: roadmap
title: Roadmap
sidebar_position: 5
---

## Introduction

Welcome to our roadmap ideas page! Get familiar with our definitions and general philosophy by reading this section. The ideas follow afterwards.

### Impact Definition

We have categorized the various ideas according to the degree of impact they will have to the project. Use these definitions to understand how each idea will affect our overall project goals.

1. **Low-hanging fruit:** These projects require minimal familiarity with the codebase and basic technical knowledge. They are relatively short, with clear goals.
1. **Risky/Exploratory:** These projects push the scope boundaries of our development efforts. They might require expertise in an area not covered by our current development team. They might take advantage of a new technology. There is a reasonable chance that the project might be less successful, but the potential rewards make it worth the attempt.
1. **Core development:** These projects derive from the ongoing work from the core of our development team. The list of features and bugs is never-ending, and help is always welcome.
1. **Infrastructure/Automation:** These projects are the code that our organization uses to get our development work done; for example, projects that improve the automation of releases, regression tests and automated builds. This is a category in which a contributor can be really helpful, doing work that the development team has been putting off while they focus on core development.

### Difficulty

Most of our project ideas require knowledge of two or more programming languages.

1. **Hard:** Requires dominion of the language used by the repo most affected by the project. A good working knowledge of the languages used by other affected repositories will be needed.
1. **Medium:** A good working knowledge of the languages used by affected repositories will be needed.
1. **Easy:** A beginner's level knowledge of the languages is sufficient.

## Roadmap Ideas

This section outlines the primary features we'd like to implement in the coming months.

### General: Multi-Tenancy

1. **Description:** We need a way to easily manage multiple instances of Talawa-API from a single Talawa-Admin panel. This would provide control over multiple communities (parent organizations) and their respective (child) organizations. To do this we will need a data segregation strategy to best optimize resources. It is likely that we will want to host Talawa as a service. Designing a solution to this problem is therefore required. Read our [core concepts document](core-concepts) for further background.

1. **Expected Outcomes:**
   1. Research and suggest a preferred way of implementing this strategy.
   1. Implement the strategy so that it is transparent to the mobile app.
   1. Code ways to configure this solution simply via the Admin portal.
   1. We'll need:
      1. New levels of authorization and security that may be required.
      1. Architectures that would facilitate moving a community from one server to another on a completely different set of infrastructure.
      1. Interesting features that would be required for this to be implemented.
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

### API: Translations and Microservices

1. **Description:** Our proposed project aims to enhance our existing app by allowing users to add language JSON files of their choice, breaking APIs, pub sub, and consumers as separate services, and handling big async processes using Kafka Consumers. Currently, we have a monolithic service that uses GraphQL APIs and pub sub. This project will help us create a more modular and scalable architecture for our app, making it easier to maintain and add new features.
   1. To implement this project, we will first create a language management system that allows users to upload JSON files with translations for the app's content. These translations will then be integrated into the app, enabling users to access the app's content in their preferred language.
   2. Next, we will create separate services for APIs, sockets, and consumers. Breaking these services apart will enable us to manage them more efficiently, as well as allow us to scale and add new features more easily.
   3. To handle big async processes, we will use Kafka Consumers. Kafka Consumers will allow us to process large amounts of data efficiently and handle high traffic volumes, improving the app's performance and reliability.
2. **Expected Outcomes:**
   1. Our proposed project will build on previously stated ideas and include some overlap with their general objectives. We will create new features that users will want, including the ability to add language files, improve app performance, and create a more scalable architecture.
   2. The project will justify 350 hours of work, as it involves significant changes to the app's architecture and the creation of new features.
   3. To implement this project, we will require skills in the code stacks related to Talawa, Talawa-API, and Talawa-Admin. Specifically, we will need expertise in GraphQL, Kafka, Python and Sockets.
3. **Instructions:** To implement this project, we recommend the following steps:
   1. Develop a language management system that allows users to upload JSON files with translations for the app's content.
   2. Break the APIs, sockets, and consumers into separate services.
   3. Use Kafka Consumers to handle big async processes.
   4. Test and deploy all the services.
   5. Throughout the implementation process, it will be essential to take care of internal server calls and ensure that the app's performance and reliability are not impacted by the changes. We recommend testing each component thoroughly before deployment.
4. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** None
7. **Project Size:** 350 hours (Large)
8. **Possible Mentors:** Sumitra Saksham (@sumitra19jha), Saiabhiteja Chepuri (@saiabhiteja)
9. **Difficulty:** Hard
10. **Impact Definition:** Risky/Exploratory

### General: Basic Functionality

There are some fundamental features that the Talawa suite of applications needs to have. We provide some insights into possible actions here. Any lists in this section should be viewed as inspiration, much more could be done!

1. **Description:** Recent projects have focused on creating major improvements in the backend functionality to the detriment of fixing basic functionality in the user facing repos namely Talawa and Talawa-Admin. Our improved testing code coverage means that we get few fatal crashes, but many expected UX features don't respond as expected. For example:
   1. _Links_: Clicked links and icons are frequently unresponsive
   1. _Event Management_:
      1. We used to be able to assign tasks to persons invited to events and those assigned tasks would be visible in the mobile app. This no longer happens.
      1. It would also be good for all persons assigned tasks at an event to see each other's assignments. This needs to be addressed from the mobile app end user's perspective and that of the Admin panel.
      1. Events are currently listed as sortable tiles. A calendar view option could be considered.
   1. _Image Management_: Image uploads don't function as expected.
   1. _Layouts_: Not all elements in the mobile app respond to changes between from light to dark modes.
   1. _Updates_: Many menus don't allow updates or don't allow you to edit all the fields added when the menu item was created.
   1. _Newsfeed_: The layout of the mobile app newsfeed is not intuitive. Adding items to this newsfeed needs to function like other well known mobile apps with this feature.
   1. _Chat_:
      1. Creating new chats in the mobile app causes it to crash.
      1. Persons invited to events should be automatically added to the event chat groups, but this does not occur.
      1. Verify and correct if necessary whether removing someone from an event invitee list removes them from the group chat.
   1. _Errors_: Though we have a standard error widget in the mobile app, it is not used for all error reporting, nor does the widget log to console for troubleshooting.
   1. _Testing_:
      1. Test code coverage in the mobile app lags that of the other Talawa apps. It should ideally be above 90%
      1. We need an automated end-to-end testing regime for all three Talawa code repositories.
   1. _Timeliness_: The changes will need to be done on a weekly basis. The rest of the community will need to be made aware of changes so that they can add functionality.
1. **Expected Outcomes:**

   1. We have documented many other areas of potential improvements in the reference links below. After reviewing the videos there, we decided to create issues to rectify some of our concerns, but soon realized that this warrants a GSoC idea of its own as some solutions to the issues will require great coordination and time.
   2. In addition to fixing the bugs above, consider any other ways of making the obviously desired functionality of Talawa and Talawa Admin work!
      1. This document highlights many sites and videos to aid your research.
      2. Any new features you plan to add as part of this project must be **_incremental_**, so that they can be completed in a week. We are certain that there are many opportunities to include these mini projects.
   3. We have created issues to fix some of these obvious defects.
   4. These fixes will ideally not be limited to current defects, but to also to those that may be introduced throughout the GSoC period. We have a history chronic instability and feature malfunctions across all repositories. This project is aimed at looking for ways to improve this now and in the medium to long term.
   5. _**Reference links**_: These videos will be valuable in identifying obvious bugs in the functionality, and should provide you with inspiration for other simple features to be added.
      - [Talawa-Admin Video: Functionality Review 2023](https://www.youtube.com/watch?v=Rp2Juid1Qus)
      - [Talawa Video: Functionality Review 2023](https://www.youtube.com/watch?v=ix3eSReJj2k)

1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** `Admin: UI Redesign`. Many of the projects below will have some impact, and you will need to coordinate with the assigned mentees for this.
1. **Project Size:** 350
1. **Difficulty:** Medium
1. **Impact Definition:** Core development

### Mobile App: Share data between Talawa and other application suites

1. **Description:** Currently the Posts are made via Admin Portal and Users can like & comment via mobile app. An Ability to publish the posts by providing a publicly accessible link will enable app users to share the posts across other apps like WhatsApp, Twitter, etc. This will help to increase the popularity of the organization. The published post should also be SEO friendly. We also need other applications to be able to share data to Talawa from where users can share content from applications like WhatsApp, telegram etc. to users on Talawa via chat. We really want that Talawa users should also be able to have a preview of links at least from some predefined types stated in Expected Outcomes. When it comes to user retentions we would really like to have a floating PIP mode for the links that have playable video links similar to what telegram and WhatsApp have for YouTube videos.
1. **Expected Outcomes:**
   1. Design public posts API and data models.
      1. Ability to share them to others apps via Mobile app.
      2. Implementing logic for built-in SEO for the post.
   2. Implement data sharing to/from Talawa.
      1. Ability to share post from Talawa to other applications.
      2. Post shared should open directly inside app if installed similar to invite feature implemented.
      3. Ability to share plain text, images or both to Talawa users in chat from other applications similar to telegram, WhatsApp, stack have.
      4. This might also require updating changes in chat schema.
      5. Ability to have a link preview of all the links.(Open for whom you want to implement this)
      6. Have a PIP mode for videos to be played inside Talawa when app is in foreground or background state.
      7. Links which have a playable video file like YouTube etc. should have a PIP compatibility.
      8. Links should open inside in-app browser or the dedicated application if installed.
      9. Link preview should also be available for posts on platform and any potential place.
1. **Repos to update:** Talawa, Talawa-Admin, Talawa-API.
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Difficulty:** Medium/Hard
1. **Impact Definition:** Core development, Risky/Exploratory
