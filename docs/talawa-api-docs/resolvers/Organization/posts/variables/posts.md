[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/posts](../README.md) / posts

# Variable: posts

\> `const` **posts**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"posts"`\]

Resolver function to fetch and return posts created by a user from the database.
This function implements cursor-based pagination using GraphQL connection arguments.

## Param

An object that is the return value of the resolver for this field's parent.

## Param

Arguments passed to the resolver. These should include pagination arguments such as `first`, `last`, `before`, and `after`.

## Throws

GraphQLError Throws an error if the provided arguments are invalid.

## Defined in

[src/resolvers/Organization/posts.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/2f8fb6988cd34004fbbf76550c8eef691b861a19/src/resolvers/Organization/posts.ts#L30)
