---
id: gsoc-ideas
title: GSoC Ideas
---

## Draft

These ideas are subject to change at any time prior to us being accepted as a GSoC 2024 Organization. Ideas may be added, removed or updated up to this time. 

![Draft](/img/document-draft.png)

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
   1. _Chat_ : A key component of the Talawa application suite is chat. Though some endpoints have been created, the feature has not been fully activated and deployed. Chat must be:
      1. Hosted on the API server. We expect the typical Talawa deployment to be small and hosted by communities with limited funding that may not be able to afford cloud additional services.
      2. Available as 1 to 1 and 1 to many group chat options
      3. Automatically available to registered attendees of events as a dedicated group chat instance.
      4. Encrypted whenever and wherever possible
      5. Capable of allowing users to reply to any historical comment.
      6. Allow administrators to respond in various ways to complaints about chats.
      7. Have the ability for older chats to be purged from the system
      8. Assume that most communities using the chat system will be small. Research typical community sizes, seating and event attendance for various community based organizations in designing your solution. Consider easy to implement scalability if required.
   2. _Notifications_
      1. Identify an acceptable way to have notifications handled on the local server
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350 hours (Large)
7. **Possible Mentors:** TBD
8.  **Difficulty:** Medium
9.  **Impact Definition:** Core development, Risky/Exploratory

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

### Hybrid Innovation - Talawa

1. **Description:** We know that there are many opportunities to improve our mobile application to make it more usable. If you have answers to the questions below then this section is for you.
   1. If you have answers to the questions below then this section is for you.
      1. Do the previous ideas need something more? 
      2. What completely new thoughts could be applied to the existing ideas?
   2. Opportunities exist to improve (but are not limited to):
      1. Usefulness
      2. The usability of the various workflows
      3. Long term maintainability
2. **Expected Outcomes:** Your proposal must meet the guidelines below. It must:
   1. Not add any administrative features. These must remain solely in the Talawa-Admin web app.
   2. Not rely on any third party providers. This will greatly simplify the deployment of the mobile app.
      1. There must be no requirement to configure files in the mobile app with third party parameters specific to the Palisadoes Foundation or you, the GSoC participant.
      2. All proposed services must be solely derived from the Talawa-API instance.
      3. All communication must exclusively be with the Talawa-API instance.
   3. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   4. Add completely new features not previously stated in ideas.
   5. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   6. Justify 350 hours of work.
3. **Repos to update:** Talawa, Talawa-API
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9.  **Impact Definition:** Risky/Exploratory

### Hybrid Innovation - Talawa Admin

1. **Description:** We know that there are many opportunities to improve our web application to make it more usable. 
   1. If you have answers to the questions below then this section is for you.
      1. Do the previous ideas need something more? 
      2. What completely new thoughts could be applied to the existing ideas?
   2. Opportunities exist to improve (but are not limited to):
      1. Usefulness to Administrators
      2. The usability of the various workflows
      3. Long term maintainability
2. **Expected Outcomes:** Your proposal must meet the guidelines below. It must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   2. Add completely new features not previously stated in ideas.
   3. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   4. Justify 350 hours of work.
3. **Repos to update:** Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9.  **Impact Definition:** Risky/Exploratory

### Hybrid Innovation - Talawa API

1. **Description:** We know that there are many opportunities to improve our backend API to make it more usable. 
   1. If you have answers to the questions below then this section is for you.
      1. Do the previous ideas need something more? 
      2. What completely new thoughts could be applied to the existing ideas?
   2. Opportunities exist to improve (but are not limited to):
      1. Performance
      2. Simplicity
      3. Functionality
      4. Long term maintainability
      5. Support for long term features in the Mobile and Admin apps that need preparatory work now
   3. The focus for this project idea is improving the API in ways that will be mostly transparent to the other Talawa applications.
2. **Expected Outcomes:** Your proposal must meet the guidelines below. It must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   2. Add completely new features not previously stated in ideas.
   3. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   4. Justify 350 hours of work.
3. **Repos to update:** Talawa-API
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9.  **Impact Definition:** Risky/Exploratory
