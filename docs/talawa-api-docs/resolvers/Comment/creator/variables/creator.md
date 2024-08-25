[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Comment/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`CommentResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/CommentResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `Comment`.

This function retrieves the user who created a specific comment.

## Param

The parent object representing the comment. It contains information about the comment, including the ID of the user who created it.

## See

 - User - The User model used to interact with the users collection in the database.
 - CommentResolvers - The type definition for the resolvers of the Comment fields.

## Defined in

[src/resolvers/Comment/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Comment/creator.ts#L16)
