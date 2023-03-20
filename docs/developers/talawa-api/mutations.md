---
id: mutations
title: Mutations
---
> Mutations can be classified in a number of ways, including by the type of change that they introduce, the part of the page that they affect, or the manner in which they are introduced. Talawa API introduces mutation to alter it's value to a certain degree.

## Mutations According to Roles

This document outlines our mutations and to which type of user each is constrained

### Type Of Users in Talawa

There are mainly 3 types of user types in Talawa -

1. `SUPERADMIN`

2. `ADMIN`

3. `USER`

### Mutations Permitted by Roles.

The limits of each role's use of mutations are stated below:

#### `SUPERADMIN` -

Below are the Mutations exclusive to the SUPERADMIN type. Please note, a few of these mutations have a few extra criteria regarding user access. For example, except for the createOrganization mutation, all other mutations require the SUPERADMIN to also be the creator of the orgnanization.

1. `blockPluginCreationBySuperadmin`
2. `createAdmin`
3. `createOrganization` - When a superadmin creates and organization, he/she will also be one of the `admins` and `creator` of that Organization. Therefore, the Mutations in the next Sections also apply to Super Admin.
4. `rejectAdmin`
5. `removeAdmin`
6. `removeOrganization`
7. `updateUserType`
8. `togglePostPin`

#### `ADMIN` -

An Admin of an organization is permitted to make the following Mutations in that Organization-

1. `acceptMembershipRequests`
2. `addOrganizationImage`
3. `addUserToGroupChat`
4. `adminRemoveEvent`
5. `adminRemoveGroup`
6. `blockUser`
7. `rejectMemberShipRequests`
8. `removeDirectChat`
9. `removeMember`
10. `removeOrganizationImage`
11. `removeUserFromGroupChat`
12. `unblockUser`
13. `updateOrganization`
14. `togglePostPin`

#### USER -

All other Mutations except those exclusive to Admin and Super Admin can be accessed by the User type.

To be updated whenever new mutations are added
