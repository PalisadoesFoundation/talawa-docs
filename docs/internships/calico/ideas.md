---
id: calico-ideas
title: Calico Ideas
---

## Introduction

Welcome to our Calico ideas page! Get familiar with our general philosophy by reading this section. The ideas follow afterwards.

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
   1. [Calico Introduction](./calico-introduction).
   2. [Calico Application Guide](./calico-application-process).
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

Talawa is a suite of applications that are aimed at managing the memberships of community based organizations. This concept may be new to you, and we suggest you research non-profit organization and open source software project management software as a starting point. Talawa needs to have a broader reach and your additions to our ideas will make the difference. We have included links to YouTube videos on this page that will be useful in improving your understanding.

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

1. We will not support administrative functions in the mobile app.
2. **Note:** Your Calico project idea cannot overlap with our [GSoC Ideas](../gsoc/ideas.md)

## Idea Areas

This section outlines the primary features we'd like to implement in the coming months with impacts on all the applications.

Please read the `Research` section of this document for background information

### Admin UI Redesign

1. **Description:** We are transitioning to a new Talawa-Admin design based on our official Figma designs you can find on our [Design System page](../../design/ux/design_system.md). 
   1. Many of our Admin and User portal screen designs have not been converted to this new UI/UX.
   2. The new designs for many of these screens have not yet been created
2. **Expected Outcomes:** 
   1. Create new designs for the screens and modals that have not yet been updated and apply them to our official Figma designs.
      1. These designs must be in keeping with our UI/UX design philosophy. You may have to imply what this philosophy means in many cases as it's not documented outside the Figma designs.
   2. Write the typescript code to create these updated screens and merge them into our repository's code base.
3. **Other:** Feel free to create GitHub issues to demonstrate your capabilities regarding new designs. This would include:
   1. An image or Figma link to the proposed page design
   2. An expectation that you will code the design, submit a PR and have it merged during the evaluation period. Include this in your application.
4. **References:**
   1. Our [Design System page](../../design/ux/design_system.md). 
5. **Repos to update:** Talawa-Admin, Talawa-API (If API related errors are found)
6. **Skills Required:** Code stacks related to repos above. See introduction section.
7. **Depends on Project:** N/A
8. **Possible Mentors:** TBD
9.  **Difficulty:** Medium
10. **Impact Definition:** Core development

### Mobile App Redesign

1. **Description:** We aim to redesign the Talawa mobile app to provide users with an enhanced and cohesive user experience. This redesign will align with our UI/UX design philosophy, ensuring consistency and usability across all platforms.
   1. Many of our Admin and User portal screen designs have not been converted to this new UI/UX.
   2. The new designs for many of these screens have not yet been created
2. **Expected Outcomes:**
     1. Create new designs for the mobile app screens based on our official Figma designs, ensuring consistency with the Admin UI redesign.
     2. Write code to implement the redesigned screens and functionalities into the Talawa mobile app.
     3. Address any API-related errors or updates needed in the Talawa-API repository to support the redesigned mobile app.
3. **Other:** Feel free to create GitHub issues to demonstrate your capabilities regarding new designs. This would include:
   1. An image or Figma link to the proposed page design
   2. An expectation that you will code the design, submit a PR and have it merged during the evaluation period. Include this in your application.
4. **References:**
   1. Our [Design System page](../../design/ux/design_system.md).
5. **Repos to update:**
   - Talawa-Mobile
   - Talawa-API (if API-related changes are required)
6. **Skills Required:** Code stacks related to repos above. See introduction section.
7. **Depends on Project:** N/A
8. **Possible Mentors:** TBD
9.  **Difficulty:** Medium
10. **Impact Definition:** Core development

### Improving State Management, Globalizing States, and Standardizing Authentication and Authorization in Talawa Admin

1. **Description:** 
In addition to improving state management and globalizing states, this project will also focus on fixing and standardizing authentication and authorization mechanisms in Talawa Admin. By ensuring robust authentication and authorization processes, we aim to enhance the security and usability of the application.
2. **Expected Outcomes:**
   1. **Authentication Improvement**:
      - Review the current authentication flow and identify any vulnerabilities or weaknesses.
      - Implement industry-standard authentication methods such as JWT (JSON Web Tokens) for secure user authentication.
      - Enhance authentication workflows to support features like multi-factor authentication (MFA) for added security.
      - Integrate with authentication providers like OAuth or OpenID Connect for seamless authentication experiences.

   2. **Authorization Standardization**:
      - Evaluate the existing authorization mechanisms across different modules of Talawa Admin.
      - Establish a standardized approach for role-based access control (RBAC) to manage user permissions effectively.
      - Implement granular access control lists (ACLs) where necessary to fine-tune user permissions.
      - Ensure consistent authorization checks throughout the application to prevent unauthorized access to sensitive data or functionalities.

   3. **Integration with State Management**:
      - Integrate authentication and authorization states seamlessly with the overall state management architecture.
      - Ensure that user authentication and authorization status are properly managed and reflected across the application's UI components.
      - Implement Redux middleware or Context API to manage authentication and authorization states efficiently alongside other application states.
3. **Other:**
   - Create GitHub issues to track authentication and authorization-related tasks and improvements.
   - Collaborate with security experts or conduct security audits to identify and address any potential vulnerabilities.
   - Document authentication and authorization processes and best practices for future reference and onboarding of new team members.

4. **References:** 
   - Refer to industry best practices and security standards for authentication and authorization implementations.
   - Utilize insights from Talawa's Design System page to ensure consistency with UI/UX design philosophy.
5. **Repos to update:**
   - Talawa-Admin
   - Talawa-API (if API-related changes are required)
6. **Skills Required:** 
   - Proficiency in authentication protocols and standards such as JWT, OAuth, and OpenID Connect.
   - Experience with role-based access control (RBAC) and access control lists (ACLs).
   - Familiarity with security principles and best practices for web applications.
   - Strong understanding of JavaScript/TypeScript, React, Redux, Context API, and Redux Saga for seamless integration with state management.
7. **Depends on Project:** N/A
8. **Possible Mentors:** TBD
9.  **Difficulty:** Medium to High
10. **Impact Definition:** Core development, as fixing and standardizing authentication and authorization processes will significantly enhance the security posture and user trust in Talawa Admin.

### Refactor the Talawa-Admin Codebase

1. **Description:** Our Typescript repositories need to be refactored for standardization and industry best practices
2. **Expected Outcomes:** 
   1. **Testing:**
      1. Test files are currently found under the `src/` directory beside the files they are testing.
      2. This repository's testing directory structure needs to match that of Talawa-API where test files are located:
         1. Under the `test/` directory 
         2. In subdirectory trees that match that of the file under test. A file under test named `src/path/to/file/under/test/file.tsx` would have its test file moved to `test/path/to/file/under/test/file.test.tsx`
      3. All affected tests must pass and be valid
   2. **Code Comments:**
      1. Not all our code files have comments that explain what the code does. We need to add them to every part of our code, especially at the beginning of each file. This will help everyone understand how things work and make it easier to work together.
   3. **Standardize Components:**
      1. We need to make our screens consistent by using common components more often. For example, we have many non-standard input fields, dropdowns, and date pickers. There are many more opportunities that you will find.
      2. All affected tests must pass and be valid
   4. **Query Filtering:**
      1. Many of the queries used by the app download all data from the API and then filters the results. This is not scalable when the app supports large numbers of users and organizations. We need to adjust all queries to use the built-in GraphQL filtering of the API.
      2. All affected tests must pass and be valid
3. **References:**
   1. N/A
4. **Repos to update:** Talawa-Admin, Talawa-API
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** N/A
7. **Possible Mentors:** TBD
8.  **Difficulty:** Medium
9.  **Impact Definition:** Core development

### Identify and Rectify Security Vulnerabilities - API & Admin

1. **Description:** Our Typescript repositories have never had a code review to identify and rectify security vulnerabilities in the packages used, code base and data storage according to industry best practices
2. **Expected Outcomes:** 
   1. Identify meaningful vulnerabilities that must be rectified and implement the changes required.
   2. Identify PII information stored in the database and ensure that it is secure from malicious attack.
   3. Identify and rectify meaningful ways of mitigating DDOS and brute force attacks on the applications
3. **References:**
   1. Your proposal must identify specific areas for improvement and a plan for you to rectify them during the course of Calico
4. **Repos to update:** Talawa-Admin, Talawa-API
5. **Skills Required:** Code stacks related to repos above. See introduction section.
6. **Depends on Project:** N/A
7. **Possible Mentors:** TBD
8.  **Difficulty:** Medium
9.  **Impact Definition:** Core development

### Hybrid: Hybrid Innovation

1. **Description:** Do the ideas need something more? What completely new thoughts could be applied to the existing ideas? If you have answers to these questions then this section is for you.
2. **Expected Outcomes:** Your proposal must meet the guidelines below. They must:
   1. Not depend on other participants. There should be minimal impact by other participants disappearing or doing a very bad or very good job.
   1. Add completely new features not previously stated in ideas.
   1. Create features that users will want or facilitate new features that will be the groundwork for features that they would want.
   1. Justify 350 hours of work.
3. **Repos to update:** Talawa, Talawa-API, Talawa-Admin
4. **Skills Required:** Code stacks related to repos above. See introduction section.
5. **Depends on Project:** N/A
7. **Possible Mentors:** TBD
8. **Difficulty:** Medium
9. **Impact Definition:** Core development
