[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/posts](../README.md) / posts

# Variable: posts

\> `const` **posts**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"posts"`\]

Resolver function for the `posts` field of an `Organization`.

This resolver is used to resolve the `posts` field of an `Organization` type.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the organization.

## Param

The arguments provided to the field. These arguments are used to filter, sort, and paginate the posts.

## Param

The context object passed to the GraphQL resolvers. It contains the API root URL, which is used to construct the media URL for each post.

## See

 - Post - The Post model used to interact with the posts collection in the database.
 - parseGraphQLConnectionArguments - The function used to parse the GraphQL connection arguments (filter, sort, pagination).
 - transformToDefaultGraphQLConnection - The function used to transform the list of posts into a connection object.
 - getCommonGraphQLConnectionFilter - The function used to get the common filter object for the GraphQL connection.
 - getCommonGraphQLConnectionSort - The function used to get the common sort object for the GraphQL connection.
 - MAXIMUM_FETCH_LIMIT - The maximum number of posts that can be fetched in a single request.
 - GraphQLError - The error class used to throw GraphQL errors.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/posts.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/resolvers/Organization/posts.ts#L39)
