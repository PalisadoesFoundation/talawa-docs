---
id: organization
title: Organization
---

## What Is An `Organization`?

An organization is simply a body of one or more people. This includes but isn't limited to businesses, schools, non-profit institutions and open source software projects. An Organization comprises of `Users`, `Administrators`, `Group chats`, `Events` and a general news feed.

## How to create `Organization` ?

1. A user should create an account by signing up with their credentials. Steps for signing up are given [here](../authentication#sign-up).

2. Upon creating an account, the necessary information would get stored in the `Database`. Now to create an `Organization` a request should be sent to api having given fields.

   1. Organization Name,
   2. Privacy Settings (Public or Private)
   3. Primary Contact Information
   4. Organization Address (If applicable)

## `Organization` Model

    apiUrl: string
    image: string
    name: string
    description: string
    isPublic: string
    creator: string
    members: [User]
    admins: [User]
    groupChats: [Message]
    posts: [Post]
    membershipRequest: [MembershipRequest]
    blockedUser: [User]
    visibleInSearch: boolean
