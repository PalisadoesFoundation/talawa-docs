[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addOrganizationCustomField](../README.md) / addOrganizationCustomField

# Variable: addOrganizationCustomField

\> `const` **addOrganizationCustomField**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addOrganizationCustomField"`\]

This function enables an admin to add an organization colleciton field.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the user has appProfile
3. If the organization exists.
4. If the user is an admin for the organization.
5. If the required name and value was provided for the new custom field

## Defined in

[src/resolvers/Mutation/addOrganizationCustomField.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Mutation/addOrganizationCustomField.ts#L37)
