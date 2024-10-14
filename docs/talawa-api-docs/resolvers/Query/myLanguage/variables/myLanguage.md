[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/myLanguage](../README.md) / myLanguage

# Variable: myLanguage

\> `const` **myLanguage**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"myLanguage"`\]

This query fetch the current user language from the database.

## Param

## Param

## Param

An object that contains `userId`.

## Returns

A string `appLanguageCode` that contains language code.
If the `appLanguageCode` field not found then it throws a `NotFoundError` error.

## Defined in

[src/resolvers/Query/myLanguage.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/Query/myLanguage.ts#L13)
