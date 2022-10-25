---
id: plugins-billing
title: Billing
---

The billing plugin should live as a standalone application regularly consume appropriate data from the application in order to make appropriate decisions of how the access the organization becomes limited once billing requirements have not been met. The plugin will then instruct the application to limit its functionallity until those billing requirements have been met.

## Frontend Requirements
The admin application should provide an interface for viewing billing statistics of the integrated billing system. 
If the customer has outstanding balances then the user interface of the application should be limited to only alow minimal use of the application.


## Backend Requirements

The API should be able to provide metadata about the organisation that can be used for billing purposes. For example:
1. Total registrations
2. Number of concurrent users


This plugin should also make api calls to the backend of the application
Examples of what features would be affected would be:

1. No new uploads
1. No new events
1. Newsfeed limited to messages from admins not the entire organization
1. No new chats
1. No new groups
1. No additional storage for data objects


