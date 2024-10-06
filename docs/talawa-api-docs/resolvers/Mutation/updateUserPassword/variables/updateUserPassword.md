[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateUserPassword](../README.md) / updateUserPassword

# Variable: updateUserPassword

\> `const` **updateUserPassword**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateUserPassword"`\]

Updates the password for the currently authenticated user.

This function allows the current user to update their password. It performs the following steps:
1. Retrieves the current user from the cache or database.
2. Verifies the current user exists.
3. Retrieves the current user's profile from the cache or database.
4. Checks if the current user is authorized to update the password.
5. Validates the previous password provided by the user.
6. Ensures the new password and confirmation match.
7. Hashes the new password and updates it in the database.
8. Clears the user's token and updates their profile.
9. Updates the user and profile caches.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, including the previous password, new password, and password confirmation.

## Param

The context of the request, containing information about the currently authenticated user.

## Returns

An object containing the updated user and their profile.

## Defined in

[src/resolvers/Mutation/updateUserPassword.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/5e38dbf44e47f2fc703410fad29ab5c8f7f26c77/src/resolvers/Mutation/updateUserPassword.ts#L39)
