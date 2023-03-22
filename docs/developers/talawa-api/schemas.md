---
id: schemas
title: Schemas
---

> Schemas are blue prints of how the database is constructed and it's relationship with other databases, which can be used to interpret information.

## Type Structures (Schemas)

These type structures and inputs have been used in the queries, mutations and subscriptions listed below.

### Chats

```graphql
    type DirectChat {
        _id: ID!
        users: [User!]!
        messages: [DirectChatMessage]
        creator: User!
        organization: Organization!
    }

    type GroupChat {
        _id: ID!
        users: [User!]!
        messages: [GroupChatMessage]
        creator: User!
        organization: Organization!
    }

    type GroupChatMessage {
        _id: ID!
        groupChatMessageBelongsTo: GroupChat!
        sender: User!
        createdAt: String!
        messageContent: String!
    }

    type DirectChatMessage {
        _id: ID!
        directChatMessageBelongsTo: DirectChat!
        sender: User!
        receiver: User!
        createdAt: String!
        messageContent: String!
    }

    input createChatInput {
        userIds: [ID!]!
        organizationId: ID!
    }

    input createGroupChatInput {
        userIds: [ID!]!
        organizationId: ID!
        title: String!
    }
```

### Events

```graphql
    type Event {
        _id: ID!
        title:String!
        ***Description***: String!
        startDate: String!
        endDate: String!
        allDay: Boolean!
        startTime: String
        endTime: String
        recurring: Boolean!
        recurrance: String
        attendees: String!
        isPublic: Boolean!
        isRegisterable: Boolean!
        creator: User!
        # registrants: [User]
        admins(adminId: ID): [User]
        organization: Organization
        location: String
        tasks: [Task]
        isRegistered: Boolean
    }

    type Task {
        _id: ID!
        title: String!
        ***Description***: String
        event: Event!
        creator: User!
        createdAt: String!
        deadline: String
    }

    input EventInput {
        title:String!
        ***Description***: String!
        recurring: Boolean!
        recurrance: String
        attendees: String
        isPublic: Boolean!
        isRegisterable: Boolean!
        organizationId: ID!
        startDate: String!
        endDate: String
        allDay: Boolean!
        startTime: String
        endTime: String
        location: String
    }

    input UpdateEventInput {
        title:String
        ***Description***: String
        recurring: Boolean
        recurrance: String
        attendees: String
        isPublic: Boolean
        isRegisterable: Boolean
        startDate: String
        endDate: String
        location: String
        allDay: Boolean
        startTime: String
        endTime: String
    }

    input TaskInput {
        title: String!
        ***Description***: String
        deadline: String
    }


    input UpdateTaskInput {
        title: String
        ***Description***: String
        deadline: String
    }

    enum EventOrderByInput {
        id_ASC
        id_DESC
        title_ASC
        title_DESC
        description_ASC
        description_DESC
        startDate_ASC
        startDate_DESC
        endDate_ASC
        endDate_DESC
        allDay_ASC
        allDay_DESC
        startTime_ASC
        startTime_DESC
        endTime_ASC
        endTime_DESC
        recurrance_ASC
        recurrance_DESC
        location_ASC
        location_DESC
    }

    enum TaskOrderByInput {
        id_ASC
        id_DESC
        title_ASC
        title_DESC
        description_ASC
        description_DESC
        createdAt_ASC
        createdAt_DESC
        deadline_ASC
        deadline_DESC
    }
```

### Newsfeed

```graphql
    type Post {
        _id: ID
        text: String!
        title: String
        createdAt: String
        imageUrl: String
        videoUrl:String
        creator: User!
        organization: Organization!
        likedBy: [User]
        comments: [Comment]
        likeCount: Int
        commentCount: Int
    }

    input PostInput {
        _id: ID
        text: String!
        title: String
        imageUrl: String
        videoUrl:String
        organizationId: ID!
        pinned: Boolean
    }

    type Comment {
        _id: ID
        text: String!
        createdAt: String
        creator: User!
        post: Post!
        likedBy: [User]
        likeCount: Int
    }

    input CommentInput {
        text: String!
    }

    enum PostOrderByInput {
        id_ASC
        id_DESC
        text_ASC
        text_DESC
        title_ASC
        title_DESC
        createdAt_ASC
        createdAt_DESC
        imageUrl_ASC
        imageUrl_DESC
        videoUrl_ASC
        videoUrl_DESC
        likeCount_ASC
        likeCount_DESC
        commentCount_ASC
        commentCount_DESC
    }
```
### Organization

```graphql
    type Organization {
        image:String
        _id: ID!
        name:String!
        ***Description***: String!
        isPublic: Boolean!
        creator: User!
        members: [User]
        admins(adminId: ID): [User]
        membershipRequests: [MembershipRequest]
        blockedUsers: [User]
        visibleInSearch: Boolean!
        apiUrl:String!
        pinnedPosts: [Post]
    }

    input OrganizationInput {
        name:String!
        ***Description***: String!
        attendees: String
        isPublic: Boolean!
        visibleInSearch: Boolean!
        apiUrl:String
    }

    input UpdateOrganizationInput {
        name:String
        ***Description***: String
        isPublic: Boolean
        visibleInSearch: Boolean
    }

    input UserAndOrganizationInput{
        organizationId: ID!, userId: ID!
    }

    input MultipleUsersAndOrganizationInput {
        organizationId: ID!,
        userIds: [ID!]!
    }

    type MembershipRequest {
        _id: ID!
        user: User!
        organization: Organization!
    }

    input OrganizationWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_contains: ID
        id_starts_with: ID

        name: String
        name_not: String
        name_in: [String!]
        name_not_in: [String!]
        name_contains: String
        name_starts_with: String

        ***Description***: String
        description_not: String
        description_in: [String!]
        description_not_in: [String!]
        description_contains: String
        description_starts_with: String

        apiUrl: String
        apiUrl_not: String
        apiUrl_in: [String!]
        apiUrl_not_in: [String!]
        apiUrl_contains: String
        apiUrl_starts_with: String

        visibleInSearch: Boolean

        isPublic: Boolean
    }

    enum OrganizationOrderByInput {
        id_ASC
        id_DESC
        name_ASC
        name_DESC
        description_ASC
        description_DESC
        apiUrl_ASC
        apiUrl_DESC
    }
```
### Users

```graphql
    input LoginInput {
        email:String!,
        password:String!
    }

    type AuthData {
        user: User!,
        accessToken: String!
        refreshToken: String!
    }

    type ExtendSession {
        accessToken: String!
        refreshToken: String!
    }

    type User {
        tokenVersion: Int!
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        createdOrganizations: [Organization]
        joinedOrganizations: [Organization]
        createdEvents: [Event]
        registeredEvents: [Event]
        eventAdmin: [Event]
        adminFor: [Organization]
        membershipRequests: [MembershipRequest]
        organizationsBlockedBy: [Organization]
        image: String
        organizationUserBelongsTo: Organization
    }

    input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        organizationUserBelongsToId: ID
    }

    input UserWhereInput {
        id: ID
        id_not: ID
        id_in: [ID!]
        id_not_in: [ID!]
        id_contains: ID
        id_starts_with: ID

        firstName: String
        firstName_not: String
        firstName_in: [String!]
        firstName_not_in: [String!]
        firstName_contains: String
        firstName_starts_with: String

        lastName: String
        lastName_not: String
        lastName_in: [String!]
        lastName_not_in: [String!]
        lastName_contains: String
        lastName_starts_with: String

        email: String
        email_not: String
        email_in: [String!]
        email_not_in: [String!]
        email_contains: String
        email_starts_with: String

        admin_for: ID

        event_title_contains: String
    }

    enum UserOrderByInput {
        id_ASC
        id_DESC
        firstName_ASC
        firstName_DESC
        lastName_ASC
        lastName_DESC
        email_ASC
        email_DESC
    }
```
### Other schemas

```graphql
    type Message {
        _id: ID!
        text: String
        createdAt: String
        imageUrl: String
        videoUrl:String
        creator: User
    }

    input GroupInput {
        title: String
        ***Description***:String
        organizationId: ID!
    }

    type Group {
        _id: ID
        title: String
        ***Description***:String
        createdAt:String
        organization: Organization!
        admins: [User]
    }
```
## Queries

GraphQL queries can traverse related objects and their fields, letting clients fetch lots of related data in one request, instead of making several roundtrips as one would need in a classic REST architecture.

```graphql

type Query {
    users(id: ID, orderBy: UserOrderByInput): [User]
    usersConnection(where: UserWhereInput, first: Int, skip: Int, orderBy: UserOrderByInput): [User]!
    organizations(id: ID, orderBy: OrganizationOrderByInput): [Organization]
    organizationsConnection(where: OrganizationWhereInput, first: Int, skip: Int, orderBy: OrganizationOrderByInput): [Organization]!
    events(id: ID, orderBy: EventOrderByInput): [Event]
    eventsByOrganization(id: ID, orderBy: EventOrderByInput): [Event]
    registeredEventsByUser(id: ID, orderBy: EventOrderByInput): [Event]
    event(id: ID): Event
    registrantsByEvent(id: ID): [User]
    me:User!
    posts(orderBy: PostOrderByInput): [Post]
    postsByOrganization(id: ID!, orderBy: PostOrderByInput): [Post]
    tasksByEvent(id: ID!, orderBy: TaskOrderByInput): [Task]
    tasksByUser(id: ID!, orderBy: TaskOrderByInput): [Task]
    comments: [Comment]
    commentsByPost(id: ID!): [Comment]
    post(id: ID): Post
    groups: [Group]
    directChats: [DirectChat]
    directChatMessages: [DirectChatMessage]
    directChatsByUserID(id:ID) :[DirectChat]
    groupChats: [GroupChat]
    groupChatMessages: [GroupChatMessage]
}
```
### Fetch list of users

```graphql
    users(
        id: ID
        orderBy: UserOrderByInput
    ): [User]
```

***Description***: It fetches the list of users.

***Arguments***:

1. id: ID - This lets you identify an object(user) uniquely.
2. orderBy: UserOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: User

Example
```graphql

query{
    users(
        id:<id>
        orderBy:id_ASC
    ){
        firstName
        lastName
    }
}
```
### Fetch list of user connections
```graphql

    usersConnection(
        where: UserWhereInput
        first: Int
        skip: Int
        orderBy: UserOrderByInput
    ): [User]!
```
***Description***: It fetches the list of user connections.

***Arguments***:

1. where: UserWhereInput - It filters the data by checking for some specific attributes.
2. first: 4 - It fetches the first 4 records.
3. skip: 2 - It skips the first 2 records.
4. orderBy: UserOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    query{
        usersConnection(
        where:{firstName_contains:"a"}
        first: 2
        skip: 0
        orderBy: id_ASC
        ){
            firstName
            lastName
        }
    }
```
### Fetch list of organizations

```graphql
    organizations(
        id: ID
        orderBy: OrganizationOrderByInput
    ): [Organization]
```
***Description***: It fetches the list of organizations.

***Arguments***:

1. id: ID - This lets you identify an object(organization) uniquely.
2. orderBy: OrganizationOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Organization

***Example***:
```graphql
    query{
        organizations(
        orderBy: id_ASC
        ){
        name
        }
    }
```
### Fetch list of an organization's connections
```graphql
    organizationsConnection(
        where: OrganizationWhereInput
        first: Int
        skip: Int
        orderBy: OrganizationOrderByInput
    ): [Organization]!
```
***Description***: It fetches the list of the organization's connections.

***Arguments***:

1. where: OrganizationWhereInput - It filters the data by checking for some specific attributes.
2. first: 3 - It fetches the first 3 records.
3. skip: 0 - It skips the first 0 records.
4. orderBy: OrganizationOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Organization

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    query{
        organizationsConnection(
        where: {description_not:"abc"}
        first: 1
        skip: 1
        orderBy: id_ASC
        ){
        name
        }
    }
```
### Fetch list of events

```graphql
events(
id: ID
orderBy: EventOrderByInput
): [Event]
```

***Description***: It fetches the list of events.

***Arguments***:

1. id: ID - This lets you identify an object(event) uniquely.
2. orderBy: EventOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Event

***Example***:
```graphql
    query{
        events(
        orderBy: id_ASC
        ){
            title
        }
    }
```
### Fetch list of events by organizations

```graphql
    eventsByOrganization(
        id: ID
        orderBy: EventOrderByInput
        ): [Event]
```
***Description***: It fetches the list of events by organizations.

***Arguments***:

1. id: ID - This lets you identify an object(event) uniquely.
2. orderBy: EventOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Event

***Example***:
```graphql
    query{
        eventsByOrganization(
        orderBy: id_ASC
        ){
            title
            description
        }
    }
```
### Fetch list of events registered by user

```graphql
registeredEventsByUser(
id: ID
orderBy: EventOrderByInput
): [Event]
```
***Description***: It fetches the list of events registered by user.

***Arguments***:

1. id: ID - This lets you identify an object(event) uniquely.
2. orderBy: EventOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Event

***Example***:
```graphql
    query{
        registeredEventsByUser(
        orderBy: title_ASC
        )
        {
            title
            description
        }
    }
```

### Fetch single event

```graphql
event(
id: ID
): Event
```

***Description***: It fetches a single event.

***Arguments***:

1. id: ID - This lets you identify an object(event) uniquely.

***Returns***: Event

***Example***:
```graphql
    query{
        event(
            id:<id>
        ){
         title
        }
    }
```

### Fetch registrants by event

```graphql
    registrantsByEvent(
        id: ID
    ): [User]
```
***Description***: It fetches the registrants by event.

***Arguments***:

1. id: ID - This lets you identify an object(event/registrant) uniquely.

***Returns***: Event

***Example***:
```graphql
query{
    registrantsByEvent(
        id: <id>
    ){
        firstName
    }
    }
```
### Get current user

me: User!

***Description***: It gives us the current user.

***Arguments***:
none

***Returns***: User

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    query{
        me{
            firstName
            lastName
        }
    }
```

### Fetch list of posts

```graphql
    posts(
        orderBy: PostOrderByInput
    ): [Post]
```

***Description***: It fetches the list of posts

***Arguments***:

1. orderBy: PostOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Post

***Example***:
```graphql
    query{
        posts(
            orderBy:id_ASC
        ){
            title
            imageUrl
        }
    }
```
### Fetch the list of posts by organizations

```graphql
    postsByOrganization(
        id: ID!
        orderBy: PostOrderByInput
    ): [Post]
```

***Description***: It fetches the list of posts by organizations.

***Arguments***:

1. id: ID! - This lets you identify an object(post) uniquely. The ! signifies that the object passed is non-nullable or NOT NULL.
2. orderBy: PostOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Post

***Example***:
```graphql
query{
    postsByOrganization(
        id: <id>
        orderBy: id_ASC
        ){
            createdAt
        }
    }
```
### Fetch the list of tasks by events

```graphql
tasksByEvent(
id: ID!
orderBy: TaskOrderByInput
): [Task]
```
***Description***: It fetches the list of tasks by events.

***Arguments***:

1. id: ID! - This lets you identify an object(task/event) uniquely. The ! signifies that the object passed is non-nullable or NOT NULL.
2. orderBy: PostOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Task

***Example***:
```graphql
    query{
        tasksByEvent(
            id: <id>
            orderBy: id_ASC
    ){
        title
    }
    }
```
### Fetch list of tasks by users

```graphql
tasksByUser(
id: ID!
orderBy: TaskOrderByInput
): [Task]
```
***Description***: It fetches the list of tasks by users.

***Arguments***:

1. id: ID! - This lets you identify an object(task/user) uniquely. The ! signifies that the object passed is non-nullable or NOT NULL.
2. orderBy: PostOrderByInput - Filters the data in an ordered manner according to the input provided.

***Returns***: Task

***Example***:
```graphql
    query{
        tasksByUser(
        id: <id>
        orderBy: id_ASC
    ){
        event
    }
    }
```
### Fetch comments

comments: [Comment]

***Description***: It fetches the comments.

***Arguments***:
none

***Returns***: Comment

***Example***:
```graphql
    query{
        comments{
            text
            creator{
                firstName
            }
        }
    }
```
### Fetch comments by posts

```graphql
    commentsByPost(
        id: ID!
    ): [Comment]
```
***Description***: It fetches the comments by posts.

***Arguments***:

1. id: ID! - This lets you identify an object(comment/post) uniquely. The ! signifies that the object passed is non-nullable or NOT NULL.

***Returns***: Comment

***Example***:
```graphql
    query{
        commentsByPost(
            id: <id>
    ){
        text
        creator{
            firstName
        }
    }
    }
```
### Fetch single post

```graphql
    post(
        id: ID
    ): Post
```
***Description***: it fetches a single post.

***Arguments***:

1. id: ID - his lets you identify an object(post) uniquely.

***Returns***: Post

***Example***:
```graphql
    query{
        post(
            id: <id>
        ){
            text
            title
        }
    }
```
### Fetch list of groups

```graphql
    groups: [Group]
```
***Description***: It fetches the list of groups.

***Arguments***:
none

***Returns***: Group

***Example***:
```graphql
    query{
        groups{
            title
            description
        }
    }
```

### Fetch list of direct chats

```graphql
    directChats: [DirectChat]
```
***Description***: It fetches the list of direct chats.

***Arguments***:
none

***Returns***: DirectChat

***Example***:
```graphql
    query{
        directChats{
            users{
                firstName
            }
            messages{
                messageContent
            }
        }
    }
```

### Fetch list of direct chat messages

```graphql
directChatMessages: [DirectChatMessage]
```
***Description***: It fetches the list of direct chat messages.

***Arguments***:
none

***Returns***: DirectChatMessage

***Example***:
```graphql
    query{
        directChatMessages{
            sender{
                firstName
            }
            receiver{
                firstName
            }
            createdAt
        }
    }
```
### Fetch list of group chats.

```graphql
groupChats: [GroupChat]
```
***Description***: It fetches the list of group chats.

***Arguments***:
none

***Returns***: GroupChat

***Example***:
```graphql
    query{
        groupChats{
            users{
                firstName
            }
            messages{
                createdAt
            }
            creator{
                email
            }
        }
    }
```

### Fetch list of group chat messages

```graphql
    groupChatMessages: [GroupChatMessage]
```
***Description***: It fetches the list of group chat messages.

***Arguments***:
none

***Returns***: GroupChatMessages

***Example***:
```graphql
    query{
        groupChatMessages{
            sender{
                firstName
            }
            createdAt
            messageContent
        }
    }
```

### Fetch list of direct chat by userID.

```graphql
directChatsByUserID: [DirectChat]
```
***Description***: It fetches the list of direct chat by userID.

***Arguments***:

1. id: ID -lets you identify an object(user) uniquely.

***Returns***: DirectChat

***Example***:
```graphql
    query{
        directChats(
            id: <id>
        )
        {
            users{
                firstName
            }
            messages{
                messageContent
            }
        }
    }
```
## Subscriptions

Like queries, subscriptions enable you to fetch data. Unlike queries, subscriptions are long-lasting operations that can change their result over time. They can maintain an active connection to your GraphQL server (most commonly via WebSocket), enabling the server to push updates to the subscription's result.

```graphql
    type Subscription {
        messageSentToDirectChat: DirectChatMessage
        messageSentToGroupChat: GroupChatMessage
    }
```
### Fetch list of messages sent to direct chat

```graphql
    messageSentToDirectChat: DirectChatMessage
```

***Description***: It fetches the list of messages sent to direct chat.

***Arguments***:
none

***Returns***: DirectChatMessage

***Example***:
```graphql
    subscription{
        messageSentToDirectChat{
            sender{
                firstName
            }
            receiver{
                firstName
            }
            createdAt
        }
    }
```
### Fetch list of messages sent to group chat

```graphql
    messageSentToGroupChat: GroupChatMessage
```
***Description***: It fetches the list of messages sent to group chat.

***Arguments***:
none

***Returns***: GroupChatMessage

***Example***:
```graphql
    subscription{
        messageSentToGroupChat{
            groupChatMessageBelongsTo{
                creator{
                    firstName
                }
            }
            sender{
                firstName
            }
            messageContent
        }
    }
```

## Mutations

Mutation queries modify data in the data store and returns a value. It can be used to insert, update, or delete data. Mutations are defined as a part of the schema.

```graphql
type Mutation {

    signUp(data: UserInput!, file:Upload): AuthData!
    login(data: LoginInput!): AuthData!
    refreshToken(refreshToken: String!) : ExtendSession!
    revokeRefreshTokenForUser(userId: String!) : Boolean!

    createEvent(data: EventInput): Event!
    removeEvent(id: ID!): Event!
    registerForEvent(id: ID!): Event!
    updateEvent(id:ID!, data: UpdateEventInput) : Event!
    createOrganization(data: OrganizationInput, file:Upload): Organization!
    updateOrganization(id:ID!, data: UpdateOrganizationInput) : Organization!

    removeOrganization(id: ID!) : User!

    createAdmin (data: UserAndOrganizationInput!) : User!
    removeAdmin (data: UserAndOrganizationInput!) : User!
    joinPublicOrganization (organizationId: ID!) : User!
    leaveOrganization (organizationId: ID!) : User!

    removeMember (data: UserAndOrganizationInput!) : Organization!

    adminRemoveEvent(eventId: ID!): Event!
    adminRemoveGroup(groupId:ID!):Message!

    createPost(data: PostInput!, file: Upload): Post
    removePost(id:ID!): Post
    likePost(id:ID!): Post
    unlikePost(id:ID!): Post
    togglePostPin(id:ID!): Post

    createComment(postId:ID!, data: CommentInput!): Comment
    removeComment(id:ID!): Comment
    likeComment(id:ID!): Comment
    unlikeComment(id:ID!): Comment

    createTask(data: TaskInput, eventId: ID!): Task!
    updateTask(id:ID!, data: UpdateTaskInput) : Task
    removeTask(id: ID!) : Task

    createGroup(data: GroupInput!): Group!

    sendMembershipRequest(organizationId: ID!) : MembershipRequest!
    acceptMembershipRequest(membershipRequestId: ID!): MembershipRequest!
    rejectMembershipRequest(membershipRequestId: ID!): MembershipRequest!
    cancelMembershipRequest(membershipRequestId: ID!) : MembershipRequest!

    blockUser(organizationId: ID!, userId: ID!) : User!
    unblockUser(organizationId: ID!, userId:ID!) : User!

    addUserImage(file: Upload!): User!
    removeUserImage: User!
    addOrganizationImage(file: Upload!, organizationId: String!): Organization!
    removeOrganizationImage(organizationId: String!): Organization!

    createDirectChat(data: createChatInput): DirectChat!
    removeDirectChat(chatId: ID!, organizationId: ID!) : DirectChat!
    sendMessageToDirectChat(chatId: ID!, messageContent: String!): DirectChatMessage!

    createGroupChat(data: createGroupChatInput): GroupChat!
    removeGroupChat(chatId: ID!): GroupChat!
    sendMessageToGroupChat(chatId: ID!, messageContent: String!): GroupChatMessage!
    addUserToGroupChat(userId: ID!, chatId: ID!): GroupChat!
    removeUserFromGroupChat(userId: ID!, chatId: ID!): GroupChat!

}
```

### Creates a new user with authentication data and tokens

```graphql
    signUp(
        data: UserInput!
        file: Upload
    ): AuthData!
```
***Description***: It creates a new user with authentication data and tokens.

***Arguments***:

1. data: UserInput! - It contains all the data that is needed to create the user object. The ! signifies that the object passed is non-nullable or NOT NULL.
2. file: Upload - It contains a file that is needed to create a user.

***Returns***: AuthData!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        signUp(data:{
            firstName:"abc"
            lastName: "def"
            email: "wef@xyz.com"
            password:"sdvsv"
            }){
            user{
                firstName
            }
        }
    }
```

### Update the Auth Data whenever the user logs in

```graphql
    login(
        data: LoginInput!
    ): AuthData!
```
***Description***: It updates the Auth Data whenever the user logs in.

***Arguments***:

1. data: LoginInput! - It contains all the data that is needed to update the data. The ! signifies that the object passed is non-nullable or NOT NULL.

***Returns***: AuthData!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        login(data:{
            email: "wef@xyz.com"
            password:"sdvsv"
        }){
        user{
        firstName
        }
        }
    }
```
### Generate a new token for the user

```graphql
    refreshToken(
         refreshToken: String!
    ): ExtendSession!
```
***Description***: It generates a new token for the user.

***Arguments***:

1. refreshToken: String! - It contains the Refresh Token. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: ExtendSession!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        refreshToken(refreshToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblZlcnNpb24iOjAsInVzZXJJ9mD\_\_c77yU"
        ){
        accessToken
        refreshToken
        }
    }
```

### Revoke the refresh token for the user inputted

```graphql
revokeRefreshTokenForUser(
userId: String!
): Boolean!
```
***Description***: It revokes the refresh token for the user inputted.

***Arguments***:

1. userId: String! - It contains userId which identifies the user.

***Returns***: Boolean!

The returned value is true if the user is found else false.
The ! signifies that the value returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        revokeRefreshTokenForUser(userId:"6059ede189334c0242145e46")
    }
```

### Create an event based on the data inputted.

```graphql
createEvent(
data: EventInput
): Event!
```
***Description***: It creates an event based on the data inputted.

***Arguments***:

1. data: EventInput - It contains the data needed to create an event.

***Returns***: Event!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        createEvent(
        data:{
            title:"abc"
            Description:"xyz"
            recurring: false
            isPublic: true
            isRegisterable: true
            organizationId:"dclkn123"
            startDate: "2021-03-29"
            allDay: true
        }
        ){
            title
            description
        }
    }
```

### Remove the event based on the ID inputted

```graphql
    removeEvent(
        id: ID!
    ): Event!
```
***Description***: It removes the event based on the ID inputted.

***Arguments***:

1. id: ID! - It helps to identify a unique event which needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Event!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        removeEvent(id:<id>){
        title
        description
        }
    }
```
### Register a user for an event

```graphql
    registerForEvent(
        id: ID!
    ): Event!
```
***Description***: It registers a user for an event.

***Arguments***:

1. id: ID! - It helps to identify a unique user which needs to be registered. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Event!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        registerForEvent(id:<id>){
        title
        description
        }
    }
```
### Update the event information with the data inputted

```graphql
    updateEvent(
    id: ID!
    data: UpdateEventInput
    ): Event!
```
***Description***: It updates the event information with the data inputted.

***Arguments***:

1. id: ID! - It helps to identify a unique event which needs to be updated. The ! signifies that the value passed is non-nullable or NOT NULL.
2. data: UpdateEventInput - It contains the data that needs to be updated.

***Returns***: Event!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        updateEvent(
        id:<id>
        data: {
        title:"Xyz"
        }
        ){
        title
        }
    }
```
### Creates a new organization based on the input provided

```graphql
    createOrganization(
        data: OrganizationInput
        file: Upload
    ): Organization!
```
***Description***: It creates a new organization based on the input provided.

***Arguments***:

1. data: OrganizationInput - It contains the data that need to be inputted.
2. file: Upload - It is the file that need to be uploaded.

***Returns***: Organization!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        createOrganization(
        data:{
        name:"pj1"
        Description: "abcd"
        isPublic: true
        visibleInSearch:true
        }
        ){
        \_id
        name
        description
        }
    }
```
### Update the organization information

```graphql
    updateOrganization(
        id: ID!
        data: UpdateOrganizationInput
    ): Organization!
```
***Description***: It updates the organization information.

***Arguments***:

1. id: ID! - It helps to identify a unique organization which needs to be updated. The ! signifies that the value passed is non-nullable or NOT NULL.
2. data: pdateOrganizationInput - It contains the data that need to be updated.

***Returns***: Organization!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        updateOrganization(
        id: <id>
        data:{
        name: "xyz"
        ***Description***: "abc"
        }
        ){
        \_id
        name
        description
        }
    }
```

### Remove an organization based on the id inputted

```graphql
    removeOrganization(
    id: ID!
    ): User!
```
***Description***: It removes an organization based on the id inputted.

***Arguments***:

1. id: ID! - It helps to identify a unique organization which needs to be deleted . The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        removeOrganization(id:<id>){
            organizationsBlockedBy{
                name
            }
        }
    }
```
### Create an admin for an organization based on the data provided

```graphql
    createAdmin(
        data: UserAndOrganizationInput!
    ): User!
```
***Description***: It creates an admin for an organization based on the data provided.

***Arguments***:

1. data: UserAndOrganizationInput! - It contains the user data who needs to be made the admin and the org data. The ! signifies that the object passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        createAdmin(
            data:{
            organizationId: <o_id>
            userId: <u_id>
            }
            ){
            adminFor
        }
    }
```
### Removes the user from admin

```graphql
    removeAdmin(
        data: UserAndOrganizationInput!
    ): User!
```
***Description***: It removes the user from admin.

***Arguments***:

1. data: UserAndOrganizationInput! - It contains the user data who needs to be removed as the admin and the org data. The ! signifies that the object passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        removeAdmin(
        data:{
            organizationId: <o_id>
            userId: <u_id>
        }){
            firstName
        }
    }
```
# Adds organization to user

```graphql
    joinPublicOrganization(
        organizationId: ID!
    ): User!
```
***Description***: It adds organization to user.

***Arguments***:

1. organizationId: ID! - It helps to identify a unique organization which needs to be joined. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        joinPublicOrganization(organizationId:<o_id>){
        \_id
        }
    }
```
### Removes an organization inputted from a user

```graphql
    leaveOrganization(
        organizationId: ID!
    ): User!
```       
***Description***: It removes an organization inputted from a user.

***Arguments***:

1. organizationId: ID! - It helps to identify a unique organization which needs to be removed from a user. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        leaveOrganization(organizationId:<o_id>){
            joinedOrganizations
        }
    }
``` 
### Remove a user from an organization

```graphql
    removeMember(
        data: UserAndOrganizationInput!
    ): Organization!
```
***Description***: It removes a member from an organization.

***Arguments***:

1. data: UserAndOrganizationInput! - It contains data for user that needs to be removed and the org data from which they are removed. The ! signifies that the data passed is non-nullable or NOT NULL.

***Returns***: Organization!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        removeMember(
            data:{
                organizationId:"<o_id>"
                userIds: <u_id>
            }
        ){
        name
        }
    }
```
### Let the admin remove a post

```graphql
    adminRemovePost(
        organizationId: ID!
        postId: ID!
    ): Post!
```
***Description***: It lets the admin delete the post.

***Arguments***:

1. organizationId: ID! - It helps to identify a unique organization in which post needs to be removed by the admin. The ! signifies that the value passed is non-nullable or NOT NULL.
2. postId: ID! - It helps to identify a unique post which needs to be removed by the admin. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Post!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        adminRemovePost(
            organizationId: <o_id>
            postId: <p_id>
        ){
            text
        }
    }
```
### Let the admin remove an event

```graphql
    adminRemoveEvent(
        eventId: ID!
    ): Event!
```
***Description***: It lets the admin remove an event.

***Arguments***:

1. eventId: ID! - It helps to identify a unique event which needs to be removed by the admin. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Event!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        adminRemoveEvent(
            eventId: <e_id>
        ){
            title
        }
    }
```
### Let the admin remove a group

```graphql
    adminRemoveGroup(
        groupId: ID!
    ): Message!
```
***Description***: It lets the admin remove a group.

***Arguments***:

1. groupId: ID! - It helps to identify a unique group which needs to be removed by the admin. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Message!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        adminRemoveGroup(
            groupId: <g_id>
        ){
            text
        }
    }
```
### Create a new post

```graphql
    createPost(
        data: PostInput!
        file: Upload
    ): Post
```

***Description***: It creates a new post.

***Arguments***:

1. data: PostInput! - It contains data for the post that needs to be created. The ! signifies that the data passed is non-nullable or NOT NULL.
2. file: Upload - It is the file that need to be uploaded.

***Returns***: Post

***Example***:
```graphql
    mutation{
    createPost(
        data:{
            text:"adas"
            organizationId: <o_id>
        }
        ){
            text
        }
    }
```
### Remove post based on the ID provided

```graphql
    removePost(
        id: ID!
    ): Post
```

***Description***: It removes the post based on the ID provided.

***Arguments***:

1. id: ID! - It helps to identify a unique post which needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Post

***Example***:
```graphql
    mutation{
        removePost(
            id: <p_id>
        ){
            \_id
            text
        }
    }
```

### Set the post liked by the user

```graphql
    likePost(
        id: ID!
    ): Post
```
***Description***: It sets the post liked by the user.

***Arguments***:

1. id: ID! - It helps to identify a unique post which needs to be liked. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Post

***Example***:
```graphql
    mutation{
        removePost(
            id: <p_id>
        ){
            \_id
            likeCount
        }
    }
```
### Unlike a post

```graphql
    unlikePost(
        id: ID!
    ): Post
```
***Description***: It unlikes the post.

***Arguments***:

1. id: ID! - It helps to identify a unique post which needs to be unliked. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Post

***Example***:
```graphql
    mutation{
        removePost(
            id: <p_id>
        ){
            \_id
            likeCount
        }
    }
```
### Create a comment in a post

```graphql
    createComment(
        postId: ID!
        data: CommentInput!
    ): Comment
```
***Description***: It creates a comment in a post.

***Arguments***:

1. postId: ID! - It helps to identify a unique post in which a comment needs to be created. The ! signifies that the value passed is non-nullable or NOT NULL.
2. data: CommentInput! - It contains data for the comment that needs to be created. The ! signifies that the data passed is non-nullable or NOT NULL.

***Returns***: Comment

***Example***:
```graphql
    mutation{
        createComment(
            postId: <p_id>
            data: {
                text:"sdg"
            }
        ){
            \_id
            text
        }
    }
```
### Remove a comment based on the ID provided

```graphql
    removeComment(
        id: ID!
    ): Comment
```
***Description***: It removes a comment based on the ID provided.

***Arguments***:

1. id: ID! - It helps to identify a unique comment which needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Comment

***Example***:
```graphql
    mutation{
        removeComment(
            id: <c_id>
        ){
            \_id
            text
            post{
                \_id
            }
        }
    }
```
### set the comment liked by the user.

```graphql
    likeComment(
        id: ID!
    ): Comment
```
***Description***: It sets the comment liked by the user.

***Arguments***:

1. id: ID! - It helps to identify a unique comment which needs to be liked. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Comment

***Example***:
```graphql
    mutation{
        likeComment(
            id: <c_id>
        ){
            \_id
            text
        }
    }
```
### Unlike the Comment

```graphql
    unlikeComment(
        id: ID!
    ): Comment
```

***Description***: It unlikes the Comment.

***Arguments***:

1. id: ID! - It helps to identify a unique comment which needs to be unliked. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Comment

***Example***:
```graphql
    mutation{
        unlikeComment(
            id: <c_id>
        ){
            \_id
            text
        }
    }
```
### Create a new task

```graphql
    createTask(
        data: TaskInput
        eventId: ID!
    ): Task!
```

***Description***: It creates a new task.

***Arguments***:

1. data: taskInput - It contains data for task that needs to be created.
2. eventId: ID! - It helps to identify a unique event where task needs to be added. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Task!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        createTask(
        data:{
            title:"afsdg"
        }
        eventId: <e_id>
        ){
            \_id
            title
        }
    }
```
### Update task

```graphql
    updateTask(
        id: ID!
        data: UpdateTaskInput
    ): Task
```
***Description***: It updates tasks.

***Arguments***:

1. id: ID! - It helps to identify a unique task which needs to be updated. The ! signifies that the value passed is non-nullable or NOT NULL.
2. data: UpdateTaskInput - It contains the data that needs to be updated.

***Returns***: Task

***Example***:
```graphql
    mutation{
        updateTask(
            id: <t_id>
            data:{
                title:"Sdsdf"
            }
        ){
            \_id
            title
            description
        }
    }
```
### Remove task

```graphql
    removeTask(
        id: ID!
    ): Task
```

***Description***: It removes the task.

***Arguments***:

1. id: ID! - It helps to identify a unique task which needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Task

***Example***:
```graphql
    mutation{
        removeTask(
            id: <t_id>
        ){
            \_id
            title
        }
    }
```
### Create a group

```graphql
    createGroup(
        data: GroupInput!
    ): Group!
```
***Description***: It creates a new group.

***Arguments***:

1. data: GroupInput! - It contains data for the group that needs to be created. The ! signifies that the data passed is non-nullable or NOT NULL.

***Returns***: Group!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        createGroup(
            data: {
                organizationId: <o_id>
            }
        ){
            \_id
            organization{
                members{
                    firstName
                }
            }
        }
    }
```
### Send a membership request to the current user

```graphql
    sendMembershipRequest(
        organizationId: ID!
    ): MembershipRequest!
```

***Description***: It sends a membership request to the current user.

***Arguments***:

1. organizationId: ID! - It helps to identify a unique organization whose membership request needs to be sent. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: MembershipRequest!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        sendMembershipRequest(
            organizationId: <o_id>
        ){
            \_id
            user{
                firstName
            }
        }
    }
```
### Accept membership request and add the user as a member to the organization

```graphql
acceptMembershipRequest(
membershipRequestId: ID!
): MembershipRequest!
```
***Description***: It accepts the membership request and add the user as a member to the organization.

***Arguments***:

1. membershipRequestId: ID! - It helps to identify a unique membership request that needs to be accepted. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: MembershipRequest!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        acceptMembershipRequest(
            membershipRequestId: <m_id>
        ){
            \_id
            user{
                firstName
            }
            organization{
                name
            }
        }
    }
```
### Reject the membership request for the user

```graphql
    rejectMembershipRequest(
        membershipRequestId: ID!
    ): MembershipRequest!
```
***Description***: It rejects the membership request for the user.

***Arguments***:

1. membershipRequestId: ID! - It helps to identify a unique membership request that needs to be rejected. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: MembershipRequest!

***Example:***
```graphql
    mutation{
        rejectMembershipRequest(
            membershipRequestId: <m_id>
        ){
            \_id
            user{
                firstName
            }
            organization{
                name
            }
        }
}
```
# Cancel the membership of the user

```graphql
    cancelMembershipRequest(
        membershipRequestId: ID!
    ): MembershipRequest!
```
***Description***: It cancels the membership of the user.

***Arguments***:

1. membershipRequestId: ID! - It helps to identify a unique membership request that needs to be cancelled. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: MembershipRequest!

***Example***:
```graphql
    mutation{
        cancelMembershipRequest(
            membershipRequestId: <m_id>
            ){
                \_id
                user{
                    firstName
                }
                organization{
                    name
                }
        }
    }
```
### Block user

```graphql
    blockUser(
        organizationId: ID!
        userId: ID!
    ): User!
```
***Description***: It blocks the user.

***Arguments***:

1. organizationId: ID! - It helps to identify a unique organization that needs to block user. The ! signifies that the value passed is non-nullable or NOT NULL.
2. userId: ID! - It helps to identify a unique user that needs to blocked. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        blockUser(
            organizationId: <o_id>
            userId: <u_id>
        ){
            organizationsBlockedBy{
                name
            }
        }
    }
```
### Unblock user

```graphql
    unblockUser(
        organizationId: ID!
        userId: ID!
    ): User!
```
***Description***: It unblocks the user.

***Arguments***:

1. organizationId: ID! - It helps to identify a unique organization that needs to unblock user. The ! signifies that the value passed is non-nullable or NOT NULL.
2. userId: ID! - It helps to identify a unique user that needs to unblocked. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        unblockUser(
            organizationId: <o_id>
            userId: <u_id>
        ){
            joinedOrganizations{
                name
            }
        }
    }
```
### Add user profile image

```graphql
    addUserImage(
        file: Upload!
    ): User!
```
***Description***: It adds an image to the user profile.

***Arguments***:

1. file: Upload! - It is the file that need to be uploaded. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        addUserImage(
            file: <file_Upload>
        ){
            firsrtName
        }
    }
```
### Remove user profile image

```graphql
    removeUserImage: User!
```
***Description***: It removes the profile image of the current user.

***Arguments***:
none

***Returns***: User!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        removeUserImage{
            \_id
            firstName
        }
    }
```
### Add organization profile image

```graphql
    addOrganizationImage(
        file: Upload!
        organizationId: String!
    ): Organization!
```
***Description***: It adds image to the organization profile.

***Arguments***:

1. file: Upload! - It is the file that need to be uploaded. The ! signifies that the value passed is non-nullable or NOT NULL.
2. organizationId: String! - It helps to identify the organization where image needs to be added. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Organization!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        addOrganizationImage(
            file:<file_Upload>
            organizationId: "abc"
        ){
            image
        }
    }
```
### Remove organization profile image

```graphql
    removeOrganizationImage(
        organizationId: String!
    ): Organization!
```
***Description***: It removes the image from organization profile.

***Arguments***:

1. organizationId: String! - It helps to identify the organization from which image needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: Organization!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
            removeOrganizationImage(
            organizationId: "abc"
        ){
            image
        }
    }
```
### Create a direct chat between users

```graphql
    createDirectChat(
        data: createChatInput
    ): DirectChat!
```
***Description***: It creates a direct chat between users.

***Arguments***:

1. data: createChatInput - It contains the necessary data for creating a chat.

***Returns***: DirectChat!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        createDirectChat(
            data:{
                userIds: [<id_1>,<id_2>]
                organizationId: <o_id>
            }
        ){
            messages{
                messageContent
            }
        }
    }
```
### Remove a direct chat between users

```graphql
    removeDirectChat(
        chatId: ID!
        organizationId: ID!
    ): DirectChat!
```
***Description***: It removes the direct chat between the users.

***Arguments***:

1. chatId: ID! - It helps to identify the chat which needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.
2. organizationId: ID! - It helps to identify a unique organization from which direct chat needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: DirectChat!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        removeDirectChat(
            chatId: <c_id>
            organizationId: <o_id>
        ){
            \_id
            messages{
                messageContent
            }
        }
    }
```
### Send direct chat message

```graphql
    sendMessageToDirectChat(
        chatId: ID!
        messageContent: String!
    ): DirectChatMessage!
```
***Description***: It lets the user send a message to direct chat.

***Arguments***:

1. chatId: ID! - It helps to identify the chat where message needs to be sent. The ! signifies that the value passed is non-nullable or NOT NULL.
2. messageContent: String! - It contains the data/body of the message.

***Returns***: DirectChatMessage!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        sendMessageToDirectChat(
            chatId: <c_id>
            messageContent: "Hello"
        ){
            \_id
            sender{
                firstName
            }
            receiver{
                firstName
            }
            messageContent
        }
    }
```
### Create a new group chat

```graphql
    createGroupChat(
        data: createGroupChatInput
    ): GroupChat!
```
***Description***: It creates a new group chat.

***Arguments***:

1. data: createGroupChatInput - It contains the necessary data to create a new group chat.

***Returns***: GroupChat!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        createGroupChat(
        data:{
            userIds:[<id_1>,<id_2>,<id_3>]
            organizationId: <o_id>>
            title: "New Chat"
        }
        ){
            \_id
            messages{
                messageContent
            }
        }
    }
```
### Remove group chat

```graphql
    removeGroupChat(
        chatId: ID!
    ): GroupChat!
```

***Description***: It removes the group chat.

***Arguments***:

1. chatId: ID! - It helps to identify the group chat which needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: GroupChat!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        removeGroupChat(
            chatId: <c_id>
        ){
            \_id
            creator{
                firstName
            }
        }
    }
```
### Send message to group chat by user

```graphql
    sendMessageToGroupChat(
        chatId: ID!
        messageContent: String!
    ): GroupChatMessage!
```
***Description***: It lets the user send a message to the group chat.

***Arguments***:

1. chatId: ID! - It helps to identify the group chat where the user needs to send the message. The ! signifies that the value passed is non-nullable or NOT NULL.
2. messageContent: String! - It contains the data/body of the message to be sent on the group chat. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: GroupChatMessage!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
        sendMessageToGroupChat(
            chatId: <c_id>
            messageContent: "Hey guys!!"
        ){
            \_id
            messageContent
        }
    }
```

### Add user to group chat

```graphql
    addUserToGroupChat(
        userId: ID!
        chatId: ID!
    ): GroupChat!
```

***Description***: It adds a user to a group chat.

***Arguments***:

1. userId: ID! - It helps to identify the user who needs to be added on the group chat. The ! signifies that the value passed is non-nullable or NOT NULL.
2. chatId: ID! - It helps to identify the group chat where the user needs to be added. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: GroupChat!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{
            addUserToGroupChat(
            userId: <u_id>
            chatId: <c_id>
        ){
            \_id
            users{
                firstName
            }
        }
    }
```
### Removes user from group chat

```graphql
    removeUserFromGroupChat(
        userId: ID!
        chatId: ID!
    ): GroupChat!
```
***Description***: It removes a user from the group chat.

***Arguments***:

1. userId: ID! - It helps to identify the user who needs to be removed from the group chat. The ! signifies that the value passed is non-nullable or NOT NULL.
2. chatId: ID! - It helps to identify the group chat from which the user needs to be removed. The ! signifies that the value passed is non-nullable or NOT NULL.

***Returns***: GroupChat!

The ! signifies that the object returned is non-nullable or NOT NULL.

***Example***:
```graphql
    mutation{   
        removeUserFromGroupChat(
                userId: <u_id>
                chatId: <c_id>
            ){
                \_id
                users{
                    firstName
                }
        }
    }
```
