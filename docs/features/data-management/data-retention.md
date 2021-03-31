---
id: data-management-retention
title: Data Retention
---

:::caution

This section is a work in progress.

:::


## Code: DAT-001
_Authored by__ **Shannika Jackson** __. Last updated on_ _ **March 31,2021** _

This feature aims to _ **enforce data retention strategy** _ by _ ** detailing the requirements around how long and in what form data is retained in  the database ** _.

## Overview

### Problem

1. **Data is currently stored in the database without a retention strategy:**
   
    1. There should exist a data retention strategy for each data artefact that the app produces.

### Goals

1. **Specify and enforce a data retention strategy from the admin portal:** This more closely manages the data being stored by the application and facilitates the need for customers to move their data more easily.

### Out of Scope

N/A
### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature

## Context

NA

### Use Cases

1. **Administrator wants to:**
   1. **Specify the duration that each data artefact is stored in the database** For instance (s)he may want to indicate that video files are retained for x days etc.

## Proposal/Solution

### User Experience

1. From the Administrator Portal an admin must be presented with a data management menu item. 
2. When this menu item is selected the admin is then presented with a list of the different file types supported by the application. 
3. For each file type a (numeric) retention duration field must be presented.
4. The admin should be able to enter the number of days that each data type is retained in the database.
5. This number must then trigger database actions to purge/ archive those artefacts from the database once their age reaches that number of days.
6. The age of artefacts must be from the date that the item was added to the database.

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

## Tasks and Timeline

TBD