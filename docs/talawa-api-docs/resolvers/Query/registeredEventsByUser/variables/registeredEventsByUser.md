[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/registeredEventsByUser](../README.md) / registeredEventsByUser

# Variable: registeredEventsByUser

\> `const` **registeredEventsByUser**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"registeredEventsByUser"`\]

This query will fetch all the events for which user registered from the database.

## Param

## Param

An object that contains `id` of the user and `orderBy`.

## Remarks

The query function uses `getSort()` function to sort the data in specified.

## Defined in

[src/resolvers/Query/registeredEventsByUser.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Query/registeredEventsByUser.ts#L12)
