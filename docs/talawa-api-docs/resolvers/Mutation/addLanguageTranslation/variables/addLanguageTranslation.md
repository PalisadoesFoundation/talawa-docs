[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addLanguageTranslation](../README.md) / addLanguageTranslation

# Variable: addLanguageTranslation

\> `const` **addLanguageTranslation**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addLanguageTranslation"`\]

This function adds language translation.

## Param

parent of current request

## Param

payload provided with the request

## Remarks

The following checks are done:
1. If the language exists
2. If the translation already exists.

## Defined in

[src/resolvers/Mutation/addLanguageTranslation.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/addLanguageTranslation.ts#L15)
