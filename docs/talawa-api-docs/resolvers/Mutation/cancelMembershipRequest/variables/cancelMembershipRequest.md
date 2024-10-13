[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/cancelMembershipRequest](../README.md) / cancelMembershipRequest

# Variable: cancelMembershipRequest

\> `const` **cancelMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"cancelMembershipRequest"`\]

Mutation resolver function to cancel a membership request.

This function performs the following actions:
1. Verifies that the membership request specified by `args.membershipRequestId` exists.
2. Ensures that the organization associated with the membership request exists.
3. Confirms that the user specified by `context.userId` exists.
4. Checks if the current user is the creator of the membership request.
5. Deletes the membership request.
6. Updates the organization document to remove the membership request from its `membershipRequests` list.
7. Updates the user's document to remove the membership request from their `membershipRequests` list.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `membershipRequestId`: The ID of the membership request to be canceled.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## Returns

A promise that resolves to the deleted membership request.

## See

 - MembershipRequest - The MembershipRequest model used to interact with the membership requests collection in the database.
 - Organization - The Organization model used to interact with the organizations collection in the database.
 - User - The User model used to interact with the users collection in the database.
 - MutationResolvers - The type definition for the mutation resolvers.
 - findOrganizationsInCache - Service function to retrieve organizations from cache.
 - cacheOrganizations - Service function to cache updated organization data.
 - findUserInCache - Service function to retrieve users from cache.
 - cacheUsers - Service function to cache updated user data.

## Defined in

[src/resolvers/Mutation/cancelMembershipRequest.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/cancelMembershipRequest.ts#L45)
