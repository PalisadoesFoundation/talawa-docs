---
id: expectations
title: Expectations
---

## API Expectations

The API is expected to:

1. Centralize all functionality, meaning all applications must see the api as the source of truth.
2. Allow a secure connection to both frontend interfaces ie: Admin console and Mobile application.using industry standard API authorization
3. Allow support for multiple file systems via centralized configuration eg: server storage, AWS s3 etc..
4. Allow centralized configuration for all external service dependencies such as the email service and the database
5. Support multi tenancy at its core

## TypeScript Rewrite

The current code base for talawa api uses Node.js, this poses several problems with scalability and stability. As the codebase is currently, adding new features in is unstable and prone to breaks. Moving to Typescript will bring a level of stability and better developer experience that’s not currently in the API. We recommend using NestJS https://nestjs.com/

> Nest (NestJS) is a framework for building efficient, scalable Node.js server side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
