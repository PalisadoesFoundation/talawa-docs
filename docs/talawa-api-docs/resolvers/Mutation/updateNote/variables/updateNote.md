[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateNote](../README.md) / updateNote

# Variable: updateNote

\> `const` **updateNote**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateNote"`\]

Updates an existing note in the system.

This function updates a specific note in the database. It first checks if the current user
exists and if they have the proper profile. Then it verifies if the note exists and whether
the current user is authorized to update it. If all checks pass, the function updates the note
with the provided data.

The function performs the following steps:
1. Retrieves the current user from the cache or database.
2. Verifies if the current user exists.
3. Retrieves the current user's profile from the cache or database.
4. Checks if the user has the necessary authorization to update the note.
5. Finds the note to be updated in the database.
6. Verifies that the note belongs to the current user.
7. Updates the note with the new data provided.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, including the ID of the note to be updated and the new data.

## Param

The context of the request, containing information about the currently authenticated user.

## Returns

The updated note.

## Defined in

[src/resolvers/Mutation/updateNote.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Mutation/updateNote.ts#L44)
