[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeOrganizationCustomField](../README.md) / removeOrganizationCustomField

# Variable: removeOrganizationCustomField

\> `const` **removeOrganizationCustomField**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeOrganizationCustomField"`\]

This function enables an admin to remove an organization colleciton field.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the organization exists.
3. If the user is an admin for the organization.
4. If the custom field to be removed exists
5. If the user has appUserProfile

## Returns

Deleted Organization Custom Field.

## Defined in

[src/resolvers/Mutation/removeOrganizationCustomField.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Mutation/removeOrganizationCustomField.ts#L36)
