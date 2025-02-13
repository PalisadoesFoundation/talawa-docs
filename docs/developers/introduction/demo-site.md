---
id: demo-site
title: Demonstration Site
sidebar_position: 3
---

We now have a demonstration site that showcases the features of the applications.

## Introduction

The site that can be accessed at this URL:

```
https://demo.talawa.io/
```

Login credentials can be found in the [INSTALLATION.md](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/INSTALLATION.md#user-accounts-and-organizations) guide in the `develop` branch.

## System Setup

This is a summary of how the system is configured.

### App Configuration

The apps are configured to operate like this:

1. The API and Admin apps run on the server in Docker containers.
2. The API:
   1. runs as the `talawa-api` user.
   2. was originally configured using the setup script using default values in the `.env` file.
3. The Admin web app:
   1. runs as the `talawa-admin` user.
   2. was originally configured using the setup script using default values in the `.env` file except for these parameters:
      ```
      REACT_APP_TALAWA_URL=https://demo.talawa.io:8443/graphql/
      REACT_APP_BACKEND_WEBSOCKET_URL=ws://demo.talawa.io:8443/graphql/
      ```

### Server Configuration

The server is configured to operate like this:

2. There is an SSL certificate for demo.talawa.io
3. The server uses Apache as a frontend reverse proxy. The configuration:
   1. Redirects demo.talawa.io port 80 traffic to port 443
   2. Proxies port 443 to the Talawa-Admin port 4321
   3. Proxies port 8443 to the Talawa-API port 4000
   4. There is no default port 80 or 443 configurations
   5. The configurations can be found in `/etc/apache2/sites-enabled`
   6. Logs can be viewed in the `/var/log/apache2/` directory.

#### Server Cron Jobs

Daily cron jobs run to do the following:

1. Deploy the latest versions of the API and Admin `develop` code branches.
2. Reset the API database with the latest `develop` sample data.
