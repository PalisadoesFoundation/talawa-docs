---
id: gsoc-ideas
title: GSoC Ideas
---

## Introduction

Welcome to our ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards.

### General Considerations

This is not an exhaustive list of ideas, but they broadly classify the types of features on which we'd like to focus our attentions.

You are open to propose your own solutions.

1. We encourage candidates to think laterally.
1. Take the initiative and consider something hybrid taking thoughts from various ideas posted here or something totally new.

We want ideas that will have a material impact on the project

Remember, the ideas list is just a guide for what we feel could be achieved, and not a strict list of requirements. Think of the overall goal of making a better product. Picking a subset of suggestions and expanding them beyond our expectations shows your initiative.

**NOTE:** If you feel the project ideas will take too much time as stated, then:

1. Add that to your proposal
1. Include what you think a reasonable scope should be.

We need your ideas to be completed on time with 100% test cases with each PR.

1. Brittle code that breaks easily does not help the project
1. Incomplete functionality is not acceptable unless specifically stated.

If there are any dependencies on other project ideas, then state it. Also include additional or alternative things that you would do if the dependencies are not completed in your desired time frame

The project is so much in its infancy that we'll accept any good idea that users will want or will facilitate that they could want. They must significantly advance our goal of having an MVP within the year.

We also welcome any other ideas that we could use. Please review the "Desired Features" section of this website for **even more ideas** and further necessary information.

### Internship Participants

Many of you reading this page are interested in participating in our various internship programs (eg. Google Summer of Code, GitHub Externship, Google Summer of Docs, Outreachy, etc.).

1. Make sure to read the relevant `Introduction` and `Application Guide`/ `Contribution Process` pages first.
   1. GSoC:
      1. [GSoC Introduction](./gsoc-introduction).
      2. [GSoC Application Guide](./gsoc-application-process).
2. Review the [Selection Criteria](../internship-selection-criteria) to ensure you meet all the requirements for a good proposal.
3. Use the [Application Template](../internship-application-template) as a guide to formatting your application. The tips on this page are very important.

Good luck!

### Documentation

We need to reduce the learning curve of contributors and sysadmins alike. Project work needs to be well documented in our code so that tools can eventually automatically add it to our documentation websites.

### Testing

All code submitted must be tested. We are working towards getting to 100% test code coverage on all Talawa repositories. This will mean that you will have to write tests for new code you write or modify.

The test percent code coverage requirement will incrementally rise with each pull request. In some cases you may have to write a few extra tests for code you may not have updated. We hope this will be rare.

Write code that will work in the long term. Eliminate brittle code that will easily break.

### Repository Languages and Skills

Here is a list of basic skills that will be required for each repository.

1. **Talawa:** Flutter / Dart, GraphQL
1. **Talawa-API:** Typescript, GraphQL, MongoDB
1. **Talawa-Admin Portal:** TypeScript

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

### Research

Talawa is a suite of applications that are aimed at managing the memberships of community based organizations. This concept may be new to you, and we suggest you research Church and/or Temple Management Software as a starting point. Talawa needs to have a broader reach and your additions to our ideas will make the difference. We have included links to YouTube videos on this page that will be useful in improving your understanding.

Your solution should ideally consider the:

1. ability of typical small community organizations with limited resources to:
   1. get tech support to maintain the application
   1. have tech-savvy users
   1. afford long term costs
   1. need all membership information completely under their control
   1. manage services outside the applications
1. impact of using third party services
1. performance / usability trade-offs
1. potential data residency law requirements

### Other

We will not support administrative functions in the mobile app.

## Idea Areas

This section outlines the primary features we'd like to implement in the coming months with impacts on all the applications.

Please read the `Research` section of this document for background information

### Fail Safe

1. **Description:** Talawa and Talawa-Admin are too closely coupled to Talawa-API. Both these apps crash when the API is unavailable.  ixing this would greatly help the project and will increase the developer base we can attract. 
2. **Expected Outcomes:**

   1. Developers should also be able to write, navigate and test code without access to the API.
   2. During normal operation the data required for screens should not appear when the API is down instead of crashing.

3. **Repos to update:** Talawa, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9. **Impact Definition:** Core development

### Share data between Talawa and other application suites

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
1. **Project Size:** 350 hours (Large)
2. **Possible Mentors:** TBD
3. **Difficulty:** Medium/Hard
4. **Impact Definition:** Core development, Risky/Exploratory

### Multi-Tenancy

1. **Description:** Create a way to separate different API instances using a data segregation strategy to best optimize resources. It is likely that we will want to host Talawa as a service. Designing a solution to this problem is therefore required. Read our [core concepts document](../../introduction/core-concepts) for further background.
1. **Expected Outcomes:**
   1. Research and suggest a preferred way of implementing this strategy.
   1. Implement the strategy so that it is transparent to the mobile app.
   1. Code ways to configure this solution simply via the Admin portal.
   2. Think of:
      1. New levels of authorization and security that may be required.
      2. Architectures that would facilitate moving a community from one server to another on a completely different set of infrastructure.
      3. Interesting features that would be required for this to be implemented.
2. **Repos to update:** Talawa-API, Talawa-Admin
3. **Skills Required:** Code stacks related to repos above. See introduction section.
4. **Depends on Project:** `Admin: Multi-Tenancy`
5. **Project Size:** 350 hours (Large)
6. **Possible Mentors:** TBD
7. **Difficulty:** Hard
8. **Impact Definition:** Core development, Risky/Exploratory

### Improved File Uploads and Security

1. **Description:** We need a better solution for handling files uploaded from Talawa clients. GraphQL is unsuitable for file access and, storing files in the code tree with only a `.gitignore` file as protection is risky.
2. **Expected Outcomes:** Objects must be:
   1. Stored in a location outside the code tree
   2. Accessed using industry best practices and libraries that are unlikely to be deprecated or abandoned.
   3. Deduplicated.
   4. Encrypted whenever and wherever possible.
   5. Stored in the same way independent of their size, type or other characteristics.
   6. Screened for malicious content.
3. **References:** There have been extensive discussions about this which should help in evaluating options.
   1. https://github.com/PalisadoesFoundation/talawa-api/pull/1168
   2. https://github.com/PalisadoesFoundation/talawa-api/issues/952
4. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** N/A
7. **Project Size:** 350 hours (Large)
8. **Possible Mentors:** TBD
9.  **Difficulty:** Medium
10. **Impact Definition:** Core development, Risky/Exploratory

### Self Hosted Chat and Notifications

1. **Description:** The Talawa apps are closely coupled with cloud services which creates operational concerns. This greatly complicates setup as each new service requires new configuration parameters. It also adds greater troubleshooting and billing complexity for organizations that will not be tech-savvy.
2. **Expected Outcomes:** 
   1. _Chat_ : A key component of the Talawa application suite is chat. Though some endpoints have been created, the feature has not been fully activated and deployed.
      1. Chat must be:
      2. Hosted on the API server. We expect the typical Talawa deployment to be small and hosted by communities with limited funding that may not be able to afford cloud additional services.
      3. Available as 1 to 1 and 1 to many group chat options
      4. Automatically available to registered attendees of events as a dedicated group chat instance.
      5. Encrypted whenever and wherever possible
   2. _Notifications_
      1. Identify an acceptable way to have notifications handled on the local server
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350 hours (Large)
7. **Possible Mentors:** TBD
8.  **Difficulty:** Medium
9.  **Impact Definition:** Core development, Risky/Exploratory

### Translations and Microservices

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
8. **Possible Mentors:** TBD
9. **Difficulty:** Hard
10. **Impact Definition:** Risky/Exploratory

### E2E Testing

1. **Description:** We need better integration testing of the various applications
2. **Expected Outcomes:** Consider ways to implement testing:
   1. Using packages such as puppeteer, jest or their equivalents
   2. That comprehensively tests the integration of all three major Talawa apps.
   3. **References:** 
      1. https://github.com/PalisadoesFoundation/talawa-admin/pull/580
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9.  **Impact Definition:** Risky/Exploratory

### Artificial Intelligence

1. **Description:** AI creates many possible opportunities for the Talawa administrator. Solutions must be easy to implement and cost-effective for potential use by organizations that have limited resources. 
2. **Expected Outcomes:** Consider ways to:
   1. Help improve event attendance
   2. Suggest volunteers for events
   3. Create announcements that get better response rates
   4. Flag spam
   5. Otherwise improve the management of the application suite
3. **Reference:** An Admin must not rely exclusively on AI for the features you suggest as they may not choose to activate AI.
4. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** N/A
7. **Project Size:** 350
8. **Possible Mentors:** TBD
9. **Difficulty:** Medium
10. **Impact Definition:** Risky/Exploratory

### Semiotics

1. **Description:** There is no guarantee that Talawa users will be functionally literate. We need to find ways to augment text with symbols to improve the UX. 
2. **Expected Outcomes:** TBD
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9.  **Impact Definition:** Risky/Exploratory

### Hybrid Innovation

1. **Description:** Do the ideas need something more? What completely new thoughts could be applied to the existing ideas? If you have answers to these questions then this section is for you.
2. **Expected Outcomes:** Your proposal must meet the guidelines below. They must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   2. Add completely new features not previously stated in ideas.
   3. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   4. Justify 350 hours of work.
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9. **Impact Definition:** Risky/Exploratory
