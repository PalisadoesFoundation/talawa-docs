---
id: data-management-compression
title: Data Compression
---

:::caution

This section is a work in progress.

:::


## Code: DAT-002
_Authored by__ **Shannika Jackson** __. Last updated on_ _ **March 31,2021** _

This feature aims to _ **enforce a data compression strategy** _ by _ ** detailing how and when data is compressed for storage in the database ** _.

## Overview

### Problem

1. **There is currently no data compression strategy for data stored in the database**
   
    1. A data compression policy is required for each type of artefact that is stored in the database in order to greater optimize the retrieval of data from the database.

### Goals

1. **Specify and enforce data compression for data being stored in teh database:** This should improve interaction with the app as it reduces the time to store and retrieve data from the database. 

### Out of Scope
The following are aspects of this feature which have been considered but are outside of the scope for the current project:

1. **Allowing an adminstrator to select the type of encoding algorithm to be used to compress and store app data:** for example z standard, gzip 

### People and Roles

The following are the primary roles foreseen in the development of this feature

1. **Feature Lead** : will review proposed solutions, acceptance and close feature

## Context

NA

### Use Cases

1. **Administrator wants to:**
   1. **Specify size of media files that can be uploaded to the newsfeed** 
   2. **Specify the length of audio or video tracks that can be uploaded to the newsfeed**

## Proposal/Solution

### User Experience

1. Some preset encoding algorithm should be implemented for audio and video posts uploaded to the newsfeed.
2. This algorithm should compress the data being stored before it is sent to the database and decompress it whenever it is retrieved.   
3. When a user tries to upload media files to an event's newsfeed that is larger/longer than the size/length limit specified by the administrator they should be presented with an error notifying them of the size limit
4. When audio or video is being displayed there should be an automatic adjustment of frame rate to enable minimum buffering of the media

### Important Details To Capture

NA

### Future Work

Items mentioned in the Out of scope section will form the basis for future work to be done on this feature

## Tasks and Timeline

TBD