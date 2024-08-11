[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserCustomData](../README.md) / addUserCustomData

# Variable: addUserCustomData

> `const` **addUserCustomData**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserCustomData"`\]

Mutation resolver to add or update custom data for a user within a joined organization.

This function allows a user to add or update a custom field with a name and value for an organization
they are a part of. It performs several checks and operations:

1. Validates that the user exists.
2. Verifies that the organization exists.
3. Checks if user custom data for the given organization already exists.
4. If it exists, updates the custom field; if not, creates a new entry.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `organizationId`: The ID of the organization for which custom data is being added.
  - `dataName`: The name of the custom data field.
  - `dataValue`: The value of the custom data field.

## Param

The context of the entire application, including user information and other context-specific data.

## Defined in

[src/resolvers/Mutation/addUserCustomData.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/resolvers/Mutation/addUserCustomData.ts#L34)
