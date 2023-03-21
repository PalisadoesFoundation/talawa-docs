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

  It helps catch type-related errors during development, which can save time and reduce bugs in the codebase.
  
  It also provides enhanced tooling and editor support, making it easier to write, maintain, and refactor code. TypeScript was used for building Talawa applications due to its ability to scale and maintain codebases over time.

1. Flutter:

  Flutter is a mobile app SDK that allows developers to build high-performance, natively compiled applications for mobile, web, and desktop using a single codebase. It uses Dart programming language which is similar to Java and JavaScript, but with its own unique syntax.

  Flutter provides a modern, reactive programming model that makes it easier to build complex and beautiful user interfaces. It also has a hot reload feature, which allows developers to see changes instantly without restarting the app.

1. MongoDB:

  MongoDB is a NoSQL document database that uses JSON-like documents with optional schemas. It provides flexible data models that can handle a variety of data types, making it well-suited for modern applications.

  MongoDB was chosen because of its ability to handle unstructured data, its scalability, and its ease of use. It also integrates well with popular programming languages and frameworks.


