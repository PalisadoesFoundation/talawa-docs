---
id: technical-introduction
title: Technical Introduction
sidebar_position: 1
---

Talawa's high level design is simple. We cover the main components on this page before delving into the details later.

## Our Applications

Talawa works well because of the various software applications we have developed.

| Application       | Purpose                                                                                                                               | Technology                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Talawa Mobile App | Our mobile phone application that makes communication with and between your members even easier.                                      | Primarily Dart running on Flutter                                                         |
| Talawa Admin      | The administrative portal for managing not only the members using the mobile app but the volunteer operations of your organization.   | A Typescript based web application                                                        |
| Talawa API        | The magic that makes it all happen. Our API is the glue between the Talawa mobile app and Talawa Admin to make the two work together. | Our contributors use Typescript to create a GraphQL API frontend to a MongoDB data store. |

The various Talawa GitHub repositories also use supporting technologies to help automate our software development pipeline. These include:

1. Mongoose ORM
1. Python

More details can be found on each Talawa GitHub repository.

## Our Architecture

The three major software components interact as shown in this diagram.

![img](/img/Talawa.jpg)

This is the foundation on which we have built our applications.

## Our Technology Stack Rationale

We chose these core open source technologies for various reasons.

| Technology | Rationale                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Flutter    | [Flutter](https://flutter.dev/) is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase. Flutter was chosen because it was backed by a large developer community and a significant corporate sponsor.                                                                       |
| Typescript | [TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's a popular language, and we felt support would be long-lasting. It's also open source like us!                                                                                            |
| PostgreSQL | [PostgreSQL](https://www.postgresql.org/) is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance. It sounded just like what we needed.                                                                       |
| GraphQL    | [GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with our existing data. It provides a complete and understandable description of the data in our API, and allows our developers to make queries for for exactly what they need and nothing more. This makes it easier to evolve APIs over time. |

But if you want the short answer, we chose these technologies so that we wouldn't have to do it ourselves!
