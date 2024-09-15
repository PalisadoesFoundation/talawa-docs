[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserTag/childTags](../README.md) / childTags

# Variable: childTags

\> `const` **childTags**: [`UserTagResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserTagResolvers.md)\[`"childTags"`\]

Resolver function for the `childTags` field of a `UserTag`.

This resolver is used to resolve the `childTags` field of a `UserTag` type.

## Param

The parent object representing the user tag. It contains information about the user tag, including the ID of the user tag.

## Param

The arguments provided to the field. These arguments are used to filter, sort, and paginate the child tags.

## See

 - OrganizationTagUser - The OrganizationTagUser model used to interact with the organization tag users collection in the database.
 - parseGraphQLConnectionArguments - The function used to parse the GraphQL connection arguments (filter, sort, pagination).
 - transformToDefaultGraphQLConnection - The function used to transform the list of child tags into a connection object.
 - getCommonGraphQLConnectionFilter - The function used to get the common filter object for the GraphQL connection.
 - getCommonGraphQLConnectionSort - The function used to get the common sort object for the GraphQL connection.
 - MAXIMUM_FETCH_LIMIT - The maximum number of child tags that can be fetched in a single request.
 - GraphQLError - The error class used to throw GraphQL errors.
 - UserTagResolvers - The type definition for the resolvers of the UserTag fields.

## Defined in

[src/resolvers/UserTag/childTags.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/UserTag/childTags.ts#L36)
