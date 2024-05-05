[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/deleteNote

# Module: resolvers/Mutation/deleteNote

## Table of contents

### Variables

- [deleteNote](resolvers_Mutation_deleteNote.md#deletenote)

## Variables

### deleteNote

• `Const` **deleteNote**: [`MutationResolvers`](types_generatedGraphQLTypes.md#mutationresolvers)[``"deleteNote"``]

This function deletes a note.

**`Param`**

parent of the current request

**`Param`**

payload provided with the request

**`Param`**

context of the entire application

**`Throws`**

NotFoundError if the user or note is not found

**`Throws`**

UnauthorizedError if the user is not the creator of the note.

#### Defined in

[src/resolvers/Mutation/deleteNote.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/resolvers/Mutation/deleteNote.ts#L25)
