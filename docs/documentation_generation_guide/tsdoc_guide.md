---
title: TSDoc comments in Talawa API & Admin
id: tsdoc_guide
---



# Using TSDoc in Talawa

TSDoc is a documentation standard for TypeScript projects that allows developers to write comments directly in the code. These comments can then be converted into comprehensive documentation using tools like Typedoc. In Talawa Admin and API, TSDoc is used extensively to document the various components, classes, functions, and methods.

## How TSDoc Is Implemented in Talawa

TSDoc comments are added directly above the relevant code elements (such as functions, classes, or methods) to explain their purpose and functionality. The structure of a TSDoc comment is standardized to make it easier for developers to understand the code and how to use it.

### Example TSDoc Comment

Here is an example of a TSDoc comment used in the Talawa Admin project:

```ts
/**
 * Fetches a list of users from the database.
 *
 * @param limit - Maximum number of users to retrieve
 * @returns An array of user objects
 */
function getUsers(limit: number): User[] {
  // Function implementation
}
