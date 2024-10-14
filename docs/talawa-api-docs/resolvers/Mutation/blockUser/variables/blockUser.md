[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/blockUser](../README.md) / blockUser

# Variable: blockUser

\> `const` **blockUser**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"blockUser"`\]

Mutation resolver function to block a user from an organization.

This function performs the following actions:
1. Verifies that the organization specified by `args.organizationId` exists.
2. Ensures that the user specified by `args.userId` exists.
3. Checks if the user attempting to block the user is an admin of the organization.
4. Verifies if the user to be blocked is currently a member of the organization.
5. Ensures that the user is not attempting to block themselves.
6. Blocks the user by adding them to the organization's `blockedUsers` list and removing them from the `members` list.
7. Updates the user's document to reflect that they have been blocked by the organization, and removes the organization from their `joinedOrganizations` list.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `organizationId`: The ID of the organization from which the user is to be blocked.
  - `userId`: The ID of the user to be blocked.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## Returns

A promise that resolves to the updated user document after blocking.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - User - The User model used to interact with the users collection in the database.
 - MutationResolvers - The type definition for the mutation resolvers.
 - adminCheck - Utility function to check if the current user is an admin of the organization.
 - findOrganizationsInCache - Service function to retrieve organizations from cache.
 - cacheOrganizations - Service function to cache updated organization data.

## Defined in

[src/resolvers/Mutation/blockUser.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/blockUser.ts#L45)
