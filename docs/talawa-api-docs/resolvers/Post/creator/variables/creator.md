[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Post/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`PostResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/PostResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `Post`.

This function retrieves the user who created a specific post.

## Param

The parent object representing the post. It contains information about the post, including the ID of the user who created it.

## See

 - User - The User model used to interact with the users collection in the database.
 - PostResolvers - The type definition for the resolvers of the Post fields.

## Defined in

[src/resolvers/Post/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Post/creator.ts#L16)
