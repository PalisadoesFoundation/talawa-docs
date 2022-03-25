---
id: gsod-ideas
title: GSoD Project Proposal and Ideas Page
---

### Revamping and restructuring the Talawa Docs 

## Introduction

Welcome to our project proposal and ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards.

We need to reduce the learning curve of contributors and sysadmins alike. Our documentation projects make our main repositories easier to use and therefore help us meet this goal.

### Our Project's Problem
Due to the influx of pull requests we receive on a weekly basis, we have created CI/CD pipelines to automate the documentation process. It works as follows, which is illustrated by the proceeding figure:


1. Whenever a pull request is made, a GitHub Action checks whether Javascript/Dart files being pushed have comments of a specified form.

1. If a pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file that contains the documentation from the comments and then sent to the Talawa-Docs repo.

1. Finally, a GitHub Action collates and organizes the HTML files within a prespecificed template containing the documentation that is then added to the site.

[![alt text](/img/gsod-2022.jpg)](http://wordpress.com/ 'GSoD 2022 Workflow')

However, since this pipeline has been put in place there has not been much activity on the bulk of the older files, leaving most of the documentation lacking in our three codebases. The majority of the code is undocumented or badly documented and is not growing in an organic manner with our ever increasing codebase. Our goal is to ameliorate this problem is to get documentation for our repositories which is extensive enough to account for the latest features and developments, such that we are in a good position for further development with the pipelines already in place. Furthermore, we need to make it straightforward for first time contributors to become productive with our repositories.

### Project Scope

The Talawa project aims to:


* Audit the existing documentation and note the areas within the respective codebase(s) where the documentation specifically needs to be improved.

* Use a friction log to determine the pains within the existing documentation. This can be done from the viewpoints of multiple users as more experienced users may ‘miss’ aspects that can affect first time contributors.

* Assess where within the documentation would benefit from the addition of a diagram or illustration of complex relationships such as GraphQL schema and queries. 


### Measuring the project's success

Ideally, if the majority of our files containing code have adequate documentation in the form of comments which can be parsed by the documentation generating libraries we use (jsdoc, dartdoc, etc) then this would give us a rough estimate of the total coverage we have for documentation for a given repository. We have scripts in place to measure how much of the code is documented in the form that we desire. Additionally, as these are able to update the documentation on the fly from 

After the new documentation has been published we will consider the project a success if :

1. The number of pull requests on any and/or all of three repos increases by 30% more than it is currently from dedicated users.

1.  We see a significant uptick on the number of new users contributing to the repositories, around 30-40%.

1. The number of documentation related pull requests increase by ~20%.

### Timeline

The project itself will take around six months to complete. Once the tech writer(s) are hired, we'll spend a month getting them up to speed on the state of the documentation, the workflows we use for creating documentation and then move onto the audit and friction log with the possible mentors, and spend the remaining months focusing on creating the documentation.

| Dates            | Action items                                                                                                         |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| May              | Orientation                                                                                                          |
| June-July        | Audit current documentation; note the pain points with mentor input; highlight were would benefit from illustrations |
| August - October | Begin working on documenting Talawa                                                                                  |
| November         | Project completion and final report due                                                                                                                 

### Budget

| Item                                                                           | Amount | Running total | Notes                             |
|--------------------------------------------------------------------------------|--------|---------------|-----------------------------------|
| Technical Writers (x2)                                                         | 10000  | 10000         |                                   |
| Volunteer Stipends                                                             | 2000   | 12000         | 4 volunteer stipends at $500 each |
| Graphic design - architecture diagrams, and visuals to accompany documentation | 1000   | 13000         |                                   |
| Printed Palisadoes Foundation T-shirts (10 T-shirts)                           | 120    | 13120         |                                   |
| Sundry expenses                                                                | 394    | 13514         | 3% payment processing  fees       |


Additional information

* The Palisadoes Foundation was selected for Google Summer of Code (GSo) 2022, and was previously selected for GSoC in 2021. We were able to make a number of leaps and bounds during the 2021 editions which resulted in a large codebase that is severely undocumented. During this time, The Palisadoes Foundation was also selected for the Github externship on three separate occasions.


### General Considerations

This is not an exhaustive list of ideas, but they are the ones we currently feel need the most attention.

We also welcome any other ideas that we could use. Please review the "Desired Features" section of this website for **even more ideas** and further necessary information.

### Repository Languages and Skills

We are looking for motivated candidates with a history of strong, demonstratable technical writing skills that can provide structure and organization to our codebases. It is not necessary to be well-versed in the tech stack being used for a given repository though some familiarity would be seen as a positive. Our mentors will provide ample support in a 'learn as you go' fashion.

The following lists the primary tech stack being used for each respective repository which is helpful for the purpose of documenting each repository (but you are not required to know them):

1. **Talawa:** Flutter / Dart, GraphQL
1. **Talawa-API:** Node.js, GraphQL, MongoDB
1. **Talawa-Admin Portal:** TypeScript, Node.js

There are others, but these are the main ones that will guide your contributions.

## Ideas List

Here are the features we'd like to implement in the coming months.

### Add Base Documentation for each Repository (Talawa, Talawa-API and Talawa-Admin)

Due to the influx of pull requests we receive on a weekly basis, we have created CI/CD pipelines to automate the documentation process. It works as follows:

Since the introduction of the CI/CD pipeline for automating documentation, there has not been much activity on the bulk of the older files, leaving most of the three codebases lacking in documentation. The goal of this task is to add comments on all of the existing methods, events and namespaces of all the classes within the Talawa, Talawa-Admin and Talawa API.

* **Repos to update:** Talawa-API, Talawa, Talawa-Admin
* **Skills Required:** The ideal candidate should be familiar with Javascript and in particular Node.js. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests.
* **How we measure sucess:** Increased documentation for files which have not been modified for more than 3 months. Additionally, an increase in the percentage of the documentation completed from the documentation coverage script that is used. 
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue
* **Contact details:** Send your CV along with at least two technical writing samples to peter@palisadoes.com

### Create How-To Guides and Tutorials for getting started with Talawa, Talawa API and Talawa-Admin

Currently, there exists no truly detailed guide on how to get setup and become productive within the basic ecosystems of Talawa, Talawa-API and Talawa-Admin. There are a number of resources available, such as videos demonstrating features from merged pull requests in the respective repositories as well as notes that need to be structured and organised in a meaningful way for a prospective user to be productive with the codebase.

Ideally, we aim to have the following accomplished (though this list is not exhaustive):

1. Improve documentation readability by ensuring the language is accessible by individuals regardless of their language background. This can consist of separating it into two distinct levels, namely: beginners and advanced.
1. Construct a guide and style format for new technical writers/contributors, to keep the documentation organic with the codebase, up to date and adhering to our standards.
1. Teaching beginners how to document code optimally and effectively with best practices. In addition to this, include detailed videos and tutorials on using the application, connecting to the API, etc.

Additional information follows:

* **Repos to update:** Talawa-API, Talawa, Talawa-Admin
* **Skills Required:** The ideal candidate should be familiar with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests.
* **How we measure sucess:** The creation of tutorials and hot-to guides in different forms (static HTML pages, pdfs, etc). 
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue
* **Contact details:** Send your CV along with at least two technical writing samples to peter@palisadoes.com

### Create visualisations for various GraphQL Schema and Queries

The Talawa API has a number of GraphQL queries which are undocumented and have become  increasingly complex and interlinked. We need a way to package these details in a more fitting manner for anyone interested in working on this. We require creating written documentation punctuated with code snippets to give a top level overview of the use and functionality of these schema and queries and then using graphical software such as [GraphViz](https://graphviz.org/) to highlight the relationships between these various queries and schema.   

* **Repos to update:** Talawa-API
* **Skills Required:** The ideal candidate should be familiar with Node.js; GraphQL is not a strict requirement, but they must be willing to learn. Additionally, they need to be comfortable with using Git/Github. Experience in Illustration or graphic design is a plus.
* **How we measure sucess:** Visualisations present through the base documentation and any new documentation generated from this program.
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue
* **Contact details:** Send your CV along with at least two technical writing samples to peter@palisadoes.com

### Revamp and Restructure the Current Documentation Page

The website that currently hosts the documentation is rather simplistic and has not evolved from when the Talawa application was more refined than it is now. It no longer takes into consideration the needs of contributing to a complex, multi-layered application, and as such it needs to be remodelled and redesigned to account for a number of changes that have and are currently taking place. Remodelling involves re-writing much of the documentation already in place on the site, as well as, working with a candidate that may be adding to the documentation and ensuring that templates are in place such that the look and feel of the site is cogent and consistent. Note: it is possible to work on this task in conjunction with another one of the aforementioned tasks here..

* **Repos to update:** Talawa-API
* **Skills Required:** HTML, Javascript, CSS. Any design skills would be a plus. Must also be comfortable using Github to submit changes.
* **How we measure sucess:** A website structured in a completely different manner, which is more efficient and effective in providing the information for a user wishing contribute to Talawa. This can be measured by the increase in new contributors via pull requests.
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue
* **Contact details:** Send your CV along with at least two technical writing samples to peter@palisadoes.com