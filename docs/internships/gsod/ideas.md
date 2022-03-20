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

## Ideas List

Here are the features we'd like to implement in the coming months.

### Automated Documentation

1. **Description:** We need to find ways to automate the creation of our documentation using the content of our code repositories. This needs to be automatically included in our existing documentation website.
1. **Expected Outcomes:**
    1. Find and implement a way to automatically create API usage documentation from our GraphQL schema.
    1. Find and implement a way to automatically create user and engineer documentation from our code files in all repos.
    1. Document what developers must do to generate as much of our documentation directly from the code base as possible
    1. Complete in-code documentation for all Talawa repositories. This may require interaction with Google Summer of Code participants.
1. **Repos to update:** Talawa-API, Talawa, Talawa-Admin
1. **Skills Required:** Code stacks related to repos above. See introduction section.
1. **Depends on Project:** None
1. **Project Size:** 175 hours
1. **Possible Mentors:** Shannika Jackson
1. **Difficulty:** Medium
1. **Impact Definition:** Infrastructure/Automation, Low-hanging fruit
