[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserTag/usersAssignedTo](../README.md) / usersAssignedTo

# Variable: usersAssignedTo

> `const` **usersAssignedTo**: [`UserTagResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserTagResolvers.md)\[`"usersAssignedTo"`\]

Resolver function for the `usersAssignedTo` field of a `UserTag`.

This resolver is used to resolve the `usersAssignedTo` field of a `UserTag` type.

## Param

The parent object representing the user tag. It contains information about the user tag, including the ID of the user tag.

## Param

The arguments provided to the field. These arguments are used to filter, sort, and paginate the users assigned to the user tag.

## See

 - TagUser - The TagUser model used to interact with the tag users collection in the database.
 - parseGraphQLConnectionArguments - The function used to parse the GraphQL connection arguments (filter, sort, pagination).
 - transformToDefaultGraphQLConnection - The function used to transform the list of users assigned to the user tag into a connection object.
 - getCommonGraphQLConnectionFilter - The function used to get the common filter object for the GraphQL connection.
 - getCommonGraphQLConnectionSort - The function used to get the common sort object for the GraphQL connection.
 - MAXIMUM_FETCH_LIMIT - The maximum number of users that can be fetched in a single request.
 - GraphQLError - The error class used to throw GraphQL errors.
 - UserTagResolvers - The type definition for the resolvers of the UserTag fields.

## Defined in

[src/resolvers/UserTag/usersAssignedTo.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/UserTag/usersAssignedTo.ts#L36)
