[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createSampleOrganization](../README.md) / createSampleOrganization

# Variable: createSampleOrganization

> `const` **createSampleOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createSampleOrganization"`\]

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

## Remarks

This function is intended for creating sample data and should only be accessible by super admins.

## Defined in

[src/resolvers/Mutation/createSampleOrganization.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/Mutation/createSampleOrganization.ts#L33)
