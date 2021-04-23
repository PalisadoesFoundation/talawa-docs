---
id: functionality
title: Functionality
---

<b></b>

> ### Talawa Api offers various functionalities which will ultimately help in endorsing the relationship between the members of an organization.

<b></b>

### _The list of functionalities offered by Talawa Api are as follows_

### Post

_Post Model_

    text: string
    title: string
    createdAt: string
    imageUrl: string
    videoUrl: string
    creator: User
    organization: Organization
    likedBy: [User]
    comments: [Comment]

### Comment

_Comment Model_

    text : string
    createdAt: string
    creator: User
    post: string
    likedBy: User
    likeCount: string

### Task

_Task Model_

    title: string
    description: string
    createdAt: string
    deadline: string
    event: Event
    creator: User

### Message

_Message Model_

    text: string
    imageUrl: string
    videoUrl: string
    createdAt: string
    creator: User
    group: Group

### DirectChat

_DirectChat Model_

    users: [User]
    messages: [DirectChatMessage]
    creator: User
    organization: Organization

### DirectChatMessage

_DirectChatMessage Model_

    directChatMessageBelongsTo: DirectChat
    sender: User
    receiver: User
    createdAt: string
    messageContent: string

### Event

_Event Model_

    title: string
    description: string
    attendees: string
    location: string
    recurring: string
    allDay: string
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    recurrence: string
    isPublic: boolean
    isRegisterable: boolean
    creator: User
    registrants: [User]
    admins: [User]
    organization: Organization
    tasks: [Task]

### EventProject

_Event Project Model_

    title: string
    description: string
    createdAt: string
    event: Event
    creator: User
    tasks: [Task]

### Group

_Group Model_

    title: string
    description: string
    createdAt: string
    organization: Organization
    admins: [User]

### GroupChat

_GroupChat Model_

    title: string
    users: [User]
    messages: [GroupChatMessage]
    creator: User
    organization: Organization

### GroupChatMessage

_GroupChatMessage Model_

    groupChatMessageBelongsTo: GroupChat
    sender: User
    createdAt: string
    messageContent: string

### ImageHash

_ImageHash Model_

    hashValue: string
    fileName: string
    numberOfUses: string
