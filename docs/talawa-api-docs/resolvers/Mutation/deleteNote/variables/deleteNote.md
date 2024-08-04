[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/deleteNote](../README.md) / deleteNote

# Variable: deleteNote

> `const` **deleteNote**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"deleteNote"`\]

This function deletes a note.

## Param

parent of the current request

## Param

payload provided with the request

## Param

context of the entire application

## Throws

NotFoundError if the user or note is not found

## Throws

UnauthorizedError if the user is not the creator of the note.

## Defined in

[src/resolvers/Mutation/deleteNote.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/6712e9940a5702665afc506fa9f6e9d7e1dc7991/src/resolvers/Mutation/deleteNote.ts#L25)
