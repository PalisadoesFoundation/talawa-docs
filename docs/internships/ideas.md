---
id: internship-ideas
title: Ideas List
---

## Introduction

Welcome to our ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards.

### General Considerations

This is not an exhaustive list of ideas, but they broadly classify the types of features on which we'd like to focus our attentions.

You are open to propose your own solutions. 
1. We encourage candidates to think laterally. 
1. Take the initiative and consider something hybrid taking thoughts from various ideas posted here or something totally new.

We want ideas that will have a material impact on the project

Remember, the ideas list is just a guide for what we feel could be achieved, and not a strict list of requirements. Think of the overall goal of making a better product. Picking a subset of suggestions and expanding them beyond our expectations shows your initiaitive.

**NOTE:** If you feel the project ideas will take too much time as stated, then:
1. Add that to your proposal
1. Include what you think a reasonable scope should be. 

We need your ideas to be completed on time with 100% test cases with each PR.
1. Brittle code that breaks easily does not help the project
1. Incomplete functionality is not acceptable unless specifically stated.

If there are any dependencies on other project ideas, then state it. Also include additional or alternative things that you would do if the dependencies are not completed in your desired timeframe

The project is so much in its infancy that we'll accept any good idea that users will want or will facilitate that they could want. They must significantly advance our goal of having an MVP within the year.

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

We want code that will work in the long term. We do not want brittle code that will easily break.

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

Talawa is a suite of applications that are aimed at managing the memberships of community based organizations. This concept may be new to you and we suggest you research Church and/or Temple Management Software as a starting point. Talawa needs to have a broader reach and your addtions to our ideas will make the difference. We have included links to YouTube videos on this page that will be useful in improving your understanding.

Your solution should ideally consider the:

1. ability of typical small community organizations with limited resources to:
   1. get tech support to maintain the application
   1. have tech-savvy users
   1. afford long term costs 
   1. need all membership information completely under their control
   1. manage services outside the applications
1. impact of using third party services
1. performance / usability tradeoffs
1. potential data residency law requirements

#### Events

Event management is a big part of community organization management apps. This is how it often works using the Talawa terminology of `member` who is a `user` who has access to the mobile app:

1. Some people may attend events regularly and never use a mobile app (`user`), but administrators will want to track their attendance.
1. More tech-savvy people may want to prove their attendance via the app (`member`)
1. _Event registration_ is for the purpose of events that need an RSVP
1. _Event invitations_ are for the purpose events that are closed to invitees
1. _Private events_ only show up in the mobile app calendars of invitees
1. There are often standardized ways to track attendance to all types of events:
   1. registered
   1. invitation only
   1. private
   1. public / open. In other words anyone can attend and can walk in off the street
1. There is often the ability to add users to the organization if they turn up to an event.
1. It is easy way to convert users to members when they attend an event.

Talawa shares these goals but also includes:
1. The ability of members invited or registered to an event to automatically be added to a group chat.
1. The ability of members attending events to be assigned tasks/roles that can be tracked in their app.

#### Other
We will not support administrative functions in the mobile app.

## General - Primary Idea Areas

This section outlines the primary features we'd like to implement in the coming months with impacts on all the applications.

Please read the `Research` section of this document for background information

### General: Basic Functionality

There are some fundamental features that the Talawa suite of applications needs to have. We provide some insights into possible actions here. Any lists in this section should be viewed as inspiration, much more could be done!

1. **Description:** Recent projects have focused on creating major improvements in the backend functionality to the detriment of fixing basic functionality in the user facing repos namely Talawa and Talawa-Admin. Our improved testing code coverage means that we get few fatal crashes, but many expected UX features don't respond as expected. For example:
   1. _Links_: Clicked links and icons are frequently unresponsive 
   1. _Event Management_: 
      1. We used to be able to assign tasks to persons invited to events and those assigned tasks would be visible in the mobile app. This no longer happens. 
      1. It would also be good for all persons assigned tasks at an event to see each other's assignments. This needs to be addressed from the mobile app end user's perspective and that of the Admin panel.
      1. Events are currently listed as sortalbe tiles. A calendar view option could be considered.
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
       1. We need an automated end to end testing regime for all three Talawa code repositories.
   1. _Timeliness_: The changes will need to be done on a weekly basis. The rest of the community will need to be made aware of changes so that they can add functionality.
1. **Expected Outcomes:** 
   1. We have documented many other areas of potential improvements in the reference links below. After reviewing the videos there, we decided to create issues to rectify some of our concerns, but soon realized that this warrants a GSoc idea of its own as some solutions to the issues will require great coordination and time.
   1. In addition to fixing the bugs above, consider any other ways of making the obviously desired  functionality of Talawa and Talawa Admin work! 
      1. This document highlights many sites and videos to aid your research.
      1. Any new features you plan to add as part of this project must be **_incremental_**, so that they can be completed in a week. We are certain that there are many opportunities to include these mini projects.
   1. We have created issues to fix some of these obvious de
   1. _**Reference links**_: These videos will be valuable in identifying obvious bugs in the functionality, and should provide you with inspiration for other simple features to be added.
      - [Talawa-Admin Video: Functionality Review 2023](https://www.youtube.com/watch?v=Rp2Juid1Qus)
      - [Talawa Video: Functionality Review 2023](https://www.youtube.com/watch?v=ix3eSReJj2k)

1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** `Admin: UI Redesign`. Many of the projects below will have some impact and you will need to coordinate with the assigned mentees for this.
1. **Project Size:** 350
1. **Possible Mentors:** Ritik Kumar Srivastava (@cyberwake), AdityaBirangal (@AdityaBirangal)
1. **Difficulty:** Medium
1. **Impact Definition:** Core development

## Mobile App - Primary Idea Areas

This section outlines the primary features we'd like to implement in the coming months for Talawa mobile app.

Please read the `Research` section of this document for background information

### Mobile App: Creating new features and refactoring existing features into Plugins

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

### Mobile App: Improved Member Management and News Feed

1. **Description:** We need to generally improve the way the apps interact with the general membership through the use of the Talawa-Admin portal. For example:
   1. Community organizations will not want to have open membership. At the moment anyone knowing the Talawa-API URL can join an organization. This could create opportunities for malicious actors.
   1. Community organizations need to be able to send notifications to all, or groups of members. This could be required for natural disasters, fundraisers, functions or other significant events. Similarly, mobile app users should be able to notify administrators of [inappropriate behavior](https://github.com/PalisadoesFoundation/talawa-api/issues/237) with the administrator having the ability to alert and eventually take disabling actions from the Admin panel.
1. **Expected Outcomes:**
   1. _New Members_
      1. There needs to be a way for pre-approved persons to join an organization with their mobile app.
      1. There must be a way to allow only certain organization members to approve new members.
      1. This feature needs to be managed via the Talawa-Admin portal.
      1. Make sure the app does not have any admin features.
   1. _Notifications_
      1. Implement in-app notification scheme that is suitable for major foreseeable use cases.
   1. _Posts Improvement_
      1. Improved user interface.
      1. Abilty to report posts and people.
      1. Ability to tag people so they can be notified.
      1. Ability to use #hashtags.
      1. User can delete a post.
      1. Feature to repost a post for better reach.
      1. Enable various reactions to a post (currently user can only like the post).
      1. Evaluate whether we need newsfeed posts with titles
      1. Think of new ways of handling the pinned posts feature
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Md Noman Khan (GitHub: noman2002)
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Mobile App: Share data between Talawa and other application suites

1. **Description:** Currently the Posts are made via Admin Portal and Users can like & comment via mobile app. An Ability to publish the posts by providing a publicly accessible link will enable app users to share the posts across other apps like Whatsapp, Twitter,etc. This will help to increase the popularity of the organization. The published post should also be SEO friendly. We also need other applications to be able to share data to talawa from where users can share content from applications like whatsapp, telegram etc. to users on talawa via chat. We really want that talawa users should also be able to have a preview of links atleast from some predefined types stated in Extected Outcomes. We it comes to user retentions we would really like to have a floating PIP mode for the links that have playable video links similar to what telegram and whatsapp have fro youtube videos.
1. **Expected Outcomes:**
   1. Design public posts API and data models.
      1. Ability to share them to others apps via Mobile app.
      2. Implementing logic for built-in SEO for the post.
   2. Implement data sharing to/from talawa.
      1. Ability to share post from talawa to other applications.
      2. Post shared should open directly inside app if installed similar to invite feature implemented.
      3. Ability to share plain text, images or both to talawa users in chat from other applicatio similar to telegram, whatsapp, stack have.
      4. This might also require updating changes in chat schema.
      5. Ablity to have a link preview of all the links.(Open for who you want to implement this)
      6. Have a PIP mode for videos to be played inside Talawa when app is in forground or background state.
      7. Links which have a playable video file like youtube etc should have a PIP compatibility.
      8. Links should open inside in-app browser or the dedicated application if installed.
      9. Link preview should also be available for posts on platform and any potential place.
2. **Repos to update:** Talawa, Talawa-Admin, Talawa-API.
3. **Skills Required:** Code stacks related to repos above. See introduction section.
4. **Depends on Project:** None
5. **Project Size:** 350 hours
6. **Possible Mentors:** Ritik Kumar Srivastava (@cyberwake), Tasneem Koushar (@tasneemkoushar)
7. **Difficulty:** Medium/Hard
8. **Impact Definition:** Core development, Risky/Exploratory

## API - Primary Idea Areas

This section outlines the primary features we'd like to implement in the coming months for Talawa API.

Please read the `Research` section of this document for background information

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

### API: Improved Backend Performance and Security

1. **Description:** The backend has some known deficiencies that need to be addressed.
   1. The current graphQL implementation uses many anti-graphQL patterns. The root Query field should be used sparingly. All the data required by the client which is relational should be queriable under a single query field. Relay's node interface pattern needs to be introduced to make querying data objects which implement the node interface at any level therefore reducing the use of root Query field unnecessarily.
   1. The resolvers need to be batched to avoid N+1 query problem in graphQL.
   1. Computationally expensive relation fields in schema should be smartly resolved only when the clients specifically ask for those fields in their queries. Also circular references should be avoided whereever possible. The relation flow should always strive to go from the parent objects to child objects and not the other way around.
   1. There needs to be a query cost analysis system which makes sure that clients can't make an enormously big query that could take down the database itself because of computational cost.
   1. There needs to be strict input validation system which enforces certain conditions on the clients regarding the input they're sending through their queries. These checks would make sure that the incoming input from the clients is within the expected range of what the business layer expects.
   1. The API allows anyone to do updates. There is security by obfuscation where capabilities are not presented to the user, but are still available. This allows for malicious actors to adversely affect organizations.
   1. Data is insufficiently encrypted
   1. There needs to be a proper system in place to monitor changes in the graphQL schema. The schema should not introduce breaking changes without prior notice to the clients. Clients should be aware of all the changes happening in the schema so that they're able to migrate their code to work with the newer schema easily. Most of the times deprecated fields in the schema can be supported for long durations of time because graphQL gives us this flexibility.
1. **Expected Outcomes:**
   1. _Dependencies_
      1. We need to ensure that all dependencies are up to date. Some of the packages used are deprecated, some are not being actively maintained. If not fixed, this will put all future changes to the repository at risk. Don't just consider upgrades, also think of what packages are best for the long term viability of Talawa-API and why.
      1. Research and implement ways to ensure that pull requests are automatically generated whenever dependencies need to be updated.
   1. _GraphQL_
      1. Implement ways to resolve relational data whereever possible within a single query reducing the need to introduce fields on root Query type unnecessarily.
      1. Research and implement ways to batch queries for optimization.
      1. Implement ways to prevent resolving certain computationally expensive fields unless the clients explicitly asks for them.
      1. Implement a system for query cost analysis for incoming graphQL queries.
      1. Evaluate and code ways to selectively cache data for reuse depending on the use case.
      1. Update the client apps to make use of graphQL's data normalization feature.
   1. _Input Validation_
      1. Research and implement ways to valdate user input.
      1. Implement a functionality to return proper errors to the clients describing exactly the problems their input has. A certain level of immutability should be present so that the clients designing their UI behaviours according to these errors don't have to deal with their UI implementations breaking because of changes in returned errors.
      1. The strategy should take type-safety and code reuse into consideration.
   1. _Access Security_
      1. Implement roles tied to access and refresh token keys
   1. _Encryption_
      1. Implement ways to encrypt all information exchanged between the API, the mobile app and the Talawa Admin portal.
      1. Implement ways to encrypt PII data stored on disk.
   1. _GraphQL schema monitoring_
      1. Implment ways to monitor different level of changes in the graphQL schema.
      1. Implement ways to inform clients of newly added, deprecated or removed fields from the graphQL schema.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** "API and Mobile App: E2E encryption and security improvement in Talawa and Talawa-API"
1. **Project Size:** 350 hours
1. **Possible Mentors:** Kevonia Tomlinson (GitHub: Kevoniat)
1. **Difficulty:** Medium
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
7. **Project Size:** 350 hours
8. **Possible Mentors:** Sumitra Saksham (@sumitra19jha)
9.  **Difficulty:** Hard
10. **Impact Definition:** Risky/Exploratory

### API and Mobile App: E2E encryption and security improvement in Talawa and Talawa-API.

1. **Description:** Currently passwords from frontend are sent on plain text format to the server which is not good to have since these can we tracked by tracing HTTP calls over the network. We want to improve this and send password in SHA256 format before hand to discourage such tracing and minimise direct acctacks on server. We also want that our server's should only respond to authorised cliend hence we figured out to implement SSL pining. In our case we cannot do this by hardcoding the certificated in our client rather we would have to do is dynamically by publically sending a signed certificate only when the user is authorised added he can only download that once per login. This require changes to be made on Talawa graphQL client and in the talawa-api to be able to send signed certificate. Followed by this we want our users to not think of there privacy just focus on sharing text to there peers by making there chat private to them only.
1. **Expected Outcomes:**
   1. Design changes in API.
      1. Makeing login and signup mutations only public mutution which work without SSL pining.
      2. Make a new mutation/query to allow download of signed certificate on talawa.
      3. Ability to store/retrieve chats in E2E encryted form.
   2. Implement E2E in talawa.
      1. Passwords in login and signup mutations should be sent to server after undergoing a SHA256 encryption only.
      2. Soon after successful authorisation signed certificate needs to be downloaded which is needed to be attached with every call except login, signup and reset password.
      3. Ability to make E2E for one to one chat in the initial phase. Followed by group chats.
   3. Implement E2E in talawa-admin
      1. Send password in SHA256 format rather then sending them in plain text format. Also SSL pining in admin portal can we done in the conventional way by added a presigned certificate before deploying. Making things easier on admin side.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin.
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** "API: Improved Backend Performance and Security"
1. **Project Size:** 350 hours
1. **Possible Mentors:** TBD - Md Noman Khan (GitHub: noman2002)
1. **Difficulty:** Medium/Hard
1. **Impact Definition:** Core development, Risky/Exploratory

## Admin - Primary Idea Areas

This section outlines the primary features we'd like to implement in the coming months for Talawa Admin.

Please read the `Research` section of this document for background information

### Admin: UI Redesign

We always need intuitive layouts and workflows. This applies to both existing features that could be improved or made functional in this area and brand new ones you consider. Any lists in this section should be viewed as inspiration, much more could be done!

1. **Description:** The current Talawa-Admin design is insufficiently intuitive. There are also many buttons that are unused without any indication that they are disabled. We need a UI that considers the users perspective. This should be done with the following general considerations
   1. Deployment: We want to avoid the size of any required initial monolithic change. Changes must be incremental, possibly one screen at a time. All tests must pass with each change.
   1. Layouts: Layouts will need to be created for use by other members to implement features. This may be facilitated by creating standardized templates for commonly expected functions that could be added to the repository.
   1. Devices: The new design must be reactive, automatically adjusting the layout for all sizes of screens including but not limited to desktop, laptop, tablet and phone devices.
   1. Timeliness: The changes will need to be done on a weekly basis. The rest of the community will need to be made aware of changes so that they can add functionality.
   1. Placeholders: We want placeholder links for all planned features as a reminder that they need to be implemented. These unused placeholders should be greyed out.
   1. Coding: We expect the layouts to be coded in Typescript by the person assigned this idea
1. **Expected Outcomes:** This is a sub-set of the features we feel could be added:
   1. A NavBar focusing on on overall dashboard, Talawa newsfeed, people in the organization, tags for grouping people, organization events and plugins
   1. Improved intuitive layouts and workflows for:
       1. Managing multiple organizations
       1. Doing CRUD activities 
       1. Filtering people and tags
       1. Viewing organization events
       1. Requesting volunteers at events
       1. Doing event checkins
       1. Managing pinned posts on the newsfeed
   1. A properly documented design system and style guide added to the Talawa-Docs repository
   1. Any existing non-functioning features in these areas will need to be resolved.
   1. There are other ideas that will depend on this work. You must think of ways where all participants can add pages according to your design specification without interrupting the speed of development. Strategies for incremental versus monolithic change must be considered.
   1. Any others you can think of!   
   1. _**Reference links**_: We realize that you may be new to the world of community management. These links should be used as a non-exhaustive guide.
      - [Talawa-Admin Ideas for 2023](https://www.youtube.com/watch?v=GbUFB5V_1uM)
      - [Inspiration demo site](https://www.breezechms.com/)
      - [YouTube Inspiration #1](https://www.youtube.com/@breezechms/videos)
      - [YouTube Inspiration #2](https://www.youtube.com/@ChurchTracSoftware/videos)
      - [YouTube Inspiration #3](https://www.youtube.com/@faithteams)
      - [YouTube Inspiration #4](https://www.youtube.com/@ChurchTracSoftware/videos)
      - [YouTube Inspiration #5](https://www.youtube.com/watch?v=pK4R2-8iPJE)
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** `General: Basic Functionality`
1. **Project Size:** 350
1. **Possible Mentors:** Anwer Sayeed (Github: @anwersayeed), Muskan Modi (Github: @muskan399)
1. **Difficulty:** Medium
1. **Impact Definition:** Core development

### Admin: Improved Event Management

We always need intuitive layouts and workflows. This applies to both existing features that could be improved or made functional in this area and brand new ones you consider. Any lists in this section should be viewed as inspiration, much more could be done! 

1. **Description:** There are many ways in which event management could be improved for the benefit of administrators who are constantly having to manage their volunteers and track the successes of the events they manage.
   1. **Volunteer Management**: The mobile app allows people to create calendars and add volunteers for specific roles. This is good for creating adhoc events by organization members. There needs to be a way for the organization's administrators to manage event volunteers:
   1. **Checkins**: We need a way for Admin users to track who attended what event and when. Administrators cannot depend on people using their phones to do this, so it will need to be done by volunteers using Talawa-Admin. This is important for many reasons:
       1. Security: Some organizations have events that provide child care.
       1. Management: The ability to track attendance trends and investigate ways to improve it.
1. **Expected Outcomes:** This is a sub-set of the features we feel could be added:
   1. **Event Calendar**:
      1. The organization's event calendar needs to more closely resemble a calendar.
   1. **Volunteer Management**: 
      1. Easily add custom role tags to members of the organization
      1. Create groups and sub-groups of member tags for ease of categorization. (eg. Cooks. Barbeque cooks)
      1. Manually add members to an organization and match them to existing mobile users if they exist. (Not all members will use phones)
      1. See all scheduled events in an organization wide calendar.
      1. Assign volunteers to any event.
      1. Assign leaders to any event.
      1. Mobile app notification when someone has been added as "Volunteer".
      1. Upcoming events for volunteers in mobile app.
      1. Any others you can think of!   
      1. _**Reference links**_: We realize that you may be new to the world of community management. These links should be used as a non-exhaustive guide.
         - [Talawa-Admin Ideas for 2023](https://www.youtube.com/watch?v=GbUFB5V_1uM)
         - [Inspiration demo site](https://www.breezechms.com/)
         - [YouTube Inspiration #1](https://www.youtube.com/watch?v=0NFze2bM5eE)
         - [YouTube Inspiration #2](https://www.youtube.com/watch?v=C36muVg39XU)
      
   1. **Checkins**
      1. Attendance registration for care givers and those they care for
      1. The ability to print sticky labels for attendees
      1. Safeguards to make sure parents of children are easily matched
      1. An event dashboard listing attendees and contact details
      1. Attendance reporting over date ranges
      1. Notifications when people stop attending
      1. The ability to limit volunteers using Admin to only the checkin screens
      1. Usability on a variety of screen sizes
      1. Ability to send notification directly on mobile app (example: any urgent information to be circulated while onging event).
      1. Dashboards showing attendance stats for single and recurring events
      1. Any others you can think of!
      1. _**Reference links**_: We realize that you may be new to the world of community management. These links should be used as a non-exhaustive guide.
         - [Talawa-Admin Ideas for 2023](https://www.youtube.com/watch?v=GbUFB5V_1uM)
         - [Inspiration demo site](https://www.breezechms.com/)
         - [YouTube Inspiration #1](https://www.youtube.com/watch?v=TOxBoMVWaF4)
         - [YouTube Inspiration #2](https://www.youtube.com/watch?v=PqAfFs30-vY)
         - [YouTube Inspiration #3](https://www.youtube.com/watch?v=m7QuswGy0v4)
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** `Admin: UI Redesign`
1. **Project Size:** 350
1. **Possible Mentors:** Dominic Mills (GitHub: DMills27)
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Admin: Improved People and Newsfeed Management

We always need intuitive layouts and workflows. This applies to both existing features that could be improved or made functional in this area and brand new ones you consider. Any lists in this section should be viewed as inspiration, much more could be done!

1. **Description:**  The Talawa admin panel does not intuitively manage people assigned to an organization. We need:
1. **Expected Outcomes:** This is a sub-set of the features we feel could be added. 
   1. **People and Tags**: The ability to easily:
      1. see listings of users
      1. search and filter for users by assigned tag or profile characteristic
      1. implement CRUD management for all 
   1. **Newsfeed**: The ability to easily:
      1. view and post to the talawa newsfeed
      1. respond to reported newsfeed posts and take appropriate action
      1. pin posts to the top of the newsfeed 
   1. Any others you can think of!
   1. _**Reference links**_: We realize that you may be new to the world of community management. These links should be used as a non-exhaustive guide.
      - [Talawa-Admin Ideas for 2023](https://www.youtube.com/watch?v=GbUFB5V_1uM)
      - [YouTube Inspiration #1](https://www.breezechms.com/)
      - [YouTube Inspiration #2](https://www.youtube.com/watch?v=m7QuswGy0v4)
      - [YouTube Inspiration #3](https://www.youtube.com/watch?v=uqPCLMYB8DA)
1. **Repos to update:** Talawa-API, Talawa-Admin, Talawa
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** `Admin: UI Redesign`
1. **Project Size:** 350 hours
1. **Possible Mentors:** Anthony Brown (github: tonythegr8)
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Admin: Multi-Tennancy (Cloud)

1. **Description:** Create a way to easily manage multiple instances of Talawa-API from a single Talawa-Admin panel. This would provide control over multiple communities (parent organizations) and their respective (child) organizations.
2. **Expected Outcomes:**
   1. Research and suggest a preferred way of implementing this strategy.
   2. Implement the strategy so that it is transparent to the mobile app.
   3. Code ways to configure this solution simply via the Admin portal.
   4. Think of:
      1. New levels of authorization and security that may be required.
      2. Architectures that would facilitate moving a community from one server to another on a completely different set of infrastructure.
      3. Interesting features that would be required for this to be implemented. 
3. **Repos to update:** Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** None
6. **Project Size:** 350 hours
7. **Possible Mentors:** Sumitra Saksham (@sumitra19jha), Eva Sharma (@evasharma12)
8. **Difficulty:** Hard
9. **Impact Definition:** Core development, Risky/Exploratory

## Hybrid - Primary Ideas

We realize that this list isn't exhaustive. There are many more opportunities that could be converted into project ideas and proposals. If this is what insprires you, then investigate this section

### Hybrid: Hybrid Innovation

1. **Description:** Do the ideas need something more? What completely new thoughts could be applied to the existing ideas? If you have answers to these questions then this section is for you.
2. **Expected Outcomes:** Your proposal must meet the guidelines below. They must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   1. Add completely new features not previously stated in ideas.
   2. Create features that users will want or facilitate new features that will be the goundwork for features that they would want.
   3. Justify 350 hours of work.
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6.  **Project Size:** 350
7.  **Possible Mentors:** Sagar Utekar (@Sagar2366)
8.  **Difficulty:** Medium
9.  **Impact Definition:** Risky/Exploratory

## Secondary Idea Areas

We have other areas that need good ideas. This section highlights some primary areas of focus.

### Backend Improvements

Take a look at the [Desired Features](https://docs.talawa.io/docs/features/features-introduction) section for guidance on what we'd like to achieve. Use these to create a unique vision of what you think Talawa could become.

Don't be limited by our desired features. Think of new areas of functionality for the various repos. How could it be better for both the end user and administrators?

Remember, preparing the backend for future features and creating intuitive ways of user interaction with the backend will be important.

### Operational Considerations

Many community hosting their own solution won't have the funds to pay for additional services. They will be using slower, older equipment with limited storage. There will be low technical ability too. In many cases the users may not have completed schooling. Ideas on how to resolve these issues will be helpful.
