---
id: core-concepts-legacy
title: Core Concepts (Legacy)
sidebar_position: 4
---

We have started migration from a MongoDB API database to PostgreSQL.

1. The legacy database is supported in the `develop` branches
2. During the transition all PRs will update the `develop-postgres` branch that supports PostgreSQL.

We have attempted feature parity between the two branches. There are some differences such as:

1. The types of users and how they are stored in the database
2. The role of the SuperAdmin

The new concepts page will have more detailed explanations.

## Introduction

To use and contribute to Talawa effectively, you'll need to understand these important concepts.

Use this diagram as a reference in the sections below.

![image](../../static/img/markdown/introduction/api-community-legacy.png)

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
   1. **Types of Users**: We have two types of users.
      1. **App Users**: These are users who have registered themselves in Talawa using either the mobile or the web app.
      1. **Non App Users**: These are users manually added to Talawa by App Users with Admin privileges. This is to help provide Talawa services to anyone that is a community participant who may or not be willing or able to use the application.
1. **Members**: These are people who are registered with an organization.
   1. App Users can become members of an organization after following the registration process via either the mobile or the web app by themselves.
   1. Non App Users become members of an organization after they are manually added by the organization's Admin Portal provided by the web app.

Talawa users and members are managed by administrators.

#### Administrators

Say for example that a chain of non-profit community centers with branches in multiple neighborhoods decides to use Talawa. They have a large membership across the region but, each member tends to use only their local community center. From time to time members move into new neighborhoods where they decide to switch their membership to their new local branch.

The VP of community relations would want to be the Super Admin as they would be able to add new branches as they were established. The VP would then delegate the management of community relations to each branch manager who would then become an Admin for their local membership.

The VP doesn’t want the branch managers to manage the members who have joined other branches, just the branch they are running.

It is for this reason that we have two types of administrators. Admins and Super Admins.

1. **Admin**: These are members who use Talawa Admin to manage the people in an organization. This would also include organization calendars and the organization's news feed. Admins can:

   1. Manage one or more organizations.
      1. An admin for a single organization and cannot access any data from other organizations.
      2. Admin rights are assigned on a per organization basis. The same user can be an Admin in one organization, but a regular member of another.
   2. Promote App User Members to Admin status for their organization only

2. **Super Admin**: These are members who use Talawa Admin to manage all organizations in a community. Super Admins:
   1. Can promote App User Members to Admin or Super Admin status.
   2. Have access to all the privileges that an Admin may have over the Admin's organization.
   3. There can be more than one Super Admin.
   4. There is only one Super Admin of `Last Resort`.
      1. This person is defined at initial setup, and can be reassigned at any time.
      2. Any user assigned this role automatically becomes a Super Admin.
      3. The role is used in case of emergency where no other Super Admins are defined in the database.

Like other people, an administrator may or may not have joined an organization in the mobile app.

## Talawa Application Users

The Talawa applications are used by different groups of people.

1. **Talawa**: All people associated with an organization. There are no administrative functions incorporated in the mobile app.
2. **Talawa-Admin**: This repository combines two separate and partially overlapping portals
   1. The Administrator Portal: Only Admins and Super Admins use this web portal. It is used to manage the Community users and Organization members. No other users have access.
   2. The User Portal: All users have access to this portal that lacks administrative features.

Talawa-API supports the users of Talawa and Talawa-Admin.

There are no administrative functions incorporated in the mobile app by design because phone screens are generally too small to provide a full featured experience. We also don't have the volunteer resources to manage the expanded functionality at this time.

## Events

Event management is a major Talawa component. Anyone can create events using either Talawa client.

### 1. Event Terminologies

Here are some important terminologies used in Talawa event management:

- **Open Event**: Events that are open to everyone
- **Registrable Event**: An open event that requires the additional step of event registration. These events would typically have limited capacity and therefore would require members to register beforehand.
- **Closed Events**: These are events that are by invitation only.
  - **Private events**: Closed events that only show up in the mobile app calendars of invitees

### 2. Event Features

Events have many features as you can see below.

- **Event Creation**

Events can:

1. be created either in either Talawa client;
1. only be edited by the event organizers and admins

- **Event Checkins**

Checkins are a way of tracking attendance to all types of events. They have many valuable uses such as the ability to:

1. add users to the organization if they turn up to an event;
1. convert users to members when they attend an event.

- **Event Group Chats**

Talawa includes the ability of members invited or registered to an event to automatically be added to a group chat for that event. This allows greater coordination and community spirit in the organization's groups.

- **Event Roles**

Talawa includes the ability of members attending events to become volunteers and/or assigned action items that can be tracked in their app by all attendees. This helps in event management.

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

## Action Items

The assignment of action items are not just limited to events.

Administrators can assign action items to any member of their organizations to help with the tracking of general and non-event related activities.
