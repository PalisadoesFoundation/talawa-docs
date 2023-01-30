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
   1. GitHub Externship:
      1. [Introduction](https://docs.talawa.io/docs/internships/github/github-introduction).
      1. [Application Guide](https://docs.talawa.io/docs/internships/github/github-application-process).
   1. GSoC:
      1. [Introduction](https://docs.talawa.io/docs/internships/gsoc/gsoc-introduction).
      1. [Application Guide](https://docs.talawa.io/docs/internships/gsoc/gsoc-application-process).
1. Review the [Selection Criteria](https://docs.talawa.io/docs/internships/internship-selection-criteria) to ensure you meet all the requirements for a good proposal.
1. Use the [Application Template](https://docs.talawa.io/docs/internships/internship-application-template) as a guide to formatting your application. The tips on this page are very important.

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

### Creating new features and refactoring existing features into Plugins

1. **Description:** There are a number of features that while useful are not absolutely necessary for the base Talawa app and would be better suited as plugins. The goal of this task is to refactor the existing plugins such as Newsfeed Advertising, Spam Mitigation, Inter-group Messaging, Analytics Integration, Check-ins functionality, etc. We recommended that you use our [Plugin Guide](https://docs.talawa.io/docs/functionalities/plugin-architecture). The scope of the Newsfeed Advertising and Spam Mitigation are given below. They can act as a template for the any additional plugins you wish to discuss with the mentors.
   1. **Newsfeed Advertising**:
      1. Community organizations often rely on the support of local businesses. This plugin would allow companies to advertise on the mobile application newsfeed. The plugin must consider both inexperienced advertisers who will only provide an image or video, and those who are more experienced users of online platforms.
      1. **Features**
         1. The type of content and ways to upload and display it (product placement) must be considered.
         1. The plugin must provide a comprehensive set of advertising campaign features.
         1. Integration with other advertising platforms should be considered.
   2. **Spam Mitigation**:
      1. Detect whether a a user is spamming organization chat and news feed messages.
      2. **Features:**
         1. A reliable method to intercept new messages
         1. An accurate subsystem to evaluate the `spaminess` of messages using both implied and explicit triggers.
         1. Notification of the Talawa-Admin users of potential spam
         1. Creation of ways to ban both infringing and related users.
         1. This should ideally be a plugin so that administrators can eventually select the anti-SPAM engine of their choice.
1. **Expected Outcomes:**
   1. _Architectural Design_
      1. Easy to install, enable and remove either online or by the uploading of code
      1. Able to be installed, activated and configured at the global and/or per-organization level served by the API.
      1. Easy to configure in the Talawa-Admin portal.
   1. _Plugin - Donations, Member Fees and Paid Events_
      1. Organization admins must be able to install and enable the plugin.
      1. Allow organizations exopsure to different types of customizable services and activities, which can be both one time or recurring.
      1. Mobile app users must be able to select their preferred options in an easy and intuitive way.
      1. The mobile app must be plugin aware
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Dominic Mills (GitHub: DMills27)
1. **Difficulty:** Hard
1. **Impact Definition:** Core development

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
1. **Possible Mentors:** Kevonia Tomlinson (GitHub: Kevoniat)
1. **Difficulty:** Medium
1. **Impact Definition:** Core development, Risky/Exploratory

### API: Simplify the Codebase

1. **Description:** Our backend code needs better structure. The approach has introduced these challenges:
   1. Code complexity creates instability. It also makes trouble shooting, testing and scalability difficult.
   1. The exclusive use of functions means the code is reused inefficiently.
1. **Expected Outcomes:**
   1. Research and suggest a preferred way of fixing these challenges. Suggesting paradigms to restructure the code under.This should be discussed with a mentor first to create a code style consistent with our standards.
   1. The solution must:
      1. Limit the need for contributors to learn new technologies. In other words it must be easy to contribute to more than one of our repos based on existing knowledge.
      1. Implement a strategy that requires no changes to the Talawa mobile app and Talawa-Admin.
      1. Achieve full test code coverage for maximum reliability
1. **Repos to update:** Talawa-API
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Tasneem Koushar (GitHub: tasneemkoushar)
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

### Mobile App: Ability to Share Posts & Deep Linking

1. **Description:** Currently the Posts are made via Admin Portal and Users can like & comment via mobile app. An Ability to publish the posts by providing a publicly accessible link will enable app users to share the posts acorss other apps like Whatsapp, Twitter,etc. This will help to increase the popularity of the organization. The published post should also be SEO friendly. And also we need to implement deeplinking and dynamic link in the Talawa app, Deep linking provides you with a web browser link that points to a specific part of an app that is already installed. These links can also be set to navigate users to specific content pages like events, news updates, and more for better understanding go through [this blog](https://medium.flutterdevs.com/explore-deep-linking-in-flutter-26ad4301a99).
1. **Expected Outcomes:**
   1. Design public posts API and data models.
      1. Ability to make posts public via Admin Portal.
      1. Ability to share them to others apps via Mobile app.
      1. Implementing logic for built-in SEO for the post.
   1. Implement deeplinking and dynamic links in the mobile app.
1. **Repos to update:** Talawa, Talawa-Admin, Talawa-API.
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Kukade Siddhesh (GitHub: SiddheshKukade)
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

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
1. **Possible Mentors:** Md Noman Khan (GitHub: noman2002)
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Admin: Checkins

1. **Description:** We need a way for Admin users to track who attended what event and when. Administrators cannot depend on people using their phones to do this, so it will need to be done by volunteers using Talawa-Admin. This is important for many reasons:
   1. Security: Some organizations have events that provide child care.
   1. Management: The ability to track attendance trends and investigate ways to improve it.
1. **Expected Outcomes:** This is a sub-set of the features we feel could be added:
    1. Attendance registration for care givers and those they care for
    1. The ability to print sticky labels for attendees
    1. Safeguards to make sure parents of children are easily matched
    1. An event dashboard listing attendees and contact details
    1. Attendance reporting over date ranges
    1. Notifications when people stop attending
    1. The ability to limit volunteers using Admin to only the checkin screens
    1. Usability on a variety of screen sizes
    1. Reference links ([1](https://www.youtube.com/watch?v=TOxBoMVWaF4)), ([2](https://www.youtube.com/watch?v=PqAfFs30-vY))
    1. Any others you can think of!
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** TBD
1. **Possible Mentors:** TBD
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Admin: Volunteer Event Management

1. **Description:** The mobile app allows people to create calendars and add volunteers for specific roles. This is good for creating adhoc events by organization members. There needs to be a way for the organization's administrators to manage event volunteers:
1. **Expected Outcomes:** This is a sub-set of the features we feel could be added. The ability to:
    1. Easily add custom role tags to members of the organization
    1. Create groups and sub-groups of member tags for ease of categorization. (eg. Cooks. Barbeque cooks)
    1. Manually add members to an organization and match them to existing mobile users if they exist. (Not all members will use phones)
    1. See all scheduled events in an organization wide calendar.
    1. Assign volunteers to any event.
    1. Assign leaders to any event.
    1. Reference links (1)
    1. Any others you can think of!    
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** TBD
1. **Possible Mentors:** TBD
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory


### Improvements for the Automated Documentation Pipeline

1. **Description:** The Talawa, Talawa-API and Talawa-Admin repositories use pipelines to create documentation by coverting the comments from the files via a markdown language like TSDoc, DartDoc, etc in the respective repositories, and then add it to the Talawa Docs repo. This creates a seamless workflow for the creation of documentation that is automatically checked and added to the documentation website on the fly. However, there still needs to be some additional modifications to truely make this process more tenable.
1. **Expected Outcomes:**
   1. Develop a mechanism that enables users to choose between the commented and uncommented versions of the code when pulling it down from the repository. We are open to suggestions about how this could be implemented, but here are a few ways in which we think this could be done:
      1. With a [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tool that uses a flag to pick whether the commented or uncommented version should be chosen or using a [configuration system](https://en.wikipedia.org/wiki/Configuration_management) such as ectd or Apache Zookepper. The uncommented files could be stored in a cache such as Redis for quick access. This [repository](https://github.com/jameshaydon/diff-check) might provide some inspiration about how one would go about implementing this.
      1. If an uncommented file is worked on by a contributer and then is pushed to the repository the user would be prompted to add comments to the corresponding commented file. Ideally the files should have a degree of modularity to ensure that this does not become too onerus for one to contribute.
   1. Currently an unwiedly amount of HTML files are generated as artifacts in the documentation pipeline. This can cause performance issues in the future if unaddressed. A method needs to be implemented to bundle or collate the HTML files into chunks in such a way that the documentation website can have fast load times.
   1. Better indexing for the search features for documentation website. We currently use Algolia search to index the relevant data. We need better heurstics for greater searchability.
   1. Support/Integration for/with the creation of easy-to-create diagrams via [Typoporia](https://support.typora.io/Draw-Diagrams-With-Markdown/) and/or [js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) to enhance the comprehensiveness of the existing documenation.
1. **Repos to update:** Talawa-API, Talawa, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Anwer Sayeed (GitHub: anwersayeed)
1. **Difficulty:** Medium
1. **Impact Definition:** Infrastructure/Automation, Low-hanging fruit

### Functionality to Allow External Links to be Used Within the Talawa Application

1. **Description:** Applications such as Telegram and Whatsapp allow users, for example, to watch YouTube videos within the application itself without needing to nagivating to an external site. This makes the application more accomodating for the users and provides a greater utility within the application itself. We need a similar functionality for the Talawa app. Inspiration of how this can be done can be taken from [this blog](https://abhinavsarkar.net/about/) where the owner of said blog uses a webhooks in the form of a Go library that gathers comments from Twitter, Reddit, GoodReads, etc. Adapt their methods of our purposes and develop a proof of concept for how this can be done using the YouTube example before generalising. 
1. **Expected Outcomes:**
   1. Research and suggest a preferred way of implementing this strategy.
   1. Implement the strategy so that it is transparent to the mobile app.
   1. Code ways to configure this solution simply via the Admin portal.
1. **Repos to update:** Talawa-API, Talawa-Admin.
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Anwer Sayeed (GitHub: anwersayeed)
1. **Difficulty:** Hard
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
1. **Possible Mentors:** Mikey Lue (GitHub: JamaicanFriedChicken)
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

### Admin: Multi-Tennancy (Cloud)

1. **Description:** Create a way to easily manage multiple instances of Talawa-API from a single Talawa-Admin panel. This would provide control over multiple parent organizations and their respective child organizations.
1. **Expected Outcomes:**
   1. Research and suggest a preferred way of implementing this strategy.
   1. Implement the strategy so that it is transparent to the mobile app.
   1. Code ways to configure this solution simply via the Admin portal.
   1. Think of: 
       1. New levels of authorization and security that may be required.
       1. Interesting features that would be required for this to be implemented.
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** TBD
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

## Secondary Idea Areas

We have other areas that need good ideas. This section highlights some primary areas of focus.

### Backend Improvements

Take a look at the [Desired Features](https://docs.talawa.io/docs/features/features-introduction) section for guidance on what we'd like to achieve. Use these to create a unique vision of what you think Talawa could become.

Don't be limited by our desired features. Think of new areas of functionality for the various repos. How could it be better for both the end user and administrators?

Remember, preparing the backend for future features and creating intuitive ways of user interaction with the backend will be important.

### Operational Considerations

Many community hosting their own solution won't have the funds to pay for additional services. They will be using slower, older equipment with limited storage. There will be low technical ability too. In many cases the users may not have completed schooling. Ideas on how to resolve these issues will be helpful.
