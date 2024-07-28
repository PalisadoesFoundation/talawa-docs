[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createNote](../README.md) / createNote

# Variable: createNote

\> `const` **createNote**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createNote"`\]

Creates a note for a specified agenda item.

This resolver performs the following actions:

1. Verifies the existence of the current user making the request.
2. Checks the user's app profile to ensure they are authenticated.
3. Checks if the specified agenda item exists.
4. Creates a new note associated with the agenda item.
5. Updates the agenda item to include the newly created note.

## Param

The parent object, not used in this resolver.

## Param

The input arguments for the mutation, including:
  - `data`: An object containing:
    - `agendaItemId`: The ID of the agenda item to which the note will be added.
    - `content`: The content of the note.

## Param

The context object containing user information (context.userId).

## Remarks

This function creates a note, associates it with the specified agenda item, and updates the agenda item to include the new note. It also handles caching and error scenarios.

## Defined in

[src/resolvers/Mutation/createNote.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/1f38da5423898626c6ebfa24896a9c3d008195c6/src/resolvers/Mutation/createNote.ts#L40)
