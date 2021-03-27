---
id: plugins-overview
title: Overview
---

:::caution

This section is a work in progress.

:::

Plugins are an intigral part of talawah that will allow the community to create and expand on its core functionallity wereby allowing talawah to grow exponentially. This section aims to give an outline of how plugins are expected to work and simmilar integrations found on the web.

## Summary

In order for plugins to be immplemented effectivly, the application will need to meet these preconditions:
1. All features of the application should expose endpoints that allow features to monitor none private application data and manage the avaliability of core application features.
2. The application must implement secure authorization and authentication for third party applications such as the plugins.
3. The application must support webhooks where by the application notifies registerd plugins of activities on the application.

See existing implementations of plugins and micro apps on websites such as:
1. Wordpress 
2. Shopify


## Example: Billing Plugin

### This is for context purposes only details not final.

The API should be able to provide metadata about the organisation that can be used for billing purposes. For example:

1. Total registrations
2. Number of concurrent users

Billing should be able to be implemented as a third party plugin. The billing plugin will regularly consume appropriate data from the application in order to make appropriate decisions of how the access the organization becomes limited once billing requirements have not been met. The plugin will then instruct the application to limit its functionallity until those billing requirements have been met.

Examples of what features would be affected would be:

1. No new uploads
1. No new events
1. Newsfeed limited to messages from admins not the entire organization
1. No new chats
1. No new groups
1. No additional storage for objects
