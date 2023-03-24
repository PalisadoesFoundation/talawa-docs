---
id: gsod-ideas
title: GSoD 2023 - Improving the accessibility of the Talawa Docs
---

## About Talawa

Talawa is a mobile application designed to make it easier for community-based organizations to collaborate with their members, including religious groups, non-profits, social groups, and businesses. Unlike other software solutions in this space, Talawa is specifically designed to work in countries with limited technology and education resources, such as in Jamaica. Talawa is run by the Palisadoes Foundation which is an entirely decentralized organization that relies solely on volunteer participation to meet its goals. 

## Introduction

Welcome to the Talawa documentation ideas page for 2023! Thanks to our participation in the Google Season of Docs (GSoD) program last year, we significantly improved the documentation in our codebase (to put it lightly!). We are currently focused on improving the learning curve for our existing and future contributors by leveraging the insights gained from our previous participation. Our goal is to increase the user-friendliness of our main repositories through our documentation projects. To achieve this, we will begin with a discussion of the project's issues, scope, and success metrics, followed by a proposed ideas section that will include a timeline and budget.

### Our Project's Problem

Our main method of documentation creation involves the use of CI/CD pipelines to automate the process, as illustrated in the following steps:

- A GitHub Action checks whether the JavaScript/Dart files being pushed have comments of a specified form whenever a pull request is made.

- If the pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file containing the documentation from the comments. The artifact file is then sent to the Talawa-Docs repository.

- Finally, a GitHub Action collates and organizes the HTML files within a pre-specified template, creating a cohesive documentation file which is then added to the site.

While this method was useful in consolidating information, from individual files across the three respositories, several issues became apparent that now need to be addressed, the four most pressing are:

1. Completing the documentation for the remaining Talawa repositories. While we were able to complete the documentation for 100% of the Talawa API, only around 70% of the Talawa Mobile Frontend and 40% of the Talawa Admin were able to be completed during this period, due the overwhelming amount files that span across the three repositories, and still need to be completed. The missing documentetation needs to be prioritized and completed as soon as possible.

2. Using a cohesive underlying methodology for organizing and structuring the documentation outside of the automated documentation framework mentioned above. To address this issue, we decided upon using the [Diátaxis](https://diataxis.fr/) methodology to rework much of the existing documentation within the proposed framework of tutorials, how-to guides, technical references, and "explanations". This approach will ensure that the documentation will be restructured and reorganized in a way that can be easily navigated and understood by different types of users, including those with varying levels of technical expertise. This is especially important as Talawa is specifically directed at underserved communities and aims to be inclusive in all respects. 

3. Prioritizing the incorporation of visual aids to enhance the readers' understanding of the content. To improve comprehension, we aim to incorporate more visualizations into the documentation. Through usability tests and informal interactions, we found that presenting high-level summaries and diagrams at the outset of introducing contributors to various topics was highly beneficial. Moreover, there is [scientific evidence](https://www.lesswrong.com/posts/mAdMkFqWzbJRB544m/book-review-how-learning-works#Strategies_) to support the effectiveness of this technique. This approach increases readers' confidence and enables them to establish practical expectations before delving into specific details. Following the previous point, this is in line with the ethos of the Talawa community to provide adequate resources to enable the highest possible number of interested developers to contribute to Talawa.

4. We also identified a lack of documentation in describing how to do auxiliary tasks such as getting set up on different machines, troubleshooting, writing tests, as well as describing the various types of tests and the relevance of code coverage within the testing framework. To address this issue, we recommend creating separate documentation for auxiliary tasks, which will provide more clarity and help users navigate the documentation more easily.

### Project Scope

The Talawa documentation project aims to:

- Establish a set of documentation standards and guidelines for the project, to ensure consistency and quality across all documentation.

- Conduct a comprehensive audit of the existing documentation to identify areas where it can be improved. This includes analyzing the content, organization, and formatting of the documentation to ensure that it is accurate, clear, and easy to understand.

- Introduce a review process for all new documentation, to ensure it meets the established standards and guidelines before being published.

- Use a "friction log" to identify pain points and areas of confusion in the documentation. This log should be created from the perspective of multiple users, including both experienced contributors and new users. By doing so, we can ensure that the documentation addresses the needs of all users, regardless of their level of experience.

- Evaluate which parts of the documentation would benefit from the addition of diagrams, illustrations, or other visual aids. This is particularly important for complex relationships, such as those involving data models, APIs, or other technical concepts.

- Keep a public log of all progress and obstacles encountered during the project. This log should include a summary of any discrepancies between the expected and actual project outcomes. By doing so, we can make necessary adjustments as we move forward.

- Conduct user testing and feedback sessions to gather input on the effectiveness and usability of the documentation, and use this feedback to make improvements.

- Provide resources for contributors on how to effectively document their code, including best practices, tools, and examples in the form of video tutorials and how-to guides.

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
| June-July        | Review the Diátaxis methodology and understand its role in Talawa; Audit current documentation; highlight where in the existing infrastructure would benefit from illustrations |
| August - October | Begin working on documenting Talawa                                                                                                                  |
| November         | Project completion and final report due                                                                                                              |

This timeline, especially within the May-July period, is not strict and has some room for unforeseen circumstances that may arise. However, it is expected that you'll complete all the requiste tasks within the intervals posted and have everything completed by the November deadline.

### Budget

| Item                                                                           | Amount | Running total | Notes                             |
| ------------------------------------------------------------------------------ | ------ | ------------- | --------------------------------- |
| Technical Writers (x4)                                                         | 10000  | 10000         |                                   |
| Volunteer Stipends                                                             | 2000   | 12000         | 4 volunteer stipends at $500 each |
| Project Manager                                                                | 1000   | 13000         |                                   |       
| Graphic designer - assist with visuals to accompany any documentation          | 1000   | 14000         |                                   |
| Printed Palisadoes Foundation T-shirts (10 T-shirts)                           | 120    | 14120         |                                   |
| Sundry expenses                                                                | 394    | 14514         | 3% payment processing fees        |

Additional information

- The Palisadoes Foundation was selected for Google Summer of Code (GSoC) in 2023, [2022](https://summerofcode.withgoogle.com/programs/2022/organizations/the-palisadoes-foundation), and [2021](https://summerofcode.withgoogle.com/archive/2021/organizations/4835102856577024) and [Outreachy in 2023](https://www.outreachy.org/apply/project-selection/#palisadoes-foundation). We were able to make a number of leaps and bounds during the 2021 edition which resulted in a massive codebase that was severely undocumented which was ameliorated by our participation in GSoD in 2022. The Palisadoes Foundation was also selected for the [Github externship](https://externship.github.in/) on three separate occasions in 2021/2022.

- The foundation was also selected for Google Season of Docs (GSoD) 2022 where the documentation of the repositories was improved. But, as previous mentioned, some aspects were not covered in this period and still need to be worked upon.

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

### Complete the Documentation for the **Talawa**, and **Talawa Admin** Repositories

Our previous participation in Google Season of Docs 2022 was able to cover the entire backlog of uncommented files in the Talawa API repository. The goal of this task is to add comments for all of the existing methods, events and namespaces of all the classes within the Talawa Mobile and Talawa Admin repositories.

- **Repos to update:** Talawa, Talawa Admin.
- **Skills Required:** The ideal candidate should be familiar with Typescript and in particular Node.js. They also need to be comfortable with using Git and Github and to update the documentation via pull requests. Additionally, knowledge of TSDocs is also required.
- **How we measure sucess:** Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)

### Create Video Tutorials and Visual guides for **Talawa**, **Talawa API** and **Talawa Admin**

Currently, there are no video guides available to help users get started and become productive within the basic ecosystems of Talawa, Talawa API, and Talawa Admin. Our goal is to accomplish the following (although this list is not exhaustive):

1. Create video tutorials that are accessible to individuals with different technical backgrounds, and make the user experience easier and enhance user understanding for the three repositories. The guides should be divided into two distinct levels: beginners and advanced.

2. Develop visual guides and style formats for new technical writers/contributors to ensure that documentation remains organic with the codebase, up-to-date, and adheres to our standards.

3. Provide beginners with detailed videos and tutorials on how to document code optimally and effectively with best practices, as well as instructions on using the application, connecting to the API, etc.-

- **Repos to update:** Talawa API, Talawa, Talawa Admin
- **Skills Required:** The ideal candidate should have strong writing skills and be able to present samples of their technical writing. They should also be familiar with video editing software such as CapCut, photo editing software such as Adobe Photoshop and experience creating modified screenshots with an appliation such as [Lightshot](https://app.prntscr.com/en/index.html). Coding experience  in Javascript/Node.js/Dart would be an asset. Additionally, they need to be comfortable with using Git and Github and to update the documentation via pull requests.
- **How we measure sucess:** The creation of tutorials and how-to guides in different forms.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)

### Create how-to guides for auxiliary tasks for **Talawa**, **Talawa API** and **Talawa-Admin**


Currently, there are no guides on how to write test codes.
Thus, the goal of this task is to create proper _How-to guides_ on writing test codes to make the developers' jobs easier.

Additional information follows:

- **Repos to update:** Talawa API, Talawa, Talawa Admin
- **Skills Required:** The ideal candidate should have strong writing skills and be able to present samples of their technical writing was well as familiarity with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git and Github and to update the documentation via pull requests.
- **How we measure sucess:** The creation of tutorials and hot-to guides in different forms.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)

### Create visualisations for various GraphQL Schema and Queries

The Talawa API has a number of GraphQL queries which are undocumented and have become increasingly complex and interlinked. We need a way to package these details in a more fitting manner for anyone interested in working on this. We require creating written documentation punctuated with code snippets to give a top level overview of the use and functionality of these schema and queries and then using graphical software such as [GraphViz](https://graphviz.org/) to highlight the relationships between these various queries and schema.

- **Repos to update:** Talawa API
- **Skills Required:** The ideal candidate should be familiar with Node.js; GraphQL is not a strict requirement, but they must be willing to learn. Additionally, they need to be comfortable with using Git and Github. Experience in Illustration or graphic design is a plus.
- **How we measure sucess:** Visualisations present through the base documentation and any new documentation generated from this program.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Anwer Sayeed (Github: anwersayeed), Tasneem Koushar (Github: tasneemkoushar), Eva Sharma (Github: evasharma12)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)

### Create Documentation for the Code Output from Figma or Adobe InDesign **Talawa**, and **Talawa-admin** Repositories

There exist plugins in Figma and Adobe InDesign that allow one to export code in HTML, React, Vue or any other modern web framework as well as in Dart. However, the issue with the code generated with these plugins is that they are usually verbose, unoptimised and unintuitive and require "clean-up" from developers to incorporate in the any part of the application.  This task involves working with a developer, and possibly a designer, to document how one would create a template with these modifications that would later aid in incorporating new pages at a faster rate in the Talawa Frontend and Admin Portal.

- **Repos to update:** Talawa, Talawa Admin.
- **Skills Required:** The ideal candidate should have strong writing skills and be able to present samples of their technical writing. Familarity with Typescript and in particular Node.js and/or Dart would be a plus. They also need to be comfortable with using Git and Github and to update the documentation via pull requests.
- **How we measure sucess:** Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used.
- **Possible Mentors:** Dominic Mills (Github: DMills27), Michael Lue (Github: JamaicaFriedChicken)
- **Contact details:** Send your CV along with at least two technical writing samples to ![img](/img/email/mentors.png)