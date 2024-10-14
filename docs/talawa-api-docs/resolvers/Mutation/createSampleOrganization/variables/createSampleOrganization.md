[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createSampleOrganization](../README.md) / createSampleOrganization

# Variable: createSampleOrganization

\> `const` **createSampleOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createSampleOrganization"`\]

Generates sample data for testing or development purposes.

This resolver performs the following steps:

1. Verifies that the current user exists and is fetched from the cache or database.
2. Checks if the current user has a valid application profile and whether they are authorized.
3. Ensures that the current user is a super admin.
4. Utilizes a utility function to create a sample organization.

## Param

The parent object, not used in this resolver.

## Param

The arguments for the mutation, not used in this resolver.

## Param

The context object, including the user ID and other necessary context for authorization.

## Returns

True if the sample data generation is successful; false otherwise.

## Remarks

This function is intended for creating sample data and should only be accessible by super admins.

## Defined in

[src/resolvers/Mutation/createSampleOrganization.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/createSampleOrganization.ts#L33)
