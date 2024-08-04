[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createGroupChat](../README.md) / createGroupChat

# Variable: createGroupChat

> `const` **createGroupChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createGroupChat"`\]

Creates a new group chat and associates it with a specified organization.

This resolver performs the following actions:

1. Checks if the specified organization exists in the cache, and if not, fetches it from the database and caches it.
2. Verifies that the organization with the given ID exists.
3. Checks if each user specified in the `userIds` list exists.
4. Creates a new group chat with the specified users, organization, and title.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `data`: An object containing:
    - `organizationId`: The ID of the organization to associate with the group chat.
    - `userIds`: A list of user IDs to be added to the group chat.
    - `title`: The title of the group chat.

## Param

The context object containing user information (context.userId).

## Remarks

This function ensures the existence of the organization and users, and caches the organization if it is not already cached. It returns the created group chat object.

## Defined in

[src/resolvers/Mutation/createGroupChat.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/Mutation/createGroupChat.ts#L33)
