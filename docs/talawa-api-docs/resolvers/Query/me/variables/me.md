[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/me](../README.md) / me

# Variable: me

\> `const` **me**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"me"`\]

This query fetch the current user from the database.

## Param

## Param

## Param

An object that contains `userId`.

## Returns

An object `currentUser` for the current user. If the user not found then it throws a `NotFoundError` error.

## Defined in

[src/resolvers/Query/me.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Query/me.ts#L20)
