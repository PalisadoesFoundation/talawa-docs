[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createAdvertisement](../README.md) / createAdvertisement

# Variable: createAdvertisement

> `const` **createAdvertisement**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createAdvertisement"`\]

Mutation resolver function to create a new advertisement.

This function performs the following actions:
1. Verifies that the current user, identified by `context.userId`, exists.
2. Ensures that the organization specified by `args.input.organizationId` exists.
3. Uploads the media file if provided, determining its type (image or video).
4. Creates a new advertisement with the provided details.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `input`: An object containing:
    - `organizationId`: The ID of the organization where the advertisement will be created.
    - `mediaFile`: The encoded media file (image or video) to be uploaded.
    - Other advertisement details.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.
  - `apiRootUrl`: The root URL for the API to construct the media URL.

## Defined in

[src/resolvers/Mutation/createAdvertisement.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/Mutation/createAdvertisement.ts#L37)
