---
id: api-overview
title: API Overview
---

:::caution

This section is a work in progress.

:::


## API Expectations
The API is expected to:
1. Centralize all functionality, meaning all applications must see the api as the source of truth.
2. Allow a secure connection to both frontend interfaces ie: Admin console and Mobile application.using industry standard API authorization 
3. Allow support for multiple file systems via centralized configuration eg: server storage, AWS s3 etc..
4. Allow centralized configuration for all external service dependencies such as the email service and the database
5. Support multi-tenancy at its core

## TypeScript Rewrite

The current code base for talawa api uses Node.js, this poses several problems with scalability and stability. As the codebase is currently, adding new features in is unstable and prone to breaks. Moving to Typescript will bring a level of stability and better developer experience that’s not currently in the API. We recommend using NestJS - https://nestjs.com/

>Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).


The Models that need to be re-written in typescript are as follows

### Comment
- text : `string`
- createdAt: `string`
- creator: `string`
- post: `string`
- likedBy: `string`
- likeCount: `string`

### DirectChat

- users: `[User]`
- messages: `[DirectChatMessage]`
- creator: `User`
- organization: `Organization`

### DirectChatMessage

- directChatMessageBelongsTo: `DirectChat`
- sender: `User`
- receiver: `User`
- createdAt: `string`
- messageContent: `string`

### Event

- title: `string`
- description: `string`
- attendees: `string`
- location: `string`
- recurring: `string`
- allDay: `string`
- startDate: `string`
- endDate: `string`
- startTime: `string`
- endTime: `string`
- recurrence: `string`
- isPublic: `boolean`
- isRegisterable: `boolean`
- creator: `User`
- registrants: `[User]`
- admins:  `[User]`
- organization: `Organization`
- tasks: `[Task]`

### EventProject

- title: `string`
- description: `string`
- createdAt: `string`
- event: `Event`
- creator: User
- tasks: `[Task]`

### Group
- title: `string`
- description: `string`
- createdAt: `string`
- organization: `Organization`
- admins: `[User]`

### GroupChat

- title: `string`
- users: `[User]`
- messages: `[GroupChatMessage]`
- creator: `User`
- organization: `Organization`

### GroupChatMessage
- groupChatMessageBelongsTo: `GroupChat`
- sender: `User`
- createdAt: `string`
- messageContent: `string`

### ImageHash

- hashValue: `string`
- fileName: `string`
- numberOfUses: `string`


### MembershipRequest

- organization: `Organization`
- user: `User`


### Message

- text: `string`
- imageUrl: `string`
- videoUrl: `string`
- createdAt: `string`
- creator: `User`
- group: `Group`


### Organization

- apiUrl: `string`
- image: `string`
- name: `string`
- description: `string`
- isPublic: `string`
- creator: `string`
- members: `[User]`
- admins: `[User]`
- groupChats: `[Message]`
- posts: `[Post]`
- membershipRequest: `[MembershipRequest]`
- blockedUser: `[User]`
- visibleInSearch: `boolean`

### Post

- text: `string`
- title: `string`
- createdAt: `string`
- imageUrl: `string`
- videoUrl: `string`
- creator: `User`
- organization: `Organization`
- likedBy: `[User]`
- comments: `[Comment]`

### Task

- title: `string`
- description: `string`
- createdAt: `string`
- deadline: `string`
- event: `Event`
- creator: `User`


### User

- image: `string`
- tokenVersion: `number`
- firstName: `string`
- lastName: `string`
- email: `string`
- password: `string`
- createdOrganizations: `[Organization]`
- createdEvents: `[Event]`
- joinedOrganizations: `[Organization]`
- registeredEvents: `[Event]`
- eventAdmin: `[Event]`
- adminFor: `[Event]`
- membershipRequests: `[MembershipRequest]`
- organizationsBlockBy: `[Organization]`
- organizationUserBelongsTo: `[Organization]`
