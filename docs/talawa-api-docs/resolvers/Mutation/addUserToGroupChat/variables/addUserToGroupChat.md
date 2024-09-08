[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserToGroupChat](../README.md) / addUserToGroupChat

# Variable: addUserToGroupChat

\> `const` **addUserToGroupChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserToGroupChat"`\]

Mutation resolver function to add a user to a group chat.

This function performs the following actions:
1. Checks if the group chat specified by `args.chatId` exists.
2. Checks if the organization associated with the group chat exists.
3. Verifies that the current user (identified by `context.userId`) is an admin of the organization.
4. Confirms that the user to be added (specified by `args.userId`) exists.
5. Ensures that the user is not already a member of the group chat.
6. Adds the user to the list of users in the group chat and returns the updated group chat.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `chatId`: The ID of the group chat to which the user will be added.
  - `userId`: The ID of the user to be added to the group chat.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## See

 - GroupChat - The GroupChat model used to interact with the group chats collection in the database.
 - Organization - The Organization model used to interact with the organizations collection in the database.
 - User - The User model used to interact with the users collection in the database.
 - MutationResolvers - The type definition for the mutation resolvers.
 - adminCheck - Utility function to check if the current user is an admin of the organization.
 - findOrganizationsInCache - Service function to retrieve organizations from cache.
 - cacheOrganizations - Service function to cache updated organization data.

## Defined in

[src/resolvers/Mutation/addUserToGroupChat.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/addUserToGroupChat.ts#L44)
