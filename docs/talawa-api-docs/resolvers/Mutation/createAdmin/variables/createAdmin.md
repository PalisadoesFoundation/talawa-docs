[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createAdmin](../README.md) / createAdmin

# Variable: createAdmin

\> `const` **createAdmin**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createAdmin"`\]

Creates an admin for an organization by adding the specified user to the organization's admin list.

This function performs several checks:

1. Verifies if the specified organization exists.
2. Ensures the current user is found and has an associated app user profile.
3. Checks if the current user is the creator of the organization.
4. Checks if the specified user exists and is a member of the organization.
5. Ensures the specified user is not already an admin of the organization.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `data`: An object containing:
    - `organizationId`: The ID of the organization to which the user will be added as an admin.
    - `userId`: The ID of the user to be made an admin.

## Param

The context of the entire application, including user information and other context-specific data.

## Remarks

The function handles the following:
- Caches and retrieves the organization data.
- Verifies the existence and profile of the current user.
- Ensures the user to be added is a member of the organization and is not already an admin.
- Updates the organization's admin list and the app user profile of the newly added admin.

## Defined in

[src/resolvers/Mutation/createAdmin.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Mutation/createAdmin.ts#L47)
