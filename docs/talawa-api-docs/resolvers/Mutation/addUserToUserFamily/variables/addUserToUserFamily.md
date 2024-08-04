[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserToUserFamily](../README.md) / addUserToUserFamily

# Variable: addUserToUserFamily

> `const` **addUserToUserFamily**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserToUserFamily"`\]

Adds a user to a user family.

This function allows an admin to add a user to a specific user family. It performs several checks:

1. Verifies if the user family exists.
2. Checks if the user exists.
3. Confirms that the user is not already a member of the family.
4. Ensures that the current user is an admin of the user family.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `familyId`: The ID of the user family to which the user will be added.
  - `userId`: The ID of the user to be added to the user family.

## Param

The context of the entire application, including user information and other context-specific data.

## Defined in

[src/resolvers/Mutation/addUserToUserFamily.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/Mutation/addUserToUserFamily.ts#L36)
