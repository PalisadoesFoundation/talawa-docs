[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addOrganizationCustomField](../README.md) / addOrganizationCustomField

# Variable: addOrganizationCustomField

\> `const` **addOrganizationCustomField**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addOrganizationCustomField"`\]

Mutation resolver to add a custom field to an organization.

This function allows an admin to add a new custom field to the collection of fields for a specified organization. It performs several checks:

1. Verifies the existence of the user.
2. Checks if the user has an application profile.
3. Confirms that the organization exists.
4. Ensures that the user is an admin for the organization or has super admin privileges.
5. Validates that the name and type of the custom field are provided.

If any of these conditions are not met, appropriate errors are thrown.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `organizationId`: The ID of the organization to which the custom field will be added.
  - `name`: The name of the new custom field.
  - `type`: The type of the new custom field.

## Param

The context of the entire application, containing user information and other context-specific data.

## Defined in

[src/resolvers/Mutation/addOrganizationCustomField.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Mutation/addOrganizationCustomField.ts#L46)
