[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addOrganizationImage](../README.md) / addOrganizationImage

# Variable: addOrganizationImage

> `const` **addOrganizationImage**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addOrganizationImage"`\]

Mutation resolver function to add or update an organization's image.

This function performs the following actions:
1. Retrieves the organization from the cache or database based on the provided `organizationId`.
2. Checks if the organization exists. If not, throws a not found error.
3. Verifies if the current user is an admin of the organization.
4. Uploads the provided image file and updates the organization's image field with the new file name.
5. Updates the organization document in the database with the new image information.
6. Caches the updated organization data.

## Param

The parent object for the mutation. Typically, this is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `organizationId`: The ID of the organization to which the image is being added or updated.
  - `file`: The encoded image file to be uploaded.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - MutationResolvers - The type definition for the mutation resolvers.
 - adminCheck - Utility function to verify if a user is an admin of an organization.
 - uploadEncodedImage - Utility function to handle the upload of an encoded image file.
 - cacheOrganizations - Service function to cache the updated organization data.
 - findOrganizationsInCache - Service function to retrieve organizations from cache.

## Remarks

The function uses the `findOrganizationsInCache` method to first attempt to retrieve the organization from the cache.
If the organization is not found in the cache, it queries the database.
It then verifies the user's admin status and performs the image upload before updating the organization's image field.

## Defined in

[src/resolvers/Mutation/addOrganizationImage.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/resolvers/Mutation/addOrganizationImage.ts#L44)
