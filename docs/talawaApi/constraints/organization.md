---
id: organization
title: Organization
---

## What Is An `Organization`?

An organization is simply a body of one or more people. This includes but isn't limited to businesses, schools and religious institutions. An Organization comprises of `Users`, `Administrators`, `Group chats`, `Events` and a general news feed.

## How to create `Organization` ?

1. A user should create an account by signing up with their credentials. Steps for signing up are given [here](../authentication#sign-up).

2. Upon creating an account the necessary information would get stored in the `Database`. Now to create an `Organization` a request should be send to api having given fields.

   1. Organisation Name,
   2. Privacy Settings (Public Or Private)
   3. Primary Contact Information
   4. Organisation Address (If applicable)

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
