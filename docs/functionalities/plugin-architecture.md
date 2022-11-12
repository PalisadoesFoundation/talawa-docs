---
id: plugin-architecture
title: Plugin Architecture
---

# Plugin Architecture

Plugin Architecture provides talawa projects an ability to control latent [Talawa Mobile App](https://palisadoesfoundation.github.io/talawa-docs/docs/talawa/talawa-introduction) features from the [Talawa Admin](https://palisadoesfoundation.github.io/talawa-docs/docs/talawa-admin/talawa-admin-introduction) Web Portal.

<!-- The Talawa API detects the existence of the plugin and the Mobile App will display new capabilities. -->

## Plugin

A Plugin is a feature in Talawa Mobile App that is controlled by the Admins of that organization. By having the control admins can decide the accessibility of that feature for the organization members.

Programmatically the logic of this Plugin is stored in the mobile app but it's inaccessible to the users untill the admin of the organization installs that plugin.

You first have to be register the Plugins from the `Plugin store` in order to install them from the Talawa Admin.

## High Level Overview of Plugin Architecture

Let's discuss the role of the different apps to make the plugin architecture work.

### Talawa Admin

Admin Provides `Plugin Store` where has following functionalities:

- Ability to install or uninstall the plugins.
- Ability to Toggle list of installed and available plugins.
- Ability to Search the plugin using SearchBar (provided on the right) .

#### Example

![Plugin Store Sample Image](/img/plugin/store.PNG)

### Talawa API

It is a nodeJS API that is used to interface with the database containing list of the plugins with thier different attributes.

A sample Plugin Model can have the below properties.

```js
Plugin : {
    pluginName: String, // plugin name
    pluginCreatedBy: String, // name of the creator
    pluginDesc : String, // description
    pluginInstallStatus : Boolean, // TRUE if installed otherwise FALSE
    installedOrgs : [ID] // a list containing ID of the organization who have installed the plugin
}
```

## Plugin Store

## Installing and Uninstalling Plugins
