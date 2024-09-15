[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/advertisements](../README.md) / advertisements

# Variable: advertisements

\> `const` **advertisements**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"advertisements"`\]

Resolver function for the `advertisements` field of an `Organization`.

This resolver is used to resolve the `advertisements` field of an `Organization` type.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the organization.

## Param

The arguments provided to the field. These arguments are used to filter, sort, and paginate the advertisements.

## Param

The context object passed to the GraphQL resolvers. It contains the API root URL, which is used to construct the media URL for each advertisement.

## See

 - Advertisement - The Advertisement model used to interact with the advertisements collection in the database.
 - parseGraphQLConnectionArguments - The function used to parse the GraphQL connection arguments (filter, sort, pagination).
 - transformToDefaultGraphQLConnection - The function used to transform the list of advertisements into a connection object.
 - getCommonGraphQLConnectionFilter - The function used to get the common filter object for the GraphQL connection.
 - getCommonGraphQLConnectionSort - The function used to get the common sort object for the GraphQL connection.
 - MAXIMUM_FETCH_LIMIT - The maximum number of advertisements that can be fetched in a single request.
 - GraphQLError - The error class used to throw GraphQL errors.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/advertisements.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Organization/advertisements.ts#L38)
