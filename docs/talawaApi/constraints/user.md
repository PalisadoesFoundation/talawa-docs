---
id: user
title: User
---

## Who Is A User?

A User is anyone who has created an account for the application. Users can both create and join organizations. After joining an organization users become members of that organization.

A member of an organization would be similar to a congregation member in a religious instituion or an employee working for a business.

Members can create group chats, events and make posts that show up on the organizatio

## User Model

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
