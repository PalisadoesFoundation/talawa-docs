---
id: data-management
title: Data Management
---

:::caution

This section is a work in progress.

:::

## Overall Guidance

These relate to how data is managed by the app.

1. Each organisation should create a new database.
2. The ability should exist from the admin portal to specify
   1. The duration that objects and data are retained in the database
   2. The type of data or objects to be retained/ purged based on the age criteria
   3. Limit the size and duration of audio/ video files uploaded to the newsfeed
3. There should be a preset encoding algorithm for audio and video

---

## Data Compression

:::caution

This section is a work in progress.

:::

### Code: DAT-002

_Authored by\*\* **Shannika Jackson** \*\*. Last updated on_ _**March 31,2021**_

This feature aims to _**enforce a data compression strategy**_ by _**detailing how and when data is compressed for storage in the database**_.

### Overview

### Problem

1. **There is currently no data compression strategy for data stored in the database**

   1. A data compression policy is required for each type of artefact that is stored in the database in order to greater optimize the retrieval of data from the database.

### Goals

1. **Specify and enforce data compression for data being stored in teh database:** This should improve interaction with the app as it reduces the time to store and retrieve data from the database.

### Out of Scope

The following are aspects of this feature which have been considered but are outside of the scope for the current project:

1. **Allowing an administrator to select the type of encoding algorithm to be used to compress and store app data:** for example z standard, gzip

### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature

### Context

NA

### Use Cases

1. **Administrator wants to:**
   1. **Specify size of media files that can be uploaded to the newsfeed**
   2. **Specify the length of audio or video tracks that can be uploaded to the newsfeed**

### Proposal/Solution

### User Experience

1. Some preset encoding algorithm should be implemented for audio and video posts uploaded to the newsfeed.
2. This algorithm should compress the data being stored before it is sent to the database and decompress it whenever it is retrieved.
3. When a user tries to upload media files to an event's newsfeed that is larger/longer than the size/length limit specified by the administrator they should be presented with an error notifying them of the size limit
4. When audio or video is being displayed there should be an automatic adjustment of frame rate to enable minimum buffering of the media

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

### Tasks and Timeline

TBD

---

## Data Retention

:::caution

This section is a work in progress.

:::

### Code: DAT-001

_Authored by\*\* **Shannika Jackson** \*\*. Last updated on_ _**March 31,2021**_

This feature aims to _**enforce data retention strategy**_ by _**detailing the requirements around how long and in what form data is retained in the database**_.

### Overview

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

### Context

NA

### Use Cases

1. **Administrator wants to:**
   1. **Specify the duration that each data artefact is stored in the database** For instance (s)he may want to indicate that video files are retained for x days etc.

### Proposal/Solution

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

### Tasks and Timeline

TBD

---

## Data Storage

:::caution

This section is a work in progress.

:::

### Code: DAT-003

_Authored by\*\* **Shannika Jackson** \*\*. Last updated on_ _**March 31,2021**_

This feature aims to _**enforce data storage strategy**_ by _**detailing the requirements for the storage of data in the database**_.

### Overview

A separate database is to be created for each organisation that is created.

---

## Database Distribution

:::caution

This section is a work in progress.

:::

### Overall Guidance

NA
