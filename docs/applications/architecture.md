---
id: architecture-overview
title: Applications
---

The suite of Talawa applications make the management of community based organizations easier. There are three major components.

1. Talawa-API
1. Talawa
1. Talawa-Admin

### Talawa API

This is the heart of the Talawa applications it governs access to the database of society's users

### Talawa

This is the mobile app used by members of an organization. It helps create closer interactions through features such a newsfeed, events, and chat.

### Talawa Admin

The admin web portal manages all the administrative functions necessary for Talawa to work smoothly. This includes management of:

1. Members
1. Events
1. Newsfeeds
1. Plugins for donations and more

In future we'd like this application to include:

1. Reserving facilities for events

### Architecture

This diagram outlines how the three Talawa components interact

![img](/img/Talawa.jpg)


### Choosing the Right Stack

Why is it important ?

Overall, choosing the right technology stack for a web development project can help ensure that the project meets its requirements, is developed quickly and efficiently, is scalable, well-supported, and affordable.

Web Development Technologies used in Talawa and their Advantages

1. TypeScript:

  Talawa uses typescript because it helps catch type-related errors during development, which can save time and reduce bugs in the codebase which makes     development procedure more productive and.
  
  It also provides enhanced tooling and editor support, making it easier to write, maintain, and refactor code. TypeScript was used for building Talawa web portal due to its ability to scale and maintain codebases over time.

1. Flutter:

  Talawa uses flutter in its mobile app becasue it allows developers to build high-performance, natively compiled applications for mobile, web, and desktop using a single codebase. It uses Dart programming language which is similar to Java and JavaScript, but with its own unique syntax.

  It provides a modern, reactive programming model that makes it easier to build complex and beautiful user interfaces such as talawa mobile app and it is also used to create custom lint for Talawa called Talawa Lint. It also has a hot reload feature, which allows talawa developers to see changes instantly without restarting the app.

1. MongoDB:

  Talawa uses MongoDB in its API because it is a NoSQL document database that uses JSON-like documents with optional schemas. It provides flexible data models that can handle a variety of data types, making it well-suited for making and handling data structures used in creating users and their posts and so much more on backend.

  It was chosen because of its ability to handle unstructured data, its scalability, and its ease of use. It also integrates well with popular programming languages and frameworks.



