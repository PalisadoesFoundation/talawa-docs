---
id: api-overview
title: API Overview
---

:::caution

This section is a work in progress.

:::


## API Expectations
The API is expected to:
1. Centralize all functionality, meaning all applications must see the api as the source of truth.
2. Allow a secure connection to both frontend interfaces ie: Admin console and Mobile application.using industry standard API authorization 
3. Allow support for multiple file systems via centralized configuration eg: server storage, AWS s3 etc..
4. Allow centralized configuration for all external service dependencies such as the email service and the database
5. Support multi-tenancy at its core