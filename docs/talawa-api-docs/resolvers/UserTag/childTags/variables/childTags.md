[**talawa-api**](../../../../README.md)

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

## Returns

A promise that resolves to a connection object containing the child tags of the user tag.

## See

 - OrganizationTagUser - The OrganizationTagUser model used to interact with the organization tag users collection in the database.
 - parseGraphQLConnectionArguments - The function used to parse the GraphQL connection arguments (filter, sort, pagination).
 - transformToDefaultGraphQLConnection - The function used to transform the list of child tags into a connection object.
 - getGraphQLConnectionFilter - The function used to get the common filter object for the GraphQL connection.
 - getGraphQLConnectionSort - The function used to get the common sort object for the GraphQL connection.
 - MAXIMUM_FETCH_LIMIT - The maximum number of child tags that can be fetched in a single request.
 - GraphQLError - The error class used to throw GraphQL errors.
 - UserTagResolvers - The type definition for the resolvers of the UserTag fields.

## Defined in

[src/resolvers/UserTag/childTags.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/UserTag/childTags.ts#L40)
