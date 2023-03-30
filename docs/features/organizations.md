---
id: organizations
title: Organizations
---

:::caution

This section is a work in progress.

:::

Organisations are an integral part of talawa. This section aims to give an outline of the features for an organisation within Talawa which includes but not limited to their onboarding.

---

## Onboarding

:::caution

This section is a work in progress.

:::

### Code: MEM-005

_Authored by_ _ **Gareth Thomas** _ _. Last updated on_ _ **18/05/21** _

This feature aims to _ **allow organisations to join the talawa platform** _ by _ **establishing the flow by which this is done** _.

## Overview

### Problem

1. **Organisations want join the talawa platform :** as a means to keep their organization together in a way that other social media platforms cannot.

### Goals

1. **Allow organisations to onboard quickly :** and this barrier to entry is as low as possible and extremely easy to use, this contributes to talawa's growth and adoption.

### Out of Scope

N/A

### People and Roles

1. **Feature Lead**: clarify feature changes and assumptions.

## Context

### Use Cases

1. **Admins want to:**
   1. **Register for an account and create an organisation** : Where they are a new user, they are expected to initially create a new master account that will establish them as the owner and admin of the organisations they intend to create.
   2. **Create additional organisations**: Where they are an existing user, they should be able to create other organisations to which they will also be the owner of and an admin.

## Proposal/Solution

See similar references of platform onboarding:

1. Shopify
2. Wordpress.com

### User Experience

1. A user with the intention of creating an organisation will make their way to talawa were they will create an account for the platform.
1. Upon creating an account on the platform the user should be taken through an onboarding flow that carefully allows them to enter the required details for the desired organisation, which includes but is not limited to:
   1. Organisation Name,
   2. Privacy Settings (Public Or Private)
   3. Primary Contact Information
   4. Organisation Address (If applicable)
1. After entering the information above and any other appropriate details. An organisation will be created and the use should be taken to a dashboard.

### Important Details To Capture

1. Organisations are expected to be a multi-tennant entity. This means that, each organisations data will be stored in a separate database where each oranisation can scale independently without concerns of data collision.
2. The application must store a connection for each tenant in a master database.
3. Private organisations will require prior approval to access and are not discoverable from the mobile app.

### Future Work

N/A

## Tasks and Timeline

N/A