[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updatePost](../README.md) / updatePost

# Variable: updatePost

\> `const` **updatePost**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updatePost"`\]

Updates a post with new details, including handling image and video URL uploads and validating input fields.

This function updates an existing post based on the provided input. It retrieves and validates the current user and their app profile, checks if the user has the necessary permissions, handles media file uploads, and performs input validation before updating the post in the database. The function returns the updated post after applying changes.

## Param

This parameter represents the parent resolver in the GraphQL schema and is not used in this function.

## Param

The arguments passed to the GraphQL mutation, including the post's `id` and data to update, such as `title`, `text`, `imageUrl`, and `videoUrl`.

## Param

Provides contextual information, including the current user's ID. This is used to authenticate and authorize the request.

## Defined in

[src/resolvers/Mutation/updatePost.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/updatePost.ts#L39)
