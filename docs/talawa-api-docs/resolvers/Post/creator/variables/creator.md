[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Post/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`PostResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/PostResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `Post`.

This function retrieves the user who created a specific post.

## Param

The parent object representing the post. It contains information about the post, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the post.

## See

 - User - The User model used to interact with the users collection in the database.
 - PostResolvers - The type definition for the resolvers of the Post fields.

## Defined in

[src/resolvers/Post/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Post/creator.ts#L16)
