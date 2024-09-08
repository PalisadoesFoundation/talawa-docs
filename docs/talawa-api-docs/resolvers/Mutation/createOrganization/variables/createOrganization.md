[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createOrganization](../README.md) / createOrganization

# Variable: createOrganization

\> `const` **createOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createOrganization"`\]

Creates a new organization.

This resolver performs the following steps:

1. Verifies the existence of the current user making the request.
2. Checks the user's app profile to ensure they are authenticated and authorized as a super admin.
3. Validates the provided input data, including organization name, description, and address.
4. Uploads an optional image file associated with the organization.
5. Creates a new organization with the provided data and image.
6. Creates a default action item category for the new organization.
7. Updates the current user's document to include the new organization in their `joinedOrganizations`, `createdOrganizations`, and `adminFor` lists.
8. Caches the newly created organization.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `data`: An object containing:
    - `name`: The name of the organization.
    - `description`: A description of the organization.
    - `address`: An optional address object for the organization.
  - `file`: An optional encoded image file for the organization.

## Param

The context object containing user information (context.userId).

## Remarks

This function creates an organization, uploads an optional image, validates the input data, creates a default action item category, updates user records, and manages caching.

## Defined in

[src/resolvers/Mutation/createOrganization.ts:55](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createOrganization.ts#L55)
