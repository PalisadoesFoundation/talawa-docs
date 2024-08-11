[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/User/posts](../README.md) / posts

# Variable: posts

> `const` **posts**: [`UserResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserResolvers.md)\[`"posts"`\]

Resolver function to fetch and return posts created by a user from the database.
This function implements cursor-based pagination using GraphQL connection arguments.

## Param

An object that is the return value of the resolver for this field's parent.

## Param

Arguments passed to the resolver. These should include pagination arguments such as `first`, `last`, `before`, and `after`.

## Throws

GraphQLError Throws an error if the provided arguments are invalid.

## Defined in

[src/resolvers/User/posts.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/fe65d855b3d1e3e4af621340e7e8bfa0325634c1/src/resolvers/User/posts.ts#L30)
