---
id: api-overview
title: Overview
---

Talawa Api is the the base of all the functionalities offered to Users and Organizations that sign up at talawa. The Graph API we use is the direct path to get data into and out of the **Talawa-API** platform. It's an HTTP-based API that any client can utilise to programmatically read, create and update data. The Graph API is composed of nodes, edges, and fields. Typically you use nodes to get data about a specific object, use edges to get collections of objects on a single object, and use fields to get data about a single object or each object in a collection. You can check the current production version of our server from the following get request below:

```shell
https://talawaapi.azurewebsites.net/graphql
```

In upcoming sections you will get to know all the useful functions performed by the Api. _Stay tuned!_*

<b></b>

## Production Server
Talawa-API has a production server deployed whose code can be found in master branch of github repository. All data transfers conform to HTTP/1.1, and all endpoints require HTTPS. Any client can use the Graph API directly through requesting this URL below.

```shell
https://talawa-graphql-api.herokuapp.com/graphql
```
## Local Server
In order to setp your own local server you will need to have a database(MONGO). With the help of database you can start your own server locally. For full documentation visit [here](https://github.com/PalisadoesFoundation/talawa-api/blob/develop/INSTALLATION.md).

## Access Tokens
Access tokens allow any client to access the Graph API. Almost all Graph API endpoints require an access token, so each time you access an endpoint, your request may require one. They typically perform two functions:

1. They allow client to access a information without requiring the some kind of password. For example, client needs a User's email to perform a function. If the User agrees to allow your client to retrieve their email address from database, the client will create the graph request and they will be verified using access token.

2. They allow us to identify the User who is creating request to our backend, and the type of data a particular User has permitted to access.

## Technologies used

Following are the main technologies which are accumulated together to build a reliable api:-

1. Node.js
2. Typescript
3. GraphQL
4. MongoDB

Some prominent packages used in the project are:-

1. Apollo-server
2. Express.js
3. Typescript
4. Mongoose
5. GraphQL Code Generator
6. Vitest

:::note

This is the link to the other packages and libraries
https://github.com/PalisadoesFoundation/talawa-api/blob/develop/package.json
:::
