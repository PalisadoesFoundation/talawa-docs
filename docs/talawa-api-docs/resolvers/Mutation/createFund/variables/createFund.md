[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createFund](../README.md) / createFund

# Variable: createFund

\> `const` **createFund**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createFund"`\]

Creates a new fundraising fund for a specified organization.

This function performs the following actions:
1. Verifies the existence of the current user.
2. Retrieves and caches the user's profile if not already cached.
3. Verifies the existence of the specified organization.
4. Checks if the current user is an admin of the organization.
5. Verifies that the fund does not already exist for the given organization.
6. Creates a new fund with the provided details.
7. Updates the organization's list of funds to include the newly created fund.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.organizationId`: The ID of the organization for which the fund is being created.
  - `data.name`: The name of the fund.
  - `data.refrenceNumber`: The reference number for the fund.
  - `data.taxDeductible`: Indicates if the fund is tax-deductible.
  - `data.isDefault`: Indicates if the fund is a default fund.
  - `data.isArchived`: Indicates if the fund is archived.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user performing the operation.

## Defined in

[src/resolvers/Mutation/createFund.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createFund.ts#L43)
