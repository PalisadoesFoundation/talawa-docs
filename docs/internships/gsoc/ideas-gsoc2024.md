---
id: gsoc-ideas-2024
title: GSoC Ideas
---

**NOTE:** These ideas are subject to change at any time prior to us submitting our GSoC 2024 Organization application. Ideas may be added, removed or updated up to this time. 

If we are accepted, there may be additions and minor modifications.

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

Talawa is a suite of applications that are aimed at managing the memberships of community based organizations. This concept may be new to you, and we suggest you research church, temple and/or synagogue management software as a starting point. Talawa needs to have a broader reach and your additions to our ideas will make the difference. We have included links to YouTube videos on this page that will be useful in improving your understanding.

Your solution should ideally consider the:

1. ability of typical small community organizations with limited resources to:
   1. get tech support to maintain the application
   2. have tech-savvy users
   3. afford long term costs
   4. need all membership information completely under their control
   5. manage services outside the applications
2. impact of using third party services
3. performance / usability trade-offs
4. potential data residency law requirements

### Other

We will not support administrative functions in the mobile app.

## Idea Areas

This section outlines the primary features we'd like to implement in the coming months with impacts on all the applications.

Please read the `Research` section of this document for background information

### Improved File Uploads and Security

1. **Description:** We need a better solution for handling files uploaded from Talawa clients. GraphQL is unsuitable for file access and, storing files in the code tree with only a `.gitignore` file as protection is risky. 
2. **Expected Outcomes:** 
   1. Objects must be:
      1. Stored in a location outside the code tree
      2. Accessed using industry best practices and libraries that are unlikely to be deprecated or abandoned.
      3. Deduplicated.
      4. Encrypted whenever and wherever possible.
      5. Stored in the same way independent of their size, type or other characteristics.
      6. Screened for malicious content.
   2. Other
      1. By default, storage must be accessible via the system's locally accessible filesystem as a configurable parameter(s).
      2. The use of cloud storage services is discouraged at this time.
3. **References:** There have been extensive discussions about this which should help in evaluating options.
   1. https://github.com/PalisadoesFoundation/talawa-api/pull/1168
   2. https://github.com/PalisadoesFoundation/talawa-api/issues/952
4. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** N/A
7. **Project Size:** 350 hours (Large)
8. **Possible Mentors:** 
   1. Aashima Wadhwa - @aashimawadhwa (Primary)
   2. Eshaan Aggarwal - @EshaanAgg (Secondary)
9.  **Difficulty:** Medium
10. **Impact Definition:** Core development, Risky/Exploratory

### Self Hosted Chat and Notifications

1. **Description:** The Talawa apps are closely coupled with cloud services which creates operational concerns. 
    1. This greatly complicates setup as each new service requires new externally controlled configuration parameters. 
    2. It also adds greater troubleshooting and billing complexity for organizations that will not be tech-savvy. 
    3. Small organizations may also find it difficult to comply with new data residency laws when using international services. 
    
    For this idea there must be no dependency on any third party cloud service providers, all the code must run on the API server. 
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
7. **Possible Mentors:** 
   1. Dominic Mills - @DMills27 (Primary)
   2. Kevonia Tomlinson - @Kevoniat (Secondary)
8.  **Difficulty:** Medium
9.  **Impact Definition:** Core development, Risky/Exploratory

### AI: Automated Moderation, Summarization and Sentiment Analysis

1. **Description:** Implement various AI-Enhanced features that create more nuanced community interaction. Selected participants will on work solutions that are relatively easy to implement and  then integrate these key features in the Talawa Mobile App, for potential use by organizations that have limited resources.

2. **Expected Outcomes:** Consider ways to:
   1. Integrate sentiment analysis to gauge the emotional tone of discussions, helping to identify and address potential issues within the community.
   2. Use AI-powered summarization techniques to generate concise summaries of lengthy discussions or documents, making it easier for users to grasp key points. 
   3. Use natural language processing (NLP) algorithms to automate content moderation, identifying and flagging inappropriate or spammy content.
3. **Reference:** An Admin must not rely exclusively on AI for the features you suggest as they may not choose to activate AI.
4. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** N/A
7. **Project Size:** 350
8. **Possible Mentors:**
   1. Tasneem Koushar - @tasneemkoushar (Primary)
9.  **Difficulty:** Medium
10. **Impact Definition:** Risky/Exploratory

### AI: Predictive Task Management and User Engagement with Collaborative Filtering

1. **Description:** Create features which anticipate user interactions, receive collaborative recommendations, and streamline task management with data-driven insights. These practical enhancements will optimize engagement and productivity for all users of the Talawa mobile app.

2. **Expected Outcomes:** Consider ways to:
   1. Utilize machine learning models to predict user engagement patterns, helping community organizers understand when to schedule events or post important updates for maximum impact.
   2. Implement collaborative filtering algorithms to suggest groups, subgroups, or content based on what similar users with shared interests are engaging with.
   3. Implement predictive analytics to help users and groups estimate the time needed to complete tasks and identify potential bottlenecks in project timelines.
3. **Reference:** An Admin must not rely exclusively on AI for the features you suggest as they may not choose to activate AI.
4. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** N/A
7. **Project Size:** 350
8. **Possible Mentors:**
   1. Dominic Mills - @DMills27 (Primary)
   2. Shannika Jackson - @bonnie-23 (Secondary)
9.  **Difficulty:** Medium
10. **Impact Definition:** Risky/Exploratory

### Event Attendance - Talawa Admin

1. **Description:** Administrators will need features to improve the management of, and reporting on, event attendance. For this to be most effective, event attendance will need to be accessed from either from:
   1.  A member's profile (_Member Profile_) view.
   2.  An event's detail page (_Event Detail_) views.
2. **Expected Outcomes:** This project idea is more prescriptive than others in the list because we need to get the basic structure correct as it will have a long term impact on our repositories. There will be lots of ways for you transform this foundation into an impressive result.
   1. **Member Profile:** We need additional functionality to the member profile screen to achieve this goal.
      1. _Attendance_: A button or menu item should be presented (Admins only) on each member's profile. When selected, this should display an attendance view.
         1. _Attendance View:_ This should display a list of events that the member has attended and any upcoming events the member is registered to attend.
            1. If the member has neither attended a past event nor is registered for an upcoming event options should be presented to the admin user to;
               1. Invite the selected member to upcoming events.
            2. If the member has attended past events or is registered for upcoming events, display the following attributes for each event in the list. 
               1. _Event Name:_ The name of the event
               2. _Date of Event:_ The scheduled start date for the event 
               3. _Recurring Flag:_ A flag indicating if the event ids a recurring event
               4. _Task Flag:_ A flag indicating that the member has been assigned one or multiple tasks for the event
            3. The admin user must have the ability to toggle between a list of _past events_ attended by the selected member and _upcoming events_ they are registered for.
            4. The admin user must have the ability to interact with the list of events being displayed. (S)he must be able to:
               1. _Search:_ Search the displayed event list for an event by _event name_.
               2. _Sort:_ Sort the displayed event list by _event name_ or by _event date_.
               3. _Filter:_ Filter the displayed event list by a date range based on _event date_ or by one or multiple _event tags_.
            5. The admin user must be able to select an event in the list and navigate to the _event detail_ view.
   2. **Event Detail**
      1. _Event Attendance Management_: The user (Admins only) must be presented with a button or menu item for _Attendance_. When this item is selected the admin user must be navigated to a list of _attendees_ to the selected event.
         1.  For each item in the list of Attendees display the following attributes;
             1. _Member Name_: Name of registered member that attended the event
             2. _Member Status_: The status of the member in the organization 
             3. _Number of Events Attended_: The number of events attended by the member;
                1. This month
                2. This year
         3. If the selected event is a _past event_ or _future event_, display the list of attendees and/or invitees for the event where relevant.
         4. Flag attendees that performed a role or was assigned to an Action Item for the event
         5. If the event is part of a _recurring event_, the admin user must be presented with options to; 
               1. View a list of past events in the series
               2. Edit all events in the series
               3. Edit the current event and future occurrences of the event
         6. The Admin user must be able to _Check-In_ a member to the event.
            1. If people turn up at the door, and they are not in the system, it must be possible to add them as part of the check-in process (USERS and NON_USERs alike).
            2. Events requiring registration must only be able to check-in people who have registered. It must also be possible to add, register and check-in people at the door as an exception if the venue has the space.
      2. _Event Attendance Reporting_
         1. Reporting and data visualization is also required for events. The following charts and measures must be displayed;
            1. _Total number attendees_ for the event
            2. For recurring events, historical attendance must be reported on;
               1. _Attendance Trend_; Charting
                  1. 6 months 
                  2. 12 months
                  3. 24 months
               2. _Attendance Frequency_; the number of persons attending the selected event for the;
                  1. First time
                  2. Second time
                  3. Third time
                  4. Fourth time
                  5. Greater than 5 times
               3. The admin should be able to view the list of attendees in each frequency bucket
            3. _Attendance Demography_; the number of attendants grouped by;
               1. Gender
               2. Member Status
               3. Age Group
            4. Think of novel ways of tabulating historical attendance for recurring events
   3. **NOTE:** These are ongoing efforts in which API and Admin CRUD work has been happening for months. You will need to integrate these efforts into your project, and make improvements. We feel the other needs of this project will require a majority of your time.
      1. Making recurring meetings flawless 
      2. Adding improved attendance tracking
      3. Improving user profile management
   4. **Other:**
      1. Think of the many ways in which you could improve this outline.
      2. You will need to write valid tests for this work
      3. You may want to add features to one or more repositories to facilitate your idea.
      4. The challenge will be in creating an intuitive UI/UX to make these features desirable. The UI/UX must conform with our design guide and Figma files found here: https://docs.talawa.io/docs/design/ux/ux-design-system
      5. Support for this feature was added to Talawa API in the past year. We welcome GitHub issues to verify and rectify the expected functionality of this API support during the GSoC evaluation period.

3. **Repos to update:** Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350 hours (Large)
7. **Possible Mentors:** TBD
   1. Shannika Jackson - @bonnie-23 (Primary)
   2. Dominic Mills - @DMills27 (Secondary)
8.  **Difficulty:** Medium
9.  **Impact Definition:** Core development, Risky/Exploratory

### User Tag Management - Talawa Admin

1. **Description**: We need a comprehensive user tag management system for Talawa Admin to address current limitations and enhance community organisation. This system will introduce both automatic and manual tag allotment, hierarchical tag structures, and CRUD operations.
   
   The current lack of a robust tag management system hinders effective organisation and communication within the Talawa community. The proposed system aims to streamline user categorization, facilitating targeted communication and enhancing community engagement.

   This should not be confused with hashtags or tagging someone in a chat. This is for applying a label/category to User and Event objects

   Support for this feature was added to Talawa API in the past year. We welcome GitHub issues to verify and rectify the expected functionality of this API support during the GSoC evaluation period.
2. **Expected Outcomes**:
   1. Automatic tag allotment based on predefined criteria.
   2. Manual tag allotment by Admins and/or Super Admins.
   3. Hierarchical tag structures with parent and nested sub-tags.
   4. CRUD operations for tags (Create, Read, Update, Delete).
   5. Grouping of users based on tags.
   6. Broadcasting emails/messages to a group of users with certain tags.
   7. Filtering of users based on tags for targeted communication.
3. **Repos to Update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to the mentioned repositories.
5. **Depends on Project:** N/A
6. **Project Size:** 350
7. **Possible Mentors:**
   1. Nitya Pasrija - @Nitya-Pasrija (Secondary)
   2. Noble Mittal - @beingnoble03 (Secondary)
8. **Difficulty:** Medium
9.  **Impact Definition:** Core development

### User Task Management

1. **Description:** The oversight of an organization's volunteer activities is an important part of an administrator's role. These lightweight project management features will facilitate improved coordination within membership.
2. **Expected Outcomes:** 
   1. _Action Items_ : We need a way to manage the assignment of tasks to Users. These may or may not be related to events. API support for this feature has already been implemented via this [Talawa API issue](https://github.com/PalisadoesFoundation/talawa-api/issues/1595)

        The challenge will be in creating an intuitive web UI/UX to make this feature desirable. This would include screens for:
       1. Sortable, editable tabular lists of action items assigned `to me` and `by me` showing the most important summary fields in the database schema.
       2. CRUD activities for action items
      
      The management of Action Items related to events must be intuitive too, possibly with the creative use of filters.
   2. _Event Agendas_ : Community based organizations will often need to have agendas for their events. Reasons for this requirement would include:
       1. The order of ceremony for a wedding
       2. Agendas for committee meetings

       We need the ability to make events have agendas.API support for this feature has already been implemented via this [Talawa API issue](https://github.com/PalisadoesFoundation/talawa-api/issues/1588). Desirable features include:

       3. Functional CRUD screens for event agendas
       4. When the first section is created, all existing agenda items must be tied to it while maintaining the agenda item order.
       5. Changing the sequencing of an agenda section must not alter the sequencing of the agenda items within each section.
       6. Changing the sequencing of agenda items must not alter:
           1. The sequencing of sections
           2. The sequencing of any other sections should other sections exist
     
      The challenge will be in creating an intuitive UI/UX to make this feature desirable with drag and drop capabilities where applicable. 
   1. _Volunteer Management_ : Community based organizations will often need assistance for their events. We need the ability to manage volunteers. API support for this feature has already been implemented via this [Talawa API issue](https://github.com/PalisadoesFoundation/talawa-api/issues/1670). Desirable features include:

        1. Functional CRUD screens for event volunteer group management, including inviting or assigning users to serve up to defined limits.
        2. Tracking responses to volunteer, easily viewing volunteer  profiles
        3. With recurring events a volunteer may not be available for every time, maybe every other time. The app will need to  remember this availability and automatically assign them on the relevant days.
   3. _Other_ : 
      1. You will need to write valid tests for this work
      2. You may want to add features to one or more repositories to facilitate your idea.
      3. The challenge will be in creating an intuitive UI/UX to make these features desirable. The UI/UX must conform with our design guide and Figma files found here: https://docs.talawa.io/docs/design/ux/ux-design-system
      4. Support for these features was added to Talawa API in the past year. We welcome GitHub issues to verify and rectify the expected functionality of this API support during the GSoC evaluation period.
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
6. **Project Size:** 350 hours (Large)
7. **Possible Mentors:** TBD
8.  **Difficulty:** Medium
9.  **Impact Definition:** Core development, Risky/Exploratory

### Event Parity - Talawa Mobile

1. **Description:** We have recently added many new features to the API to that enhance event management. These are not reflected in our mobile app. 2. **Expected Outcomes:** 
   1. **Requirements:** Your proposal must meet the guidelines below. It must:
      1. Provide user feature parity with the Talawa Admin User Portal for event management.
      2. Not add any Admin or Super Admin features. These must remain solely in the Talawa-Admin web app.
   2. **Other:** 
      1. The challenge will be in creating an intuitive UI/UX to make these features desirable. The UI/UX must conform with our design guide and Figma files found here: https://docs.talawa.io/docs/design/ux/ux-design-system
      2. Significant updates to this feature were added to Talawa API in the past year. We welcome GitHub issues to verify and rectify the expected functionality of this API support during the GSoC evaluation period.
2. **Repos to update:** Talawa, Talawa-API
3. **Skills Required:** Code stacks related to repos above. See introduction section.
4. **Depends on Project:** N/A
5. **Project Size:** 350
6. **Possible Mentors:** TBD
7. **Difficulty:** Medium
8.  **Impact Definition:** Risky/Exploratory

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
   1. Not add any Admin or Super Admin features. These must remain solely in the Talawa-Admin web app.
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
