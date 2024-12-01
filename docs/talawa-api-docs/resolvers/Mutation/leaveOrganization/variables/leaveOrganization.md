[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/leaveOrganization](../README.md) / leaveOrganization

# Variable: leaveOrganization

\> `const` **leaveOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"leaveOrganization"`\]

This function enables to leave an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists
2. If the user exists
3. If the user is the creator of the organization
4. If the user is a member of the organization

## Returns

Updated user

## Defined in

[src/resolvers/Mutation/leaveOrganization.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/leaveOrganization.ts#L36)
