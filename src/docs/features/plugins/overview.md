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
4. The application must allow for each plugin to be configured to recieved the only the notifications that the user of the organizarion has allowed to it. 
5. The application must allow only plugins authorized to complete actions like enabling and disabling a feature.

See existing implementations of plugins and micro apps on websites such as:
1. Wordpress 
2. Shopify



