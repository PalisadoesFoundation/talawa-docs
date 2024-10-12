---
id: user
title: User
---

## Who Is A `User`?

A User is anyone who has created an account for the application. Users can both create and join organizations. After joining an organization users become members of that organization.

A member of an organization would be similar to a contributor to an open source software project, a member of a non-profit organization or an employee working for a business.

## What tasks can be performed by a `User` ?

1. They can create `Organizations` and `Events`.
2. They can create `Posts` that show up on the `Organization`.
3. They can `Comment` on `Posts` that show up on the `Organization`.
4. They can create `Tasks` for the `Event`.

## `User` Model

    image: string
    tokenVersion: number
    firstName: string
    lastName: string
    email: string
    password: string
    createdOrganizations: [Organization]
    createdEvents: [Event]
    joinedOrganizations: [Organization]
    registeredEvents: [Event]
    eventAdmin: [Event]
    adminFor: [Event]
    membershipRequests: [MembershipRequest]
    organizationsBlockBy: [Organization]
    organizationUserBelongsTo: [Organization]
