[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateAdvertisement](../README.md) / updateAdvertisement

# Variable: updateAdvertisement

\> `const` **updateAdvertisement**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateAdvertisement"`\]

Updates an advertisement with new details, including handling media file uploads and validating input fields.

This function updates an existing advertisement based on the provided input. It checks for required fields, validates dates, handles media file uploads, and performs authorization checks to ensure that the current user has the right to update the advertisement. The function returns the updated advertisement after applying changes.

## Param

This parameter represents the parent resolver in the GraphQL schema and is not used in this function.

## Param

The arguments passed to the GraphQL mutation, including the advertisement's `_id` and other fields to update. This may include `startDate`, `endDate`, and `mediaFile`.

## Param

Provides contextual information, including the current user's ID. This is used to authenticate and authorize the request.

## Returns

An object containing the updated advertisement with all its fields.

## Defined in

[src/resolvers/Mutation/updateAdvertisement.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/updateAdvertisement.ts#L37)
