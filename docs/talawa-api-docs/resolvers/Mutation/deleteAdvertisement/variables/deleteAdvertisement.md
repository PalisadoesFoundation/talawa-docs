[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/deleteAdvertisement](../README.md) / deleteAdvertisement

# Variable: deleteAdvertisement

\> `const` **deleteAdvertisement**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"deleteAdvertisement"`\]

Deletes an advertisement based on the provided advertisement ID.

This function handles the deletion of an advertisement by first verifying
that the current user is authorized to perform this action. It checks
whether the user exists in the cache or database, retrieves the user's
profile, and ensures that the user has the necessary permissions to delete
the advertisement. If the advertisement exists and the user is authorized,
it will be deleted, and the deleted advertisement's details will be returned.

## Param

This is an unused parameter that represents the parent resolver in the GraphQL schema. It can be ignored.

## Param

Contains the arguments passed to the GraphQL mutation, specifically the ID of the advertisement to be deleted.

## Param

Provides contextual information such as the current user's ID and API root URL. This is used to find the user and validate permissions.

## Defined in

[src/resolvers/Mutation/deleteAdvertisement.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Mutation/deleteAdvertisement.ts#L32)
