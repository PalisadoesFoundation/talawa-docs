---
id: members-roles
title: Roles
---

:::caution

This section is a work in progress.

:::


## Code: MEM-002

_Authored by_ _ **Gareth Thomas** _ _. Last updated on_ _ **Mar 14,2021** _

This feature aims to _ **introduce application roles** _ by _ **defining how they work and how they affect the users experience with Talawa** _.

## Overview

### Problem

1. **Members need to be assigned roles :** in order to provide a tailored a experience for each user so that application features are not arbitrarily available to all users of the application

### Goals

1. **Allow for the distribution of roles :** with a defined set of roles, allow for available roles to be assigned to members that grant them access to specific features.

### Out of Scope

1. **Role management:** This is not an immediate priority for the application as we consider a limited number of roles.

### People and Roles

1. **Gareth Thomas (Feature Lead)**: sign off on feature changes and assumptions.

## Context

### Use Cases

1. **All users want to:**
    * Easily identify the role assigned to them
2. **Admins want to** :
    * Assign available roles to users.
    * Grant elevated access to organisation features to support its management and moderation.
    * Demote a member from an elevated position, restricting elevated access.

## Proposal/Solution

#### Predefined Roles

1. **Administrator** - Allow access to features to **ALL** features of the application
2. **Deputy** - Allow elevated access to specific administrative features as defined per feature throughout the application.
3. **Member** - Allow general usage and access to the application.

#### Admin Portal

The admin portal must provide an interface for the organisations administrator to assign each of the roles defined above to the user.

### User Experience

1. From the home of the admin portal, this administrator must be able to easily find the option to open the interface to manage the users roles
2. At this point the admin must have the ability to find a user and assign them a predefined role.

### Important Details To Capture

N/A

### Future Work

1. Consider allowing the creation of roles in the future by an administrator.
2. Consider allowing selective curation of permissions for the created roles to extend and personalize their Talawa experience.

## Tasks and Timeline

N/A