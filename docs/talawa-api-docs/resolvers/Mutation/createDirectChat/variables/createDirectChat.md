[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createDirectChat](../README.md) / createDirectChat

# Variable: createDirectChat

\> `const` **createDirectChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createDirectChat"`\]

Creates a new direct chat and associates it with an organization.

This resolver performs the following steps:

1. Retrieves the organization based on the provided `organizationId`.
2. Checks if the organization exists, either from cache or database.
3. Validates that all user IDs provided in `userIds` exist.
4. Creates a new direct chat with the specified users and organization.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `data`: An object containing:
    - `organizationId`: The ID of the organization to associate with the direct chat.
    - `userIds`: An array of user IDs to be included in the direct chat.

## Param

The context object containing user information (context.userId).

## Remarks

This function includes caching operations to optimize data retrieval and ensures that all user IDs are valid before creating the direct chat.

## Defined in

[src/resolvers/Mutation/createDirectChat.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/createDirectChat.ts#L28)
