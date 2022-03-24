---
id: gsod-ideas
title: GSoD Ideas List
---

## Introduction

Welcome to our ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards.

We need to reduce the learning curve of contributors and sysadmins alike. Our documentation projects make our main repositories easier to use and therefore help us meet this goal.

### General Considerations

This is not an exhaustive list of ideas, but they are the ones we feel need the most attention over the next 12 months.

We also welcome any other ideas that we could use. Please review the "Desired Features" section of this website for **even more ideas** and further necessary information.

### Repository Languages and Skills

Here is a list of basic skills that will useful for documenting each repository.

1. **Talawa:** Flutter / Dart, GraphQL
1. **Talawa-API:** Node.js, GraphQL, MongoDB
1. **Talawa-Admin Portal:** TypeScript, Node.js

There are others, but these are the primary ones that will guide your contributions.

## Ideas List

Here are the features we'd like to implement in the coming months.

### Add Base Documentation for each Repository (Talawa, Talawa-API and Talawa-Admin)

Due to the influx of pull requests we receive on a weekly basis, we have created CI/CD pipelines to automate the documentation process. It works as follows:

1. Whenever a pull request is made, a GitHub Action checks whether the Javascript/Dart files being pushed have comments of a specified form.
1. If a pull request is successful, another GitHub Action runs a command such as jsdoc or dartdoc to generate a static HTML file that contains the documentation from the comments and then sent to the `Talawa-Docs` repo.
1. Finally, a GitHub Action collates and organises the HTML files within a prespecificed template containing the documentation.

[![alt text](/img/gsod-2022.jpg)](http://wordpress.com/ 'GSoD 2022 Workflow')

The issue is that since this pipeline has been put in place there has not been much activity on the bulk of the older files, leaving most of the three codebases lacking in documentation. The goal of this task is to add comments on all of the methods, events and namespaces of all the classes within the Talawa and Talawa API.

* **Repos to update:** Talawa-API, Talawa, Talawa-Admin
* **Skills Required:** The ideal candidate should be familiar with Javascript and in particular Node.js. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests.
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue

### Create How-To Guides and Tutorials for getting started with Talawa, Talawa API and Talawa-Admin

Currently, there exists no truly detailed guide on how to get setup and become productive within the basic ecosystems of Talawa, Talawa-API and Talawa-Admin. There are a number of resources available, such as videos demonstrating features from merged pull requests in the respective repositories as well as notes that need to be structured and organised in a meaningful way for a prospective user to be productive with the codebase.

Ideally, we aim to have the following accomplished (though this list is not exhaustive):

1. Improve documentation readability by ensuring the language is accessible by individuals regardless of their language background. This can consist of separating it into two distinct levels, namely: beginners and advanced.
1. Construct a guide and style format for new technical writers/contributors, to keep the documentation up to date and adhering to the standards.
1. Teaching beginners how to document code optimally and effectively with best practices. In addition to this, include detailed videos and tutorials on using the application, connecting to the API etc.

Additional information follows:

* **Repos to update:** Talawa-API, Talawa, Talawa-Admin
* **Skills Required:** The ideal candidate should be familiar with Javascript and in particular Node.js and TypeScript. Additionally, they need to be comfortable with using Git/Github and to update the documentation via pull requests.
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue

### Create visualisations for various GraphQL Schema and Queries

The Talawa API has a number of GraphQL queries which are undocumented and have become  increasingly complex and interlinked. We need a way to package these details in a more fitting manner for anyone interested in working on this. We require creating written documentation punctuated with code snippets to give a top level overview of the use and functionality of these schema and queries and then using graphical software such as [GraphViz](https://graphviz.org/) to highlight the relationships between these various queries and schema.   

* **Repos to update:** Talawa-API
* **Skills Required:** The ideal candidate should be familiar with Node.js; GraphQL is not a strict requirement, but they must be willing to learn. Additionally, they need to be comfortable with using Git/Github. Experience in Illustration or graphic design is a plus
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue

### Revamp and Restructure the Current Documentation Page

The website that currently hosts the documentation is rather simplistic and has not evolved from when the Talawa application was more refined than it is now. It no longer takes into consideration the needs of contributing to a complex, multi-layered application, and as such it needs to be remodelled and redesigned to account for a number of changes that have and are currently taking place. Remodelling involves re-writing much of the documentation already in place on the site, as well as, working with a candidate that may be adding to the documentation and ensuring that templates are in place such that the look and feel of the site is cogent and consistent. Note: it is possible to work on this task in conjunction with another one of the aforementioned tasks here..

* **Repos to update:** Talawa-API
* **Skills Required:** HTML, Javascript, CSS. Any design skills would be a plus. Must also be comfortable using Github to submit changes.
* **Possible Mentors:** Shannika Jackson, Dominic Mills, Michael Lue
