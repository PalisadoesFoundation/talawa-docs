[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/User/posts](../README.md) / posts

# Variable: posts

\> `const` **posts**: [`UserResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserResolvers.md)\[`"posts"`\]

Resolver function to fetch and return posts created by a user from the database.
This function implements cursor-based pagination using GraphQL connection arguments.

## Param

An object that is the return value of the resolver for this field's parent.

## Param

Arguments passed to the resolver. These should include pagination arguments such as `first`, `last`, `before`, and `after`.

## Returns

A Promise that resolves to an object containing an array of posts, the total count of posts, and pagination information. The pagination information includes the `startCursor`, `endCursor`, `hasPreviousPage`, and `hasNextPage`.

## Throws

GraphQLError Throws an error if the provided arguments are invalid.

## Defined in

[src/resolvers/User/posts.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/User/posts.ts#L30)
