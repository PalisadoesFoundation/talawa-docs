[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createVenue](../README.md) / createVenue

# Variable: createVenue

\> `const` **createVenue**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createVenue"`\]

Creates a new venue within an organization, if the user has appropriate permissions and the venue does not already exist.

This resolver performs the following checks:

1. Verifies the existence of the user and fetches their profile.
2. Checks if the specified organization exists.
3. Ensures the user is authorized to create a venue by verifying their admin or superadmin status within the organization.
4. Validates that a venue name is provided.
5. Ensures that no venue with the same name already exists within the organization.
6. Uploads an image if provided and associates it with the venue.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including the venue details and organization ID.

## Param

The context object, including the user ID, API root URL, and other necessary context for authorization and image upload.

## Returns

The created venue object, including the associated organization.

## Remarks

This function includes validation for user authorization, venue uniqueness, and handles image uploads if applicable.

## Defined in

[src/resolvers/Mutation/createVenue.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/createVenue.ts#L40)
