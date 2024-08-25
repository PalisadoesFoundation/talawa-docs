[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/adminRemoveGroup](../README.md) / adminRemoveGroup

# Variable: adminRemoveGroup

\> `const` **adminRemoveGroup**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"adminRemoveGroup"`\]

Mutation resolver function to remove a group chat.

This function performs the following actions:
1. Checks if the group chat specified by `args.groupId` exists.
2. Verifies that the organization associated with the group chat exists.
3. Ensures that the current user (identified by `context.userId`) exists.
4. Checks that the current user is authorized as an admin of the organization.
5. Deletes the group chat from the database.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `groupId`: The ID of the group chat to be removed.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## See

 - GroupChat - The GroupChat model used to interact with the group chats collection in the database.
 - Organization - The Organization model used to interact with the organizations collection in the database.
 - User - The User model used to interact with the users collection in the database.
 - AppUserProfile - The AppUserProfile model used to retrieve the user's profile information.
 - MutationResolvers - The type definition for the mutation resolvers.
 - adminCheck - Utility function to check if the current user is an admin of the organization.
 - findOrganizationsInCache - Service function to retrieve organizations from cache.
 - cacheOrganizations - Service function to cache updated organization data.

## Defined in

[src/resolvers/Mutation/adminRemoveGroup.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/a87b45a1c490c996c3a8a52e117ecbaa4742ef49/src/resolvers/Mutation/adminRemoveGroup.ts#L41)
