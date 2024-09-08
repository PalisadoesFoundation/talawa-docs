[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserTag](../README.md) / removeUserTag

# Variable: removeUserTag

\> `const` **removeUserTag**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserTag"`\]

Removes a user tag from an organization.

This function removes a specific tag associated with a user in an organization.
It checks whether the user has the proper authorization to delete the tag.
It also handles cases where the user or the tag is not found in the system.

The function performs the following steps:
1. Attempts to find the user in the cache or database.
2. Verifies if the user exists.
3. Attempts to find the user's profile in the cache or database.
4. Checks if the user has the necessary permissions to delete the tag.
5. Fetches the tag that needs to be deleted.
6. Retrieves all child tags (including the parent tag) related to the organization.
7. Deletes all related tags from the organization and user tag entries.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, specifically containing the ID of the tag to be removed.

## Param

The context of the request, containing information about the currently authenticated user.

## Defined in

[src/resolvers/Mutation/removeUserTag.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/removeUserTag.ts#L43)
