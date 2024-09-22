[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createUserFamily](../README.md) / createUserFamily

# Variable: createUserFamily

\> `const` **createUserFamily**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createUserFamily"`\]

Creates a new user family and associates users with it.

This function performs the following actions:
1. Verifies the existence of the current user and retrieves their details and application profile.
2. Checks if the current user is a super admin.
3. Validates the user family name to ensure it does not exceed 256 characters.
4. Ensures that the user family has at least two members.
5. Creates the user family and associates it with the provided users.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.title`: The title of the user family (must be a string with a maximum length of 256 characters).
  - `data.userIds`: An array of user IDs to be included in the user family (must contain at least 2 members).

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user creating the user family.

## See

 - User - The User model used to interact with user data in the database.
 - AppUserProfile - The AppUserProfile model used to interact with user profile data in the database.
 - UserFamily - The UserFamily model used to interact with user family data in the database.
 - superAdminCheck - A utility function to check if the user is a super admin.

## Defined in

[src/resolvers/Mutation/createUserFamily.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Mutation/createUserFamily.ts#L45)
