---
id: improved-file-upload-and-security
title: Improved File Upload And Security
---

## Project
The project aims to find a better solution for handling files uploaded from Talawa clients. It seeks to store files outside the code tree, access them using reliable libraries, deduplicate files, encrypt them, store them consistently regardless of their characteristics, and screen them for malicious content. Additionally, the default storage must be accessible via the system's locally accessible filesystem, with cloud storage services discouraged.

## Solution Walthrough
- This project aim to avoid security threat of storing files in the project directory.
- Work done under this GSoC'24 project are below:
    - Storing files in an open-source object storage system `minio`
    - Adding all the CRUD operations for the minio integration
    - Handling duplicate files using hashing
    - Isolated the file upload APIs from other graphql APIs since these file upload APIs are Restful APIs
    - File encryption
    - Ensuring backup for both minio and mongoDb
    - Admin & Org Admin will have access to take backup in minio server instance hosted in the our API server

## Rational on using REST API over Graphql
- GraphQL doesn't natively support uploads while REST APIs does.
- If graphQl would have been used then we would have to use 3rd party clients like appollo and though would increase the latency.
- GraphQl APIs inefficient when file size increases, hence would have affected streaming and downloads

## Libraries & SDKs used
- [aws sdk for minio operations](https://aws.amazon.com/sdk-for-javascript/)
- [npm package](https://www.npmjs.com/package/aws-sdk)

## Future Development Scope

## Contributor
[Aman Singh Chandel](https://github.com/chandel-aman/)