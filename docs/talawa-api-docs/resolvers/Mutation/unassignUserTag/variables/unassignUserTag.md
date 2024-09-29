[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unassignUserTag](../README.md) / unassignUserTag

# Variable: unassignUserTag

\> `const` **unassignUserTag**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unassignUserTag"`\]

Unassigns a tag from a user in an organization.

This function removes a specific tag from a user in an organization.
It checks whether the current user has the necessary permissions to unassign the tag and
verifies if the tag and the user exist in the system. If the tag is not currently assigned
to the user, an error is thrown.

The function performs the following steps:
1. Attempts to find the current user in the cache or database.
2. Verifies if the current user exists.
3. Attempts to find the current user's profile in the cache or database.
4. Checks if the current user has the necessary permissions to unassign the tag.
5. Fetches the tag that needs to be unassigned.
6. Checks if the user to whom the tag is assigned exists.
7. Ensures that the tag is actually assigned to the user.
8. Removes the tag assignment from the user.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, specifically containing the user ID and tag ID to unassign.

## Param

The context of the request, containing information about the currently authenticated user.

## Defined in

[src/resolvers/Mutation/unassignUserTag.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/fb5076f344cd74d4e51c692cbc70fc337bf1ac39/src/resolvers/Mutation/unassignUserTag.ts#L47)
