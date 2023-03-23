---
id: gsod-ideas
title: GSoD 2023
---

## Introduction

Welcome to the Talawa repositories documentation ideas page for 2023! Thanks to our participation in the Google Season of Docs (GSoD) program last year, we significantly improved our documentation (to put it lightly!). Our current objective is to further streamline the learning curve for both current and potential contributors by applying the insights gained from our previous participation. Through our documentation projects, we aim to enhance the user-friendliness of our main repositories to achieve this goal. The discussion of the project's issues, scope, and success metrics, as well as the timeline and budget, will precede the proposed ideas section.

Talawa being a wholly decentralized, volunteer organization with 100% of the participants being volunteers provides a valuable case study in how one would implement the proper strictures and checks whenever adding a meaningful change to the documentation. It is also illustrative to see the underlying principles that have been developed to prevent a chaotic codebase and disorganized documentation by enforcing certain requirements when updating files. Our main method of documentation creation involves the use of CI/CD pipelines to automate the process, as illustrated in the following steps:

1. A GitHub Action checks whether the JavaScript/Dart files being pushed have comments of a specified form whenever a pull request is made.

2. If the pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file containing the documentation from the comments. The artifact file is then sent to the Talawa-Docs repository.

3. Finally, a GitHub Action collates and organizes the HTML files within a pre-specified template, creating a cohesive documentation file which is then added to the site.

### Our Project's Problem

The Talawa Documentation has several issues that need to be addressed, the four most pressing are:

1. Although we were able to complete the documentation for 100% of the Talawa API, only around 70% of the Talawa Mobile Front-end and 40% of the Talawa Admin were able to be completed during this period and still need to be completed. We recommend that the missing parts be prioritized and completed as soon as possible.

2. We realized that we lacked a cohesive underlying methodology for organizing and structuring the documentation outside of the automated documentation framework. To address this issue, we recommend using the [Diátaxis](https://diataxis.fr/) methodology to rework much of the existing documentation within the proposed framework of tutorials, how-to guides, technical reference, and explanations. This approach will ensure that the documentation is structured and organized in a way that is easily navigated and understood by different types of users, including those with varying levels of technical expertise.

3. Prioritizing the incorporation of visual aids to enhance the readers' understanding of the content. To improve comprehension, we aim to incorporate more visualizations into the documentation. Through usability tests and informal interactions, we found that presenting high-level summaries and diagrams at the outset of introducing contributors to various topics was highly beneficial. Moreover, there is [scientific evidence](https://www.lesswrong.com/posts/mAdMkFqWzbJRB544m/book-review-how-learning-works#Strategies_) to support the effectiveness of this technique. This approach increases readers' confidence and enables them to establish practical expectations before delving into specific details.

4. We also identified a lack of documentation describing how to do auxiliary tasks such as getting set up on different machines, troubleshooting, writing tests, as well as describing the various types of tests and the relevance of code coverage within the testing framework. To address this issue, we recommend creating separate documentation for auxiliary tasks, which will provide more clarity and help users navigate the documentation more easily.

### Project Scope

The Talawa documentation project aims to:

- Establish a set of documentation standards and guidelines for the project, to ensure consistency and quality across all documentation.

- Conduct a comprehensive audit of the existing documentation to identify areas where it can be improved. This includes analyzing the content, organization, and formatting of the documentation to ensure that it is accurate, clear, and easy to understand.

- Introduce a review process for all new documentation, to ensure it meets the established standards and guidelines before being published.

- Use a "friction log" to identify pain points and areas of confusion in the documentation. This log should be created from the perspective of multiple users, including both experienced contributors and new users. By doing so, we can ensure that the documentation addresses the needs of all users, regardless of their level of experience.

- Evaluate which parts of the documentation would benefit from the addition of diagrams, illustrations, or other visual aids. This is particularly important for complex relationships, such as those involving data models, APIs, or other technical concepts.

- Keep a public log of all progress and obstacles encountered during the project. This log should include a summary of any discrepancies between the expected and actual project outcomes. By doing so, we can make necessary adjustments as we move forward.

- Conduct user testing and feedback sessions to gather input on the effectiveness and usability of the documentation, and use this feedback to make improvements.

- Provide training and resources for contributors on how to effectively document their code, including best practices, tools, and examples in the form of video tutuirals anf how-to guides.

- Ensure that all documentation is accessible to a diverse audience, including those with disabilities or who use assistive technology.

Outside of this project's scope is modifying the existing automation architecture and/or any form of testing and verification.

### Measuring the project's success

We have implemented scripts to measure the amount of code that is documented in the form of comments files individual files, which can be parsed by documentation generating libraries such as jsdoc, dartdoc, and others. These libraries are integrated into our CI/CD pipeline for each repository. While we prioritize measuring the quantity of documentation, we also value metrics related to the accessibility and user experience of the documentation. We aim to ensure that the documentation is presented in a way that is easy to access and understand, and that it provides a high quality of life for users who rely on it.

To that end, we consider the documentation to be success if it addresses the following heuristics:

1. Reduction in bug reports: By improving the quality of the documentation, we expect to see a reduction in bug reports related to misunderstandings or incorrect assumptions about how the code works.

2. Reduced onboarding time: We expect the improved documentation to reduce the amount of time required for new developers to get up to speed on the codebase, resulting in faster onboarding times.

3. Improved developer satisfaction: Clear, comprehensive documentation can help developers feel more confident and satisfied with their work. By improving documentation, we hope to increase developer satisfaction and reduce frustration or confusion caused by poorly documented code.

4. Faster code reviews: By improving the quality of the documentation, we may see faster and more efficient code reviews as reviewers are able to understand the code more easily.

5. Improved code maintainability: Clear, comprehensive documentation can make code easier to maintain in the long term. By improving documentation quality, we may see a reduction in technical debt and increased maintainability of the codebase.

Achieving these goals will indicate a marked improvement in documentation quality and will have a positive impact on the usability and maintainability of the code. This, in turn, will help us to better serve our users and improve the overall quality of our software.

### Timeline

The project itself will take around six months to complete. Once the tech writer(s) are hired, we'll spend a month getting them up to speed on the state of the documentation, the workflows we use for creating documentation and then move onto the audit and friction log with the possible mentors, and spend the remaining months focusing on creating the documentation.

| Dates            | Action items                                                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| May              | Orientation                                                                                                                                          |
| June-July        | Audit current documentation; note the pain points with mentor input; highlight where in the existing infrastructure would benefit from illustrations |
| August - October | Begin working on documenting Talawa                                                                                                                  |
| November         | Project completion and final report due                                                                                                              |

This timeline, especially within the May-July period, is not strict and has some room for unforeseen circumstances that may arise. However, it is expected that you'll complete all the requiste tasks within the intervals posted and have everything completed by the November deadline.

### Budget

| Item                                                                           | Amount | Running total | Notes                             |
| ------------------------------------------------------------------------------ | ------ | ------------- | --------------------------------- |
| Technical Writers (x4)                                                         | 10000  | 10000         |                                   |
| Volunteer Stipends                                                             | 2000   | 12000         | 4 volunteer stipends at $500 each |
| Graphic design - architecture diagrams, and visuals to accompany documentation | 1000   | 13000         |                                   |
| Printed Palisadoes Foundation T-shirts (10 T-shirts)                           | 120    | 13120         |                                   |
| Sundry expenses                                                                | 394    | 13514         | 3% payment processing fees        |

Additional information

- The Palisadoes Foundation was selected for Google Summer of Code (GSoC) in 2023, 2022, and 2021. We were able to make a number of leaps and bounds during the 2021 editions which resulted in a massive codebase that is severely undocumented. The Palisadoes Foundation was also selected for the [Github externship](https://externship.github.in/) on three separate occasions in 2021/2022.

- The foundation was also selected for Google Season of Docs (GSoD) 2022. In this season, the documentation status of the repositories was improved. But, some aspects were not covered in this period and still need to be worked upon.

### General Considerations

This is not an exhaustive list of ideas, but they are the ones we currently feel need the most attention.

We also welcome any other ideas that we could use. 

### Repository Languages and Skills

We are looking for motivated candidates with a history of strong, demonstratable technical writing skills that can provide structure and organization to our codebases. It is not necessary to be well-versed in the tech stack being used for a given repository though some familiarity would be seen as a positive. Our mentors will provide ample support in a 'learn as you go' fashion.

The following lists the primary tech stack being used for each respective repository which is helpful for the purpose of documenting each repository (but you are not required to know them):

1. **Talawa:** Flutter / Dart, GraphQL
1. **Talawa-API:** Node.js, GraphQL, MongoDB
1. **Talawa-Admin Portal:** TypeScript, Node.js

There are others, but these are the main ones that will guide your contributions.

## Ideas List

Here are the features we'd like to implement in the coming months.

### Add Base Documentation to **Talawa**, and **Talawa-admin** Repositories

Since the introduction of the CI/CD pipeline for automating documentation, there has not been much activity on the bulk of the older files, leaving most of the codebase lacking in documentation. The goal of this task is to add comments on all of the existing methods, events and namespaces of all the classes within the Talawa repository.

The previous Google Season of Docs (Gsod 2022) covered the repository: Talawa-API.

- **Repos to update:** Talawa, Talawa-admin.
- **Skills Required:** The ideal candidate should be familiar with Typescript and in particular Node.js. They also need to be comfortable with using Git/Github and to update the documentation via pull requests. Additionally, knowledge of TSDocs is also required.
- **How we measure sucess:** Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)

### Create Video Tutorials for **Talawa**, **Talawa API** and **Talawa-Admin**

Currently, there exists no visual guide on how to get started and become productive within the basic ecosystems of Talawa, Talawa-API and Talawa-Admin.
In the Gsod 2022, we covered _How-To Guides_ for the three repositories in text formats.

This year, we aim further, with **video tutorials**.

Ideally, we aim to have the following accomplished (though this list is not exhaustive):

1. Create video tutorials to make the user experience easier and further enhance the user understanding about the three repositories. The guides should be accessible to the individuals despite of their technical backgrounds. This can consist of separating it into two distinct levels, namely: beginners and advanced.
2. Construct visual guides and style formats for new technical writers/contributors, to keep the documentation organic with the codebase, up to date and adhering to our standards.
3. Instruct beginners on how to document code optimally and effectively with best practices. In addition to this, include detailed videos and tutorials on using the application, connecting to the API, etc.

Additional information follows:

- **Repos to update:** Talawa-API, Talawa, Talawa-Admin
- **Skills Required:** The ideal candidate should be familiar with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests.
- **How we measure sucess:** The creation of tutorials and how-to guides in different forms.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)

### Create testing guides for **Talawa**, **Talawa API** and **Talawa-Admin**

If a developer writes some new code, or modifies an existing code, he might have to test it. Thus, writing tests becomes a part of his job.
The test percent code coverage requirement will incrementally rise with each pull request. In some cases the developer may have to write a few extra tests for the code he may not have updated.

Currently, there are no guides on how to write test codes.
Thus, the goal of this task is to create proper _How-to guides_ on writing test codes to make the developers' jobs easier.

Additional information follows:

- **Repos to update:** Talawa-API, Talawa, Talawa-Admin
- **Skills Required:** The ideal candidate should be familiar with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests.
- **How we measure sucess:** The creation of tutorials and hot-to guides in different forms.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)

### Create visualisations for various GraphQL Schema and Queries

The Talawa API has a number of GraphQL queries which are undocumented and have become increasingly complex and interlinked. We need a way to package these details in a more fitting manner for anyone interested in working on this. We require creating written documentation punctuated with code snippets to give a top level overview of the use and functionality of these schema and queries and then using graphical software such as [GraphViz](https://graphviz.org/) to highlight the relationships between these various queries and schema.

- **Repos to update:** Talawa-API
- **Skills Required:** The ideal candidate should be familiar with Node.js; GraphQL is not a strict requirement, but they must be willing to learn. Additionally, they need to be comfortable with using Git/Github. Experience in Illustration or graphic design is a plus.
- **How we measure sucess:** Visualisations present through the base documentation and any new documentation generated from this program.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)
