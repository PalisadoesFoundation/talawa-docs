---
id: core-concepts
title: Core Concepts
---

To use and contribute to Talawa effectively, you'll need to understand these important concepts.

## Community​

Communities are groups of people who participate either directly or indirectly with an installation of the suite of Talawa apps. Each instance of the Talawa API only manages a single community.

- **Example**: A community could be a club that has members across an entire country, state or city.

Communities can have multiple organizations in them, in other words, it is the parent organization.

### Organizations

Groups of people in a community that have some unique commonality.

- **Example**: A national club could create a Talawa community that covers a country, then each organization could cover the club's followers in each city.

Organizations act as hubs of volunteer activity.

### People in Communities

There are many types of people who use Talawa either directly, or indirectly:

#### Non-Administrators

The main purpose of Talawa is to foster closer cooperation between communities of people working together for a common social cause. In Talawa, most would be either users or members.

1. **Users**: These are people who indirectly use Talawa.
   1. For example: People who may attend an event tracked in Talawa and have their information entered into the system as part of the attendance process.
1. **Members**: These are people who directly use Talawa either with the mobile app, or as an administrator with Talawa Admin.
   1. Members may register their Talawa mobile app with an organization within a community once the appropriate approvals have been given.

The use of Talawa by users and members is managed by administrators.

#### Administrators

Say for example that a chain of non-profit community centers with branches in multiple neighborhoods decides to use Talawa. They have a large membership across the region but, each member tends to use only their local community center. From time to time members move into new neighborhoods where they decide to switch their membership to their new local branch.

The VP of community relations would want to be the Super Admin as they would be able to add new branches as they were established. The VP would then delegate the management of community relations to each branch manager who would then become an Admin for their local membership.

The VP doesn’t want the branch managers to manage the members who have joined other branches, just the branch they are running.

It is for this reason that we have two types of administrators. Admins and Super Admins.

1. **Admin**: These are members who use Talawa Admin to manage the people in an organization. This would also include calendars and the organization's news feed. Admins can:

   1. Only manage a single organization and cannot access any data from other organizations. Expanding this capability is a long term goal.
   1. Promote Users and Members to Admin status for their organization only

2. **Super Admin**: These are members who use Talawa Admin to manage all organizations in a community. Super Admins:
   1. Can promote Users and Members to Admin or Super Admin status.
   2. Have access to all the privileges that an Admin may have over the Admin's organization.

Like other people, an administrator may or may not have joined an organization in the mobile app.

## Talawa Application Users

The Talawa applications are used by different groups of people.

1. **Talawa**: All people associated with an organization. There are no administrative functions incorporated in the mobile app.
2. **Talawa-Admin**: Only Admins and Super Admins use this web portal. No other users have access.

Talawa-API supports the users of Talawa and Talawa-Admin.

There are no administrative functions incorporated in the mobile app by design because phone screens are generally too small to provide a full featured experience. We also don't have the volunteer resources to manage the expanded functionality at this time.

## Events

Event management is a major Talawa component.

### 1. Event calendar customization

Admins can easily create events using the Talawa-Admin Calendar functionality by adding crucial parameters such as date, time, description, and location. The user-friendly interface allows them to choose between recurring events, all-day activities, and whether the event is public or private. 

Superadmins can effortlessly track all of these events in a centralized consolidated calendar, gaining visibility into event information and guaranteeing effective coordination and management.

### 2. Event Terminologies

Here are some important terminologies used in Talawa event management:

- **Open Event**: Events that are open to everyone
- **Registrable Event**: An open event that requires the additional step of event registration. These events would typically have limited capacity and therefore would require members to register beforehand.
- **Closed Events**: These are events that are by invitation only.
   - **Private events**: Closed events that only show up in the mobile app calendars of invitees


### 3. Event Features

Events have many features as you can see below.

- **Event Creation**

Events can:

1. be created either in the mobile app or Talawa Admin;
1. only be edited by the event organizers and admins

- **Event Checkins**

Checkins are a way of tracking attendance to all types of events. They have many valuable uses such as the ability to:

1. add users to the organization if they turn up to an event;
1. convert users to members when they attend an event.

- **Event Group Chats**

Talawa includes the ability of members invited or registered to an event to automatically be added to a group chat for that event. This allows greater coordination and community spirit in the organization's groups.

- **Event Roles**

Talawa includes the ability of members attending events to be assigned tasks/roles that can be tracked in their app by all attendees. This helps in event management.



## Newsfeed

The Talawa newsfeed helps to make the Communities a more cohesive entity.

### 1. Mobile App Newsfeed

The newsfeed on the Talawa Mobile App is a stream of commentary from the App's users. This may include various combinations of text, video, images and links that Members may want to share.

Talawa Mobile App users only get news on their newsfeed for the organization that they are currently actively using.

Members using the app can add posts containing text, images or video to the newsfeed. They can also add hashtags to their posts. People seeing the hashtags will be able to click on them to automatically filter their feed by one or more hashtags.

### 2. Admin Panel Newsfeed

Administrators will use Talawa Admin to administer an organization's newsfeed. At a minimum they will get a filtered version of the feed that only includes exceptional content that requires attention. This includes:

1. **Pinned Posts**: The management of pinned posts that they use to alert all members of the organization of some activity. These posts are [always visible at the top of the newsfeed](https://github.com/PalisadoesFoundation/talawa-api/issues/1096). Pinned posts can only be created by Admins.
2. **Reported Posts**: Mobile App users may want Admins to take action on posts that don't match the organization's values. Admins can use the newsfeed to manage these reports.
3. **Plugin Posts**: The Admin panel may have plugins that need to access the newsfeed. For example these could include the insertion of advertising from local companies.

## Tasks in Talawa

Through the Talawa mobile app, users who choose to volunteer can efficiently track the tasks assigned to them. The app provides a dedicated task management feature that allows volunteers to view their assigned tasks and monitor progress. 

With this functionality, users can stay organized, prioritize their responsibilities, and contribute effectively to the projects and initiatives they are involved in, ensuring a streamlined and rewarding volunteering experience.

## Multi-Tenancy / Cloud

Under the current model:

1. Each Talawa-API instance manages the people within a Community.
2. Communities are managed by Super Admins.
3. Organizations within a community are managed by Admins.

For Talawa to be launched as a Cloud service there will need to be a way to create a portal that can manage multiple instances of Talawa-API. These community instances could be running on the same or differing servers.

This creates challenges for the API:

- How do we shard the data for the instances? For example: Do all the cloud communities use a single database or should there be some other type of split and why?
- What database modifications will be required to track the communities under management?
- How do you move data from one cloud cluster of instances managed by one portal, to another cluster managed by a different portal?

It also creates challenges for the web admin portal:

- What level of access should the cloud admin have?
- What features can the cloud admin enable or disable across all communities?
- How do you move administration from one cloud cluster of instances managed by one portal, to another cluster managed by a different portal?

Answering these questions and implementing a solution will be important for the Talawa projects.
