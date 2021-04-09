---
id: authentication
title: Authentication
---

### How a `User` can Authenticate?

> ### `Sign Up`
>
> A user can authenticate by creating a new account. This can be done by sending request to api with sign up fields.

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

> ### `Login`
>
> If a User has already signed up He/She can login to the application by authenticating following Fields .

    email: string
    password: string
