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

The test percent code coverage requirement will incrementally rise with each pull request. In some cases, you may have to write a few extra tests for code you may not have updated. We hope this will be rare.

### Repository Languages and Skills

Here is a list of basic skills that will be required for each repository.

1. **Talawa:** Flutter / Dart, GraphQL
1. **Talawa-API:** Typescript, GraphQL, MongoDB
1. **Talawa-Admin Portal:** TypeScript

There are others, but these are the primary ones that will guide your contributions.

### Impact Definition

We have categorized the various ideas according to the degree of impact they will have on the project. Use these definitions to understand how each idea will affect our overall project goals.

1. **Low-hanging fruit:** These projects require minimal familiarity with the codebase and basic technical knowledge. They are relatively short, with clear goals.
1. **Risky/Exploratory:** These projects push the scope boundaries of our development efforts. They might require expertise in an area not covered by our current development team. They might take advantage of new technology. There is a reasonable chance that the project might be less successful, but the potential rewards make it worth the attempt.
1. **Fun/Peripheral:** These projects might not be related to the current core development focus, but create innovations and a new perspective for our project.
1. **Core development:** These projects derive from the ongoing work from the core of our development team. The list of features and bugs is never-ending, and help is always welcome.
1. **Infrastructure/Automation:** These projects are the code that our organization uses to get our development work done; for example, projects that improve the automation of releases, regression tests and automated builds. This is a category in which a contributor can be really helpful, doing work that the development team has been putting off while they focus on core development.

### Difficulty

Most of our project ideas require knowledge of two or more programming languages. Meaningful PRs that prove your understanding of the repos will always be beneficial. We have created testing issues specifically for this purpose.

1. **Hard:** Requires dominion of the language used by the repo most affected by the project. A good working knowledge of the languages used by other affected repositories will be needed.
1. **Medium:** A good working knowledge of the languages used by affected repositories will be needed.
1. **Easy:** A beginner's level knowledge of the languages is sufficient.

### Research

Talawa is a suite of applications that are aimed at managing the memberships of community-based organizations. This concept may be new to you and we suggest you research Church and/or Temple Management Software as a starting point. Talawa needs to have a broader reach and your additions to our ideas will make the difference. We have included links to YouTube videos on this page that will be useful in improving your understanding.

Your solution should ideally consider the:

1. the ability of typical small community organizations with limited resources to:
   1. get tech support to maintain the application
   1. have tech-savvy users
   1. afford long-term costs 
   1. need all membership information completely under their control
   1. manage services outside the applications
1. impact of using third-party services
1. performance / usability tradeoffs
1. potential data residency law requirements

#### Events

Event management is a big part of community organization management apps. This is how it often works using the Talawa terminology of `member` who is a `user` who has access to the mobile app:

1. Some people may attend events regularly and never use a mobile app (`user`), but administrators will want to track their attendance.
1. More tech-savvy people may want to prove their attendance via the app (`member`)
1. _Event registration_ is for the purpose of events that need an RSVP
1. _Event invitations_ are for the purpose of events that are closed to invitees
1. _Private events_ only show up in the mobile app calendars of invitees
1. There are often standardized ways to track attendance at all types of events:
   1. registered
   1. invitation only
   1. private
   1. public / open. In other words, anyone can attend and can walk in off the street
1. There is often the ability to add users to the organization if they turn up to an event.
1. It is an easy way to convert users to members when they attend an event.

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

1. **Description:** Recent projects have focused on creating major improvements in the backend functionality to the detriment of fixing basic functionality in the user-facing repos namely Talawa and Talawa-Admin. Our improved testing code coverage means that we get few fatal crashes, but many expected UX features don't respond as expected. For example:
   1. _Links_: Clicked links and icons are frequently unresponsive 
   1. _Event Management_: 
      1. We used to be able to assign tasks to persons invited to events and those assigned tasks would be visible in the mobile app. This no longer happens. 
      1. It would also be good for all persons assigned tasks at an event to see each other's assignments. This needs to be addressed from the mobile app end user's perspective and that of the Admin panel.
      1. Events are currently listed as sortable tiles. A calendar view option could be considered.
   1. _Image Management_: Image uploads don't function as expected.
   1. _Layouts_: Not all elements in the mobile app respond to changes between light to dark modes.
   1. _Updates_: Many menus don't allow updates or don't allow you to edit all the fields added when the menu item was created.
   1. _Newsfeed_: The layout of the mobile app newsfeed is not intuitive. Adding items to this newsfeed needs to function like other well-known mobile apps with this feature.
   1. _Chat_: 
       1. Creating new chats in the mobile app causes it to crash.
       1. Persons invited to events should be automatically added to the event chat groups, but this does not occur.
       1. Verify and correct if necessary whether removing someone from an event invitee list removes them from the group chat.
   1. _Errors_: Though we have a standard error widget in the mobile app, it is not used for all error reporting, nor does the widget log to the console for troubleshooting.
   1. _Testing_: 
       1. Test code coverage in the mobile app lags that of the other Talawa apps. It should ideally be above 90%
       1. We need an automated end-to-end testing regime for all three Talawa code repositories.
   1. _Timeliness_: The changes will need to be done weekly. The rest of the community will need to be made aware of changes so that they can add functionality.
1. **Expected Outcomes:** 
   1. We have documented many other areas of potential improvements in the reference links below. After reviewing the videos there, we decided to create issues to rectify some of our concerns but soon realized that this warrants a GSoC idea of its own as some solutions to the issues will require great coordination and time.
   1. In addition to fixing the bugs above, consider any other ways of making the desired functionality of Talawa and Talawa Admin work! 
      1. This document highlights many sites and videos to aid your research.
      1. Any new features you plan to add as part of this project must be **_incremental_**, so that they can be completed in a week. We are certain that there are many opportunities to include these mini-projects.
   1. We have created issues to fix some of these obvious de
   1. _**Reference links**_: These videos will be valuable in identifying obvious bugs in the functionality, and should provide you with inspiration for other simple features to be added.
      - [Talawa-Admin Video: Functionality Review 2023](https://www.youtube.com/watch?v=Rp2Juid1Qus)
      - [Talawa Video: Functionality Review 2023](https://www.youtube.com/watch?v=ix3eSReJj2k)

1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** `Admin: UI Redesign`. Many of the projects below will have some impact and you will need to coordinate with the assigned mentees for this.
1. **Project Size:** 350
1. **Possible Mentors:** Ritik Kumar Srivastava (@cyberwake), AdityaBirangal (@AdityaBirangal)
1. **Difficulty:** Medium
1. **Impact Definition:** Core development

## Mobile App - Primary Idea Areas

This section outlines the primary features we'd like to implement in the coming months for Talawa mobile app.

Please read the `Research` section of this document for background information

### Mobile App: Creating new features and refactoring existing features into Plugins

1. **Description:** Many features are useful but are not necessary for the base Talawa app and would be better suited as plugins. The goal of this task is to refactor the existing plugins such as Newsfeed Advertising, Spam Mitigation, Inter-group Messaging, Analytics Integration, Check-ins functionality, etc. We recommended that you use our [Plugin Guide](https://docs.talawa.io/docs/functionalities/plugin-architecture). The scope of the Newsfeed Advertising and Spam Mitigation are given below. They can act as a template for any additional plugins you wish to discuss with the mentors.
   1. **Newsfeed Advertising**:
      1. Community organizations often rely on the support of local businesses. This plugin would allow companies to advertise on the mobile application newsfeed. The plugin must consider both inexperienced advertisers who will only provide an image or video, and those who are more experienced users of online platforms.
      1. **Features**
         1. The type of content and ways to upload and display it (product placement) must be considered.
         1. The plugin must provide a comprehensive set of advertising campaign features.
         1. Integration with other advertising platforms should be considered.
   2. **Spam Mitigation**:
      1. Detect whether a user is spamming organization chat and news feed messages.
      2. **Features:**
         1. A reliable method to intercept new messages
         1. An accurate subsystem to evaluate the `spamminess` of messages using both implied and explicit triggers.
         1. Notification of the Talawa-Admin users of potential spam
         1. Creation of ways to ban both infringing and related users.
         1. This should ideally be a plugin so that administrators can eventually select the anti-SPAM engine of their choice.
1. **Expected Outcomes:**
   1. _Architectural Design_
      1. Easy to install, enable and remove either online or by uploading code
      1. Able to be installed, activated and configured at the global and/or per-organization level served by the API.
      1. Easy to configure in the Talawa-Admin portal.
   1. _Plugin - Donations, Member Fees and Paid Events_
      1. Organization admins must be able to install and enable the plugin.
      1. Allow organizations exposure to different types of customizable services and activities, which can be both one-time or recurring.
      1. Mobile app users must be able to select their preferred options easily and intuitively.
      1. The mobile app must be plugin aware
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Dominic Mills (GitHub: DMills27)
1. **Difficulty:** Hard
1. **Impact Definition:** Core development

### Mobile App: Improved Member Management and News Feed

1. **Description:** We need to generally improve the way the apps interact with the general membership through the use of the Talawa-Admin portal. For example:
   1. Community organizations will not want to have open membership. At the moment anyone knowing the Talawa-API URL can join an organization. This could create opportunities for malicious actors.
   1. Community organizations need to be able to send notifications to all, or groups of members. This could be required for natural disasters, fundraisers, functions or other significant events. Similarly, mobile app users should be able to notify administrators of [inappropriate behaviour](https://github.com/PalisadoesFoundation/talawa-api/issues/237) with the administrator having the ability to alert and eventually take disabling actions from the Admin panel.
1. **Expected Outcomes:**
   1. _New Members_
      1. There needs to be a way for pre-approved persons to join an organization with their mobile app.
      1. There must be a way to allow only certain organization members to approve new members.
      1. This feature needs to be managed via the Talawa-Admin portal.
      1. Make sure the app does not have any admin features.
   1. _Notifications_
      1. Implement an in-app notification scheme that is suitable for major foreseeable use cases.
   1. _Posts Improvement_
      1. Improved user interface.
      1. Ability to report posts and people.
      1. Ability to tag people so they can be notified.
      1. Ability to use #hashtags.
      1. User can delete a post.
      1. Feature to repost a post for better reach.
      1. Enable various reactions to a post (currently user can only like the post).
      1. Evaluate whether we need newsfeed posts with titles
      1. Think of new ways of handling the pinned posts feature
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Md Noman Khan (GitHub: noman2002)
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Mobile App: Share data between Talawa and other application suites

1. **Description:** Currently the Posts are made via Admin Portal and Users can like & comment via the mobile app. An Ability to publish the posts by providing a publicly accessible link will enable app users to share the posts across other apps like Whatsapp, Twitter, etc. This will help to increase the popularity of the organization. The published post should also be SEO friendly. We also need other applications to be able to share data to talawa from where users can share content from applications like whatsapp, telegram etc. to users on talawa via chat. We want that talawa users should also be able to have a preview of links at least from some predefined types stated in Expected Outcomes. When it comes to user retention we would like to have a floating PIP mode for the links that have playable video links similar to what telegram and whatsapp have for youtube videos.
1. **Expected Outcomes:**
   1. Design public posts API and data models.
      1. Ability to make posts public via Admin Portal.
      1. Ability to share them with other apps via Mobile app.
      1. Implementing logic for built-in SEO for the post.
      1. Admin should be able to make posts to the newsfeed.
   1. Implement data sharing to/from talawa.
      1. Ability to share a post from talawa to other applications.
      2. Post shared should open directly inside the app if installed similar to the invite feature implemented.
      3. Ability to share plain text, images or both to talawa users in chat from other applications similar to telegram, whatsapp, stack have.
      4. This might also require updating changes in the chat schema.
      5. Ability to have a link preview of all the links.(Open for whom you want to implement this)
      6. Have a PIP mode for videos to be played inside Talawa when the app is in the foreground or background state.
      7. Links which have a playable video file like youtube etc should have PIP compatibility.
      8. Links should open inside the in-app browser or the dedicated application if installed.
      9. Link preview should also be available for posts on the platform and any potential place.
1. **Repos to update:** Talawa, Talawa-Admin, Talawa-API.
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** To be decided
1. **Difficulty:** Medium/Hard
1. **Impact Definition:** Core development, Risky/Exploratory

## API - Primary Idea Areas

This section outlines the primary features we'd like to implement in the coming months for Talawa API.

Please read the `Research` section of this document for background information

### API: Multi-Tenancy

1. **Description:** Create a way to separate different API instances using a data segregation strategy to best optimise resources. We will likely want to host Talawa as a service. Designing a solution to this problem is therefore required.
1. **Expected Outcomes:**
   1. Research and suggest a preferred way of implementing this strategy.
   1. Implement the strategy so that it is transparent to the mobile app.
   1. Code ways to configure this solution simply via the Admin portal.
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Mikey Lue (GitHub: JamaicanFriedChicken)
1. **Difficulty:** Hard
1. **Impact Definition:** Core development, Risky/Exploratory

### API: Improved Backend Performance and Security

1. **Description:** The backend has some known deficiencies that need to be addressed.
   1. The current graphQL implementation uses many anti-graphQL patterns. The root Query field should be used sparingly. All the data required by the client which is relational should be queriable under a single query field. Relay's node interface pattern needs to be introduced to make querying data objects which implement the node interface at any level, therefore, reducing the use of the root Query field unnecessarily.
   1. The resolvers need to be batched to avoid the N+1 query problem in graphQL.
   1. Computationally expensive relation fields in schema should be smartly resolved only when the clients specifically ask for those fields in their queries. Also, circular references should be avoided wherever possible. The relation flow should always strive to go from the parent objects to the child objects and not the other way around.
   1. There needs to be a query cost analysis system which makes sure that clients can't make an enormously big query that could take down the database itself because of computational cost.
   1. There needs to be a strict input validation system which enforces certain conditions on the clients regarding the input they're sending through their queries. These checks would make sure that the incoming input from the clients is within the expected range of what the business layer expects.
   1. The API allows anyone to do updates. There is security by obfuscation where capabilities are not presented to the user but are still available. This allows malicious actors to adversely affect organizations.
   1. Data is insufficiently encrypted
   1. There needs to be a proper system in place to monitor changes in the graphQL schema. The schema should not introduce breaking changes without prior notice to the clients. Clients should be aware of all the changes happening in the schema so that they're able to migrate their code to work with the newer schema easily. Most of the time deprecated fields in the schema can be supported for long durations of time because graphQL gives us this flexibility.
1. **Expected Outcomes:**
   1. _Dependencies_
      1. We need to ensure that all dependencies are up to date. Some of the packages used are deprecated, and some are not being actively maintained. If not fixed, this will put all future changes to the repository at risk. Don't just consider upgrades, also think of what packages are best for the long-term viability of Talawa-API and why.
      1. Research and implement ways to ensure that pull requests are automatically generated whenever dependencies need to be updated.
   1. _GraphQL_
      1. Implement ways to resolve relational data wherever possible within a single query reducing the need to introduce fields on root Query type unnecessarily.
      1. Research and implement ways to batch queries for optimization.
      1. Implement ways to prevent resolving certain computationally expensive fields unless the clients explicitly ask for them.
      1. Implement a system for a query cost analysis for incoming graphQL queries.
      1. Evaluate and code ways to selectively cache data for reuse depending on the use case.
      1. Update the client apps to make use of graphQL's data normalization feature.
   1. _Input Validation_
      1. Research and implement ways to validate user input.
      1. Implement functionality to return proper errors to the clients describing exactly the problems their input has. A certain level of immutability should be present so that the clients designing their UI behaviours according to these errors don't have to deal with their UI implementations breaking because of changes in returned errors.
      1. The strategy should take type safety and code reuse into consideration.
   1. _Access Security_
      1. Implement roles tied to access and refresh token keys
   1. _Encryption_
      1. Implement ways to encrypt all information exchanged between the API, the mobile app and the Talawa Admin portal.
      1. Implement ways to encrypt PII data stored on disk.
   1. _GraphQL schema monitoring_
      1. Implement ways to monitor the different levels of changes in the graphQL schema.
      1. Implement ways to inform clients of newly added, deprecated or removed fields from the graphQL schema.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** Kevonia Tomlinson (GitHub: Kevoniat)
1. **Difficulty:** Medium
1. **Impact Definition:** Core development, Risky/Exploratory

### API and Mobile App: E2E encryption and security improvement in Talawa and Talawa-Api.

1. **Description:** Currently passwords from the frontend are sent in plain text format to the server which is not good to have since these can be tracked by tracing HTTP calls over the network. We want to improve this and send the password in SHA256 format beforehand to discourage such tracing and minimise direct attacks on the server. We also want that our servers should only respond to authorised clients hence we figured out to implement SSL pinning. In our case we cannot do this by hardcoding the certificate in our client rather we would have to do is dynamically by publically sending a signed certificate only when the user is authorised and added he can only download that once per login. This requires changes to be made on Talawa graphQL client and in the talawa-api to be able to send signed certificates. Followed by this we want our users to not think of their privacy and just focus on sharing text with their peers by making their chat private to them only.
1. **Expected Outcomes:**
   1. Design changes in API.
      1. Making login and signup mutations only public mutations which work without SSL pining.
      2. Make a new mutation/query to allow the download of a signed certificate on talawa.
      3. Ability to store/retrieve chats in E2E encrypted form.
   2. Implement E2E in talawa.
      1. Passwords in login and signup mutations should be sent to the server after undergoing a SHA256 encryption only.
      2. Soon after successful authorisation signed certificate needs to be downloaded which is needed to be attached with every call except login, signup and reset password.
      3. Ability to make E2E for a one-to-one chat in the initial phase. Followed by group chats.
   3. Implement E2E in talawa-admin
      1. Send passwords in SHA256 format rather than sending them in plain text format. Also, SSL pining in the admin portal can be done conventionally by adding a pre-signed certificate before deploying. Making things easier on the admin side.
1. **Repos to update:** Talawa, Talawa-API, Talawa-Admin.
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** None
1. **Project Size:** 350 hours
1. **Possible Mentors:** To be decided
1. **Difficulty:** Medium/Hard
1. **Impact Definition:** Core development, Risky/Exploratory

## Admin - Primary Idea Areas

This section outlines the primary features we'd like to implement in the coming months for Talawa Admin.

Please read the `Research` section of this document for background information

### Admin: UI Redesign

We always need intuitive layouts and workflows. This applies to both existing features that could be improved or made functional in this area and brand-new ones you consider. Any lists in this section should be viewed as inspiration, much more could be done!

1. **Description:** The current Talawa-Admin design is insufficiently intuitive. Many buttons are unused without any indication that they are disabled. We need a UI that considers the user's perspective. This should be done with the following general considerations
   1. Deployment: We want to avoid the size of any required initial monolithic change. Changes must be incremental, possibly one screen at a time. All tests must pass with each change.
   1. Layouts: Layouts will need to be created for use by other members to implement features
   1. Timeliness: The changes will need to be done weekly. The rest of the community will need to be made aware of changes so that they can add functionality.
   1. Placeholders: We want placeholder links for all planned features as a reminder that they need to be implemented. These unused placeholders should be greyed out.
   1. Coding: We expect the layouts to be coded in Typescript by the person assigned this idea
1. **Expected Outcomes:** This is a subset of the features we feel could be added:
   1. A NavBar focusing on the overall dashboard, Talawa newsfeed, people in the organization, tags for grouping people, organization events and plugins
   1. Improved intuitive layouts and workflows for:
       1. Managing multiple organizations
       1. Doing CRUD activities for people, tags and events
       1. Filtering people and tags
       1. Viewing organization events
       1. Requesting volunteers at events
       1. Doing event check-ins
       1. Managing pinned posts on the newsfeed
   1. A properly documented design system and style guide added to the Talawa-Docs repository
   1. Any existing non-functioning features in these areas will need to be resolved.
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
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** `General: Basic Functionality`
1. **Project Size:** 350
1. **Possible Mentors:** Anwer Sayeed (Github: anwersayeed)
1. **Difficulty:** Medium
1. **Impact Definition:** Core development

### Admin: Improved Event Management

We always need intuitive layouts and workflows. This applies to both existing features that could be improved or made functional in this area and brand-new ones you consider. Any lists in this section should be viewed as inspiration, much more could be done! 

1. **Description:** There are many ways in which event management could be improved for the benefit of administrators who are constantly having to manage their volunteers and track the successes of the events they manage.
   1. **Volunteer Management**: The mobile app allows people to create calendars and add volunteers for specific roles. This is good for creating ad-hoc events by organization members. There needs to be a way for the organization's administrators to manage event volunteers:
   1. **Checkins**: We need a way for Admin users to track who attended what event and when. Administrators cannot depend on people using their phones to do this, so it will need to be done by volunteers using Talawa-Admin. This is important for many reasons:
       1. Security: Some organizations have events that provide child care.
       1. Management: The ability to track attendance trends and investigate ways to improve them.
1. **Expected Outcomes:** This is a subset of the features we feel could be added:
   1. **Event Calendar**:
      1. The organization's event calendar needs to more closely resemble a calendar.
   1. **Volunteer Management**: 
      1. Easily add custom role tags to members of the organization
      1. Create groups and sub-groups of member tags for ease of categorization. (eg. Cooks. Barbeque cooks)
      1. Manually add members to an organization and match them to existing mobile users if they exist. (Not all members will use phones)
      1. See all scheduled events in an organization-wide calendar.
      1. Assign volunteers to any event.
      1. Assign leaders to any event.
      1. Mobile app notification when someone has been added as a "Volunteer".
      1. Upcoming events for volunteers in the mobile app.
      1. Any others you can think of!   
      1. _**Reference links**_: We realize that you may be new to the world of community management. These links should be used as a non-exhaustive guide.
         - [Talawa-Admin Ideas for 2023](https://www.youtube.com/watch?v=GbUFB5V_1uM)
         - [Inspiration demo site](https://www.breezechms.com/)
         - [YouTube Inspiration #1](https://www.youtube.com/watch?v=0NFze2bM5eE)
         - [YouTube Inspiration #2](https://www.youtube.com/watch?v=C36muVg39XU)
      
   1. **Check-ins**
      1. Attendance registration for caregivers and those they care for
      1. The ability to print sticky labels for attendees
      1. Safeguards to make sure parents of children are easily matched
      1. An event dashboard listing attendees and contact details
      1. Attendance reporting over date ranges
      1. Notifications when people stop attending
      1. The ability to limit volunteers using Admin to only the check-in screens
      1. Usability on a variety of screen sizes
      1. Ability to send a notification directly on a mobile app (for example any urgent information to be circulated while an ongoing event).
      1. Dashboards showing attendance stats for single and recurring events
      1. Any others you can think of!
      1. _**Reference links**_: We realize that you may be new to the world of community management. These links should be used as a non-exhaustive guide.
         - [Talawa-Admin Ideas for 2023](https://www.youtube.com/watch?v=GbUFB5V_1uM)
         - [Inspiration demo site](https://www.breezechms.com/)
         - [YouTube Inspiration #1](https://www.youtube.com/watch?v=TOxBoMVWaF4)
         - [YouTube Inspiration #2](https://www.youtube.com/watch?v=PqAfFs30-vY)
         - [YouTube Inspiration #3](https://www.youtube.com/watch?v=m7QuswGy0v4)
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** `Admin: UI Redesign`
1. **Project Size:** 350
1. **Possible Mentors:** Dominic Mills (GitHub: DMills27)
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Admin: Improved People and Newsfeed Management

We always need intuitive layouts and workflows. This applies to both existing features that could be improved or made functional in this area and brand new ones you consider. Any lists in this section should be viewed as inspiration, much more could be done!

1. **Description:**  The Talawa admin panel does not intuitively manage people assigned to an organization. We need:
1. **Expected Outcomes:** This is a subset of the features we feel could be added. 
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
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
1. **Depends on Project:** `Admin: UI Redesign`
1. **Project Size:** 350 hours
1. **Possible Mentors:** Anthony (github: tonythegr8)
1. **Difficulty:** Medium
1. **Impact Definition:** Risky/Exploratory

### Admin: Multi-Tenancy (Cloud)

1. **Description:** Create a way to easily manage multiple instances of Talawa-API from a single Talawa-Admin panel. This would provide control over multiple parent organizations and their respective child organizations.
1. **Expected Outcomes:**
   1. Research and suggest a preferred way of implementing this strategy.
   1. Implement the strategy so that it is transparent to the mobile app.
   1. Code ways to configure this solution simply via the Admin portal.
   1. Think of:
      1. New levels of authorization and security that may be required.
      1. Interesting features that would be required for this to be implemented.
1. **Repos to update:** Talawa-API, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See the introduction section.
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

Many communities hosting their own solution won't have the funds to pay for additional services. They will be using slower, older equipment with limited storage. There will be low technical ability too. In many cases, the users may not have completed schooling. Ideas on how to resolve these issues will be helpful.
