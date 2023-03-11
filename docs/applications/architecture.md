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
The admin web portal manages all the administrative functions necessary for Talawa to work soothly. This includes management of:
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

TypeScript's statically-typed nature and enhanced tooling capabilities provide increased reliability and maintainability to the codebase. Flutter's hot-reload feature allows for faster iteration and development of high-performance mobile applications with a native-like experience. Additionally, its support for both iOS and Android platforms makes it a versatile choice for cross-platform development. MongoDB's flexible document data model and scalability features make it a suitable choice for applications that require efficient data handling and storage. Its support for sharding and replication ensures high availability and data redundancy. Overall, the combination of TypeScript, Flutter, and MongoDB provides a robust and efficient stack for building modern and scalable applications.


