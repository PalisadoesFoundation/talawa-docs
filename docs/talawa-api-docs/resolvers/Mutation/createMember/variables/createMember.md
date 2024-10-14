[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createMember](../README.md) / createMember

# Variable: createMember

\> `const` **createMember**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createMember"`\]

Adds a user as a member to an organization.

This resolver performs the following actions:

1. Verifies if the current user making the request exists and is either a superAdmin or an admin of the organization.
2. Checks if the specified organization exists in the cache; if not, fetches it from the database and caches it.
3. Checks if the specified user exists and is not already a member of the organization.
4. Adds the user to the organization's member list and updates the user's joinedOrganizations list.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `input`: An object containing:
    - `organizationId`: The ID of the organization to which the user will be added.
    - `userId`: The ID of the user to be added as a member.

## Param

The context object containing user information (context.userId).

## Returns

An object containing:
  - `organization`: The updated organization object.
  - `userErrors`: A list of errors encountered during the process.

## Remarks

This function returns the updated organization and any errors encountered. It ensures that the user is not already a member before adding them and handles caching of the organization.

## Defined in

[src/resolvers/Mutation/createMember.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Mutation/createMember.ts#L47)
