[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createUserTag](../README.md) / createUserTag

# Variable: createUserTag

\> `const` **createUserTag**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createUserTag"`\]

Creates a new tag for an organization if the user is authorized to do so.

This resolver performs the following steps:

1. Verifies that the current user exists and is fetched from the cache or database.
2. Checks if the current user has an application profile.
3. Ensures the current user is authorized to create a tag by being either a super admin or an admin for the specified organization.
4. Checks if the provided organization exists.
5. Validates that the parent tag (if provided) belongs to the specified organization.
6. Ensures no other tag with the same name exists under the same parent tag.
7. Creates a new tag if all validation checks pass.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including the tag details and organization ID.

## Param

The context object, including the user ID and other necessary context for authorization.

## Remarks

This function is intended for creating new tags within an organization and includes validation to ensure the integrity of the tag creation process.

## Defined in

[src/resolvers/Mutation/createUserTag.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/createUserTag.ts#L46)
